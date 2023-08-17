import { Route } from './components/Route'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import {Info} from './pages/Info'
import {Navbar} from './components/Navbar'
import { Footer } from './components/Footer'
import { Faq } from './pages/Faq'
import { Events } from './pages/Events'
import { Test } from './pages/Test'
import { Aszf } from './pages/Aszf'

const App = () => {

  return (
    <div className="flex flex-col items-center whitespace-pre-wrap relative">
      <Navbar/>
     <Route path="/" > <Home/></Route>
     <Route path="/about" > <About/></Route>
     {/* <Route path="/events" > <Events/></Route> */}
     <Route path="/contact" > <Contact/></Route>
     <Route path="/faq" > <Faq/></Route>
     <Route path="/info" > <Info/></Route>
     <Route path="/events" > <Events/></Route>
     <Route path="/form" > <Test/></Route>
     <Route path="/aszf" > <Aszf/></Route>
     <Footer/>
    </div>
  )
}

export default App
