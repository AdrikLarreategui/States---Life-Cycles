// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import './App.css'

const App = () => {
  return (
    <div>
      <Counter initialValue={5} step={2} />
      <Greeting name = 'Euralio' />
    </div>
  );
};

export default App;
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

// const Greeting = (props) => {
//   const [message, setMessage] = useState ('Hola, Euralio');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setMessage('Hola Alfonsina');
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default Greeting;




