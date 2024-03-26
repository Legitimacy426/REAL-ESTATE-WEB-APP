/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MDLW7nFZN9Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Login() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[url('/images/house1.jpg?height=398&width=388')] bg-cover bg-center">
        <div className="flex items-center justify-center h-full bg-black bg-opacity-25">
          <div className="text-center">
            <div className="inline-block p-4 bg-white bg-opacity-75">
              <FlagIcon className="h-12 w-12 text-blue-500" />
            </div>
            <h1 className="mt-4 text-4xl font-bold text-white">Dream Travel</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-white p-6 md:p-12">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Travelers</h2>
          <h1 className="mt-2 text-3xl font-bold">Welcome</h1>
          <p className="mt-1 text-gray-700">Your next adventures here</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <Input id="email" placeholder="Email" type="email" />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <Input id="password" placeholder="Password" type="password" />
          </div>
          <div>
            <Button className="w-full bg-teal-400">SIGN UP</Button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          already have an account?
          <Link className="text-teal-500" href="#">
            sign in
          </Link>
        </p>
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
