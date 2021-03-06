const ITEMS = [
  {
    id: 1,
    title: 'Passwall',
    email: 'hello@passwall.io',
    password: 'passWorD123'
  }
]

export default {
  namespaced: true,

  state() {
    return {
      items: ITEMS,
      detail: ITEMS[0]
    }
  },
  mutations: {},
  actions: {
    setDetail({ state }, id) {
      state.detail = state.items.find(l => l.id === id)
    }
  }
}
