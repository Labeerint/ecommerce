<template>
    <div class="catalog">
        <div class="upFilters">
            Upfilters
        </div>
        <div class="content">
            <div class="filters">
                Filter
            </div>
            <div class="right">
                <div class="search">
                    search
                </div>
                <div class="products">
                    <product-item
                            v-for="product in getProducts"
                            :key="product.id"
                            :product="product"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import ProductItem from '../components/product-item'
    export default {
        name: 'Catalog',
        components: {
            ProductItem
        },
        computed:{
            getProducts(){
                return this.$store.getters.getProducts
            }
        },git
        async mounted(){
            this.$store.dispatch('fetchProducts')
        }

    }
</script>

<style lang="scss">
    .upFilters{
        height: 40px;
        background: aqua;
    }

    .content{
        display: flex;
        margin-top: 22px;

    }

    .filters{
        height: 1605px;
        width: 371px;
        background: #0F1642;
        border-radius: 5px;
    }

    .right{
        margin-left: 30px;
    }

    .search{
        height: 62px;
        border-radius: 5px;
        background: aqua;
    }

    .products{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .item{
        height: 486px;
        width: 371px;
        border-radius: 5px;
        background: #0F1642;
        margin-top: 28px;

    }

</style>

