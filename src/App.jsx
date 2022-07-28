import { useState } from 'react'
import Topbar from './components/topbar/Topbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Topbar/>
    </div>
  )
}

export default App
