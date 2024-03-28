/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6A0EaxmZUi5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
export default function Lands() {
    return (
      <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Available Lands
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Your Perfect Land</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our selection of available lands. From sprawling countryside to coastal paradises, find the
                perfect location for your dream home.
              </p>
            </div>
          </div>
          <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
          <Card>
        <div className="aspect-[4/3] flex items-center p-6">
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              <CarouselItem>
                <div className="aspect-[4/3]">
                  <img
                    alt="House 1"
                    className="object-cover rounded"
                    height={300}
                    src="images/house1.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="aspect-[4/3]">
                  <img
                    alt="House 2"
                    className="object-cover rounded"
                    height={300}
                    src="images/house1.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="aspect-[4/3]">
                  <img
                    alt="House 3"
                    className="object-cover rounded"
                    height={300}
                    src="images/house1.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="aspect-[4/3]">
                  <img
                    alt="House 4"
                    className="object-cover rounded"
                    height={300}
                    src="images/house1.jpg"
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
           
          </Carousel>
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">Lakefront Cottage</h3>
          <p className="text-sm opacity-60 truncate">Muskoka, Canada</p>
          <p className="text-2xl font-semibold">$1,250,000</p>
        </CardContent>
      </Card>
    </section>
        </div>
      </section>
    )
  }
  
  