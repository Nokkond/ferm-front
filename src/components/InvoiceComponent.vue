<script>
import InvoiceCard from "./InvoiceCard.vue";
import InvoiceCardCreater from "./InvoiceCardCreater.vue";
// import { ref,onMounted, computed } from 'vue'
export default {
    components: {
        InvoiceCard,
        InvoiceCardCreater,
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
            let response = await fetch('http://51.250.6.54:8007/get_invoice_user', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                })
            });
            this.cards = await response.json();
            // localStorage.setItem('token', result.token)
            console.log(this.cards);
        }
    }
}
</script>

<template>
    <div >
    <invoice-card-creater/>
    <div v-if="cardComp.length"  class="flex flex-wrap cards">
        <div v-for="(card, idx) in cardComp" :key="idx">
            <invoice-card v-bind="card"/>
        </div>
    </div>
    </div>
</template>

<style>
.cards {
    max-width: 1024px !important;
    margin-right: auto;
    margin-left: auto;
}
</style>
