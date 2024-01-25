import { useState } from "react";

export function SignUp() {
  const [count,setCount] = useState(0);

  return <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col bg-white p-5 rounded gap-5">
      <div className="flex justify-center items-center flex-col gap-1 px-9">
        <h1 className="font-bold text-3xl">Sign Up</h1>
        <p className="text-sm">Enter your information to create an account</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="gap-1 flex flex-col">
          <h3 className="font-bold text-sm">First Name</h3>
          <input className="border border-gray-400 rounded w-full p-1" type="text"></input>
        </div>
        <div className="gap-1 flex flex-col">
          <h3 className="font-bold text-sm" type="text">Last Name</h3>
          <input className="border border-gray-400 rounded w-full p-1" type="text"></input>
        </div>
        <div className="gap-1 flex flex-col">
          <h3 className="font-bold text-sm" type="text">Email</h3>
          <input className="border border-gray-400 rounded w-full p-1" type="text"></input>
        </div>
        <div className="gap-1 flex flex-col">
          <h3 className="font-bold text-sm">Password</h3>
          <input className="border border-gray-400 rounded w-full p-1" type="password"></input>
        </div>
      </div >
      <div className="flex justify-center flex-col items-center gap-3">
        <button className="text-xs bg-black text-white font-medium w-full rounded px-2 py-2">Sign Up</button>
        <p className="text-xs">Already have an account? <span className="underline">Login</span></p>
      </div>
    </div >
  </div >
}