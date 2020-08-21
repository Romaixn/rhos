export const state = () => ({
  apps: []
})

export const actions = {
  async nuxtServerInit ({ commit }, { $content }) {
    const { data } = await $content('apps').fetch()
    commit('set_apps', data)
  }
}

export const mutations = {
  set_apps (state, apps) {
    state.apps = apps
  }
}
