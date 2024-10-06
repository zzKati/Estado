import { create } from "zustand"

export const useCountStore = create((set, get) => ({
  count: 0,
  increment: () => {
    // 写法一:
    set(state => ({ count: state.count + 1 }))
    // 写法二:
    // set({ count: get().count + 1 })
  },
  decrement: () => {
    set(state => ({ count: state.count - 1 }))
  },
  delayIncrement: () => {
    new Promise(reslove => {
      setTimeout(() => {
        reslove()
      }, 2000)
    }).then(() => {
      set(state => ({ count: state.count + 1 }))
    })
  },
}))
