import {Routes, Route} from "react-router-dom"
import Homepage from "./Component/Homepage.jsx"
import AnotherPage from "./Component/AnotherPage.jsx"

function App() {
  
  return (
    <>
      
      <h1>---Navbar---</h1>
      <br />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/another" element={<AnotherPage />} />
      </Routes>
    </>
  )
}

export default App
