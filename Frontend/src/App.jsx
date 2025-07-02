import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='text-7xl flex items-center justify-center h-screen'>
    <h1>Good One</h1>
   </div>
  )
}

export default App
