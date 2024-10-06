import { useSyncExternalStore } from "react"
import { todoStore } from "../store/todoStore"
import SubComponents from "./SubComponents"

export default function TodoApp() {
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot)

  return (
    <div>
      <div>
        <button onClick={todoStore.addStore}>Add Todo </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <SubComponents />
    </div>
  )
}
