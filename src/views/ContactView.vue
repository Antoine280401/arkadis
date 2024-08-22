<template>
  <div class="contact-page">
    <div class="contact">
      <h2>Contactez-nous</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nom et prénom</label>
          <input type="text" class="form-control" id="name" name="name" ref="name" v-model="form.name" required>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" name="email" ref="email" v-model="form.email" required>
        </div>

        <div class="form-group">
          <label for="name">Numéro de téléphone</label>
          <input type="text" class="form-control" id="tel" name="tel" ref="tel" v-model="form.tel" required>
        </div>
        
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea class="form-control custom-textarea" id="message" name="message" ref="message" v-model="form.message" required></textarea>
        </div>

        <div class="form-group form-check">
          <div class="item">
            <div class="toggle-pill-color">
              <input type="checkbox" id="pill3" name="check" class="check" v-model="form.checked">
              <label class="label-chk" for="pill3"></label>
            </div>
          </div>
          <label class="form-check-label" for="pill3">En soumettant ce formulaire, j'accepte que les données saisies soient exploitées dans le cadre de ma demande d'information et de la relation commerciale qui peut en découler.</label>
        </div>

        
        <button type="submit" class="btn btn-dark mt-3">Envoyer</button>
      </form>
      <div v-if="message" :class="['alert', message.type === 'success' ? 'alert-success' : 'alert-danger']" role="alert">
        {{ message.text }}
      </div>
    </div>
  </div>
  <div class="image-container">
    <a href="tel:0032475351102">
      <img :src="imgTel" alt="Phone" class="img-fluid logo">
    </a>
    <a href="mailto:karl@delobbe.be">
      <img :src="imgMail" alt="Email" class="img-fluid logo">
    </a>
    <a href="https://be.linkedin.com/in/karl-delobbe-71401949" target="_blank">
      <img :src="imageSrc" alt="LinkedIn" class="img-fluid logo">
    </a>
    <router-link class="legal-notice img-fluid" to="/mentions-legales" exact>Mentions légales</router-link>
    
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      imageSrc: require('@/assets/linkedin.jpg'),
      imgMail: require('@/assets/mail.jpg'),
      imgTel: require('@/assets/tel.png'),
      form: {
        name: '',
        email: '',
        tel: '',
        message: '',
        checked: false
      },
      message: null,
      messageTimeout: null  
    };
  },
  methods: {
    async submitForm() {
      if (!this.form.checked) {
        this.showMessage('error', 'Veuillez accepter les conditions pour envoyer le formulaire.');
        return;
      }

      const formData = {
        name: this.form.name,
        email: this.form.email,
        tel: this.form.tel,
        message: this.form.message,
        checked: this.form.checked
      };

      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.VUE_APP_API_SECRET}`
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        this.showMessage('success', data.message);
        this.resetForm();
      } catch (error) {
        this.showMessage('error', 'Erreur lors de l\'envoi du message. Veuillez réessayer dans quelques instants.');
        console.error('Erreur:', error);
      }
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.tel = '';
      this.form.message = '';
      this.form.checked = false;
    },
    showMessage(type, text) {
      this.message = { type, text };
      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);  
      }
      this.messageTimeout = setTimeout(() => {
        this.message = null;//
      }, 15000);
    },
    clearMessage() {
      this.message = null;
      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);  
      }
    },
  }
};
</script>

<style scoped>
.contact-page {
  min-height: 100vh; 
  background-image: url('@/assets/back-contacts.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.contact {
  background: rgba(255, 255, 255, 0.9); 
  padding: 30px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 20px;
}

.form-check {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.item {
  margin-right: 15px;
  display: flex;
  align-items: center;
}

.form-control {
  box-shadow: 0 4px 8px rgba(46, 162, 144, 0.2);
  border-radius: 5px;
  border: 1px solid #ced4da;
  padding: 10px;
}

.custom-textarea {
  height: 150px;
}

.btn {
  background-color: #2ea290;
  border-radius: 10px;
  border: none;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
}

.btn:hover {
  background-color: #1c8172;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.logo {
  width: 50px;
  height: auto;
  margin: 0 15px;
}

.alert {
  margin-top: 20px;
}

.toggle-pill-color input[type="checkbox"] {
  display: none;
}
.toggle-pill-color input[type="checkbox"] + label {
  display: inline-block;
  position: relative;
  width: 3em;
  height: 1.6em;
  margin-bottom: 0;
  border-radius: 1em;
  background: #383c44;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;
  transition: background 0.1s ease-in-out;
}
.toggle-pill-color input[type="checkbox"] + label:before {
  content: "";
  display: block;
  width: 1.2em;
  height: 1.2em;
  border-radius: 1em;
  background: #fff;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0.2em;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease-in-out;
}
.toggle-pill-color input[type="checkbox"]:checked + label {
  background: #2ea290;
}
.toggle-pill-color input[type="checkbox"]:checked + label:before {
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
  left: 1.6em;
}

.label-chk{
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
}

.legal-notice{
  color: #000; 
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}

.legal-notice {
  background-image: linear-gradient(
    to right,
    #2ea290,
    #2ea290 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: 100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -ms-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  margin-left: 10px;
}

.legal-notice:before {
  content: '';
  background: #2ea290 ;
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  transition: all 0.3s ease-in-out;
}

.legal-notice:hover {
 background-position: 0;
}

.legal-notice:hover::before {
  width:100%;
}
</style>