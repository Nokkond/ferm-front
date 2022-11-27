<script setup>
import ProductCard from "./ProductCard.vue";
import ProductCardCreater from "./ProductCardCreater.vue";
</script>

<template>
    <div class="flex flex-wrap cards">
        <product-card-creater />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
        <product-card />
    </div>
</template>

<style>
.cards {
    max-width: 1024px !important;
    margin-right: auto;
    margin-left: auto;
}
</style>
