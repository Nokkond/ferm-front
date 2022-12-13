import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('counter', () => {
    const showPopup = ref(0)
    // const doubleCount = computed(() => count.value * 2)
    // function increment() {
    //     count.value++
    // }
    state: () => ({
        products: [ , , ]
    }),
    function changeUseStore() {
        showPopup.value = !showPopup.value;
    }
    return { showPopup, changeUseStore }
})
