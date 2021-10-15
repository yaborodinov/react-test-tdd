import React, {useState} from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
    return (<div>
      <h1>some info</h1>
      <div id="counter-value">{counter}</div>
      <div className="btn-group">
        <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
          Increment
        </button>

        <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>
          Decrement
        </button>
      </div>
    </div>)
}

export default Counter
