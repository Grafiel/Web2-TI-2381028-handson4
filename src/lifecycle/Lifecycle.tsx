import React, { useEffect, useState } from 'react';

const Lifecycle = () => {
    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);
    useEffect(() => {
        console.log(count)
    }, [count]);
    return (
        <div>
            <p>Counter value: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <p>Another Counter value: {anotherCount}</p>
            <button onClick={() => setAnotherCount(anotherCount + 1)}>Increase Another Counter</button>
        </div>
    )
}

export default Lifecycle