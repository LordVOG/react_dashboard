import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="others">otherpage</div>
      </div>
    </div>
  )
}

export default App
