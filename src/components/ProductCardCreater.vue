<template>
    <div class="product  mt-6 w-2/4 h-48 p-6 bg-white !rounded-md !border-black drop-shadow-md">
        <div class="flex">
            <div >
                <img class="h-28 rounded-md filter" src="/src/assets/carrot.jpg">
                <!--<img class="h-28 rounded-md" src="src/assets/cucumber.png">-->

            <div>Своя закупка</div>

            </div>
            <div class="flex flex-col ml-6">
                <div>Партия: ---</div>
                <div>Цена: ---</div>
            </div>
        </div>

        <div class="w-full rounded-full" style="background-color: rgba(198,198,195,0.23); border-radius: 10px">
            <div class="" style="height:8px; width:50%; background-color: rgb(0, 189, 126); border-radius: 10px"></div>
        </div>
        <div style="position: absolute; top: 20px; right: 20px" class="hover:drop-shadow-xl">
            <img src="/src/assets/plus.png" width="40px" class="filter2">
        </div>
    </div>

</template>

<script>
// import { Progress } from 'flowbite-vue'
export default {
    name: "ProductCardCreater"
}
</script>

<style scoped>

.product {
    position: relative;
    color: rgba(75, 75, 75, 0.23);
    width: 48%;
    min-width: 320px;
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
        width: 100%;
        margin-right: 0px !important;
    }
}

.filter {
    filter: brightness(50%) invert(1);
}

.filter2 {
    filter: grayscale(50%) sepia(100%) contrast(50%);
}

</style>
