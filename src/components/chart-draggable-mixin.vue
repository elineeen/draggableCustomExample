<template>
    
</template>

<script>
    export default {
        name: "chart-draggable-mixin",
        methods:{
            dispatchTogglePanel(){
                this.$store.commit('togglePanel',{data:this.options});
            }
        }
    }
</script>

<style scoped>

</style>