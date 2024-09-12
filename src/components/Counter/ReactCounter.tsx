import { useState } from 'react'

export default function ReactCounter() {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div style={{ border: '1px solid black', padding: '1rem', maxWidth: 'max-content' }}>
      <p>React Counter</p>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  )
}
