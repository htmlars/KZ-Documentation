import Main from "./components/Main"
import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [page, setPage] = useState('Main');

  return (
    <div className="flex">
      <Navbar />
      {page === 'Main' ? <Main /> : ''}
    </div>
  )
}

export default App