import { createApp, onUnmounted, ref } from 'vue/dist/vue.esm-bundler';
import { createPinia } from 'pinia'
// Use primevue
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';
// Stores
import { useAppStore } from './stores/appStore';

// Work with Vue3
const pinia = createPinia()
const app = createApp({    
    setup () {
        // Store setting        
        const appStore = useAppStore();

        const test = 'No bundle';

        return { appStore, test }
    }    
});

app.use(PrimeVue);
app.use(pinia)

app.mount('#app');