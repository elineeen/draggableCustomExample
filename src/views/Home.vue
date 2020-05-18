<template>
  <el-row class="container" type="flex">
    <el-col :span="4">
      <side-menu></side-menu>
    </el-col>
    <el-col :span="20">
      <draggable-panel></draggable-panel>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SideMenu from "../components/side-menu";
import DraggablePanel from "../components/draggable-panel";
import CloneTest from "../components/clone-test";

export default {
  name: 'Home',
  components: {
      CloneTest,
      DraggablePanel,
      SideMenu,
    HelloWorld
  }
}
</script>
<style scoped lang="scss">
  .container{
    display: flex;

  }
</style>
