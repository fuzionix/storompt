import { defineStore } from 'pinia'

export const useStatusStore = defineStore('sidemenuStatus', {
  state: () => {
    return { sidemenuStatus: true }
  },
  getters: {
  },
})