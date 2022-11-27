<template>
    <div class="product  mt-6 w-2/4 h-48 p-6 bg-white !rounded-md !border-black drop-shadow-md hover:drop-shadow-xl">
        <div class="flex">
            <div >
                <img class="h-28 rounded-md" src="/src/assets/carrot.jpg">
                <!--<img class="h-28 rounded-md" src="src/assets/cucumber.png">-->

            <div>Морковь фермерская</div>

            </div>
            <div class="flex flex-col ml-6">
                <div>Партия: 40кг</div>
                <div>Цена: 820р</div>
            </div>
        </div>

<!--            <progress max="10" value="8" class="progress w-full rounded-full h-2.5">-->
<!--                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">-->
<!--                    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>-->
<!--                </div>-->
<!--            </progress>-->
        <div class="w-full rounded-full" style="background-color: rgba(198,198,195,0.23); border-radius: 10px">
            <div class="" style="height:8px; width:50%; background-color: rgb(0, 189, 126); border-radius: 10px"></div>
        </div>
    </div>
<!--    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">-->
<!--        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>-->
<!--    </div>-->

</template>

<script>
// import { Progress } from 'flowbite-vue'
export default {
    name: "ProductCard"
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

.product:first-child {

}

@media (max-width: 768px) {
    .product {
        width: 100%;
        margin-right: 0px !important;
    }
}

</style>
