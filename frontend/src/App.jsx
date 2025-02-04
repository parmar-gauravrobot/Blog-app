import Home from "./Pages/Home/Home"
import Profile from "./Pages/Profile/profile"
import Signin from "./Pages/Signin/Signin"
import Signup from "./Pages/signup/Signup"
import CreateBlog from "./Pages/Profile/createBlog"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FullView from "./Pages/FullBlog/FullView"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/post" element={<CreateBlog/>}/> 
        <Route path="/fullView" element={<FullView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
