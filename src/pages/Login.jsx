import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/img.png";
export default function Login() {
  const email = useRef('');
  const password = useRef('');
  const [valid, setValid] = useState({"email": true , "password": true})
  const navigate = useNavigate();
  
  function setValidFunction(param1 , param2){
    console.log(param1 , param2.email)
    if(param1 ==='email'){
      setValid({"email": param2.email , "password": true})
    }
    if(param1==='password'){
      setValid({"email": true , "password": param2.password})
    }

  }
  function login() {

    if (
      email.current.value === "omartest@hotmail.com" &&
      password.current.value === "123456"
    ) {
      
      navigate("view");
    }
  }
  return (
    <div className="flex">
      <div className="w-1/2  ">
        <img src={image} alt={'123'} />
      </div>

      <div className="w-1/2 py-32  bg-violet1">
        <form onSubmit={login}>
          <div className="px-32  text-white">
            <div className="w-full text-left text-white text-4xl">
              Time to Work!
            </div>

            <div className="w-full text-left mt-4">Email</div>
            <input
              type=""
              className="w-full bg-black hover: px-2"
              ref={email}
               onKeyUp={()=>setValidFunction('email', email.current.value==="" ? { "email":false }: { "email":true} )}
               onClick={()=>setValidFunction('email', email.current.value==="" ? { "email":false }: { "email":true} )}

            />
             <div className="text-red-700 w-full text-left text-d11 h-3"> {!valid.email && "invalid email"}</div>
            <div className="w-full text-left mt-2">Password</div>
            <input
              type="password"
              className="w-full bg-black px-2"
              ref={password}
              onKeyUp={()=>setValidFunction('password' , !password.current.value? { "password" : false }: { "password" : true } )}
              onClick={()=>setValidFunction('password' , !password.current.value? { "password" : false }: { "password" : true } )}

            />
             <div className="text-red-700 w-full text-left text-d11 h-3"> {!valid.password && "inncorect password"}</div>

            <button className="bg-white  rounded-full w-full text-violet1 font-bold mt-6 text-lg">
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
