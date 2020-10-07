<template>
    <div class="filter__item">
        <input @change="select" :value="filter.value" type="checkbox" name="checkbox" class="filters__checkbox" v-model="filter.toggle">
        <label for="checkbox">{{filter.text}}</label>
    </div>
</template>

<script>
    export default {
        name: "filters-item",
        props:{
            filter:{
                type:Object,
                required: true
            }
        },
        methods:{
            select(){
                if(this.filter.toggle === true){
                    this.$store.dispatch('addFilterItem', this.filter)
                    this.$store.dispatch('filter', this.$store.getters.getCurrentFilters)
                }
                else{
                    this.$store.dispatch('deleteFilterItem', this.filter.id)
                    this.$store.dispatch('filter', this.$store.getters.getCurrentFilters)
                }

            }
        }
    }
</script>