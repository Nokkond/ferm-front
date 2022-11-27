<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Auth from './components/popups/Auth.vue'
import CreateCard from "./components/popups/CreateCard.vue"
import Login from "./components/popups/Login.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld class="logo" msg="greenfeed" />
        <div class="slogan">
            Фермерские овощи и фрукты отличного качества <b>выгодно</b>
        </div>
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">Настройки</RouterLink>
      </nav>
    </div>
  </header>
<!--    <Auth />-->
<!--    <Login />-->
<!--    <CreateCard />-->
  <RouterView />
</template>

<style>

.wrapper{
    max-width: 1024px !important;
    margin-right: auto;
    margin-left: auto;
}
header {
  line-height: 1.5;
  max-width: 1024px !important;
  max-height: 100vh;
    margin-right: auto;
    margin-left: auto;
}

.logo {
  /*display: block;*/
  /*margin: 0 auto 2rem;*/
    font-family: 'Shadows Into Light';

}

.slogan {
    text-align: center;
    max-width: 340px;
    min-width: 276px !important;
    margin-left: auto;
    margin-right: auto;
}

.slogan2 {
    font-family: 'Caveat';
    font-size: 25px;
    /*letter-spacing: 25px;*/
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/*@media (min-width: 1024px) {*/
/*  header {*/
/*    display: flex;*/
/*    place-items: center;*/
/*    padding-right: calc(var(--section-gap) / 2);*/
/*  }*/

/*  !*.logo {*!*/
/*  !*    *!*/
/*  !*  margin: 0 2rem 0 0;*!*/
/*  !*}*!*/

/*  header .wrapper {*/
/*    display: flex;*/
/*    place-items: flex-start;*/
/*    flex-wrap: wrap;*/
/*  }*/

/*  nav {*/
/*    text-align: left;*/
/*    margin-left: -1rem;*/
/*    font-size: 1rem;*/

/*    padding: 1rem 0;*/
/*    margin-top: 1rem;*/
/*  }*/
/*}*/
</style>
