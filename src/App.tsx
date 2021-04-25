import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello! Your Vite React Enterprise Grade Setup</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p> 
        <p>
        Environments Message: {import.meta.env.VITE_APP_TITLE}
        </p> 
      </header> 
    </div>
  )
}

export default App
