<template>
    <el-row >
        <draggable
                v-model="rows"
                style="background: grey;"
        >
            <el-row
                    v-for="row in rows"
                    :key="row.index"
                    class="sortable-row"
                    type="flex"
            >
                <draggable
                        :list="row.items"
                        :group="{ name: 'items' }"
                >
                    <el-col
                            v-for="item in row.items"
                            :key="item.title"
                            class="row-v"
                            :span="24/row.items.length"
                    >
                        <el-card >{{ item.title }}</el-card>
                    </el-col>
                </draggable>
            </el-row>
        </draggable>
        <draggable tag="el-row" :group="{ name: 'items' }" :list="addRows" @change="addRow"  >
            <div style="height: 10px; background: aqua"></div>
        </draggable>
    </el-row>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        name: "draggable-panel",
        components: {
            draggable,
        },
        data(){
            return {
                enabled: true,
                addRows:[],
                rows: [
                    {
                        index: 1,
                        items: [
                            {
                                title: "item 1"
                            }
                        ]
                    },
                    {
                        index: 2,
                        items: [
                            {
                                title: "item 2"
                            },
                            {
                                title: "item 3"
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            addRow(evt){
                debugger;
                if(evt.added){
                    console.dir(this.$moment().unix());
                    let newRow={index:this.$moment().unix(),items:[evt.added?.element]};
                    this.rows.push(newRow);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .sortable-row{
        >div{
            display: flex;
            width: 100%;
            justify-content: space-around;
        }
    }
    .row-v{
        display: flex;
        flex: 1;
        margin: 20px;
        background: lightgray;
        &:hover{
            box-shadow: 5px 5px 5px 5px lightblue;
            transition: box-shadow 0.3s ease-in-out;
        }
    }

</style>