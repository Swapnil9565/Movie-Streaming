
import './App.css'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Navbar from './Components/Navbar'
import MovieInfo from './Components/MovieInfo'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
       <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Movies' element={<Movies/>}></Route>
      <Route path='/:imdbID' element={ <MovieInfo/>}></Route>
     </Routes>
    </Router>
    </>
  )
}

export default App
