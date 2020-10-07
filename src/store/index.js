import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let fill;
export default new Vuex.Store({
  state: {
    products: [],
    filters: {},
    wishlist: []
  },
  mutations: {
    setProductsToState(state, products){
      state.products = products
    },
    setFilters(state, filters){
      state.filters = filters
    },
    addToWishlist(state, wishObject){
      state.wishlist.push(wishObject)
      state.products[wishObject.id-1].wishlist = true
    },
    deleteWish(state, id){
      let wishItem = state.wishlist.findIndex(w => w.id === id)
      if(wishItem !== -1){
        state.wishlist.splice(wishItem, 1)
        state.products[id-1].wishlist = false
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
    fetchFilters({commit}){
      return axios('http://localhost:3000/filters', {method:'GET'})
          .then((filters)=>{
            commit('setFilters', filters.data)
          })
    },
    wish({commit}, wishObject){
      commit('addToWishlist', wishObject)
    },
    deleteWish({commit}, id){
      commit('deleteWish', id)
    },
    sort({commit}, sort){
      return axios(`http://localhost:3000/products?_sort=${sort}`,{method:'GET'})
          .then((products) =>{
            commit('setProductsToState', products.data)
          })
    },
    filter({commit}, data){

      switch (data.type) {
        case 'category':{
          if(fill === undefined){
            fill = 'category='+data.value
          }
          else{
            fill+='&'+data.value
          }
          break
        }
        case 'brand':{
          if(fill === undefined){
            fill = 'brand='+data.value
          }
          else{
            fill+='&brand='+data.value
          }
          break
        }
        case 'rating':{
          if(fill === undefined){
            fill = 'rating='+data.value
          }
          else{
            fill+='&rating='+data.value
          }
          break
        }
        default:{
          alert('sos')
        }
      }
      return axios(`http://localhost:3000/products?${fill}`, {method:'GET'})
          .then((products) =>{
            commit('setProductsToState', products.data)
          })
    }
    
  },
  getters: {
    getProducts(state){
      return state.products
    },
    getWish(state){
      return state.wishlist
    },
    getFilters(state){
      return state.filters
    }
  }
})
