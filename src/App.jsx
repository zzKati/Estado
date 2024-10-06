import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { useCountStore } from "./store/useCountStore"

function App() {
  const { count, increment, decrement, delayIncrement } = useCountStore()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>{count}</div>
        <button onClick={() => increment()}>increment</button>
        <br />
        <button onClick={() => decrement()}>decrement</button>
        <br />
        <button onClick={() => delayIncrement()}>delayIncrement</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
