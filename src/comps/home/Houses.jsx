/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FXKaDl8dLqe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import useFetch from "@/libs/hooks/useFetch"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Errors from "../Errors"
export default function Houses() {
  const { cards, isErrorC, isPendingC } = useFetch("houses")  
const router = useRouter()
  return (
    <section id="houses" className="w-full py-12 lg:py-24">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Available houses
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Charming Houses, Must-See!</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-450">
            Step into the welcoming embrace of this impeccably
           designed and thoughtfully crafted houses, where spaciousness meets
           modern elegance, offering you the perfect canvas to paint your dreams and create lasting memories
          </p>
        </div>
      </div>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start my-5">
  {cards.map(card =>(
        <Card key={card.id}>
        <div className="aspect-[4/3] flex items-center p-6">
         
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
             {card.images.map(image =>(
                <CarouselItem  key={image}>
                <div  className="aspect-[4/3]">
                  <Image
                    alt={card.name}
                    className="object-cover rounded cursor-pointer"
                    height={350}
                    src={image}
                    style={{
                      aspectRatio: "450/350",
                      objectFit: "cover",
                    }}
                    width={450}
                   
                  />
                </div>
              </CarouselItem>
             ))}
            
            </CarouselContent>
           
          </Carousel>
        </div>
        <CardContent className="p-6">
        <div className="flex items-end justify-between">
       <div> <h3 className="text-lg font-semibold">{card.name}</h3>
          <p className="text-sm opacity-60 truncate">{card.location}</p>
          <p className="text-2xl font-semibold">{card.price.toUpperCase()}</p>
        </div>
        <Button size="icon" variant="outline" onClick={()=>{router.push(`details/${card.id}`)}} >
            <ArrowRightIcon className="h-4 w-4"  />
              <span className="sr-only">View</span>
            </Button>
        </div>
      
        </CardContent>
      </Card>
  ))}
 
</section> 
<Errors data={cards} loading={isPendingC} error={isErrorC} />
    </div>
  </section>
  )
}




