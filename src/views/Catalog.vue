<template>
    <div class="catalog">
        <div class="upFilters">
            <select class="sort" @change="sort($event)">
                <option class="sort__item" value="id">Стандартно</option>
                <option class="sort__item" value="priceAsc">От дешевых к дорогим</option>
                <option class="sort__item" value="priceDesc">От дорогих к дешевым</option>
                <option class="sort__item" value="rating">По рейтингу</option>
            </select>
        </div>
        <div class="content">
            <div>
                <span class="filtersMainTitle">Filters</span>
                <filters/>
            </div>
            <div class="right">
                <input type="text" class="search" placeholder="Search hear" @input="search($event)">
                <div class="products">
                    <product-item
                            v-for="product in getProducts"
                            :key="product.id"
                            :product="product"
                    />
                </div>
                <div class="pagination">
                    <span
                            v-for="pageItem in getTotalPageCount"
                            :key="pageItem"
                            class="pagination__item"
                            :class="{pagination__active: pageItem === getCurrentPage}"
                            @click="pagination(pageItem)"
                    >{{pageItem}}</span>
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
                let products = this.$store.getters.getProducts
                let currentPage = this.$store.getters.getCurrentPages -1
                let pageSize = this.$store.getters.getPageSize
                let startPage = currentPage * pageSize
                let endPage = startPage + pageSize
                let currentPageProducts = []

                for(let i = startPage; i < endPage; i++){
                    if(products[i] !== undefined)
                        currentPageProducts.push(products[i])
                    else
                        break
                }
                return currentPageProducts
            },
            getCurrentPage(){
                return this.$store.getters.getCurrentPages;
            },
            getTotalPageCount(){
                let a = Math.ceil(this.$store.getters.getTotalProduct/this.$store.getters.getPageSize)
                return a
            },
            getPageSize(){
                return this.$store.getters.getPageSize
            }

        },
        async mounted(){
            if(this.$store.getters.getProducts.length === 0){
                let pageSize = this.$store.getters.getPageSize
                this.$store.dispatch('fetchProducts', pageSize)
            }
        },
        methods:{
            sort(event){
                let sort;
                switch (event.target.value) {
                    case 'rating':{
                        sort = 'rating&_order=desc'
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
            },
            pagination(pageItem){
                this.$store.dispatch('changeCurrentPage', pageItem)
            },
            search(event){
                this.$store.dispatch('search', event.target.value)
            }
        }

    }
</script>

<style lang="scss">
    .upFilters{
        text-align: right;
    }

    .sort{
        background: #FFFFFF;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        border-radius: 8px;
        height: 40px;
        width: 200px;
        outline: none;
        border: none;
        margin-left: auto;
        font-size: 14px;
        color: #2B3253;
    }

    .content{

        display: flex;
        margin-top: 22px;

    }

    .right{
        width: 100%;
        margin-left: 30px;
    }

    .search{
        color: #fff;
        padding: 17px 30px;
        border: none;
        outline: none;
        width: 100%;
        height: 62px;
        background: #0F1642;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        border-radius: 8px;
        font-weight: 300;
        font-size: 22px;
    }

    .filtersMainTitle{
        font-size: 18px;
        color: #FFFFFF;
        text-align: left;
        font-weight: 600;
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

    .pagination{
        height: 40px;
        background: #0F1642;
        border-radius: 20px;
        margin: 0 auto;
        display: inline-flex;
        justify-content: space-around;
        margin-top: 30px;
        align-items: center;
        cursor: pointer;

        &__item{
            height: 40px;
            width: 40px;
            border-radius: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            transition: all .5s;

            &:hover{
                border: 1px solid rgba(0,0,0,0.5);
            }
        }

        &__active{
            background: #6F64F8;
        }
    }

</style>

