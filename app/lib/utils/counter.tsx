'use client'

import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const handleIncrement = () => setCount(count + 1)
    const handleDecrement = () => setCount(count > 0 ? count - 1 : 0)

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}