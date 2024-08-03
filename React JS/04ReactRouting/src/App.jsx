import { Link, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"

const App = () => {
  return (
    <>

              <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
              </Routes>
              <nav>
                <ul>
                    <li>
                        <Link to={'/home'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
              </nav>
    </>
  )
}

export default App
