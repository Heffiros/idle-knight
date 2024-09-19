import { defineStore } from 'pinia'

export const useGoldStore = defineStore('goldStore', {
  state: () => ({
    gold: 0
  }),
  actions: {
    addGold(amount) {
      if (amount > 0) {
        this.gold += amount
      }
    },
    removeGold(amount) {
      if (amount > 0) {
        this.gold - amount > 0 ? this.gold - alount : 0
      }
    },
    getGold() {
      return this.gold
    },
    updateGold(amount) {
      if (amount >= 0) {
        this.gold = amount
      }
    },
    resetGold() {
      this.gold = 0
    }
  }
})
