<script>
export default {
    data() {
        return {

        };
    },

    methods: {

    },
}
</script>

<template>
    <div class="articles">
        <h3>Articles and tips</h3>
        <h5>Latest From The Blog</h5>
        <div class="shape">
            <img src="../assets/maxcoach-shape-03.png" alt="" srcset="">
        </div>
        <div class="images">
            <div class="blog1">
                <div class="card1">
                    <img src="../assets/artist-blog-03-480x356.jpeg" alt="" srcset="">
                    <div class="description">
                        <p>Artist</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div class="date">
                        <i class="fa-regular fa-calendar"></i> <span>May 15, 2020</span>
                        <i style="margin-left: 0.5rem;" class="fa-solid fa-eye"></i><span>688 views</span>
                    </div>
                </div>
            </div>
            <div class="blog2">
                <div class="card2">
                    <p style="color: white;">Artist</p>
                    <p style="color: white;">Lorem ipsum dolor sit amet.</p>
                </div>
                <div style="color: white;" class="date">
                    <i class="fa-regular fa-calendar"></i> <span>May 15, 2020</span>
                    <i style="margin-left: 0.5rem;" class="fa-solid fa-eye"></i><span>688 views</span>
                </div>
            </div>
            <div class="blog3">
                <div class="card3">
                    <img src="../assets/artist-blog-01-480x356.jpg" alt="" srcset="">
                    <div class="description">
                        <p>Artist</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div class="date">
                        <i class="fa-regular fa-calendar"></i> <span>May 15, 2020</span>
                        <i style="margin-left: 0.5rem;" class="fa-solid fa-eye"></i><span>688 views</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="details">
            <p style="color: black;">Get into details now ?</p>
            <p style="color: #ef6f31;">View all posts <i class="fa-solid fa-arrow-right"></i></p>
        </div>
    </div>
    <div class="events">
        <h3>Upcoming Events</h3>
        <h5>Let's Work Together</h5>
        <div class="shape13">
            <img src="../assets/maxcoach-shape-13-96x96.png" alt="">
        </div>
        <div class="artist-event">
            <div class="workers">
                <div class="artist1">
                    <img src="../assets/artist-event-04-250x300.jpg" alt="">
                    <div class="text">
                        <p>NOV 22, 2020</p>
                        <p>Storytelling Workshop</p>
                        <p><i class="fa-solid fa-location-dot"></i> Texas, US</p>
                    </div>
                </div>
                <div class="artist2">
                    <img src="../assets/artist-event-03-250x300.jpg" alt="" srcset="">
                    <div class="text">
                        <p>OCT 10, 2020</p>
                        <p>Painting Art Contest 2020</p>
                        <p><i class="fa-solid fa-location-dot"></i> New York, US</p>
                    </div>
                </div>
            </div>


            <div class="workers-2">
                <div class="artist3">
                    <div class="text">
                        <p>NOV 23, 2020</p>
                        <p>International Art Fair 2020</p>
                        <p><i class="fa-solid fa-location-dot"></i> Hamburg, Germany</p>
                    </div>
                    <img src="../assets/artist-event-02-250x300.jpg" alt="">
                </div>
                <div class="artist4">
                    <div class="text">
                        <p>DEC 15, 2020</p>
                        <p>Street Performance: Call Of Artist</p>
                        <p><i class="fa-solid fa-location-dot"></i> Illinois, US</p>
                    </div>
                    <img src="../assets/artist-event-01-250x300.jpg" alt="" srcset="">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: myFirstFont;
    src: url(/Rossela-Demo.ttf);
}

p {
    margin: 0;
    color: black;
}

h3 {
    text-align: center;
    margin-bottom: 0.5rem;
    color: #6ac5f1;
    font-family: myFirstFont;
}

h5 {
    text-align: center;
    margin-bottom: 0.5rem;
    color: black;
}

.images {
    display: flex;
    justify-content: space-around;
    padding: 0 5rem;
}

.details {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.articles {
    background-color: #F5F5F5;
    padding: 5rem 5rem;
    position: relative;
}

.blog1,
.blog3 {
    width: 200px;
    height: 250px;
    background-color: white;
    position: relative;
    z-index: 500;
}

.shape {
    position: absolute;
    left: 0;
    z-index: 1;
}

.shape img {
    width: 100%;
}

.card1,
.card3 {
    width: 100%;
    z-index: 7;
    position: relative;
}

.description {
    width: 100%;
    font-size: 0.7rem;
    color: black;
    padding: 2px 2px 2px 6px;
    text-align: start;
}

.card1 img {
    width: 100%;
    object-fit: cover;
}

.card3 img {
    width: 100%;
    object-fit: cover;
}

.blog2 {
    background-image: url(../assets/artist-blog-02-500x680.jpg);
    width: 300px;
    height: 500px;
    padding: 6px;
    background-size: cover;
    display: flex;
    align-items: end;
    flex-direction: column-reverse;
    z-index: 999;
}

.date {
    color: black;
    font-size: 0.7rem;
    padding: 2px 2px 2px 6px;

}

.events {
    background-color: white;
    padding: 5rem 5rem;
}

.shape13 {
    position: absolute;
    right: 0;
    z-index: 1;
}

.artist-event img {
    width: 150px;
}

.workers,
.workers-2 {
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
    margin-top: 1rem;
}

.artist1,
.artist2,
.artist3,
.artist4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 0.7rem;
}
</style>