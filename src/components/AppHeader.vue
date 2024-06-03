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
</template>

<!-- STYLE -->
<style scoped>
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


</style>
