<template>
<!--    <div class="product  mt-6 w-2/4 h-48 p-6 bg-white !rounded-md !border-black drop-shadow-md">-->
<!--&lt;!&ndash;        <div class="flex">&ndash;&gt;-->
<!--&lt;!&ndash;            <div >&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="h-28 rounded-md " style="background-color: rgba(160,159,159,0.16) !important; width: 157px;"></div>&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;                <img class="h-28 rounded-md filter" src="/src/assets/carrot.jpg">&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                &lt;!&ndash;<img class="h-28 rounded-md" src="src/assets/cucumber.png">&ndash;&gt;&ndash;&gt;-->

<!--&lt;!&ndash;            <div>Своя закупка</div>&ndash;&gt;-->

<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="flex flex-col ml-6">&ndash;&gt;-->
<!--&lt;!&ndash;                <div>Партия: -&#45;&#45;</div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div>Цена: -&#45;&#45;</div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->

<!--&lt;!&ndash;        <div class="w-full rounded-full" style="background-color: rgba(198,198,195,0.23); border-radius: 10px">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="" style="height:8px; width:50%; background-color: rgb(0, 189, 126); border-radius: 10px"></div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div style="position: absolute; top: 20px; right: 20px" class="hover:drop-shadow-xl">&ndash;&gt;-->
<!--&lt;!&ndash;            <img src="/src/assets/plus.png" width="40px" class="filter2">&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--    </div>-->

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
    filter: brightness(30%);
}

.filter2 {
    filter: grayscale(100%) sepia(100%) contrast(50%);
}

</style>
