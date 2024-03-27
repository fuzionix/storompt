import { defineStore } from 'pinia'

export const useStatusStore = defineStore('menuStatus', {
  state: () => {
    return { 
      sidemenuStatus: true,
      infomenuStatus: false,
      dialogStatus: false 
    }
  },
  getters: {
  },
})