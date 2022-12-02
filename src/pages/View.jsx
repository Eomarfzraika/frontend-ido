import React, { useState } from "react";
import { FaUserCircle } from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import {AiOutlinePlusCircle} from  'react-icons/ai';
export default function View() {
  const [input , setInput] = useState(false)
  const [logout , showLogout] = useState(false)

  return (
    <div className="">
      <div className="flex w-full bg-black h-12">
        <div className="w-10/12"></div>
        <div className="flex w-2/1 mt-2">
           <input className={ `rounded-full  bg-black text-white h-6 mt-2 p-1 ${ input && "border border-violet1" }`} />
          <BsSearch className="-mx-7 text-violet1 mt-3" onClick={()=>setInput(input ? false :true)}/>
          <AiOutlinePlusCircle className="text-violet1 ml-12 mr-5 mt-3"/>
          <FaUserCircle className="text-white mr-5 ml-3 text-2xl mt-2" onClick={()=>showLogout(logout ? false: true)} />
          {logout && 
          <div className="flex absolute top-12 bg-black w-2/12 ml-10 h-14">
            <div><FaUserCircle className="text-white mx-4 text-2xl mt-2 border-black" /></div>
            <div>
<div className="text-violet1 text-d6">omar@hotmail.com</div>
<div className="text-white text-d12">Log out</div>
            </div>
          </div>
          }
        </div>
      </div>

      <div className="w-full text-right bg-violet1 text-violet1 h-12 hover:text-white pr-5 pt-2">
        x
      </div>
      <div className="flex flex-row w-full bg-dfacebook h-screen bg-black1">
        <div className="w-3/12">
          <div className="rounded  bg-black text-white  text-left mt-12 px-2 p-1 ml-5 text-s">
            To Do
          </div>
          <div className="rounded bg-black text-white  text-left mt-6 px-2 p-1 ml-5 text-s h-48">
          </div>
        </div>
        <div className="w-3/12">
          <div className="rounded bg-black text-white  text-left mt-12 px-2 p-1 ml-5 text-s">
            To Do
          </div>
          <div className="rounded bg-black text-white  text-left mt-6 px-2 p-1 ml-5 text-s h-48">
          </div>
        </div>
        <div className="w-3/12">
 
          <div className="rounded bg-black text-white  text-left mt-12 px-2 p-1 ml-5 text-s">
            To Do
          </div>
          <div className="rounded bg-black text-white  text-left mt-6 px-2 p-1 ml-5 text-s h-48">
          </div>
        </div>
        <div className="w-3/12">

        </div>
      </div>
    </div>
  );
}
