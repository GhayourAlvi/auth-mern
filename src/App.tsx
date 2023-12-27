import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/login" element={<Login/> }/>
      <Route path="/register" element={<SignUp/> }/>
      <Route path="about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
}
