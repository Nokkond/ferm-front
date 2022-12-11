<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Auth from './components/popups/Auth.vue'
import CreateCard from "./components/popups/CreateCard.vue"
import Login from "./components/popups/Login.vue";
import { computed } from "vue";

export default {
    components: {
        HelloWorld,
        Auth,
        CreateCard,
        Login
    },
    data() {
        return {
            closeAuth: 0,
        }
    },
    computed: {
        closeAuthComp() {
            return this.closeAuth;
        },
        tokenChecker() {
            if (localStorage.getItem('token') === 'undefined') return false
            return localStorage.getItem('token');
        }
    },
    // methods: {
    //     async submit() {
    //         if (localStorage.getItem('login') && localStorage.getItem('password')){
    //             // console.log(this.$refs.form.login.value);
    //             const result = await fetch('http://51.250.6.54:8007/login', {
    //                 method: 'POST',
    //                 headers: {
    //                     // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InN0cmluZzIiLCJwYXNzd29yZCI6InN0cmluZyIsInVzZXJfaWQiOjN9.feeGeqY_zV9Ooq0bMfEPomBexD3Khpk9mm3YRICS6pM',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 // body: '{\n                "login": "string\u044B\u0432\u044B\u0432\u0430sadfasdf\u0430",\n                "password": "strin\u044B\u0432\u0430gasdfsadf",\n                "email": "strasdfa\u044B\u0432\u0430sdfing"\n}',
    //                 body: JSON.stringify({
    //                     'login': localStorage.getItem('login') ,
    //                     'password':  localStorage.getItem('password'),
    //                 })
    //             });
    //         localStorage.setItem('token', result.token)
    //         localStorage.setItem('login', this.$refs.form.login)
    //         localStorage.setItem('password', this.$refs.form.password)
    //         }
    //         // let result = await response.json();
    //         // alert(result.message);
    //     }
    // }
    // const closeAuth = 0;
    // const closeAuthComp = computed(() => closeAuth);
    // const tokenChecker = computed(() => localStorage.getItem('token'));
}

// computed(() => localStorage.getItem('token'))



</script>

<template >
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
    <Auth v-if="!tokenChecker && !closeAuthComp" @close="closeAuth = 1"/>
<!--    <Login />-->
<!--    <CreateCard v-if="tokenChecker"/>-->
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
