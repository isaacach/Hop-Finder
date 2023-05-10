import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Search from './Components/Search'

function App() {
  return (
    <div className="container nav">
      <header className="row nav">
        < Nav />
      </header>
      <div className="container">
        < Search />
      </div>

    </div>
  )
}

export default App
