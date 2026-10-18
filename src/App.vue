<template>
  <div class="d-flex flex-column min-vh-100">
    <header class="bg-dark text-white py-3">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark container">
        <div class="elt-links">
          <router-link class="navbar-brand" to="/" exact>
            <img :src="imageSrc" alt="v" class="img-fluid logo">
          </router-link>
          <router-link class="navbar-brand" to="/" exact>Arkadis Consulting</router-link>
        </div>
        <button ref="navbarToggler" class="navbar-toggler collapsed border-0" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
            <span class="navbar-toggler-icon"></span>
            <div class="close-icon py-1"><font-awesome-icon :icon="['fas', 'xmark']" /></div>
        </button>

        <div class="collapse navbar-collapse" id="collapsingNavbar">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/accueil" exact>Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/nos-services" exact>Nos services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" exact>Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/visit-card" exact>Carte de visite</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    
    <main class="container my-5 flex-grow-1">
      <router-view></router-view>
    </main>

    <footer class="bg-dark text-white text-center py-3 mt-auto">
      <p>&copy; {{ year }} Arkadis Consulting | Tous droits réservés.</p>
      <button id="scrollToTop" class="btn btn-primary"><img :src="imgUp" alt="v" class="img-fluid logo"></button>
    </footer>
  </div>
</template>

<script>
const year = new Date().getFullYear();

export default {
  name: 'App',
  data() {
    return {
      imageSrc: require('@/assets/logo.png'),
      imgUp: require('@/assets/up2.png'),
      year
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.getElementById('scrollToTop').addEventListener('click', this.scrollToTop);

    this.$router.beforeEach((to, from, next) => {
      this.closeNavbar();
      next();
    });
    this.$nextTick(() => {
      this.$router.beforeEach((to, from, next) => {
        this.closeNavbar();
        next();
      });
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.getElementById('scrollToTop').removeEventListener('click', this.scrollToTop);
  },
  methods: {
    handleScroll() {
      const scrollToTopButton = document.getElementById('scrollToTop');
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    closeNavbar() {
      const navbarToggler = this.$refs.navbarToggler;
      const navbarCollapse = document.querySelector('.navbar-collapse');

      if (navbarCollapse.classList.contains('show') && navbarToggler) {
        navbarToggler.click();
      }
    }
  }
};
</script>

<style>
nav .nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
  margin: 0 10px;
}

.logo {
  width: 50px;
  height: auto;
}

.elt-links {
  display: flex;
  align-items: center;
}

.nav-link {
  color: #2ea290;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}

.nav-link::after { 
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  display: block;
  background: none repeat scroll 0 0 transparent;
  height: 2px;
  width: 0;
  background: #2ea290;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
}

.nav-link:hover::after, 
.nav-link.router-link-active::after, 
.nav-link.router-link-exact-active::after {
  width: 100%; 
  left: 0; 
}

.nav-link.router-link-active, 
.nav-link.router-link-exact-active {
  font-weight: bold;
}

#scrollToTop {
  position: fixed;
  bottom: 20px;
  right: 5%;
  display: none; 
  z-index: 1000; 
  background-color: transparent; 
  border: none; 
  padding: 0; 
  cursor: pointer; 
}

#scrollToTop:focus,
#scrollToTop:active {
  outline: none; 
  box-shadow: none;
}

.navbar-toggler:focus, .navbar-toggler:active{
  outline : none;
  box-shadow: none;
}

.navbar-toggler.collapsed .close-icon {
  display: none;
}

.navbar-toggler:not(.collapsed) .navbar-toggler-icon {
  display: inline;
}

.close-icon{
  font-size: 1.8rem;
  width: 30px;
}

::selection {
    background-color: rgba(46, 162, 144, 0.5);
    color: black;
}


</style>
