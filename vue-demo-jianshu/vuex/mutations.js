export default {
  DISPLAY_ARTICLES (state, type) {
    state.show = type
    state.articles = state[type + 'Articles']
  },
  DISPLAY_TOPIC (state, type) {
    state.show = type
    state.tipicArticles = state[type + 'TopicArticles']
  },
  SORT_SONTENT (state, type) {

  },
  CHANGE_LOGINWAY (state, loginway) {
    state.loginway = loginway
  },
  CHANGE_ARTICLEFLAG (state, flag) {
    state.articleFlag = flag
  }
}
