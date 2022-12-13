<template>
<div class="top-0 left-0 absolute opacity-25 z-40 h-full w-full bg-black" style="width: 2000px; left: -500px; overflow-x: hidden">
</div >
    <div class=" top-0 left-0 absolute z-45 h-full w-full">
        <div class="form-div" style="margin-right: auto; margin-left: auto;">
            <form ref="form" v-on:submit.prevent="submit" style="margin-top: 30vh;" class="flex flex-col text-center  z-50 mt-1/2  h-2/4 p-6 bg-white !rounded-md !border-black !drop-shadow-md !hover:drop-shadow-xl">
                <div style="padding-bottom: 24px">Авторизируйтесь</div>
                <div>Логин</div>
                <input id="login" class="disabled:opacity-75 border-2 inp" />
                <div>Пароль</div>
                <input id="password" class="disabled:opacity-75 border-2 inp" style="margin-bottom: 20px"/>

                <button  class="border-2 mt-6 bg-slate-50 inp">
                    Войти
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    components: {},
    methods: {
        async submit() {
            console.log(this.$refs.form.login.value);

            let response = await fetch('http://51.250.6.54:8007/login', {
                method: 'POST',
                headers: {
                    // 'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InN0cmluZzIiLCJwYXNzd29yZCI6InN0cmluZyIsInVzZXJfaWQiOjN9.feeGeqY_zV9Ooq0bMfEPomBexD3Khpk9mm3YRICS6pM',
                    'Content-Type': 'application/json'
                },
                // body: '{\n                "login": "string\u044B\u0432\u044B\u0432\u0430sadfasdf\u0430",\n                "password": "strin\u044B\u0432\u0430gasdfsadf",\n                "email": "strasdfa\u044B\u0432\u0430sdfing"\n}',
                body: JSON.stringify({
                    'login':this.$refs.form.login.value,
                    'password':  this.$refs.form.password.value,
                })
            });
            localStorage.setItem('token', result.token)
            localStorage.setItem('login', this.$refs.form.login)
            localStorage.setItem('password', this.$refs.form.password)
            let result = await response.json();
            // alert(result.message);
            this.$emit('close');
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
