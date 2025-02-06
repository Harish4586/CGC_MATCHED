import axios from "axios";
import { useState } from "react"

const Login = () => {
  const [emailId,setEmailId]= useState("harsh@nirbaan.com");
  const [ password,setPassword] = useState("harsh@123");
  //will do it later
  const handleLoginClick=async()=>{
     try{const res= await axios.post("http://localhost:1000/login",{emailId:emailId,password:password},{withCredentials:true});
     console.log( "login successfull",res.data);}
     catch(err){
      console.log("ERROR: ",err.message)
     }
  }
  return (
    <div className="flex justify-center mt-24">
     <div className="card bg-base-300 w-auto shadow-xl">
  <div className="card-body flex">
    <h2 className="card-title flex justify-center text-3xl mb-4">Login</h2>
    <div className="flex justify-between mb-4">
    <label className="mr-2 text-xl"  htmlFor="email">Enter Email address:</label>
    <input className=" bg-white rounded-md text-black" value={emailId} type="email" id="email" onChange={(e) => setEmailId(e.target.value)}/>
    </div>
    <div className="flex justify-between mb-4">
    <label htmlFor="pswrd" className="mr-2 text-xl" >Enter Password:  </label>
    <input className=" bg-white rounded-md text-black" type="password" id="pswrd"  value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLoginClick}>login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
