<template>
  <section>
    <div class="inner-header-container">
      <div class="inner-header">
        <nuxt-link to="/" class="inner-header__item back">Back</nuxt-link>
        <nuxt-link to="/" class="inner-header__item title">Javier Castillo's Portfolio</nuxt-link>
        <span class="inner-header__item tags">UI/UX</span>
      </div>
    </div>
    <div class="page">
      <div class="page-title">
        <h1>Posfly</h1>
      </div>
      <div class="about page-container">
        <img src="~/static/projects/posfly/posfly_complete_suite.png">
        <div class="page-content">
          <div class="jf-flex">
            <div class="content">
              <span class="jf-label">About the project</span>
              <div class="jf-spacer--text"></div>
              <h3>Posfly is a point of sale (POS) solution to take orders and keep track of sales, kitchen, staff, loyalty and much more. </h3>
              <div class="jf-spacer--text"></div>
              <p>It allows waiters to take orders from their phones and send them to the kitchen without leaving the room. Then they get notified when the order is ready so they can go and serve to the costumers. It also allows customers to order by themselves from their phones. When the check is required, the waiter can sent it to print right from their phones, and can even split the bill automatically if the customers require.</p>
              <p>The idea came up when I was having a couple of beers with some friends at a crowded bar. As I was waiting for the waiter (no pun intended), I tought it would be really If I could just order another beer from my phone.</p>
            </div>
            <div class="sidebar">
              <span class="jf-label">Role</span>
              <div class="jf-spacer--text"></div>
              <p>Idea, branding, UI / UX and frontend development of the MVP, (Developed using React and Firebase).</p>
            </div>
          </div>
        </div>
      </div>
      <div class="definining-use-cases page-container" style="background: #f2f2f2">
        <div class="page-content">
          <div class="content">
            <h3>Defining each use case</h3>
            <p>The platform serves customers, waiters, chefs, and restaurant owners. </p>
            <p>Each type of user has different actions that were mapped out to make sure each flow  and it was important to define each flow to make sure it was as simple and clear as posible.</p>
          </div>
          <div class="jf-flex">
            <div class="jf-cell jf-cell--3">
              <p>Allow waiters to take orders and send them to the kitchen.</p>
            </div>
            <div class="jf-cell jf-cell--3">
              <p>Allow customers to see the restaurant's menu and order by themselves from their cellphones.</p>
            </div>
            <div class="jf-cell jf-cell--3">
              <p>Allow chefs to see orders, prepare them and let waiters know when they are ready to be served.</p>
            </div>
            <div class="jf-cell jf-cell--3">
              <p>Allow waiters and customers to review the check and close the transaction.</p>
            </div>
            <div class="jf-cell jf-cell--3">
              <p>Allow restaurant owners to setup everything.</p>
            </div>
            <div class="jf-cell jf-cell--3">
              <p>Allow restaurant owners to see reports about everything.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Contact/>
    
  </section>
</template>

<script>

import Contact from "~/components/Contact.vue";

export default {
  components: {
    Contact
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/_mixins.scss";

.inner-header-container{
  @include container-slim;
}
.inner-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 60px;
  border-bottom: 4px solid $black;
  @include h5;
  .inner-header__item{
    width: 33.3333%;
    border-bottom: none;
  }
  .title{
    text-align: center;
  }
  .tags{
    text-align: right;
  }
}
.page-title{
  @include container-slim;
  text-align: center;
  h1{
    border-bottom: 4px solid $black;
    @include padding-bottom;
    @include padding-top;
  }
}
.page-container{
  @include container;
  img{
    width: 100%;
    @include margin-bottom;
  }
}
.page-content{
  max-width: 960px;
  margin: 0 auto;
}
.content{
  @include bp(s720){
    width: 70%;
    @include padding-right;
  }
}
.content-half{
  @include bp(s720){
    width: 50%;
    @include padding-right;
  }
}
.sidebar{
  @include bp(s720){
    width: 30%;
  }
}

</style>