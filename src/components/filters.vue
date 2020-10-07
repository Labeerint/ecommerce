<template>
    <div class="filters">
        <h3 class="filters__title">Category</h3>
        <filters-item
                v-for="filter in getFilters.category"
                :key="filter.id"
                :filter="filter"
        />
        <h3 class="filters__title">Brand</h3>
        <filters-item
                v-for="filter in getFilters.brand"
                :key="filter.id"
                :filter="filter"
        />
        <h3 class="filters__title">Rating</h3>
        <filters-item
                v-for="filter in getFilters.rating"
                :key="filter.id"
                :filter="filter"
        />
        <button @click="clearFilters">CLEAR ALL FILTERS</button>
    </div>
</template>

<script>
    import FiltersItem from './filters-item'
    export default {
        name: 'filters',
        components:{
            FiltersItem
        },
        methods:{
            clearFilters(){
                this.$store.dispatch('clearFilters')
                this.$store.dispatch('filter', this.$store.getters.getCurrentFilters)
                this.$store.dispatch('fetchFilters')
            }
        },
        computed:{
            getFilters(){
                return this.$store.getters.getFilters;
            }
        },
        async mounted(){
            this.$store.dispatch('fetchFilters')
        }
    }
</script>

<style lang="scss">
    .filter__item{
        text-align: left;
    }
</style>