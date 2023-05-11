
import './App.css'
import Nav from './Components/Nav'
import Search from './Components/Search'

function App() {
  return (
    <div className='page-wrapper'>
      <div className="container nav">
        <header className="row nav">
          < Nav />
        </header>
      </div>
      <div className="container body">
      < Search />
      </div>
    </div>
  )
}

export default App
