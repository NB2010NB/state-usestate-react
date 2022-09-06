import { useState } from "react"
import App from "../App"
function Counter() {
    const [count, setCount] = useState(0)
    return (

        <div>
            
            <h3>{count}</h3>
            <button onClick={() => setCount(count +5)}>click to up</button>
        </div>

    )
}

export default Counter