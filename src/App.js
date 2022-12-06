import React, { useState } from "react";
import { useNavigate, Link, Navigate } from 'react-router-dom'
function App() {
  const [state, setState] = useState({
    name: "mohammed qubaisuddin",
    age: 23,
    designation: "software engineer"
  })
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/contact/${state.name}/${state.age}/${state.designation}`)
    navigate('/contact', {
      state: {
        ...state
      }
    })
  }
  return (
    <>
      <h1>hello world</h1>
      <button onClick={handleClick}>Go to contact us page</button>
    </>
  );
}

export default App;
