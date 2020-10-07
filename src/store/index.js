import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    filters: {},
    wishlist: [],
    currentFilters:[]
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
    },
    addFilterItem(state, filterItem){
      state.currentFilters.push(filterItem)
    },
    deleteFilterItem(state, id){
      let filter = state.currentFilters.findIndex(i=>i.id === id)
      if(filter !==-1){
        state.currentFilters.splice(filter,1)
      }
    },
    clearFilters(state){
      state.currentFilters = []
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
    addFilterItem({commit}, filterItem){
      commit('addFilterItem', filterItem)
    },
    deleteFilterItem({commit}, id){
      commit('deleteFilterItem', id)
    },
    filter({commit}, data){
      let fill;

      data.forEach(function (filter) {
        switch (filter.type) {
          case 'category':{
            if(fill === undefined){
              fill = 'category='+filter.value
            }
            else{
              fill+='&'+filter.value
            }
            break
          }
          case 'brand':{
            if(fill === undefined){
              fill = 'brand='+filter.value
            }
            else{
              fill+='&brand='+filter.value
            }
            break
          }
          case 'rating':{
            if(fill === undefined){
              fill = 'rating='+filter.value
            }
            else{
              fill+='&rating='+filter.value
            }
            break
          }
          default:{
            alert('sos')
          }
        }
      })
      return axios(`http://localhost:3000/products?${fill}`, {method:'GET'})
          .then((products) =>{
            commit('setProductsToState', products.data)
          })
    },
    clearFilters({commit}){
      commit('clearFilters')
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
    },
    getCurrentFilters(state){
      return state.currentFilters
    }
  }
})
