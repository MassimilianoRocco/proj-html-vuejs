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
    <div class="container_boxed">

      <div class="text_box">
        <p class="title">Artist coaching</p>
        <p class="title_description">Latest Online Courses</p>
    </div>

      <div class="shop_container">

        <!-- Card 1 -->
        <div class="card">
          <div class="img_shop_container">
            <img src="../assets/artist-course-08-480x480.jpg" class="my_img">
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
            <img src="../assets/artist-course-07-480x480.jpg" class="my_img">
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
            <img src="../assets/artist-course-06-480x480.jpg" class="my_img">
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
            <img src="../assets/artist-course-05-480x480.jpg" class="my_img">
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
            <img src="../assets/artist-course-04-480x480.jpg" class="my_img">
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
            <img src="../assets/artist-course-03-480x480.jpg" class="my_img">
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
            <img src="../assets/artist-course-02-480x480.jpg" class="my_img">
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
            <img src="../assets/artist-course-01-480x480.jpg" class="my_img">
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
    
  </div>
</template>


<!-- STYLE -->
<style scoped>
  .container{
    padding: 50px 0;
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
    src: url(/public/Rossela-Demo.ttf);
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
    
  }
  .card:hover .text_shop_container{
    transform: translate(0, -30px);
    background-color: white;
    border: #EF7032 1px solid;
  }
  .card:hover .img_shop_container{
    transform: rotate(20deg) scale(1.1);
  }

  .img_shop_container{
    width: 100%;
    height: 300px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
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
  
</style>
