import type { MutationTree, ActionTree, ActionContext } from 'vuex'
import type { NuxtContentInstance as AppContent } from '@nuxt/content'
import type { RootState, Application } from '~/core/types'

export const state = (): RootState => ({
  apps: []
})

export const mutations: MutationTree<RootState> = {
  setApplication (state: RootState, app: Application[]): void {
    state.apps = app
  }
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(
    actionContext: ActionContext<S, R>,
    appContent: AppContent
  ): void
}

export const actions: Actions<RootState, RootState> = {
  async nuxtServerInit ({ commit }, { $content }) {
    let app: Application[] = []

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    app = await $content('apps').fetch

    commit('setApplication', app.slice(0, 10))
  }
}
