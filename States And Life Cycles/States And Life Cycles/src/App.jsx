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





// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
