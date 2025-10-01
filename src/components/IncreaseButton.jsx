import { useState } from 'react'

export default function MyButton(){
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount((count) => count + 1)}>
          Count up: {count}
        </button>
    )
}