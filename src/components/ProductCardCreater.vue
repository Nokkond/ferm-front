<template>
    <div class="flex flex-row">
    <button class="product  mt-6 bg-white !rounded-md !border-black drop-shadow-md" style="width: 2px !important; height: 2px" v-on:click="setPopupMut">
<!--        <div class="flex">-->
<!--            <div >-->
<!--                <div class="h-28 rounded-md " style="background-color: rgba(160,159,159,0.16) !important; width: 157px;"></div>-->
<!--&lt;!&ndash;                <img class="h-28 rounded-md filter" src="/src/assets/carrot.jpg">&ndash;&gt;-->
<!--                &lt;!&ndash;<img class="h-28 rounded-md" src="src/assets/cucumber.png">&ndash;&gt;-->

<!--            <div>Своя закупка</div>-->

<!--            </div>-->
<!--            <div class="flex flex-col ml-6">-->
<!--                <div>Партия: ---</div>-->
<!--                <div>Цена: ---</div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="w-full rounded-full" style="background-color: rgba(198,198,195,0.23); border-radius: 10px">-->
<!--            <div class="" style="height:8px; width:50%; background-color: rgb(0, 189, 126); border-radius: 10px"></div>-->
<!--        </div>-->
<!--        <div style="position: absolute; top: 20px; right: 20px" class="hover:drop-shadow-xl">-->
<!--            <img src="/src/assets/plus.png" width="40px" class="filter2">-->
<!--        </div>-->
<!--        <div>+</div>-->
        <div style="margin-top: -5px; font-size: 30px">+</div>
    </button>
    <div style="font-size: 20px; margin-top: 20px; margin-left: 10px">Закупки</div>
    </div>
</template>

<script>
// import { storeHub } from '@/stores/storeHub';
// import { Progress } from 'flowbite-vue'
import { mapMutations } from 'vuex';

export default {
    name: "ProductCardCreater",
    methods: {
        ...mapMutations({
            setPopup: 'setPopup',
        }),
        setPopupMut(){
            localStorage.setItem('popup', 1)
            // this.$store.commit('setPopup');
            // this.setPopup()
            // this.commit('increment', 10)
        }
    }
}

</script>

<style scoped>

.product {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    color: rgba(75, 75, 75, 0.23);
    padding: 10px;
    /*width: 48%;*/
    /*min-width: 320px;*/
    border: 2px solid rgba(163, 176, 160, 0.38);
    border-color: hsla(160, 100%, 37%, 1) !important;
    margin-right: 1%;
    margin-left: 1%;

    background-color: rgba(210, 211, 210, 0.38);
}

.product:first-child {

}

@media (max-width: 768px) {
    .product {
        /*width: 100%;*/
        margin-right: 0px !important;
    }
}

.filter {
    filter: brightness(30%);
}

.filter2 {
    filter: grayscale(100%) sepia(100%) contrast(50%);
}

</style>
