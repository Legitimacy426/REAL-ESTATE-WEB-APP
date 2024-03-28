/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YKywzUSHv2j
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <section key="1" className="w-full">

      <div className="relative w-full">
        
        <img alt="Hero" className="aspect-video object-center " height="400" src="/images/bghouse.jpg" width="" />
        <div className="absolute inset-0 flex items-center justify-center w-auto bg-black/40">
          <div className="container flex flex-col items-center gap-4 px-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl dark:text-gray-100">
                Find Your Perfect Home
              </h1>
              <p className="mx-auto max-w-[900px] text-lg text-white dark:text-gray-300">
                Discover the best properties in the most desirable locations.
              </p>
            </div>
            <Link
              className="inline-flex h-10 items-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Explore Properties
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}



