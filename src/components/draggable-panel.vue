<template>
    <el-row >
        <el-col :span="18">
            <draggable
                    v-model="rows"
                    style="background: grey;"
                    @change="dataChanged"
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
                            <component v-if="item.type" :key="item.chartKey" class="hide" v-bind:is="item.type"></component>
                            <el-card v-else>{{ item.title }}</el-card>
                        </el-col>
                    </draggable>
                </el-row>
            </draggable>
            <draggable tag="el-row" :group="{ name: 'items' }" :list="addRows" @change="addRow"  >
                <div class="blank-area" ></div>
            </draggable>
        </el-col>
        <el-col :span="6">
            <el-button @click="dispatchStoreChanges">save changes</el-button>
            <code-editor ref="editor"
                         v-model="interact.panelData"
                         theme="chrome"
                         :height="500" lang="json" @init="editorInit"></code-editor>
        </el-col>
    </el-row>
</template>

<script>
    import draggable from 'vuedraggable'
    import ChartPieDraggable from "./chart-pie-draggable";
    import ChartBarDraggable from "./chart-bar-draggable";
    export default {
        name: "draggable-panel",
        components: {
            ChartBarDraggable,
            ChartPieDraggable,
            draggable,
            codeEditor: require('vue2-ace-editor'),
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
                ],
                interact:{
                    panelData:null
                }
            }
        },
        methods:{
            dispatchStoreChanges(){
                this.$store.commit('storePanelData',this.interact.panelData)
            },
            editorInit: function () {
                require('brace/ext/language_tools') //language extension prerequsite...
                require('brace/mode/html')
                require('brace/mode/javascript')    //language
                require('brace/mode/json')
                require('brace/theme/chrome')
                require('brace/snippets/javascript') //snippet
            },
            dataChanged(){
              console.dir(this.rows);
            },
            addRow(evt){
                debugger;
                if(evt.added){
                    console.dir(this.$moment().unix());
                    let newRow={index:this.$moment().unix(),items:[evt.added?.element]};
                    this.rows.push(newRow);
                }
            }
        },
        computed:{
            selectedPanelData(){
                return this.$store.state.panelData;
            }
        },
        watch:{
            selectedPanelData:function(newVal){
                debugger
                this.interact.panelData=JSON.stringify(newVal,null,'\t');
            }
        },
        mounted(){
            let editor = this.$refs.editor.editor;
            debugger;
            editor.session.setUseWrapMode(true);
            editor.getSession().setMode("ace/mode/json")
            console.dir(editor);
        }
    }
</script>

<style scoped lang="scss">
    ::v-deep .sortable-ghost{
        width: 400px;
        height: 400px;
        border: 1px solid aqua;
        .hide{
            display: block!important;
        }
        .menu-display{
            display: none;
        }
        //opacity: 0.5;
    }
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
    .blank-area{
        /*display: block;*/
        height: 10px;
        background: aqua;
        margin-bottom: 200px;
    }

</style>