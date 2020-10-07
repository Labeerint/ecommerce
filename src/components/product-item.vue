<template>
    <div class="product-item">
        <img :src=" require('../assets/img/'+product.image)" alt="" class="product__img">
        <div class="top">
            <div class="rating">
                <span class="rating__text">{{product.rating}}</span>
                <font-awesome-icon class="rating__star" icon="star" />
            </div>
            <span class="price">${{product.price}}</span>
        </div>
        <h3 class="title">{{product.brand + ' ' + product.model}}</h3>
        <p class="description">{{product.description}}</p>
        <div class="buttons">
            <button @click="wish" :class="[product.wishlist ? 'wishON' : 'wishOFF']"><font-awesome-icon icon="heart" /> WISHLIST</button>
            <button class="cart"><font-awesome-icon icon="shopping-cart" /> ADD TO CART</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product-item',
        props: {
            product: {
                type: Object,
                required:true
            }
        },
        methods: {
            wish(){
                const w = {
                    brand: this.product.brand,
                    model: this.product.model,
                    description: this.product.description,
                    image: this.product.image,
                    price: this.product.price,
                    rating: this.product.rating,
                    id: this.product.id,
                    wishlist: true,
                    cart: this.product.cart
                }
                this.$store.dispatch('wish', w)
            }
        }
    }
</script>

<style scoped type="scss">
     .product-item{
         width: 371px;
         border-radius: 8px;
         background: #0F1642;
         padding: 0 19px;
         margin-top: 28px;
     }

     .product__img{
         height: 220px;
         margin-top: 32px;
     }

    .top{
        margin-top: 34px;
        display: flex;
        justify-content: space-between;
    }

    .rating{
        background: #6F64F8;
        border-radius: 3px;
        height: 30px;
        width: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;



    }

    .price{
        font-weight: 600;
        font-size: 18px;
    }

    .title{
        margin-top: 16px;
        font-size: 16px;
        text-align: left;
    }

    .description{
        margin-top: 3px;
        font-size: 12px;
        text-align: left;
    }

    .buttons{
        margin-top: 22px;
    }

    .wishOFF{
        outline: none;
        height: 45px;
        width: 186px;
        background: #B8C2CC;
        border: none;
        border-radius: 0px 0px 0px 8px;
        margin-left: -19px;
        color: #2C2C20;
        font-weight: 600;
        font-family: Montserrat;
    }

     .wishON{
         outline: none;
         height: 45px;
         width: 186px;
         background: red;
         border: none;
         border-radius: 0px 0px 0px 8px;
         margin-left: -19px;
         color: #2C2C20;
         font-weight: 600;
         font-family: Montserrat;
     }

    .cart{
        font-family: Montserrat;
        height: 45px;
        width: 185px;
        border: none;
        background: #6F64F8;
        border-radius: 0px 0px 8px 0px;
        margin-right: -19px;
        color: #FFFFFF;
        font-weight: 600;
    }
</style>