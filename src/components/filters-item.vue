<template>
    <div class="filter__item">
        <input @change="checked" :value="filter.value" type="checkbox" name="checkbox" class="filters__checkbox">
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
            checked(){
                this.$emit('checked', {
                    id:this.filter.id,
                    value:this.filter.value,
                    type:this.filter.type
                })
            }
        }
    }
</script>