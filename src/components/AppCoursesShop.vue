<!-- SCRIPT -->
<script>
    export default {
        components: {
        
    },

  data() {
    return {
      items: [
        {
          price: "$18.00",
          title: "The Acrylic Painting",
          n_lessons: "4 Lessons",
          n_students: "50 Students",
          image:"artist-course-08-480x480.jpg",
        },
        {
          price: "$21.00",
          title: "Drawing and Shading: Complete Course",
          n_lessons: "14 Lessons",
          n_students: "50 Students",
          image:"artist-course-07-480x480.jpg",
        },
        {
          price: "$19.00",
          title: "The Color Theory for Digital Artist",
          n_lessons: "7 Lessons",
          n_students: "50 Students",
          image:"artist-course-06-480x480.jpg",
        },
        {
          price: "$35.00",
          title: "Ultimate Guide to Digital Sketching for Beginner",
          n_lessons: "4 Lessons",
          n_students: "50 Students",
          image:"artist-course-05-480x480.jpg",
        },
        {
          price: "$19.00",
          title: "Portrait Drawing The Smart Way",
          n_lessons: "2 Lessons",
          n_students: "50 Students",
          image:"artist-course-04-480x480.jpg",
        },
        {
          price: "$19.00",
          title: "Mastering Watercolor Painting from Beginner",
          n_lessons: "9 Lessons",
          n_students: "50 Students",
          image:"artist-course-03-480x480.jpg",
        },
        {
          price: "$25.00",
          title: "The Art & Science of Drawing",
          n_lessons: "4 Lessons",
          n_students: "50 Students",
          image:"artist-course-02-480x480.jpg",
        },
        {
          price: "$22.00",
          title: "The Colored Pencil Drawing Course",
          n_lessons: "6 Lessons",
          n_students: "50 Students",
          image:"artist-course-01-480x480.jpg",
        },

      ],
    }
  },
  methods: {
    getImage(nomefile) {
      return new URL(`../assets/${nomefile}`, import.meta.url);
    },
  },
  computed: {
   
  },
  created() {
   
  },
  mounted() {
  }
}

</script>


<!-- TEMPLATE -->
<template>
  <div class="container">
    <kinesis-container>
    <div class="container_boxed">

      <div class="text_box">
        <p class="title">Artist coaching</p>
        <p class="title_description">Latest Online Courses</p>
    </div>

      <div class="shop_container">

        <!-- Card -->
        <div v-for="card in items" class="card">
          <div class="img_shop_container">
            <img :src="getImage(card.image)" class="my_img img_scale">
          </div>
          <div class="text_shop_container">
            <p class="item_price">{{ card.price }}</p>
            <p class="item_title">{{ card.title }}</p>
            <p class="item_subinfo"><span>{{ card.n_lessons }} </span> <span>{{card.n_students}}</span></p>
          </div>
        </div>
      </div>

      <div class="shop_button">
        View all courses <span class="button_arrow">&#11106;</span>
      </div>

    </div>
    
    <div class="lateralText absolute">
       COURSES
    </div>
    
    <kinesis-element :strength="40" class="back_img absolute">
      <img src="../assets/artist-shape-01.png" class="my_img">
    </kinesis-element>
    </kinesis-container> 

  </div>
</template>


<!-- STYLE -->
<style scoped>
  .container{
    padding: 50px 0;
    position: relative;
  }
  .container_boxed{
    width: 70%;
    margin: auto;
  }
  .text_box{
    width: 300px;
    margin: 10px auto;
    text-align: center;
  }
  @font-face {
    font-family: myFirstFont;
    src: url(/Rossela-Demo.ttf);
  }
  .title{
    font-family: myFirstFont;
    color: #6AC5F1;
    font-size: 40px;
    margin-bottom: 10px;
  }
  .title_description{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
  }


  .shop_container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  /* Card */
  .card{
    width: calc(100% / 4 - 10px);
    margin: 5px;
    height: 400px;
    overflow: hidden;
    
  }
  .card:hover .text_shop_container{
    transform: translate(0, -30px);
    background-color: white;
    border: #EF7032 1px solid;
  }

  .img_scale{
    transition: all 0.3s ease-in-out;
  }
  .card:hover .img_scale{
    transform: scale(1.1);
  }
 
  .img_shop_container{
    width: 100%;
    height: 300px;
    cursor: pointer;
    overflow: hidden;
    z-index: 100;
    position: relative;
  }
  .text_shop_container{
    width: 80%;
    height: 100px;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    background-color: transparent;
    position: relative;
    z-index: 200;
    transition: all 0.3s ease-in-out;
  }
  .item_price{
    width: 100%;
    color: #EF7032;
    font-size: 14px;
    font-weight: bolder;
  }
  .item_title{
    width: 100%;
    font-size: 16px;
    max-width: 80%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .item_title:hover{
    color: #EF7032;
  }
  .item_subinfo{
    width: 100%;
    font-size: 14px;
    color: #333333;
    align-self: flex-end;
  }

  /* Button */
  .shop_button{
    width: 200px;
    margin: auto;
    color: #EF7032;
    background-color: #FEF0EA;
    padding: 10px 20px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .button_arrow{
    font-size: 18px;
  }
  .shop_button:hover{
    background-color: #EF7032;
    color: white;
  }


  .lateralText{
    top:50%;
    right: 0;
    transform: rotate(90deg) translate(-20%, -50%); 
    font-size: 100px;
    text-decoration: dotted;
    color: #333333;
    /* Per dare l'effetto "doppia linea" alla scritta  */
    -webkit-text-stroke-color: #F4EBE2;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
  }

  .back_img{
    width: 300px;
    left: 2%;
    top: 40%;
    z-index: 1;
  }
  
</style>
