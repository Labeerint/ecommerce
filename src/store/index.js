import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    filters: {},
    wishlist: [],
    cart: [],
    currentFilters:[],
    pageSize: 9,
    currentPage: 1
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
    addCartItem(state, cartItem){
      state.cart.push(cartItem)
      state.products[cartItem.id-1].cart = true
    },
    deleteCartItem(state, id){
      let cartItem = state.cart.findIndex(c=>c.id ===id)
      if(cartItem !==-1){
        state.cart.splice(cartItem, 1)
        state.products[id-1].cart = false
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
    deleteFilterItemRadio(state, id){
      state.currentFilters.forEach(function (filter) {
        if(filter.type === "price" && filter.id !== id){
          state.currentFilters.splice(filter,1)
        }
      })
    },
    clearFilters(state){
      state.currentFilters = []
    },
    changeCurrentPage(state, pageItem){
      state.currentPage = pageItem
    }
  },





  actions: {
    fetchProducts({commit}){
      return axios(`http://localhost:3000/products`,{method:'GET'})
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
    addCartItem({commit}, cartItem){
      commit('addCartItem', cartItem)
    },
    deleteWish({commit}, id){
      commit('deleteWish', id)
    },
    deleteCartItem({commit}, id){
      commit('deleteCartItem', id)
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
    deleteFilterItemRadio({commit}, id){
      commit('deleteFilterItemRadio', id)
    },
    filter({commit}, data){
      let fill;

      data.forEach(function (filter) {
        switch (filter.type) {
          case 'price':{
            if(fill === undefined){
              fill = 'price='+filter.value
            }
            else{
              fill+='&price'+filter.value
            }
            break
          }
          case 'category':{
            if(fill === undefined){
              fill = '&category='+filter.value
            }
            else{
              fill+='&category='+filter.value
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
    },
    changeCurrentPage({commit}, pageItem){
      commit('changeCurrentPage', pageItem)
    },
    search({commit}, request){
      return axios(`http://localhost:3000/products?q=${request}`, {method: 'GET'})
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
    getCart(state){
      return state.cart
    },
    getFilters(state){
      return state.filters
    },
    getCurrentFilters(state){
      return state.currentFilters
    },
    getPageSize(state){
      return state.pageSize
    },
    getTotalProduct(state){
      return state.products.length
    },
    getCurrentPages(state){
      return state.currentPage
    }

  }
})
