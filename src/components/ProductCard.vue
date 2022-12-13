<template>
    <div class="product  mt-6 p-6 bg-white !rounded-md !border-black drop-shadow-md hover:drop-shadow-xl">
        <div class="flex">
            <div >
                <img class="h-28 rounded-md" src="/src/assets/carrot.jpg">
                <!--<img class="h-28 rounded-md" src="src/assets/cucumber.png">-->

            <div v-if="titleComp" >
                {{titleComp}}
            </div>

            </div>
            <div class="flex flex-col ml-6">
                <div v-if="amount">Партия: {{amount}}</div>
                <div v-if="price">Цена: {{price}}р</div>
                <div v-if="login">Продавец: {{login}}</div>
            </div>
        </div>
        <form ref="form" v-on:submit.prevent="submit" v-if="$route.path !== '/about'"  class="invoice"><span>Приобрести(кг):    </span><input id="amount" placeholder="введите количество" class="disabled:opacity-75 border-2 inp mr-4"/><button  class="border-2 m-6 bg-slate-50 inp">Купить</button></form>

        <div class="w-full rounded-full" style="background-color: rgba(198,198,195,0.23); border-radius: 10px">
            <div class="" style="height:8px; width:50%; background-color: rgb(0, 189, 126); border-radius: 10px" :style="{width: current_amount/amount*100 + '%'}"></div>
        </div>
        <button v-if="$route.path === '/about'" v-on:click="deleteCard" style="position: absolute; top: 7px; right: 7px">X</button>
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
        login: {
            type: String,
            default: '',
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
            default: 'title1111',
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
    methods: {
        async submit() {
            let response = await fetch('http://51.250.6.54:8007/new_invoice', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'card_id': this.id,
                    'amount':  this.$refs.form.amount.value,
                })
            });
            let result = await response.json();
            console.log(this.id);
            console.log(this.$refs.form.amount);
            // localStorage.setItem('token', result.token)
            console.log(result);
        },
        async deleteCard() {
            let response = await fetch('http://51.250.6.54:8007/delete_card', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': this.id
                })
            });
            let result = await response.json();
            console.log(result);
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
  width: 100% !important;
  position: relative;
}


.product:hover .invoice {
    display: block !important;
}




.invoice {
    display: none;
    margin: 5px 0px 5px 0px;
}

</style>
