import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore('application', () => {
    const debug = ref(false);
    const siteURL = window.siteURL;    

    return { debug, siteURL }
  })