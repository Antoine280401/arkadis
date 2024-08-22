<template>
  <div class="home-page">
      <img src="../assets/back-services-2.jpg" alt="presentation" class="header-img content">
      <div class="content" id="nos-services">
        <div class="one">
          <h2>Nos Services</h2>
        </div>
          
          <h5 class="sub-title-long header-text">La gestion prévisionnelle</h5>
          <p class="indent">Nous développons sur mesure des outils de gestion personnalisés qui aident l’entrepreneur dans ses prises de décisions au quotidien ; cela peut-être le cas lorsque :</p>
          <ul class="examples prev">
            <li>L’entreprise connait des difficultés structurelles et financières.  Le prévisionnel, propre à l’activité et aux besoins internes, apportera les meilleures réponses à l’entrepreneur pour passer ce mauvais cap.  En effet, chaque décision sera alors monitorée dans l’outil de gestion pour en détecter la faisabilité positive ou négative.  Ce prévisionnel sera alors l’outil indispensable à transmettre à son banquier (pour le rassurer et/ou négocier de nouveaux crédits) ou bien encore au tribunal de l’entreprise dans le cas de plus grosses difficultés</li>
            <li>L’entreprise est en pleine phase de développement.  Intégrer une nouvelle activité, réaliser de nouveaux investissements, moderniser les process, … tout cela doit être modélisé dans un outil de gestion personnalisé qui permette de mettre en lumière les résultats financiers escomptés</li>
            <li>L’entrepreneur n’a pas une vision claire et analytique de son entreprise.  Bien que le chef d’entreprise soit la personne la plus apte à connaître son business, il arrive toutefois que celui-ci, « nez dans le guidon » face à toutes ses obligations commerciales, sociales et administratives n’ait au final pas la perception réelle de sa rentabilité.  Un outil de gestion adapté a ses besoins lui apportera la clarté nécessaire pour justifier ses décisions.</li>
          </ul>
      </div>
      <div class="content">
          <h5 class="sub-title-long">La gestion de trésorerie</h5>
          <p class="indent">L’étude des flux de trésorerie de l’entreprise exprimée de manière mensuelle permet de détecter les moments durant l’exercice où des tensions de trésorerie peuvent apparaitre. <br> C'est le cas par exemple : </p>

          <ul class="examples">
              <li>Dans des secteurs saisonniers</li>
              <li>Quand les délais de payements des clients sont mal maitrisés</li>
              <li>Lorsque les conditions de payements des fournisseurs sont mal négociées</li>
              <li>Lors de fluctuations importantes de la gestion des stocks</li>
              <li>…</li>
          </ul>
          <p>Sachant cela, des solutions peuvent être prises en interne afin de mieux appréhender les flux.</p>
      </div>
      <div class="content">
          <h5 class="sub-title-long">L’audit de la comptabilité</h5>
          <p class="indent">Lorsque l’entreprise rencontre des difficultés avec sa propre comptabilité, cette étude (à usage interne) permet de mettre en lumière les faiblesses de la rigueur comptable et offre alors un diagnostic clair de l’image fidèle que devrait proposer la comptabilité au point de vue légal.</p>
      </div>
      <div class="content">
          <h5 class="sub-title-long">La comptabilité analytique</h5>
          <p class="indent">La comptabilité analytique est un formidable outil qui aide à déterminer le cout de revient de chaque produit, secteur et/ou département de l’entreprise pour en dégager alors des rentabilités détaillées et segmentées.  En fonction des résultats, l’entrepreneur prendra les éventuelles mesures afin d’améliorer l’efficience globale.</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
};
</script>

<style scoped>

.header-img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.header-text{
  margin-top : 20px
}

h2 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 40px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  letter-spacing: 0.1em;
}

h2 span {
  display: block;
  font-size: 0.5em;
  line-height: 1.3;
}

h2 em {
  font-style: normal;
  font-weight: 600;
}

.one h2 {
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 5px;
  position: relative; 
}

.one h2:before {
  width:80px;
  height: 6px;
  display: block;
  content: "";
  position: absolute;
  bottom: -5px; 
  left: 50%;
  margin-left: -40px;
  background-color: #2ea290;
}

.one h2:after {
  content: '';
  width: 0; 
  height: 2px; 
  display: block;
  position: absolute; 
  bottom: -3px; 
  left: 50%;
  transform: translateX(-50%); 
  background-color: #2ea290;
  animation: lineAnimation 1.5s ease forwards; 
  animation-delay: 1.5s; 
}

@keyframes lineAnimation {
  from {
    width: 0; 
  }
  to {
    width: 360px; 
  }
}

.indent{
  text-indent: 2em;
}

.one{
  margin-bottom: 20px;
}
.content {
  margin-bottom: 15px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;
}

.content:nth-child(2) {
  animation-delay: 0.4s;
}

.content:nth-child(3) {
  animation-delay: 0.8s;
}

.content:nth-child(4) {
  animation-delay: 1.2s;
}

.content:nth-child(5) {
  animation-delay: 1.6s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.prev li{
  margin-bottom: 30px;
}

.examples {
  list-style-type: none;
  
}

.examples li {
  position: relative;
  padding-left: 30px; 
  margin-top: 5px; 
}

.examples li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px; 
  height: 10px; 
  background-color: #d79A10; 
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}



.sub-title-long {
  position: relative;
  display: inline-block;
  margin-top : 25px;
}

.sub-title-long::before{
  background-color: #2ea290;
  content: "";
  position: absolute;
  width: 102%;
  height: 0.8em;
  left: 0;
  bottom: 0.2em;
  z-index: -1;
  border-radius: 5px; 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transform: rotate(-1deg);
  opacity: 0.5;
}
</style>
