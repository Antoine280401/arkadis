<template>
  <div class="home-page">
    
    <img src="../assets/back-welcome-2.jpg" alt="presentation" class="header-img content">

    <div class="content" id="presentation">
      <div class="one">
          <h2>Présentation</h2>
        </div> 
      <p class="indent header-text">Expert-Comptable et fiscaliste de formation, membre agréé de l’ITAA, j’ai pris la décision en 2021 de céder mon bureau comptable après l’avoir géré et développé durant 25 ans.</p>
    </div>

    <div class="content">
      <p class="indent">Cela m’a donné alors l’occasion de développer de nouvelles activités centrées sur :</p>
      <ul class="examples">
        <li>La gestion prévisionnelle</li>
        <li>La gestion de trésorerie</li>
        <li>Les audits comptables à usage interne</li>
        <li>La comptabilité analytique.</li>
      </ul>
    </div>

    <div class="content">
      <p class="indent">Nous n’intervenons donc plus comme l’Expert-Comptable responsable des comptes mais bien comme le partenaire, le conseiller direct et privilégié de l’entrepreneur.</p>
      <p class="indent">Notre offre de services est complémentaire à ce que bons nombres de bureaux comptables apportent au quotidien.  Il n’y a donc aucune concurrence en la matière.
      </p>
    </div>

    <div class="content">
      <p class="indent">En effet, d’expérience, nous savons pertinemment que gérer un bureau comptable ne permet pas de pouvoir mener des missions spéciales en dehors du cadre légal propre à toutes les obligations comptables et fiscales qu’une comptabilité exige.  C’est justement là que nous intervenons.</p>
      <p class="indent">Ma maitrise de la fiscalité belge est également un avantage dans la mesure où les décisions en matière de gestions comprennent toujours des implications fiscales de sorte qu’il est indispensable de pouvoir intégrer les conséquences fiscales à toutes décisions prévisionnelles.
      </p>
    </div>

    <div class="content">
        <p class="decal">En quittant la routine quotidienne d’un bureau comptable, je consacre maintenant mon temps à des entrepreneurs soucieux de mieux connaître leur entreprise…</p>
        <p class="indent">« Prévoir, c’est avancer …. &#x1F604; »</p>
        <p class="indent">A votre entière disposition, Karl Delobbe.</p>
      </div>
        
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>

.header-img{
  width: 100%;
  border-radius : 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.header-text{
  margin-top: 30px;
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

.examples {
  list-style-type: none;
  
}

.examples li {
  position: relative;
  padding-left: 20px; 
  margin-bottom: 5px; 
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
.content {
  margin-bottom: 15px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-out forwards;
 
} 
 .content:nth-child(2) { animation-delay: 0.4s; }
.content:nth-child(3) { animation-delay: 0.8s; }
.content:nth-child(4) { animation-delay: 1.2s; }
.content:nth-child(5) { animation-delay: 1.6s; } 
.content:nth-child(6) { animation-delay: 2.0s; } 
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
} 




</style>
