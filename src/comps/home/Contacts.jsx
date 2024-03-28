/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QL2OxJnrHqa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Contacts() {
    return (
      <section className="w-full py-12 md:py-24">
        <div className="container grid gap-12 px-4 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Our Contacts</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Contact us for more information about our listings or to speak with an agent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Main Office</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Stop by our office during business hours or give us a call.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPinIcon className="w-6 h-6 flex-shrink-0" />
                <div className="space-y-1.5">
                  <p className="font-medium">1234 Sunshine Rd</p>
                  <p>San Francisco, CA 94110</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="w-6 h-6 flex-shrink-0" />
                <a className="underline underline-offset-2" href="#">
                  123-456-7890
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MailOpenIcon className="w-6 h-6 flex-shrink-0" />
                <a className="underline underline-offset-2" href="#">
                  info@example.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Contact"
                className="rounded-lg object-cover"
                height="300"
                src="images/house1.jpg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function MailOpenIcon(props) {
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
        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
      </svg>
    )
  }
  
  
  function MapPinIcon(props) {
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
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
  
  
  function PhoneIcon(props) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  