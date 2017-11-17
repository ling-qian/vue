const state = {
  isMemuShow:false
}

const mutations = {
  hideMenu(state){
    state.isMenuShow = false;
  },
  showMenu(state){
    state.isMemuShow = true;
  }
}

export default({
  state,
  mutations
})
