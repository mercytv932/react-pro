import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setincrementBy] = useState(1);

  function handleClickIncrement() {
    setCount(count + incrementBy);
  }

  function handleClickDecrement() {
    setCount(count - incrementBy);
  }

  function handleClickReset() {
    setCount(0);
  }

  function increaseIncrement() {
    setincrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setincrementBy(incrementBy - 1);
  }

  function resetValue() {
    setincrementBy(0);
  }

  return (
    <div>
      <h1>Count value is:{count}</h1>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
      <button onClick={handleClickReset}>Reset</button>

      <h1>We are incrementing the value by:{incrementBy}</h1>
      <button onClick={increaseIncrement}>increase Incremenet</button>
      <button onClick={decreaseIncrement}>decrease Increment</button>
      <button onClick={resetValue}> reset value</button>
    </div>
  );
}
