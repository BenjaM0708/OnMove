import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Rides from './pages/Rides'
import MapPage from './pages/MapPage'
import About from './pages/About'
import PostRidePage from './pages/PostRidePage'


function App() {

  return (
    <>
     <BrowserRouter>
        <div className="bg-brand-cream min-h-screen font-body">
          <Navbar />
          <main>
            <Routes>
              <Route path="/rides" element={<Rides />} />
              <Route path="/map_page" element={<MapPage />} />
              <Route path="/post_ride_page" element={<PostRidePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

