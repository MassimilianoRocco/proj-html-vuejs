<script>

</script>

<template>
  <section>
    <!-- **CONTENITORE KINESIS** -->
    <kinesis-container :event="scroll" >
      <!-- ELEMENTI KINESIS -->
      <kinesis-element class="shape-circle-green"  :strenght="100" :originX="-300" originY="-200" :type="translate">
        <img src="../assets/maxcoach-shape-05-150x150.png" alt="">
      </kinesis-element>
      <kinesis-element class="shape-circle-white" :strenght="100" :originX="200" originY="200" :type="translate">
        <img src="../assets/maxcoach-shape-13-150x150.png" alt="">
      </kinesis-element>
    <!-- **CONTENITORE VIDEO YT** -->
    <div class="background-container">
      <a href="https://www.youtube.com/"><img class="logo" src="../assets/icon-youtube-play.png" alt=""></a>
    </div>
      <kinesis-element class="shape-circle-blue" :strenght="100" :originX="100" originY="200" >
        <img src="../assets/maxcoach-shape-12-150x150.png" alt="">
      </kinesis-element>
      <kinesis-element class="shape-circle-blue2" :strenght="100" :originX="200" originY="200" >
        <img src="../assets/maxcoach-shape-12-150x150.png" alt="">
      </kinesis-element>
    </kinesis-container>
  </section>
</template>

<style scoped>  
section {
  margin: 10rem 0;
  position: relative;
}

.logo {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); 
}
.background-container {
  border-radius: 10px;
  margin: 0 auto;
  position: relative; 
  width: 900px; 
  height: 500px; 
  overflow: hidden; 
}
/* ***GESTIONE HOVER SUL CONTAINER*** */
.background-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/artist-video-poster.jpg');
  background-size: cover; 
  background-position: center; 
  transition: transform 1s ease; 
}
.background-container:hover::before {
  transform: scale(1.2); 
}
/* STILE KINESIS ELEMENTS */
.shape-circle-green{
  position: absolute;
  left: 200px;
  top: -15px;
}
.shape-circle-blue{
  position: absolute;
  bottom: -60px;
  right: 200px;
}
.shape-circle-blue2{
  position: absolute;
  bottom: 20px;
  left: 100px;
}
.shape-circle-white{
  position: absolute;
  right: 200px;
}
</style>