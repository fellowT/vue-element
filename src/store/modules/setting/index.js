
const types = {
  THEME: 'THEME'
}
export default {
  namespaced: true,
  state: {
    [types.THEME]: {
      PC_theme_color: '#3194d0',
      PC_theme_menu_color: '#3194d0',
      PC_theme_header_color: '#ffffff',
      PC_theme_font_color: '#ffffff',
      PC_theme_menu_selected_font_color: '#000000',
      PC_theme_menu_selected_bg_color: '#ffffff'
    }
  },
  mutations: {
    [types.THEME]: (state, res) => {
      state[types.THEME] = res
    }
  },
  actions: {
    [types.THEME]: ({ commit }, data) => {
      commit(types.THEME, data)
    }
  },
  getters: {
    getTheme (state) {
      return state[types.THEME]
    }
  }
}
