<template>
    <div class="filter__item">
        <input @change="select" :id="filter.id" :value="filter.value" type="checkbox" name="checkbox" class="filter__checkbox" v-model="filter.toggle">
        <label class="filter__label" :for="filter.id">{{filter.text}}</label>
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

<style scoped lang="scss">
    .filter{
        &__item{
            margin-top: 17px;
            text-align: left;
        }
        &__checkbox{
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 3px;
            height: 17px;
            width: 17px;
            background: rgba(0,0,0,0);
        }

        &__label{
            margin-left: 12px;
            font-weight: 300;
            font-size: 16px;
            color: #FFFFFF;
        }
    }
</style>