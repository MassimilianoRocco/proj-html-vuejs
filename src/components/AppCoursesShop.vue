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
        },

      ],
    }
  },
  methods: {

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

        <!-- Card 1 -->
        <div class="card">
          <div class="img_shop_container">
            <img src="../assets/artist-course-08-480x480.jpg" class="my_img img_scale">
          </div>
          <div class="text_shop_container">
            <p class="item_price">$18.00</p>
            <p class="item_title">The Acrylic Painting Accademy</p>
            <p class="item_subinfo"><span>n lezioni</span><span>n studenti</span></p>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="card">
          <div class="img_shop_container">
            <img src="../assets/artist-course-07-480x480.jpg" class="my_img img_scale">
          </div>
          <div class="text_shop_container">
            <p class="item_price">Prezzo</p>
            <p class="item_title">Titolo</p>
            <p class="item_subinfo"><span>n lezioni</span><span>n studenti</span></p>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="card">
          <div class="img_shop_container">
            <img src="../assets/artist-course-06-480x480.jpg" class="my_img img_scale">
          </div>
          <div class="text_shop_container">
            <p class="item_price">Prezzo</p>
            <p class="item_title">Titolo</p>
            <p class="item_subinfo"><span>n lezioni</span><span>n studenti</span></p>
          </div>
        </div>
        <!-- Card 4 -->
        <div class="card">
          <div class="img_shop_container">
            <img src="../assets/artist-course-05-480x480.jpg" class="my_img img_scale">
          </div>
          <div class="text_shop_container">
            <p class="item_price">Prezzo</p>
            <p class="item_title">Titolo</p>
            <p class="item_subinfo"><span>n lezioni</span><span>n studenti</span></p>
          </div>
        </div>
        <!-- Card 5 -->
        <div class="card">
          <div class="img_shop_container">
            <img src="../assets/artist-course-04-480x480.jpg" class="my_img img_scale">
          </div>
          <div class="text_shop_container">
            <p class="item_price">Prezzo</p>
            <p class="item_title">Titolo</p>
            <p class="item_subinfo"><span>n lezioni</span><span>n studenti</span></p>
          </div>
        </div>
        <!-- Card 6 -->
        <div class="card">
          <div class="img_shop_container">
            <img src="../assets/artist-course-03-480x480.jpg" class="my_img img_scale">
          </div>
          <div class="text_shop_container">
            <p class="item_price">Prezzo</p>
            <p class="item_title">Titolo</p>
            <p class="item_subinfo"><span>n lezioni</span><span>n studenti</span></p>
          </div>
        </div>
        <!-- Card 7 -->
        <div class="card">
          <div class="img_shop_container">
            <img src="../assets/artist-course-02-480x480.jpg" class="my_img img_scale">
          </div>
          <div class="text_shop_container">
            <p class="item_price">Prezzo</p>
            <p class="item_title">Titolo</p>
            <p class="item_subinfo"><span>n lezioni</span><span>n studenti</span></p>
          </div>
        </div>
        <!-- Card 8 -->
        <div class="card">
          <div class="img_shop_container">
            <img src="../assets/artist-course-01-480x480.jpg" class="my_img img_scale">
          </div>
          <div class="text_shop_container">
            <p class="item_price">Prezzo</p>
            <p class="item_title">Titolo</p>
            <p class="item_subinfo"><span>n lezioni</span><span>n studenti</span></p>
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
    z-index: 999;
    position: relative;
  }
  .text_shop_container{
    width: 80%;
    height: 100px;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
  }
  .item_price{
    color: #EF7032;
    padding: 5px 15px;
    font-size: 14px;
    font-weight: bolder;
  }
  .item_title{
    padding: 5px 15px;
    font-size: 16px;
    max-width: 70%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .item_title:hover{
    color: #EF7032;
  }
  .item_subinfo{
    padding: 5px 15px;
    font-size: 12px;
    color: #333333;
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
