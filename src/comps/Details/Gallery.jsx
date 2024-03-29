import Image from "next/image";
import Link from "next/link";
import Errors from "../Errors";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T3HYyTqmI5E
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Gallery({data,loading,error}) {
    return (
        <>
        <div className="my-6">

        <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
          Gallery
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover your dream space here!</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-450">
          Explore our dynamic real estate gallery—where dreams meet homes
           
          </p>
        </div>
      </div>
      <div className="grid my-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
      {data?.images?.map(image =>(
        <Link  href={image} target="_blank"  key={image}>

      <Image   
         alt={data.name}
         className="aspect-video overflow-hidden object-cover rounded-lg border border-gray-200 transition-transform transform-gpu dark:border-gray-800 hover:scale-105 aspect-16/9"
         height={600}
         src={image}
         width={800}
       />
        </Link>
      ))}
     
      </div>
      <Errors data={data} loading={loading} error={error} />
        </div>
        

        </>
      
    )
  }
  
  