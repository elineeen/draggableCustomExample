<template>
    <div v-sticky  :sticky-top="100">
        <el-menu
                default-active="2"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <draggable name="ChartPieDraggable" :group="{ name: 'items',pull:'clone', put: false}"
                           drag-class="drag-opacity"
                           :list="menuList"
                           :clone="cloneChart">
                    <el-menu-item   v-for="(menuConfig) in menuList" :key="menuConfig.index">
                        <div>
                            <div class="menu-display" >{{menuConfig.name}}</div>
                            <component :key="menuConfig.chartKey" slot="footer" class="hide" v-bind:is="menuConfig.type"></component>
                        </div>
                    </el-menu-item >
                </draggable>
        </el-menu>
    </div>

</template>

<script>
    import draggable from 'vuedraggable'
    import ChartPieDraggable from "./chart-pie-draggable";
    import ChartBarDraggable from "./chart-bar-draggable";
    import VueSticky from 'vue-sticky'
    export default {
        name: "side-menu",
        components: {
            ChartBarDraggable,
            ChartPieDraggable,
            draggable,
        },
        directives: {
            'sticky': VueSticky,
        },
        data(){
            return{
                menuList:[
                    {index:1,type:'ChartPieDraggable',name:"饼图",chartKey:'chart1'},
                    {index:2,type:'ChartBarDraggable',name:"柱状图",chartKey:'chart2'}
                    ],
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
        /*.hide{*/
            /*display: block!important;*/
        /*}*/
        .menu-display{
            display: none;
        }
        //opacity: 0.5;
    }
    .hide{
        display: none;
    }
</style>