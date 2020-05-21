import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      showEditPanel:false,
      panelData:null
  },
  mutations: {
    togglePanel(state,payload){
        state.showEditPanel=true;
        state.panelData=payload.data;
    },
    storePanelData(state,payload){
        debugger;
        if(state.panelData){
            let assignObj=JSON.parse(payload);
            _.assign(state.panelData,assignObj);
        }
    }
  },
  actions: {
  },
  modules: {
  }
})
