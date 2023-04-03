import { useState } from 'react'

export const HookCounter = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <h2>Use the buttons below to operate the counters</h2>
            <button onClick={() => setCount(initialValue)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Add</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>Subtract</button>
        </div>
    );
};