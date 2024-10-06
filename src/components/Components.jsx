import { useCountStore } from "../store/useCountStore"

export default function Components() {
  const { count } = useCountStore()
  return <div>Components count:{count}</div>
}
