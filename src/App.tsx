import { Route } from './components/Route'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { References } from './pages/References'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <div>
      <Navbar/>
     <Route path="/" > <Home/></Route>
     <Route path="/about" > <About/></Route>
     <Route path="/contact" > <Contact/></Route>
     <Route path="/references" > <References/></Route>
    </div>
  )
}

export default App
