import { createStore } from "vuex"
import { postModule } from "@/store/postModule"

export default createStore({
  // ядро vuex:

  state: () => {
    // state - само состояние, тут данные
    return {
      likes: 2,
      isAuth: false,
    }
  },
  getters: {
    //   getters - computed свойства ( кешируемые вычисляемы значения )
    doubleLikes(state) {
      return state.likes * 2
    },
  },

  mutations: {
    //   изменять состояния напрямую не можем,
    // но но можем изменять с помощью мутаций
    incrementLikes(state) {
      state.likes += 1
    },
    decrementLikes(state) {
      state.likes -= 1
    },
  },

  actions: {
    //   также функции, которые внутри себя используют мутации
    //   получаем данные с сервера, вызываем мутацию и меняется состояние
  },
  modules: {
    // модуль - изолированный кусочек состояния
    post: postModule,
  },
})
