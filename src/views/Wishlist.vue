<template>
    <div class="wishlist">
        <wishlist-item
                v-for="product in getWish"
                :key="product.id"
                :product="product"
        />
    </div>
</template>

<script>
    import WishlistItem from '../components/wihslist-item'
    export default {
        name: 'wishlist',
        components: {
            WishlistItem
        },
        computed:{
            getWish(){
                return this.$store.getters.getWish;
            }
        }
    }
</script>