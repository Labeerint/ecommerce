<template>
    <div class="cart-item">
                <div class="image_wrapper">
                    <img :src=" require('../assets/img/'+product.image)" alt="" class="product__img">
                </div>
                <div class="cont">
                    <div class="top">
                        <div class="rating">
                            <span class="rating__text">{{product.rating}}</span>
                            <font-awesome-icon class="rating__star" icon="star" />
                        </div>
                        <span class="price">${{product.price}}</span>
                    </div>
                    <div class="bottom">
                        <div class="text">
                            <h3 class="title">{{product.brand + ' ' + product.model}}</h3>
                            <p class="description">{{product.description}}</p>
                        </div>
                    </div>
                </div>
                <button @click="deleteItem" class="delete">X</button>
    </div>
</template>

<script >
    export default {
        name: 'cart-item',
        props: {
            product:{
                type: Object,
                required: true
            }
        },
        methods: {
            deleteItem(){
                this.$store.dispatch('deleteCartItem', this.product.id)
            }
        }
    }
</script>

<style scoped lang="scss">
    .cart-item{
        margin-top: 30px;
        padding: 20px;
        background: #0F1642;
        display: flex;
        border-radius: 10px;
        position: relative;
    }

    .image_wrapper{
        width: 290px;
        height: 200px;
    }

    .product__img{
        max-width: 100%;
        max-height: 100%;
    }

    .cont{
        width: 100%;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .top{
        margin-right: 50px;
        display: flex;
        justify-content: space-between;
    }

    .rating{
        background: #6F64F8;
        border-radius: 5px;
        width: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        &__text{
            font-size: 20px;
        }

        &__star{
            font-size: 20px;
        }
    }

    .price{
        font-weight: 600;
        font-size: 25px;
    }

    .title{
        width: 100%;
        display: block;
        font-size: 20px;
        text-align: left;
    }

    .description{
        margin-top: 3px;
        font-size: 15px;
        text-align: left;
    }

    .bottom{
        display: flex;
        justify-content: space-between;
    }

    .text{
        margin-right: 30px;
    }

    .delete{
        position: absolute;
        top: 15px;
        right: 15px;
        height: 35px;
        width: 35px;
        border: none;
        font-size: 18px;
        border-radius: 100px;
        color: #ffffff;
        font-weight: 800;
        background-color: #000;
        opacity: 0.5;
        transition: all .3s;

        &:hover{
            opacity: 1;
        }
    }
</style>