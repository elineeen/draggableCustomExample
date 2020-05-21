<template>
    <chart-draggable-wrapper>
        <template #content>
            <v-chart :z-index="1" id="logo" :options="options" autoresize @click.native.stop="dispatchTogglePanel" />
        </template>
    </chart-draggable-wrapper>
</template>

<script>
    import ChartDraggableMixin from "./chart-draggable-mixin";
    import ChartDraggableWrapper from "./chart-draggable-wrapper";
    export default {
        name: "chart-pie-draggable",
        components: {ChartDraggableWrapper},
        mixins: [ChartDraggableMixin],
        data(){
            return {
                options: {
                    title: {
                        text: '饼图程序调用高亮示例',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 335, name: '直接访问' },
                                { value: 310, name: '邮件营销' },
                                { value: 234, name: '联盟广告' },
                                { value: 135, name: '视频广告' },
                                { value: 1548, name: '搜索引擎' }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            }
        },
    }
</script>

<style scoped>
    .echarts{
        width: 100%;
        height: 100%;
    }
.chart-wrapper{
    width: 100%;
    height:300px ;
}
</style>