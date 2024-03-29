/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SGPdu9UyhEO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Herodetails({data,loading,error}) {
  return (
    <div className="bg-white">
   
      <header className="relative">
        <img alt={data?.name} className="w-full h-[500px] object-cover" src={data?.thumbnail}  />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-sm uppercase tracking-widest">Yes this one is for you</p>
          {!loading && (
            <>
              <h1 className="text-white text-5xl font-bold">{data?.name}.</h1>
            <p className="text-white text-lg mt-4">
             {data?.description}
            </p>
            </>
          )}
          {loading && (
            <span className="loading loading-dots loading-lg"></span>
          )}
          </div>
        </div>
      </header>
    

    </div>
  )
}

