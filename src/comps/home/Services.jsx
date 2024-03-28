/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Nz1TBP27hmn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Services() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
              Providing you with the best real estate services.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-10 md:grid-cols-3 md:items-center md:gap-16 lg:gap-20">
            <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
              <div className="flex items-center justify-center p-6 rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                <HomeIcon className="w-8 h-8 text-gray-400" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-bold tracking-tighter">Property Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Let us take care of your property.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
              <div className="flex items-center justify-center p-6 rounded-xl border border-gray-200 bg-white dark:border-gray-800">
                <AtSignIcon className="w-8 h-8 text-gray-400" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-bold tracking-tighter">Sales & Leasing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Find your dream home with us.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
              <div className="flex items-center justify-center p-6 rounded-xl border border-gray-200 bg-white dark:border-gray-800">
                <LandmarkIcon className="w-8 h-8 text-gray-400" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-bold tracking-tighter">Consultation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Expert advice for your real estate needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function AtSignIcon(props) {
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
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
    )
  }
  
  
  function HomeIcon(props) {
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  function LandmarkIcon(props) {
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
        <line x1="3" x2="21" y1="22" y2="22" />
        <line x1="6" x2="6" y1="18" y2="11" />
        <line x1="10" x2="10" y1="18" y2="11" />
        <line x1="14" x2="14" y1="18" y2="11" />
        <line x1="18" x2="18" y1="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    )
  }
  