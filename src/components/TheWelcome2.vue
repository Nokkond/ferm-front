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
        this.getCards();
        setTimeout(() => {
          this.timer = 1;
        },1000)
    },
    methods: {
        async getCards() {
            let response = await fetch('http://51.250.6.54:8007/get_cards_user', {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
            }).catch()
            this.cards = await response.json();
            // localStorage.setItem('token', result.token)
            console.log(this.cards);
        }
    }
}
</script>

<template>
    <div >
    <product-card-creater/>
    <div v-if="cardComp.length"  class="flex flex-wrap cards">
        <div v-for="(card, idx) in cardComp" :key="idx">
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

<style>
.cards {
    max-width: 1024px !important;
    margin-right: auto;
    margin-left: auto;
}
</style>
