import React from 'react'
import { CardTitle, CardContent, CardHeader, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export default function Errors({data,error,loading}) {
  return (
  <>
  {loading && ( <p className="flex  items-center justify-center text-center my-10">
       <span className="loading loading-bars loading-lg "></span>
       
        </p>)}
    {!error && !loading && data.length == 0 && (
        <main className="flex-1 flex items-center justify-center p-4 text-center my-10">
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <div className="grid place-items-center w-20 h-20 rounded-full border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
            <SearchIcon className="w-10 h-10 text-gray-400 dark:text-gray-600" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">No records found</h2>
            <p className="text-gray-500 dark:text-gray-400">New records will appear here</p>
          </div>
        </div>
      </main>
    )}

      {/* error */}
   {error && (
       <Card className="w-full max-w-sm mx-auto  border-none shadow-none">
       <CardHeader className="flex flex-col items-center gap-2 p-4">
         <AlertCircleIcon className="w-12 h-12 text-red-500 dark:text-red-400" />
         <CardTitle className="text-center">{error}</CardTitle>
         <CardContent className="text-center">The request to the server failed.</CardContent>
       </CardHeader>
       <CardContent className="flex justify-center p-4">
         {/* <Button className="w-full max-w-xs" variant="outline" onClick={}>
           Retry
         </Button> */}
       </CardContent>
     </Card>
   )}
  </>
  )
}
function AlertCircleIcon(props) {
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
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
    )
  }
  
  
  function ArrowUpDownIcon(props) {
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
        <path d="m21 16-4 4-4-4" />
        <path d="M17 20V4" />
        <path d="m3 8 4-4 4 4" />
        <path d="M7 4v16" />
      </svg>
    )
  }
  
  
  function ChevronDownIcon(props) {
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
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }
  
  
  function ChevronUpIcon(props) {
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
        <path d="m18 15-6-6-6 6" />
      </svg>
    )
  }
  
  
  function FileEditIcon(props) {
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
        <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
      </svg>
    )
  }
  
  
  function SearchIcon(props) {
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
  
  function TrashIcon(props) {
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
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    )
  }