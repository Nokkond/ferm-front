<script>
import ProductCard from "./ProductCard.vue";
import ProductCardCreater from "./ProductCardCreater.vue";
// import { ref,onMounted, computed } from 'vue'
export default {
    components: {
        ProductCard,
        ProductCardCreater,
    },

// let cards = ref([]);
// let timer = ref(0);
// const cardComp = computed(() => {
//     if (timer.value) return cards
//     return []
// })
    data() {
        return {
            cards: [],
            timer: 0,
        };
    },
    computed: {
        cardComp() {
            return this.cards
        }
    },
// onMounted(() => {
//     getCards();
//     setTimeout(() => {
//         timer = 1;
//     },100)
// });
    mounted() {
        console.log(this.$route.path);
        this.getCards();
        setTimeout(() => {
          this.timer = 1;
        },1000)
    },
    methods: {
        async getCards() {
            let response = await fetch('http://51.250.6.54:8007/get_cards', {})
            this.cards = await response.json();
            // localStorage.setItem('token', result.token)
            console.log(this.cards);
        }
    }
}
</script>

<template>
    <div>
    <product-card-creater class="cards ml-6" @createCard="$emit('createCard')"/>
    <div v-if="cardComp.length"  class="flex flex-wrap cards">
        <div v-for="(card, idx) in cardComp" :key="idx" class="product">
            <product-card v-bind="card"/>
        </div>
    </div>

<!--        <product-card />-->
<!--        <product-card />-->
<!--        <product-card />-->
<!--        <product-card />-->
<!--        <product-card />-->
<!--        <product-card />-->
<!--        <product-card />-->
    </div>
</template>

<style scoped>
.cards {
    max-width: 1024px !important;
    margin-right: auto;
    margin-left: auto;
}
.product {
    width: 48%;
    /*border:  1px solid rgba(46,198,22,0.38) ;*/
    margin-right: 1%;
    margin-left: 1%;
}

@media (max-width: 768px) {
    .product {
        min-width: 320px;
        width: 100% !important;
        margin-right: 0px !important;
    }
}
</style>
