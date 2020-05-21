<template>
    <div class="chart-wrapper" @mouseover="setBarVisible(true)" @mouseout="setBarVisible(false)">
        <transition name="fade">
            <el-row :z-index="1000" v-show="control.barVisible" class="control-row" type="flex" justify="end">
                <i class="el-icon-delete"></i>
                <i class="el-icon-setting"></i>
            </el-row>
        </transition>
        <slot name="content">

        </slot>
    </div>
</template>

<script>
    export default {
        name: "chart-draggable-wrapper",
        data(){
            return {
                control:{
                    barVisible:false,
                }
            }
        },
        methods:{
            setBarVisible(flag){
                this.control.barVisible=flag;
            }
        }
    }
</script>

<style scoped lang="scss">
    .fade-enter-active,.fade-leave-active{
        transition: all 0.5s ease
    }
    .fade-enter,.fade-leave-active{
        opacity: 0;
    }
    .fade{
        opacity: 0.5;
    }
    .control-row{
        background-color: darkgray;
        width: 100%;
        border-radius: 20%;
        float: left;
    }
    .chart-wrapper{
        width: 100%;
        height:300px ;
    }
</style>