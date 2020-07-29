<template>
  <section class="mixtapes" id="mixtapes">
    <div class="heading">
      <h2>Mixtapes</h2>
    </div>
    <div class="content-container">
      <div class="content">
        <h4 class="jf-lead">Curated Spotify playlists with custom cover artworks.</h4>
        <p>An ongoing excercise mixing two of my greatest pasions, music and design.</p>
        <div class="jf-spacer--big"></div>
        <p>Browse, listen, enjoy.</p>
      </div>
    </div>
    <div class="swiper">
      <div v-swiper:mySwiper="options">
        <div class="swiper-wrapper">
          <div class="swiper-slide mixtape">
            <img class="mixtape-artwork" src="~/static/mixtapes/fresh_indie.jpg" alt="fresh indie">
            <h3>Fresh Indie</h3>
            <span class="jf-label">Updated: 2020</span>
            <p>A collection of the latest indie gems I find around.</p>
            <a class="jf-button white" href="https://open.spotify.com/playlist/5QV5ZqyRjvdXSUwgX8XVNZ?si=FpQCwMPvTtqw6fWvQXXDlw" target="_blank" rel="noopener noreferrer">Listen now</a>
          </div>
          <div class="swiper-slide mixtape">
            <img class="mixtape-artwork" src="~/static/mixtapes/indie_party.jpg" alt="Indie Party">
            <h3>Indie Party</h3>
            <span class="jf-label">Updated: 2020</span>
            <p>Sweet 2 hours and 41 minutes filled with indie upbeat classics to keep the party going with your hipster designer friends who hate reggaeton.</p>
            <a class="jf-button white" href="https://open.spotify.com/playlist/1BVgPOfhJid8UKCBYWPBZp?si=a8jaar28Q-Syd6TzX85BcA" target="_blank" rel="noopener noreferrer">Listen now</a>
          </div>
          <div class="swiper-slide mixtape">
            <img class="mixtape-artwork" src="~/static/mixtapes/perreo_intenso.jpg" alt="fresh indie">
            <h3>Perreo Intenso</h3>
            <span class="jf-label">Updated: 2020</span>
            <p>Un set de 2 horas para perrear hasta el piso.</p>
            <a class="jf-button white" href="https://open.spotify.com/playlist/0bZRY3tuFL53Vs3SEYRYx1?si=k0ddjGnZSlu6UYbbryLigg" target="_blank" rel="noopener noreferrer">Listen now</a>
          </div>
          <div class="swiper-slide mixtape">
            <img class="mixtape-artwork" src="~/static/mixtapes/reggaeton_2020.jpg" alt="fresh indie">
            <h3>Reggaeton 2020</h3>
            <span class="jf-label">Updated: 2020</span>
            <p>Updated constantly with lo mejor del genero released during this crazy 2020.</p>
            <a class="jf-button white" href="https://open.spotify.com/playlist/7AfMXxhF5FOcUBWWQPsu1K?si=9IxMdATST9ucpxaqwU1U6Q" target="_blank" rel="noopener noreferrer">Listen now</a>
          </div>
          <div class="swiper-slide mixtape">
            <img class="mixtape-artwork" src="~/static/mixtapes/bajo_fondo.jpg" alt="Bajo Fondo Funk">
            <h3>Bajo Fondo Funk</h3>
            <span class="jf-label">Updated: 2020</span>
            <p>Playlist filled with the classic pop and hip-hop songs that you can hear everytime you go to this popular bar in Guatemala city.</p>
            <a class="jf-button white" href="https://open.spotify.com/playlist/0b3TNvi2ZKFTRG5FdDVyKF?si=UdOvcpL2Q2ejjcr1pOW-yA" target="_blank" rel="noopener noreferrer">Listen now</a>
          </div>
          <div class="swiper-slide mixtape">
            <img class="mixtape-artwork" src="~/static/mixtapes/candiflipping.jpg" alt="Bajo Fondo Funk">
            <h3>Candyflipping</h3>
            <span class="jf-label">Updated: 2020</span>
            <p>1 hour and 5 minutes of high intensity latin influenced party hard music.</p>
            <a class="jf-button white" href="https://open.spotify.com/playlist/4vQmEYUmOkAunB1vWiC0H9?si=mha-x4ekRSyremB3HGnIUg" target="_blank" rel="noopener noreferrer">Listen now</a>
          </div>
          <div class="swiper-slide mixtape">
            <img class="mixtape-artwork" src="~/static/mixtapes/cantina_hipster.jpg" alt="Bajo Fondo Funk">
            <h3>La Chula Cantina</h3>
            <span class="jf-label">Updated: 2020</span>
            <p>Hipsterish latin reggaeton, the kind you would listen going to a hipster bar in a third world country.</p>
            <a class="jf-button white" href="https://open.spotify.com/playlist/0b3TNvi2ZKFTRG5FdDVyKF?si=UdOvcpL2Q2ejjcr1pOW-yA" target="_blank" rel="noopener noreferrer">Listen now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  directives: {
    swiper: directive
  },
  data: function() {
    return {
      options: {
        centeredSlides: true,
        spaceBetween: 30,
        slidesPerView: 1.5,
        speed: 500,
        breakpoints: {
          720: {
            slidesPerView: 2.5
          },
          1280: {
            slidesPerView: 3.5
          },
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.mixtapes{
  background: $black;
  color: #ffffff;
  @include padding-bottom;
}

.heading{
  @include container;
  padding-bottom: 0px !important;
  position: relative;
  z-index: 2;
  h2{
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    font-size: 16vw;
  }
}

.content-container{
  @include container;
}

.content{
  max-width: 320px;
  @include bp(s1280){
    padding-left: 20px;
  }
}

.swiper{
  @include bp(s1280){
    margin-top: -540px;
  }
  .swiper-wrapper{
    background: $black;
  }
}

.mixtape{
  .mixtape-artwork{
    width: 100%;
    display: block;
    margin-bottom: 40px;
  }
  h3{
    margin-bottom: 20px;
  }
  span{
    display: block;
    margin-bottom: 20px;
  }
  &:hover{
    cursor: grab;
  }
  &:active{
    cursor: grabbing;
  }
}


</style>