let nextId = 0
let todos = [{ id: nextId++, text: "Todo #1" }]
let listeners = []

export const todoStore = {
  addStore() {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }]
    listeners.forEach(listener => listener())
  },
  subscribe(listener) {
    listeners = [...listeners, listener]
    return () => {
      listeners.filter(l => l != listener)
    }
  },
  getSnapshot() {
    return todos
  },
}
