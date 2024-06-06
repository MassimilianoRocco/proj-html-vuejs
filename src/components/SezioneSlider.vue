<script>
import img1 from '../assets/artist-testimonial-avatar-01.jpg';
import img2 from '../assets/artist-testimonial-avatar-02.jpg';
import img3 from '../assets/artist-testimonial-avatar-03.jpg';
import img4 from '../assets/artist-testimonial-avatar-04.jpg';
// IMPORTO IL PACCHETTO VUE-DRAGSCROLL
import { dragscroll } from 'vue-dragscroll';

export default {
  name: 'Carousel',
  directives:{
    dragscroll
  },
  data() {
    return {
      currentIndex: 1,
      images: [
      { name: 'Mina Hollace', role: 'Freelance', src: img4, alt: 'High level of efficiency and scientific teaching methods', text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.' },
      { name: 'Madley Pondor', role: 'Freelance', src: img1, alt: 'Professional team of specialists and passionate mentor at reach', text: 'I need to get a certification for english profiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students' },
      { name: 'Florence Themes', role: 'Multimedia admin', src: img2, alt: 'It is a choice of quality for people with special needs ', text: 'I am a very strict person so i require everything to be organized and neat. then i will be able to do things right and shineo. MaxCoach guys just got me.' },
      { name: 'Luvic Dubble', role: 'Private tutor', src: img3, alt: 'The MaxCoach team works really hard to ensure top quality', text: 'I am happy with their arrangment of lessons and subjects. They reflect a scientific investigation into effective methods to be adopted for learners of all levels.' },
      { name: 'Mina Hollace', role: 'Freelance', src: img4, alt: 'High level of efficiency and scientific teaching methods', text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.' },
      { name: 'Madley Pondor', role: 'IT Specialist', src: img1, alt: 'Professional team of specialists and passionate mentor at reach', text: 'I need to get a certification for english profiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students' }
      ]
    };
  },
  methods: {
    scrollToIndex(dotIndex) {
      // GESTISCO L'INDICE DELLE DOTS 
      this.currentIndex = dotIndex;
      // DICHIARO VARIABILI PER GESTIRE L'INDICE  IN FOCUS
      const carouselContainer = this.$refs.carousel;
      const testimonials = carouselContainer.querySelectorAll('.image-box');
      const targetTestimonial = testimonials[this.currentIndex];
      const containerWidth = carouselContainer.offsetWidth;
      const testimonialWidth = targetTestimonial.offsetWidth;
      const targetPosition = targetTestimonial.offsetLeft - (containerWidth - testimonialWidth) / 2;

      // FUNZIONE PER LO SCROLL
      carouselContainer.scrollTo({
        left: targetPosition,
        behavior: 'smooth'
      });
    }
  },
  
};
</script>

<template>
 <section>
  <!-- **TESTO** -->
    <div class=" mb-5 text-center">
      <h2 class="melody">Testimonials</h2>
      <h2>Why do people love me?</h2>
    </div>
  <!-- ***SEZIONE SLIDER*** -->
  <div class="container-fluid">
    <!-- Richiamo la direttiva v-dragacroll -->
    <div class="carousel" ref="carousel" v-dragscroll>
      <!-- CICLO V-FOR CON CLASSI BINDATE PER GESTIRE IL FOCUS SUL CURRENT INDEX -->
      <div v-for="(card, index) in images" :key="index" class="image-box" 
       :class="{ 'current': index === currentIndex,'adjacent': index === currentIndex - 1 || index === currentIndex + 1 || (currentIndex === 0 && index === images.length - 1) || (currentIndex === images.length - 1 && index === 0),}">
        <div class="text-container">
          <h3 class="card-title">{{ card.alt }}</h3>
          <p class="card-description"> {{ card.text }}</p>
        </div>
        <div class="img-container">
         <img :src="card.src" :alt="card.alt" class="avatar rounded-circle"/>
        </div>
        <span class="name"> {{ card.name }}</span>
        <span class="role">/{{ card.role }}</span>
        <div class="box-social">
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href="https://github.com"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
    <!-- DOTS PER LA NAVIGAZIONE DELLO SLIDER -->
    <div class="navigation-dots">
      <span v-for="(dot, index) in images" :key="index" class="dot" :class="{ 'active': index === currentIndex }"
        @click="scrollToIndex(index)"
        :data-index="index">
      </span>
    </div>
  </div>
</section>
</template>

<style scoped>
section{
  background-color: #F5F5F5;
  padding: 5rem 0;  
          /* Padding modificato da originale */
}
/* **STILE SLIDER** */
.carousel {
  width: 100%;
  justify-content: space-around;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 45px;
  scroll-snap-type: x mandatory;
  scroll-padding: 50%;
  overflow-x: hidden;
}
.image-box.current{
  opacity: 1;
}
.image-box.adjacent{
  opacity: 0.5;
}
.image-box {
  background-color: #FFFFFF;
  overflow: hidden;
  width: calc(90vw / 3);
  aspect-ratio: 1;
  text-align: left;
  position: relative;
  transition: opacity 0.3s;
  padding-left: 3.5rem;
  padding-top: 3rem;
  flex-shrink: 0;
  scroll-snap-align: center;
}
.img-container {
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 70px;
  left: 50px;
}
.avatar {
  width: 100%;
  height: auto;
}
.image-box.inactive {
  opacity: 0.4;

}
.text-container {
  text-align: start;
}
.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
  max-width: 85%;
}
.card-description {
  font-size: 1rem;
  font-weight: bold;
  color: black;
  max-width: 85%;
}
.role{
  position: absolute;
  bottom: 80px;
  left:150px;
  color: gray;
}
.name{
  position: absolute;
  bottom: 100px;
  left: 150px;
}
.box-social{
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 90px;
  right: 50px;
}
i{
  font-size: 20px;
  color: #1972F5;
}
/* STILE SEZIONE DOTS */
.navigation-dots {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.dot {
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: lightskyblue;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 1s;
}
.dot.active {
  background-color:black;
  transform: scale(1.2);
}
.navigation-dots> .dot:nth-child(1),
.navigation-dots > .dot:nth-child(6) {
  display: none;
}
</style>