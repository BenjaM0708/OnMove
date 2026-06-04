import Map from './features/map/Map'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'


function App() {

  return (
    <>
     <BrowserRouter>
        <div className="bg-brand-cream min-h-screen font-body">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map_page" element={<Map />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

