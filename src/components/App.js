import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>You've been on this page for {count} seconds.</p>
    </div>
  );
}

export default App;
