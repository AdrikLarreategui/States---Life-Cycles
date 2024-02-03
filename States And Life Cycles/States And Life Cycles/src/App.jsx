// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useState, useEffect } from 'react';
import './App.css'

// const Counter = () => {
//   const[count, setCount] = useState(0);

//   const increment = () => {
//     setCount (count +1);
//   };

//   const decrement = () => {
//     setCount(count -1);
//   };

// return (
//   <div>
//     <button onClick= {decrement}>Decrement</button>
//     <p>Contador: {count}</p>
//     <button onClick= {increment}>Increment</button>
//   </div>
// )
// }
// export default Counter

const Greeting = (props) => {
  const [message, setMessage] = useState ('Hola, Euralio');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Hola Alfonsina');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Greeting;




