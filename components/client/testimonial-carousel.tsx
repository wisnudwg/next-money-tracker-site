"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      comment: 'This app really fulfills my needs of tracking my cash flow! It is rare that an app has this many features, I am in love!',
      name: 'Agile Alex',
      status: 'Owner',
      company: 'PT. ABC',
    },
    {
      comment: 'Even a developer needs this! I have my own standards of documenting things; this app complies with that standard!',
      name: 'Boolean Bob',
      status: 'Software Developer',
      company: 'Users & Co. Ltd',
    },
    {
      comment: 'You have no idea how much this app helps me; I often find myself mixing up company finances with my own. No more of that hassle!',
      name: 'Corporate Charlie',
      status: 'Head of Finance',
      company: 'Email Corp.',
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-[50vw]"
      plugins={[
        Autoplay({ delay: 4000 })
      ]}
    >
      <CarouselContent>
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <p className="text-[1.5rem]">{item.comment}</p>
              <br />
              <hr />
              <br />
              <div className="flex items-center justify-center gap-10">
                <div className="font-semibold text-[1.4rem]">{item.name}</div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <div>{item.status}</div>
                  <div className="font-semibold">{item.company}</div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}