<template>
    <div class="cart-wrapper">
        <div v-if="getStatus" class="empty">
            <h2 class="empty__text">your basket is empty</h2>
        </div>
        <cart-item
            v-for="product in getCart"
            :key="product.id"
            :product="product"
        />
        <div class="cart-bottom" v-if="!getStatus">
            <span class="priceList">Total price: ${{getAllPrice}}</span>
            <button @click="clearCart" class="clear-cart">Clear cart</button>
        </div>
    </div>
</template>

<script>
    import CartItem from '../components/cart-item'
    export default {
        name: 'cart',
        components: {
            CartItem
        },
        computed:{
            getCart(){
                return this.$store.getters.getCart
            },
            getStatus(){
                return this.$store.state.cartEmpty
            },
            getAllPrice(){
                return this.$store.getters.getAllPrice
            }
        },
        methods:{
            clearCart(){
                this.$store.dispatch('clearCart')
            }
        }
    }
</script>

<style >

    .cart-bottom{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }

    .priceList{
        font-weight: 600;
        font-size: 25px;
    }

    .clear-cart{
        outline: none;
        height: 45px;
        width: 186px;
        background: #B8C2CC;
        border: none;
        border-radius: 8px;
        color: #2C2C20;
        font-weight: 600;
        font-size: 15px;
        text-transform: uppercase;
        margin: 20px auto;
    }
</style>