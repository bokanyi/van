import { Route } from './components/Route'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import {Info} from './pages/Info'
import {Navbar} from './components/Navbar'
import { Footer } from './components/Footer'
import { Locations } from './pages/Locations'
import { Events } from './pages/Events'

const App = () => {

  return (
    <div className="flex flex-col items-center whitespace-pre-wrap relative">
      <Navbar/>
     <Route path="/" > <Home/></Route>
     <Route path="/about" > <About/></Route>
     {/* <Route path="/events" > <Events/></Route> */}
     <Route path="/contact" > <Contact/></Route>
     <Route path="/locations" > <Locations/></Route>
     <Route path="/info" > <Info/></Route>
     <Route path="/events" > <Events/></Route>
     <Footer/>
    </div>
  )
}

export default App
