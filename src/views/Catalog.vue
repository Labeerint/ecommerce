<template>
    <div class="catalog">
        <div class="upFilters">
            <select @change="sort($event)">
                <option value="id">Стандартно</option>
                <option value="priceAsc">От дешевых к дорогим</option>
                <option value="priceDesc">От дорогих к дешевым</option>
                <option value="rating">По рейтингу</option>
            </select>
        </div>
        <div class="content">
            <div class="filters">
                <filters/>
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
    import Filters from '../components/filters'
    import ProductItem from '../components/product-item'
    export default {
        name: 'Catalog',
        components: {
            ProductItem,
            Filters
        },
        computed:{
            getProducts(){
                return this.$store.getters.getProducts
            }

        },
        async mounted(){
            if(this.$store.getters.getProducts.length === 0){
                this.$store.dispatch('fetchProducts')
            }
        },
        methods:{
            sort(event){
                let sort;
                switch (event.target.value) {
                    case 'rating':{
                        sort = 'rating&_order=asc'
                        break
                    }
                    case 'priceAsc':{
                        sort = 'price&_order=asc'
                        break
                    }
                    case 'priceDesc':{
                        sort = 'price&_order=desc'
                        break
                    }
                    default:{
                        sort = 'id&_order=asc'
                    }
                }
                this.$store.dispatch('sort', sort)
            }
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

