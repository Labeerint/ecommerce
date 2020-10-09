<template>
    <div class="filter__item">
        <input @change="select" :id="filter.id" type="radio" name="price" class="filter__checkbox" :value="filter.value" v-model="filter.toggle">
        <label class="filter__label" :for="filter.id">{{filter.text}}</label>
    </div>
</template>

<script>
    export default {
        name: "filters-item-radio",
        props:{
            filter:{
                type:Object,
                required: true
            }
        },
        methods:{
            select(){
                this.$store.dispatch('addFilterItem', this.filter)
                this.$store.dispatch('deleteFilterItemRadio', this.filter.id)
                this.$store.dispatch('filter', this.$store.getters.getCurrentFilters)
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