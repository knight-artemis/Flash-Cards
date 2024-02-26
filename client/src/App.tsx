import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Auth from "./components/Auth/Auth"

function App() {
  return (
    <>
    <Header />
    <div className='main'>
      <Routes>
      <Route path="log" element={<Auth />} />
      </Routes>
    </div>
    </>
  )
}

export default App
