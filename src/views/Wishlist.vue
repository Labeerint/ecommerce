<template>
    <div class="wishlist">
        <div v-if="getStatus" class="empty">
            <h2>your wishlist is empty</h2>
        </div>
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
            },
            getStatus(){
                return this.$store.state.wishlistEmpty
            }
        }
    }
</script>