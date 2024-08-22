const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express()

const PORT = process.env.PORT || 8100;

const api_key = process.env.VUE_APP_API_KEY;
const token = process.env.TOKEN;
const mainFrontendURL = process.env.MAIN_FRONTEND_URL;
const frontendURL = process.env.FRONTEND_URL;

const email_from = process.env.EMAIL;
const allowedOrigins = [frontendURL, mainFrontendURL];

app.use(bodyParser.json());

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'L\'origine spécifiée par la demande n\'est pas autorisée par la politique CORS.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  allowedHeaders: ['Authorization', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));

app.use((req, res, next) => {
    if (req.method === 'GET' && req.path === '/') {
      return next();
    }
  
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
      return res.status(200).json({});
    }
  
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const bearerToken = authHeader.split(' ')[1];
      if (bearerToken === token) {
        return next();
      }
    }
  
    res.status(401).send('Unauthorized');
  });


const sgTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
    sgTransport({
      auth: {
        api_key: api_key
      }
    })
  );
  
app.post('/api/contact', (req, res) => {
const { name, email, tel, message } = req.body;

const mailOptions = {
    from: email_from,
    to: email_from,
    subject: '[Formulaire de contact] Nouveau message',
    text: `Bonjour, \n Un nouveau message provenant du formulaire de contact du site www.arkadis-consulting.delobbe.be vient d'arriver : \n Nom : ${name} \nEmail : ${email} \nNuméro de téléphone : ${tel} \nMessage : \n \n "${message}"`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: 'Message envoyé avec succès! Nous vous reviendrons dans les meilleurs délais.' });
});
});

app.get('/', (req, res) => {
  res.send('api');
});


 app.listen(process.env.PORT, function () {
  console.log("app lauched")
})
