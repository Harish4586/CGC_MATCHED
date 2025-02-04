import { BrowserRouter, Route, Routes } from "react-router-dom"

import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"

function App() {
 

  return (
    <>
      <BrowserRouter basename="/">
      <Routes>
      {/* <Route path="/" element={<div>Base page</div>} /> by this way, we can't create children Routes */}
      {/* children routes in body component */}
    <Route path="/" element={<Body/>}>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
    
    </Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
