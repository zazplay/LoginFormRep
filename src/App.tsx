import { useState } from 'react'
import './App.css'
import RegisterForm from './components/registerform/registerform'
import LoginForm from './components/LoginForm/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='MainContainer'>
          <RegisterForm></RegisterForm>
          <LoginForm></LoginForm>
      </div>
      
    </>
  )
}

export default App
