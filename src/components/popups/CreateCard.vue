<template>
    <div class="top-0 left-0 absolute opacity-25 z-40 h-full w-full bg-black" style="width: 2000px; left: -500px; overflow-x: hidden">
    </div >
    <div class=" top-0 left-0 absolute z-45 h-full w-full">
        <div class="form-div" style="margin-right: auto; margin-left: auto;">
            <form ref="form" v-on:submit.prevent="submit" style="margin-top: 30vh;" class="flex flex-col text-center  z-50 mt-1/2  h-2/4 p-6 bg-white !rounded-md !border-black !drop-shadow-md !hover:drop-shadow-xl">
                <div style="padding-bottom: 24px">Новая закупка</div>
                <div>Наименование</div>
                <input id="title" class="disabled:opacity-75 border-2 inp" />
                <div>Описание</div>
                <input id="comment" class="disabled:opacity-75 border-2 inp" />
                <div>Фото</div>
                <input id="main_photo" class="disabled:opacity-75 border-2 inp" />
                <div>Цена</div>
                <input id="price" class="disabled:opacity-75 border-2 inp" />
                <div>Количество(кг)</div>
                <input id="amount" class="disabled:opacity-75 border-2 inp" />
                <button  class="border-2 mt-6 bg-slate-50 inp">
                    Создать закупку
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Auth",
    components: {},
    methods: {
        async submit() {
            let response = await fetch('http://51.250.6.54:8007/new_card', {
                method: 'POST',
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'title':this.$refs.form.title.value,
                    'comment':  this.$refs.form.comment.value,
                    'main_photo': this.$refs.form.main_photo.value,
                    'price':this.$refs.form.price.value,
                    'amount':  this.$refs.form.amount.value,
                })
            });
            let result = await response.json();
            localStorage.setItem('token', result.token)
            console.log(result);
        }
    },
}
</script>

<style scoped>
.form-div {
    margin: auto;
    width: 400px;
    max-width: 400px;
}
@media (max-width: 600px) {
    .form-div {
        margin: auto;
    }
}

@media (max-width: 450px) {
    .form-div {
        margin: auto;
        width: 300px;
    }
}
.form12 {
    margin: auto;
    width: 50%;
}

.inp {
    padding: 2px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
</style>
