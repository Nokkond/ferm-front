<template>
    <div class="product  mt-6 w-2/4 p-6 bg-white !rounded-md !border-black drop-shadow-md hover:drop-shadow-xl">
        <div class="flex">
            <div >
                <div v-if="titleComp" >
                    {{titleComp}}
                </div>
            </div>
            <div class="flex flex-col ml-6">
                <div v-if="price">id Карточки: {{card_id}}</div>
                <div v-if="amount">Купленно киллограм: {{amount}}</div>
                <div v-if="price">Стоимость киллограмма: {{price}}р</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        amount: {
            type: Number,
            default: 0,
        },
        card_id: {
            type: Number,
            default: null,
        },
        comment: {
            type: String,
            default: '',
        },
        current_amount: {
            type: Number,
            default: 0,
        },
        id: {
            type: Number,
            default: 0,
        },
        main_photo: {
            type: String,
            default: '',
        },
        price: {
            type: Number,
            default: 0,
        },
        title: {
            type: String,
            default: '',
        },
        user_id: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        titleComp() {
            console.log(this.title);
            return this.title;
        }
    },
}
</script>

<style scoped>
progress {
 color: #2c3e50 !important;
 background-color: #2c3e50 !important;
}
.product {
    width: 48%;
    min-width: 320px;
    /*border:  1px solid rgba(46,198,22,0.38) ;*/
    margin-right: 1%;
    margin-left: 1%;

    /*background-color: rgba(140, 199, 130, 0.38);*/
}


.product:hover .invoice {
    display: block !important;
}


@media (max-width: 768px) {
    .product {
        width: 100%;
        margin-right: 0px !important;
    }
}

.invoice {
    display: none;
    margin: 5px 0px 5px 0px;
}

</style>
