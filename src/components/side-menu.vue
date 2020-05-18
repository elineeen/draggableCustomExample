<template>
    <div>
        <el-menu
                default-active="2"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1">
                <draggable name="ChartPieDraggable" :group="{ name: 'items',pull:'clone', put: false}"
                           drag-class="drag-opacity"
                           :list="menuList"
                           :clone="cloneChart">
                    <div v-for="(menuConfig) in menuList" :key="menuConfig.index">
                        <div   class="menu-display">{{menuConfig.name}}</div>
                        <component :key="menuConfig.chartKey" slot="footer" class="hide" v-bind:is="menuConfig.type"></component>
                    </div>
                    <!--<div>-->
                        <!--<div   class="menu-display">饼图</div>-->
                        <!--<chart-pie-draggable class="hide"></chart-pie-draggable>-->
                    <!--</div>-->


                </draggable>
            </el-menu-item>
            <!--<el-menu-item index="2">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">图表2</span>-->
            <!--</el-menu-item>-->
        </el-menu>
    </div>

</template>

<script>
    import draggable from 'vuedraggable'
    import ChartPieDraggable from "./chart-pie-draggable";
    export default {
        name: "side-menu",
        components: {
            ChartPieDraggable,
            draggable,
        },
        data(){
            return{
                menuList:[{index:1,type:'ChartPieDraggable',name:"饼图",chartKey:'chart1'}]
            }
        },
        methods:{
            cloneChart(evt) {
                return {
                    ...evt,
                    index:this.$moment().unix(),
                    chartKey:"chart"+this.$moment().unix()
                };
            }
        }
    }
</script>

<style scoped lang="scss">
    .drag-opacity{
        width: 500px;
        height: 500px;
        .hide{
            display: block!important;
        }
        .menu-display{
            display: none;
        }
        //opacity: 0.5;
    }
    .hide{
        display: none;
    }
</style>