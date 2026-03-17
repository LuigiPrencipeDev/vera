import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth", {

  state: () => ({
    user: null,
    token: null,
    modules: []
  }),

  actions: {

    setAuth(data) {
      this.user = data.user
      this.token = data.token
      this.modules = data.modules
    },

    logout() {
      this.user = null
      this.token = null
      this.modules = []
    }

  }

})
