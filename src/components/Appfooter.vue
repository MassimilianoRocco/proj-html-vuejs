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
    <div class="contact">
        <div class="backgroundsx">
            <img src="../assets/artist-shape-color-paint-top-left-300x170.png" alt="#">
        </div>
        <div class="newsletter">
            <p>Newsletter to get <br> in touch</p>
        </div>
        <div class="mail">
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Your e-mail <i
                        class="fa-solid fa-arrow-right"></i></span>
                <input type="text" class="form-control" placeholder="" aria-label="Username"
                    aria-describedby="addon-wrapping">
            </div>
        </div>
        <div class="bacgrounddx">
            <img src="../assets/artist-shape-color-paint-bottom-right-300x153.png" alt="#">
        </div>
    </div>

    <div class="about-us">
        <div class="address">
            <h6>Address</h6>
            <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
            <p>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
            <p>support@maxcoach.com</p>
            <div class="icons">
                <p style="margin: 0 0.5rem;"><i class="fa-brands fa-square-facebook"></i></p>
                <p style="margin: 0 0.5rem;"><i class="fa-brands fa-x-twitter"></i></p>
                <p style="margin: 0 0.5rem;"><i class="fa-brands fa-instagram"></i></p>
                <p style="margin: 0 0.5rem;"><i class="fa-brands fa-linkedin"></i></p>
            </div>
        </div>
        <div class="explore">
            <h6>Explore</h6>
            <p>Start here</p>
            <p>Success story</p>
            <p>Blog</p>
            <p>Courses</p>
            <p>Contact us</p>
        </div>
        <div class="information">
            <h6>Information</h6>
            <p>Membership</p>
            <p>Purchase guide</p>
            <p>Privacy policy</p>
            <p>Terms of services</p>
        </div>
        <div class="instagram">
            <div class="ig-profile">
                <h6>Instagram</h6>
                <span style="color: orangered;">@maxcoach</span>
            </div>
            <div class="images">
                <img src="../assets/artist-blog-03-480x356.jpeg" alt="#">
                <img style="margin-left: 1rem; margin-right: 1rem;" src="../assets/artist-event-03-250x300.jpg"
                    alt="#">
                <img src="../assets/artist-event-02-250x300.jpg" alt="#">
            </div>
        </div>
    </div>

</template>

<style scoped>
.contact {
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1972f5;
    color: white;
}

.backgroundsx img {
    width: 198px;
}

.bacgrounddx img {
    width: 220px;
}

.newsletter {
    text-align: right;
    font-size: 20px;
    padding-top: 1rem;
}

.mail {
    padding-top: 1rem;
}

.about-us {
    display: flex;
    justify-content: space-between;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;
    background-color: white;
    color: black;
    font-size: 0.7rem;
}

.icons {
    display: flex;
    justify-content: start;
}

.images,
.ig-profile {
    display: flex;
    justify-content: start;
}

.images img {
    width: 70px;
}
</style>