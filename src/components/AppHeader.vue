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
              Page <span class="little_arrow">&#11167;</span>
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

        </div>
      </div>



    </div>
</template>





<!-- STYLE -->
<style scoped>

  .my_img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
   }

   /* HEADER DROPDOWN SECTION */

   .dropdown_boxed_container{
    width: 1200px;
    background-color: white;
    margin: auto;
    display: flex;
    align-items: center;
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
    font-size: 16px;
    border: none;
    background-color: unset;
    position: relative;
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
  border-top: 1px solid red;
  font-size: 0.8rem;
  position: absolute;
  bottom: 10px;
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
    color: black;
    padding: 6px 16px;
    text-decoration: none;
    display: block;
  }
  .big-dropdown-content a {
    color: black;
    padding: 6px 16px;
    text-decoration: none;
    display: block;
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
  }


</style>
