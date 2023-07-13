import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
     
      <Button onClick={reset} variant="primary">Reset</Button>
      <Button onClick={increment} variant="success">Increment</Button>
      <Button onClick={decrement} variant="danger">Decrement</Button>
    </div>
  );
}
export default Counter;
