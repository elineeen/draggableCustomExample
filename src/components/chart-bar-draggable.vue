<template>
    <chart-draggable-wrapper>
        <template #content>
            <v-chart id="logo" :options="options" autoresize @click.native.stop="dispatchTogglePanel" />
        </template>
    </chart-draggable-wrapper>

</template>

<script>
    import ChartDraggableMixin from "./chart-draggable-mixin";
    import ChartDraggableWrapper from "./chart-draggable-wrapper";
    export default {
        name: "chart-bar-draggable",
        components: {ChartDraggableWrapper},
        mixins: [ChartDraggableMixin],
        data(){
            return {
                options:{
                    dataset: {
                        // Provide data.
                        source: [
                            ['Product', '2015', '2016', '2017'],
                            ['Matcha Latte', ...this.randomize()],
                            ['Milk Tea', ...this.randomize()],
                            ['Cheese Cocoa', ...this.randomize()],
                            ['Walnut Brownie', ...this.randomize()]
                        ]
                    },
                    // Declare X axis, which is a category axis, mapping
                    // to the first column by default.
                    xAxis: { type: 'category' },
                    // Declare Y axis, which is a value axis.
                    yAxis: {},
                    // Declare several series, each of them mapped to a
                    // column of the dataset by default.
                    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
                },
            }

        },
        methods:{
             randomize () {
                return [0, 0, 0].map(v => {
                    return Math.round(300 + Math.random() * 700) / 10
                })
            }
        }
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