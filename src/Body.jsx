import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Body = () => {
  return (
    <div>
      <NavBar/>
      {/* without this navbar , no children component of body will be rendered */}
      <Outlet/>
    </div>
  )
}

export default Body
