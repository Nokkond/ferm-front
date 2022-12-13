<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome @createCard="$emit('createCard')"/>
  </main>
</template>
