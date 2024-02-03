import React,  {useState, useEffect } from 'react';

const Greeting = ({name}) => {
    const [message, setMessage] = useState ('Hola, ${name}');
  
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