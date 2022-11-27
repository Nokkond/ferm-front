<script setup>
defineProps({
  msg: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="text-3xl font-bold">
    <h1 class="text-3xl font-bold "><span style="color: hsla(160, 100%, 37%, 1)">green</span>feed</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

/*@media (min-width: 1924px) {*/
/*  .greetings h1,*/
/*  .greetings h3 {*/
/*    text-align: left;*/
/*  }*/
/*}*/
</style>
