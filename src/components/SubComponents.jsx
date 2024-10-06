import { todoStore } from "../store/todoStore"
import { useSyncExternalStore } from "react"
export default function SubComponents() {
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot)
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
