<script>

</script>

<template>
  <div class="container-fluid d-flex ">
    <!-- **SEZIONE SINISTRA** -->
    <div class="left">
      <div class="row">
        <div class="col-12 text-center pb-5">
          <img src="../assets/artist-quote-icon.png" alt="">
        </div>
        <div class="col-12 text-center d-flex justify-content-center ps-5">
          <h1 class="coach">I coach and mentor visual artists, like you, to Create Like You Mean It</h1>
        </div>
        <div class="col-12 text-center">
          <h2 class="melody text-center mt-4">Martin Garrix</h2>
        </div>
      </div>
    </div>
    <!-- **SEZIONE DESTRA** -->
    <div class="right pt-5">
      <div class="row justify-content-center pt-4">
        <div class="text-row">
          <p class="paragraf">As a coach and mentor, my ultimate goal is to motivate visual artists toward inspired action. I help you get you back on track to being the productive, creative, meaningful and authentic artist you truly want to be.I support artists in crafting and living a creative life as well as feeling good about themselves and their art.</p>
        </div>
        <div class="text-row">
          <p class="paragraf">As an artist and an educator for nearly 30 years, I understand what it takes to create.</p>
        </div>
        <div class="text-row">
          <button><h5>Get started today</h5></button>
        </div>
      </div>
    </div>
  </div>
</template>
     
<style scoped>
  .paragraf{
    font-size: 20px;
  }
  .coach{
    max-width: 60%;
    font-weight: bold;
  }
  .left{
    width: 40%;
  }
  .right{
    width: 60%;
  }
  .text-row{
    width: 70%;
    margin-left: 2rem;
  }

  /* ***STILE PER GESTIRE IL BUTTON*** */
  button {
   padding: 1rem 2rem;
   border: none; 
   background-color: rgba(239, 111, 49, 0.1);;
   transition: background-color 1s;
   border-radius: 7px;
  }
  h5{
    color:#EF6F31 ;
    transition: color 1s;
    padding-top: 5px;
  }
  button:hover { 
    background-color: #EF6F31; 
    opacity: 1;
  }
  button:hover h5 {
   color: white;
  }
</style> 
