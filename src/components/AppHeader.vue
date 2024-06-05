<!-- SCRIPT -->
<script>
    export default {

  data() {
    return {
      timeLeft: 172740,
      timer_day:0,
      timer_hours:0,
      timer_minutes:0,
      timer_seconds:0,

    }
  },
  methods: {

    // TIMER FUNCTION
    startTimer() {
      let timer = setInterval(() => {
        if(this.timeLeft == 0){
          clearInterval(timer);
        }
        else{
          this.timer_day = Math.floor(this.timeLeft / (3600 * 24)); 
          this.timer_hours = Math.floor(this.timeLeft % (3600 * 24) / 3600);
          this.timer_minutes = Math.floor(this.timeLeft % 3600 / 60);
          this.timer_seconds = Math.floor(this.timeLeft % 60);
        
          this.timeLeft--;
        }
      }, 1000);
    },

    // GET IMAGE FROM ASSETS FUNCTION
    getImage(nomefile) {
      return new URL(`../assets/${nomefile}`, import.meta.url);
    },



  },
  created() {
    this.startTimer();
  },
  mounted() {
    
  }
}
</script>






<!-- TEMPLATE -->
<template>

    <!-- HEADER TIMER SECTION-->
    <div class="countdown_container">
      <span class="countdown_text">Starts TOMORROW! Our biggest event of the year...</span>

      <span class="Timer">
        <span id="clock"><i class="fa-regular fa-clock"></i></span>
        <span><b>{{ this.timer_day }}: </b></span>
        <span><b>{{ this.timer_hours }}: </b></span>
        <span><b>{{ this.timer_minutes }}: </b></span>
        <span><b>{{ this.timer_seconds }} </b></span>
      </span>

      <span class="get_ticket_button"><b>Get ticket</b></span>
    </div>

    <!-- HEADER DROPDOWN SECTION -->
    <div class="dropdown_section_container">
      <div class="dropdown_boxed_container">

        <figure class="logo_box m-0">
          <img src="../assets/dark-logo.png" class="header_logo">
        </figure>


        <div class="dropdown_box">
  
          <div class="dropdown">
            <button class="dropbtn">
              Home <span class="little_arrow">&#11167;</span>
            </button>
            <div class="big-dropdown-content">
              <div class="dropdown_items_box">
                    <div><a class="dropdown-item" href="#">MaxCoach Education</a></div>
                    <div><a class="dropdown-item" href="#">Course Portal</a></div>
                    <div><a class="dropdown-item" href="#">Distant Learning</a></div>
                    <div><a class="dropdown-item" href="#">Multimedia Pedagogy</a></div>
                    <div><a class="dropdown-item" href="#">Modern Schooling</a></div>
                    <div><a class="dropdown-item" href="#">Remote Training</a></div>
                    <div><a class="dropdown-item" href="#">Health Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Gym Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Business</a></div>
                    <div><a class="dropdown-item" href="#">Artist</a></div>
                </div>
                <div class="dropdown_items_box">
                    <div><a class="dropdown-item" href="#">Kitchen Coach</a></div>
                    <div><a class="dropdown-item" href="#">Motivation</a></div>
                    <div><a class="dropdown-item" href="#">Dancing</a></div>
                    <div><a class="dropdown-item" href="#">Guitar</a></div>
                    <div><a class="dropdown-item" href="#">Yoga</a></div>
                    <div><a class="dropdown-item" href="#">Photography</a></div>
                    <div><a class="dropdown-item" href="#">Personal Finance</a></div>
                    <div><a class="dropdown-item" href="#">Sales Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Mental Therapy</a></div>
                </div>
                <div class="dropdown_items_box">
                    <div>
                      <a class="dropdown-item" href="#">
                      <figure class= "m-0">
                        <img src="../assets/homepages-mega-menu-image-alt.jpg" class="my_img">
                      </figure>
                    </a>
                  </div>
                </div>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              Pages <span class="little_arrow">&#11167;</span>
            </button>
            <div class="dropdown-content">
              <div class="dropdown_items_box">
                    <div><a class="dropdown-item" href="#">MaxCoach Education</a></div>
                    <div><a class="dropdown-item" href="#">Course Portal</a></div>
                    <div><a class="dropdown-item" href="#">Distant Learning</a></div>
                    <div><a class="dropdown-item" href="#">Multimedia Pedagogy</a></div>
                    <div><a class="dropdown-item" href="#">Modern Schooling</a></div>
                    <div><a class="dropdown-item" href="#">Remote Training</a></div>
                    <div><a class="dropdown-item" href="#">Health Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Gym Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Business</a></div>
                    <div><a class="dropdown-item" href="#">Artist</a></div>
                </div>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              Courses <span class="little_arrow">&#11167;</span>
            </button>
            <div class="dropdown-content">
              <div class="dropdown_items_box">
                    <div><a class="dropdown-item" href="#">MaxCoach Education</a></div>
                    <div><a class="dropdown-item" href="#">Course Portal</a></div>
                    <div><a class="dropdown-item" href="#">Distant Learning</a></div>
                    <div><a class="dropdown-item" href="#">Multimedia Pedagogy</a></div>
                    <div><a class="dropdown-item" href="#">Modern Schooling</a></div>
                    <div><a class="dropdown-item" href="#">Remote Training</a></div>
                    <div><a class="dropdown-item" href="#">Health Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Gym Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Business</a></div>
                    <div><a class="dropdown-item" href="#">Artist</a></div>
                </div>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              Features <span class="little_arrow">&#11167;</span>
            </button>
            <div class="dropdown-content">
              <div class="dropdown_items_box">
                    <div><a class="dropdown-item" href="#">MaxCoach Education</a></div>
                    <div><a class="dropdown-item" href="#">Course Portal</a></div>
                    <div><a class="dropdown-item" href="#">Distant Learning</a></div>
                    <div><a class="dropdown-item" href="#">Multimedia Pedagogy</a></div>
                    <div><a class="dropdown-item" href="#">Modern Schooling</a></div>
                    <div><a class="dropdown-item" href="#">Remote Training</a></div>
                    <div><a class="dropdown-item" href="#">Health Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Gym Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Business</a></div>
                    <div><a class="dropdown-item" href="#">Artist</a></div>
                </div>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              Blog <span class="little_arrow">&#11167;</span>
            </button>
            <div class="dropdown-content">
              <div class="dropdown_items_box">
                    <div><a class="dropdown-item" href="#">MaxCoach Education</a></div>
                    <div><a class="dropdown-item" href="#">Course Portal</a></div>
                    <div><a class="dropdown-item" href="#">Distant Learning</a></div>
                    <div><a class="dropdown-item" href="#">Multimedia Pedagogy</a></div>
                    <div><a class="dropdown-item" href="#">Modern Schooling</a></div>
                    <div><a class="dropdown-item" href="#">Remote Training</a></div>
                    <div><a class="dropdown-item" href="#">Health Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Gym Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Business</a></div>
                    <div><a class="dropdown-item" href="#">Artist</a></div>
                </div>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">
              Shop <span class="little_arrow">&#11167;</span>
            </button>
            <div class="dropdown-content">
              <div class="dropdown_items_box">
                    <div><a class="dropdown-item" href="#">MaxCoach Education</a></div>
                    <div><a class="dropdown-item" href="#">Course Portal</a></div>
                    <div><a class="dropdown-item" href="#">Distant Learning</a></div>
                    <div><a class="dropdown-item" href="#">Multimedia Pedagogy</a></div>
                    <div><a class="dropdown-item" href="#">Modern Schooling</a></div>
                    <div><a class="dropdown-item" href="#">Remote Training</a></div>
                    <div><a class="dropdown-item" href="#">Health Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Gym Coaching</a></div>
                    <div><a class="dropdown-item" href="#">Business</a></div>
                    <div><a class="dropdown-item" href="#">Artist</a></div>
                </div>
            </div>
          </div>

        </div>



        <div class="social_box">
          <p class="social_icons_box"><a class="fa-brands fa-twitter"></a></p>
          <p class="social_icons_box"><a class="fa-brands fa-facebook"></a></p>
          <p class="social_icons_box"><a class="fa-brands fa-instagram"></a></p>
          <p class="social_icons_box"><a class="fa-brands fa-linkedin"></a></p>
        </div>
      </div>
    </div>

      <!-- JUMBO SECTION  -->

      <kinesis-container class="jumbo_section_container">

        <div class="jumbo_text_container">
          <p class="jumbo_title">Hello, Im Matin</p>
          <p class="jumbo_subtitle">Artist Coaching And Mentoring Might Be for You.</p>
          <p class="jumbo_button">Get Started Today</p> 
        </div>

        <!-- absolute img section -->
        <kinesis-element :strength="40" class="paint_img absolute">
          <img src="../assets/artist-course-08-480x480.jpg" class="my_img">
        </kinesis-element>
        <kinesis-element :strength="20" class="astroMonkey_img absolute">
          <img src="../assets/artist-hero-image-01.jpg" class="my_img">
        </kinesis-element>
        <kinesis-element :strength="60" class="artist_img absolute">
          <img src="../assets/artist-hero-image-04.jpg" class="my_img">
        </kinesis-element>
        <div class="blueDots_img absolute">
          <img src="../assets/maxcoach-shape-12.png" class="my_img">
        </div>
        <div class="leaf_img absolute">
          <img src="../assets/artist-shape-04.png" class="my_img">
        </div>
        <div class="artist_paint absolute">
          <img src="../assets/artist-hero-image-03.png" class="my_img">
        </div>
        <div class="backg_halfstuff absolute">
          <img src="../assets/artist-shape-02.png" class="my_img">
        </div>
        <div class="backg_stuff absolute">
          <img src="../assets/artist-shape-01.png" class="my_img">
        </div>
        <div class="right_paint absolute">
          <img src="../assets/artist-shape-05.png" class="my_img">
        </div>
      </kinesis-container>


    
</template>





<!-- STYLE -->
<style scoped>
    /* HEADER TIMER SECTION */
   .countdown_container{
    background-color: #F5F5F5;
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
   }
   .countdown_text{
    padding-right: 15px;
    padding-top: 2px;
    opacity: 0.7;
    font-size: 0.9rem;
   }
   .Timer{
    padding-right: 15px;
   }
   #clock{
    padding-right: 4px;
   }
   .get_ticket_button{
    width: 100px;
    padding: 2px 10px;
    border-radius: 5px;
    background-color: #EF6F31;
    color: white;
    text-align: center;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
   }
   .get_ticket_button:hover{
    background-color: #6AC5F1;
   }

   /* HEADER DROPDOWN SECTION */

   .dropdown_boxed_container{
    width: 1200px;
    background-color: white;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 10px;
    position: relative;
    z-index: 999;
   }

   /* Logo */
   .logo_box{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
   }
   .header_logo{
    width: 200px;
    object-fit: cover;
   }

   /* dropdown  */
   .dropdown_box{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
   }

   /* Dropdown Button */
  .dropbtn {
    color: black;
    padding:  10px;
    font-size: 14px;
    border: none;
    background-color: unset;
    position: relative;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  .dropbtn:hover {
    color: #EF6F31;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .big-dropdown-content {
    padding: 20px;
    border-radius: 10px;
    display: none;
    position: absolute;
    background-color: white;
    min-width: 1200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    left: -380px;
  }
  .little_arrow{
    font-size: 10px;
  }

  /* underlined transition effect */
  /* .drop_title{
    position: relative;
    display: inline-block;
    text-align: center;
    Da capire come inserire la sottolineatura non al button ma allo span
  } */
  .dropbtn::after{
  content: "";
  border-top: 1px solid #EF6F31;
  font-size: 0.8rem;
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 0%;
  transition: all 1s ease-in-out;
}
.dropbtn:hover::after{
  width: 100%;
}

  .dropdown_items_box{
    width: calc(100% / 3)
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: #333333;
    padding: 6px 16px;
    text-decoration: none;
    display: block;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .dropdown-content a:hover {
    color: #EF6F31;
  }
  .big-dropdown-content a {
    color: #333333;
    padding: 6px 16px;
    text-decoration: none;
    display: block;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .big-dropdown-content a:hover {
    color: #EF6F31
  }
  /* Show the dropdown menu on hover */
  .dropdown:hover .big-dropdown-content {
    display: flex;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .social_box{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .social_box>.social_icons_box{
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social_box>.social_icons_box>a{
    text-decoration: none;
    color: #696985;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .social_box>.social_icons_box>a:hover{
    color: #EF6F31;
  }

  /* JUMBO SECTION  */

  .jumbo_section_container{
    width: 100%;
    height: 600px;
    background-color: #FBF9F6;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .jumbo_text_container{
    width: 500px;
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .jumbo_text_container>p{
    max-width: 450px;
  }
  @font-face {
    font-family: myFirstFont;
    src: url(/Rossela-Demo.ttf);
}
  .jumbo_title{
    font-family: myFirstFont;
    color: #6AC5F1;
    font-size: 50px;
  }
  .jumbo_subtitle{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
  }
  .jumbo_button{
    cursor: pointer;
    background-color: #EF6F31;
    margin-top: 25px;
    padding: 10px 25px;
    color: white;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }
  .jumbo_button:hover{
    background-color: #6AC5F1;
  }

  .paint_img{
    width: 220px;
    height: 300px;
    left: 15%;
    top: 20%;
    z-index: 3;
  }
  .astroMonkey_img{
    width: 160px;
    height: 230px;
    left: 10%;
    bottom: 15%;
    z-index: 4;
  }
  .artist_img{
    width: 240px;
    height: 300px;
    bottom: 5%;
    right: 10%;
    z-index: 4;
  }

  .blueDots_img{
    width: 200px;
    height: 250px;
    left: 5%;
    top: 25%;
    transform: rotate(140deg);
    z-index: 2;
  }
  .leaf_img{
    width: 120px;
    right: 8%;
    top: 20%;
    z-index: 3;
  }
  .artist_paint{
    width: 180px;
    left: 25%;
    bottom: 4%;
    z-index: 1;
  }
  .backg_halfstuff{
    width: 720px;
    top:0;
    left: 0;
    z-index: 1;
  }
  .backg_stuff{
    width: 550px;
    right:10%;
    bottom: 10%;
    z-index: 1;
  }
  .right_paint{
    width: 300px;
    right: 4%;
    bottom: 0%;
    z-index: 2;
  }

</style>
