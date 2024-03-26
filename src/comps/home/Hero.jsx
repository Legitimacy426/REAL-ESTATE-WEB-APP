/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rEOHHS9lJgl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
export default function Hero() {
  return (
    <div className="bg-[#f0f9ff]">
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between px-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-[#00aaff]">Cloud Islaic</h1>
           
            <div className="hidden space-x-4 md:flex">
              <Link className="text-gray-600 hover:text-gray-900" href="#">
                Home
              </Link>
              <Link className="text-gray-600 hover:text-gray-900" href="#">
                Info
              </Link>
              <Link className="text-gray-600 hover:text-gray-900" href="#">
                About Us
              </Link>
              <Link className="text-gray-600 hover:text-gray-900" href="#">
                Contact
              </Link>
              <Link className="text-gray-600 hover:text-gray-900" href="#">
                Gallery
              </Link>
            </div>
          </div>
          <Link className="hidden space-x-4 md:flex" href={"auth"}>
         
            <Button className="bg-[#00aaff] text-white hover:bg-[#007acc]"  >Login</Button>
          </Link>
        </div>

        {/* sheet============ */}
    
      </nav>
      <header className="container mx-auto flex flex-col items-center py-16 px-4 text-center lg:flex-row lg:text-left">
        <div className="space-y-6 lg:w-1/2">
          <h2 className="text-4xl font-bold leading-tight text-gray-800">
            Find a dream home to live forever with your Family
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor
            pellentesque leo, nec venenatis mauris fermentum a.
          </p>
          <Button className="bg-[#00aaff] text-white hover:bg-[#007acc]">Booking Now</Button>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <img
            alt="Dream Home"
            className="rounded-lg shadow-lg"
            height="300"
            src="./images/house1.jpg"
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
            }}
            width="500"
          />
        </div>
      </header>
      <section className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700" htmlFor="location">
              Location
            </label>
            <Input id="location" placeholder="Where do you want to live" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700" htmlFor="property-type">
              Property Type
            </label>
            <Select>
              <SelectTrigger id="property-type">
                <SelectValue placeholder="Choose your property type" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700" htmlFor="pricing">
              Pricing
            </label>
            <Select>
              <SelectTrigger id="pricing">
                <SelectValue placeholder="Choose price rank" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button className="bg-[#00aaff] text-white hover:bg-[#007acc] w-full">Search now</Button>
          </div>
        </div>
      </section>
    </div>
  )
}


function MenuIcon(props) {
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
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
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
  