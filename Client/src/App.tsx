import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Header from "./components/Header"
export default function App() {
  return <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/login" element={<Login/> }/>
      <Route path="/register" element={<SignUp/> }/>
      <Route path="about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
}
