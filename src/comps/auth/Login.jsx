/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MDLW7nFZN9Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/libs/firebaseConfig"
import { useRouter } from "next/navigation"

export default function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [loading,setLoading] = useState('')
const router = useRouter()
  const handleSignIn = (e) =>{
   
    e.preventDefault()
    if(email == '' || password == ''){
      setError("All fields are required")
      return
    }
setError("")
 setLoading("Logging in ...")
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    //  console.log(user.uid)
     localStorage.setItem("userId", user.uid);
   if(email == "morani@gmail.com"){

 const role = 'admin'
 localStorage.setItem("role", role);
 router.push('admin/')
   }else{
  setError(`${email} is restricted`)
   }
      // ...
    })
    .catch((err) => { 
     setLoading('')
      const errorCode = error.code;
      const errorMessage = err.message; 
       setError(errorMessage)
      console.log(err)
     
    });
  }
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[url('/images/house1.jpg?height=398&width=388')] bg-cover bg-center">
        <div className="flex items-center justify-center h-full bg-black bg-opacity-25">
          <div className="text-center">
            <div className="inline-block p-4 bg-white bg-opacity-75">
              <FlagIcon className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white">Morani Global Properties</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-white p-6 md:p-12">
        <div className="mb-6">
      
          <h1 className="mt-1 text-3xl font-bold">Admin Signin</h1>
          <p className="mt-1 text-gray-700">Fill in the email and address to login to the dashbaord</p>
          {error && (
            <div className="flex items-center space-x-2 text-sm p-4 text-red-600 dark:text-red-500">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <span className="font-medium">{error}</span>
          </div>
          )}
        </div>
        <form className="space-y-6">
          <div>
            <label className="sr-only" htmlFor="email">
              Email Address
            </label>
            <Input onChange={(e)=>{setEmail(e.target.value)}} value={email} id="email" placeholder="Email address" type="email" />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password 
            </label>
            <Input onChange={(e)=>{setPassword(e.target.value)}}  value={password} id="password" placeholder="Password" type="password" />
          </div>
          <div>
          
          {loading && ( <Button className="w-full">Checking  <span className="loading loading-dots loading-md"></span> </Button>)}
          {!loading &&  <Button onClick={handleSignIn} className="w-full">Sign in</Button>}
          </div>
        </form>
    
      </div>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
