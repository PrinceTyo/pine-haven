import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function ReviewSection() {
  return (
    <section className="py-20 text-black flex items-center justify-center gap-12 bg-gray-100">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-7xl"
      >
        <div>
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <p className="tracking-widest uppercase">Testimonial</p>
            <h2 className="text-5xl font-bold">What Our Clients Says</h2>
            <p className="w-3/4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsam
              nostrum laboriosam et assumenda earum possimus vero, voluptatum
              magnam ipsa.
            </p>
          </div>
          <CarouselContent className="mt-10 ">
            <CarouselItem className="md:basis-auto lg:basis-1/3">
              <div className="p-1">
                <div className="rounded-none w-full bg-white p-6 space-y-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="https://moliva.themenix.com/assets/img/avatars/a1.jpg"
                          alt="Avatar Review"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="text-xl font-semibold">John Doe</h1>
                        <p className="text-gray-700 text-sm">
                          Halstat, Austria
                        </p>
                      </div>
                    </div>
                    <div>
                      <FaQuoteRight className="w-14 h-14 text-gray-100" />
                    </div>
                  </div>
                  <blockquote className="italic text-gray-700">
                    Our trip to Moliva was amazing! Nusa Trip Travel Agency
                    organized everything perfectly, from the hotels to the
                    sightseeing spots. I was very impressed and will definitely
                    return!
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                    <span className="bg-secondary rounded-none py-1 px-1.5 text-white font-medium text-sm">
                      Jun 12 25
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-auto lg:basis-1/3">
              <div className="p-1">
                <div className="rounded-none w-full bg-white p-6 space-y-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="https://moliva.themenix.com/assets/img/avatars/a2.jpg"
                          alt="Avatar Review"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="text-xl font-semibold">Emily Smith</h1>
                        <p className="text-gray-700 text-sm">Roma, Italy</p>
                      </div>
                    </div>
                    <div>
                      <FaQuoteRight className="w-14 h-14 text-gray-100" />
                    </div>
                  </div>
                  <blockquote className="italic text-gray-700">
                    Our trip to Moliva was amazing! Nusa Trip Travel Agency
                    organized everything perfectly, from the hotels to the
                    sightseeing spots. I was very impressed and will definitely
                    return!
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                    <span className="bg-secondary rounded-none py-1 px-1.5 text-white font-medium text-sm">
                      Jun 12 25
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-auto lg:basis-1/3">
              <div className="p-1">
                <div className="rounded-none w-full bg-white p-6 space-y-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="https://moliva.themenix.com/assets/img/avatars/a3.jpg"
                          alt="Avatar Review"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="text-xl font-semibold">Alex Mark</h1>
                        <p className="text-gray-700 text-sm">Busan, Korea</p>
                      </div>
                    </div>
                    <div>
                      <FaQuoteRight className="w-14 h-14 text-gray-100" />
                    </div>
                  </div>
                  <blockquote className="italic text-gray-700">
                    Our trip to Moliva was amazing! Nusa Trip Travel Agency
                    organized everything perfectly, from the hotels to the
                    sightseeing spots. I was very impressed and will definitely
                    return!
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                    <span className="bg-secondary rounded-none py-1 px-1.5 text-white font-medium text-sm">
                      Jun 12 25
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-auto lg:basis-1/3">
              <div className="p-1">
                <div className="rounded-none w-full bg-white p-6 space-y-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="https://moliva.themenix.com/assets/img/avatars/a4.jpg"
                          alt="Avatar Review"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="text-xl font-semibold">Ariol Deep</h1>
                        <p className="text-gray-700 text-sm">Kyoto, Japan</p>
                      </div>
                    </div>
                    <div>
                      <FaQuoteRight className="w-14 h-14 text-gray-100" />
                    </div>
                  </div>
                  <blockquote className="italic text-gray-700">
                    Our trip to Moliva was amazing! Nusa Trip Travel Agency
                    organized everything perfectly, from the hotels to the
                    sightseeing spots. I was very impressed and will definitely
                    return!
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                    <span className="bg-secondary rounded-none py-1 px-1.5 text-white font-medium text-sm">
                      Jun 12 25
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-auto lg:basis-1/3">
              <div className="p-1">
                <div className="rounded-none w-full bg-white p-6 space-y-4 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src="https://moliva.themenix.com/assets/img/avatars/a3.jpg"
                          alt="Avatar Review"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="text-xl font-semibold">Alex Mark</h1>
                        <p className="text-gray-700 text-sm">Busan, Korea</p>
                      </div>
                    </div>
                    <div>
                      <FaQuoteRight className="w-14 h-14 text-gray-100" />
                    </div>
                  </div>
                  <blockquote className="italic text-gray-700">
                    Our trip to Moliva was amazing! Nusa Trip Travel Agency
                    organized everything perfectly, from the hotels to the
                    sightseeing spots. I was very impressed and will definitely
                    return!
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                    <span className="bg-secondary rounded-none py-1 px-1.5 text-white font-medium text-sm">
                      Jun 12 25
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </div>
        <div>
          <CarouselPrevious className="left-0 top-30 rounded-none" />
          <CarouselNext className="right-0 top-30 rounded-none" />
        </div>
      </Carousel>
    </section>
  );
}
