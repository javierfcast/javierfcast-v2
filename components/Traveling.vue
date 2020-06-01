<template>
  <section class="traveling" id="traveling">
    <div class="jf-container">
      <h2 class="jf-h1">I love traveling</h2>
      <div class="jf-spacer"></div>
      <span class="jf-label">Places I've been</span>
      <div class="jf-spacer"></div>
      <ol class="places-list">
        <li><a href="#">Barcelona</a></li>
        <li><a href="#">Hamburg</a></li>
        <li><a href="#">Berlin</a></li>
        <li><a href="#">Budapest</a></li>
        <li><a href="#">París</a></li>
        <li><a href="#">Lisboa</a></li>
        <li><a href="#">Sevilla</a></li>
        <li><a href="#">Toledo</a></li>
        <li><a href="#">Madrid</a></li>
        <li><a href="#">Marrakech</a></li>
        <li><a href="#">Chefchauen</a></li>
        <li><a href="#">Tanger</a></li>

        <li><a href="#">Moscow</a></li>
        <li><a href="#">St. Petersburg</a></li>

        <li><a href="#">Milan</a></li>
        <li><a href="#">Venecia</a></li>
        <li><a href="#">Roma</a></li>
        <li><a href="#">Florencia</a></li>
        <li><a href="#">Genova</a></li>
        <li><a href="#">Nice</a></li>

        <li><a href="#">Santorini</a></li>
        <li><a href="#">Amsterdam</a></li>

        <li><a href="#">San Francisco</a></li>
        <li><a href="#">Los Angeles</a></li>
        <li><a href="#">Las Vegas</a></li>
        <li><a href="#">New York</a></li>
        <li><a href="#">Miami</a></li>

        <li><a href="#">Mexico City</a></li>
        <li><a href="#">Cancún</a></li>
        <li><a href="#">Playa del Carmen</a></li>
        <li><a href="#">Tulum</a></li>
        <li><a href="#">Bacalar</a></li>

        <li><a href="#">Bogota</a></li>
        <li><a href="#">Cartagena</a></li>
        <li><a href="#">Santa Marta</a></li>

        <li><a href="#">San Jose</a></li>
        <li><a href="#">Santa Teresa</a></li>
        <li><a href="#">Puerto Viejo</a></li>
        <li><a href="#">Bocas del Toro</a></li>
        <li><a href="#">Panama City</a></li>

        <li><a href="#">Roatan</a></li>
        <li><a href="#">Cayo San Pedro</a></li>

        <li><a href="#">Guatemala City</a></li>
        <li><a href="#">Atitlán</a></li>
        <li><a href="#">Antigua</a></li>
        <li><a href="#">El Paredón</a></li>
        <li><a href="#">Semuc Champey</a></li>
        <li><a href="#">Izabal</a></li>
        <li><a href="#">Flores</a></li>
        <li><a href="#">Tikal</a></li>

      </ol>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.traveling{
  background: #262524;
  color: #ffffff;
  a{
    color: #ffffff;
    border: none;
  }
  .places-list{
    display: flex;
    flex-wrap: wrap;
    li{
      padding-left: 0;
      padding-right: 40px;
      a{
        @include h2;
      }
    }
  }
}

</style>