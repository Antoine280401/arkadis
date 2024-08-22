<template>
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 d-flex justify-content-center">
            <img :src="imageSrc" alt="v" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageSrc: require('@/assets/visit-card.jpg')
      }
    }
  }
  </script>
  
  <style scoped>
.container{
  padding: 20px;
}

  h1 {
    text-align: center;
    margin-top: 20px;
  }
  .container {
    margin-top: 20px;
  }
  </style>
  