import React, {useState, useEffect} from 'react';

const Counter = ({ initialValue = 0, step = 1 }) => {
  const[count, setCount] = useState(initialValue);

  const increment = () => {
    setCount (count +step);
  };

  const decrement = () => {
    setCount(count -step);
  };

  useEffect(() => {
    console.log('Componente Counter montado');
  }, []);

return (
  <div>
    <button onClick= {decrement}>Decrement</button>
    <p>Contador: {count}</p>
    <button onClick= {increment}>Increment</button>
  </div>
)
}
export default Counter
