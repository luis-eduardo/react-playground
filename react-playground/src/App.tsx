import Message from "./Message"
import ProductList from "./ProductList"
import { useState } from 'react';

function MyButton ({ count, onClick }: any) {

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

function App () {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      This is a simple message
      <Message />
      <MyButton count={count} onClick={handleClick}></MyButton>
      <MyButton count={count} onClick={handleClick}></MyButton>

      <ProductList></ProductList>
    </div>
  )
}

export default App