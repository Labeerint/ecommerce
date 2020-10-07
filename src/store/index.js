import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    wishlist: []
  },
  mutations: {
    setProductsToState(state, products){
      state.products = products
    },
    addToWishlist(state, wishObject){
      state.wishlist.push(wishObject)
      state.products[wishObject.id-1].wishlist = !state.products[wishObject.id-1].wishlist
    },
    deleteWish(state, id){
      let wishItem = state.wishlist.findIndex(w => w.id === id)
      if(wishItem !== -1){
        state.wishlist.splice(wishItem, 1)
      }
    }
  },
  actions: {
    fetchProducts({commit}){
      return axios('http://localhost:3000/products',{method:'GET'})
          .then((products) =>{
            commit('setProductsToState', products.data)
          })
    },
    wish({commit}, wishObject){
      commit('addToWishlist', wishObject)
    },
    deleteWish({commit}, id){
      commit('deleteWish', id)
    }
    
  },
  getters: {
    getProducts(state){
      return state.products
    },
    getWish(state){
      return state.wishlist
    }
  }
})
