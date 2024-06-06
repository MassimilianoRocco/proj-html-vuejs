<script>
  import Card from './Card.vue'
  import image1 from '../assets/artist-box-image-01.png'
  import image2 from '../assets/artist-box-image-02.png'
  import image3 from '../assets/artist-box-image-03.png'
  import image4 from '../assets/artist-box-image-04.png'
  
  export default {
    components: {
      Card,
    },
    data() {
      return {
        // **ARRAY DELLE CARDS**
        cards: [
          { image: image1, title: 'Online Courses', description: 'Online art coaching now offers you a very powerful way to redesign your artist mind.' },
          { image: image2, title: 'One to One', description: 'Getting the necessary clarity about the current state to help you improve your ability.' },
          { image: image3, title: 'Anywhere', description: 'Access to valuable and portable program which allow you to setup and live anywhere you want.' },
          { image: image4, title: 'On time', description: 'Punctuality is our top priority because its an essential criteria to assess a program quality.' }
        ]
      }
    }
  }
</script>

<template>
  <div class="container-fluid ps-5 mb-5 position-relative">

    <!-- ***IMMAGINI IN ABSOLUTE*** -->
    <div class="shape-corner">
      <img src="../assets/artist-shape-02-600x324.png" alt="">
    </div>
    <div class="shape-circle-green">
      <img src="../assets/maxcoach-shape-05-150x150.png" alt="">
    </div>
    <div class="shape-thread">
      <img src="../assets/maxcoach-shape-14-1536x343.png" alt="">
    </div>
    <div class="shape-rotate">
      <img src="../assets/artist-shape-01.png" alt="">
    </div>
    <!-- *CONTENITORE CON TESTO* -->
    <div class="mt-5 text-center">
      <h2 class="melody">Artist Coaching</h2>
      <h2>I understand what it takes to create.<br>I can help you with</h2>
    </div>

    <!-- ***SEZIONE CARDS*** -->
    <section class="card-section">
      <div class="shape-circle-white">
         <img src="../assets/maxcoach-shape-13-150x150.png" alt="">
      </div>
      <div class="d-flex cards-box">
        <!-- CICLO V-FOR PER GENERARE LE CARD -->
        <Card v-for="(card, index) in cards" class="card-container" :key="index" :image="card.image" :title="card.title" :description="card.description"/>
      </div>
    </section>

  </div>
</template>
  
<style>
 /***STILE PER LE IMMAGINI** */
  .shape-circle-white{
    position: absolute;
    right: -115px;
    top: 10px;
    z-index: 10;
  }
  .shape-rotate{
    position: absolute;
    transform: rotate(220deg);
    left: -100px;
    top: 40px;
    z-index: 20;
  }
  .shape-thread{
    position: absolute;
    z-index: 3;
    left: 0;
    top: 80px;
  }
  .shape-circle-green{
    position: absolute;
    bottom: -200px;
  }
  .shape-corner{
    position: absolute;
    top: -70px;
    right: -250px;
    transform: rotate(40deg);
  }
  
  /* **STILE PER LE CARDS** */
  .card-section {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    position: relative;
    width: 90%;
    margin: auto;
    margin-top: 5rem;
  }
  .d-flex.cards-box > .card-container:nth-child(2),
  .d-flex.cards-box > .card-container:nth-child(4) {
    padding-top: 70px; 
  }
  .d-flex.cards-box > .card-container:nth-child(1),
  .d-flex.cards-box > .card-container:nth-child(3) {
    margin-bottom: 50px; 
  }

/* **FONT FAMILY IMPORTATO** */
  .melody {
    color: #6AC5f1;
    font-size: 50px;
    font-family: myFirstFont;
  }
  @font-face {
    font-family: myFirstFont;
    src: url(/public/Rossela-Demo.ttf);
  }
</style>