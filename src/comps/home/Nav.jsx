/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lnHXullREQf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Nav() {
  return (
    <header className="flex items-center h-16 w-full px-4 md:px-6">
      <nav className=" md:flex md:gap-4 md:items-center md:flex-1 lg:gap-6">
        <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Morani</span>
        </Link>
      </nav>
      <div className="flex-1" />
      <Button size="sm">Sign in</Button>
    </header>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
