<template>
    <div class="filters">
        <div class="filter__group">
            <h3 class="filters__group filters__group_noborder">Multi Range</h3>
            <filters-item-radio
                    v-for="filter in getFilters.multirange"
                    :key="filter.id"
                    :filter="filter"
            />
        </div>
        <div class="filters__group">
            <h3 class="filters__title">Category</h3>
            <filters-item
                    v-for="filter in getFilters.category"
                    :key="filter.id"
                    :filter="filter"
            />
        </div>
        <div class="filters__group">
            <h3 class="filters__title">Brand</h3>
            <filters-item
                    v-for="filter in getFilters.brand"
                    :key="filter.id"
                    :filter="filter"
            />
        </div>
        <div class="filters__group">
            <h3 class="filters__title">Rating</h3>
            <filters-item
                    v-for="filter in getFilters.rating"
                    :key="filter.id"
                    :filter="filter"
            />
        </div>

        <button class="clear" @click="clearFilters">CLEAR ALL FILTERS</button>
    </div>
</template>

<script>
    import FiltersItem from './filters-item'
    import FiltersItemRadio from './filters-item-radio'
    export default {
        name: 'filters',
        components:{
            FiltersItem,
            FiltersItemRadio
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
    .filters{
        margin-top: 22px;
        padding: 25px 30px;
        background: #0F1642;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        border-radius: 8px;

        &__group{
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid #ffffff;

            &_noborder{
                border: none;
                margin-top: 0;
            }
        }
    }

    .clear{
        margin-top: 30px;
        border: none;
        background: #6F64F8;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
        border-radius: 8px;
        height: 56px;
        width: 371px;
        font-size: 18px;
        color: #FFFFFF;

    }
</style>