import { useSyncExternalStore } from "react"

const useStore = store => {
  const Store = useSyncExternalStore(store.subscribe, store.getState)
  return Store
}

const createStore = createState => {
  let state
  let listeners = new Set()

  const getState = () => {
    return state
  }

  const setState = partial => {
    const nextState =
      typeof partial === "function" ? partial(getState()) : partial
    if (!Object.is(nextState, state)) {
      const prevState = state
      state = Object.assign({}, prevState, nextState)
      listeners.forEach(l => l(state, prevState))
    }
  }

  const subscribe = listener => {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  }

  state = createState(setState, getState)

  return {
    getState,
    setState,
    subscribe,
  }
}

const createImpl = createState => {
  /**
   *  创建一个仓库store
   *  一个仓库包含 所有的状态state,订阅方法subscribe
   */
  const store = createStore(createState)

  /**
   * 这个函数会在组件中调用  例: useCountStore()
   * 调用函数后得到这个 store的内容
   *  例:count,increment,decrement....
   */
  return () => {
    return useStore(store)
  }
}

export const create = createState => {
  return createImpl(createState)
}
