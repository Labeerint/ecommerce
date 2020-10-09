<template>
    <div class="cart">
        <cart-item
            v-for="product in getCart"
            :key="product.id"
            :product="product"
        />
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
            }
        }
    }
</script>