import Link from "next/link";

import HomeHeroAnimation from "@/components/client/home-hero-animation";
import TestimonialCarousel from "@/components/client/testimonial-carousel";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <Testimonials />
      <CTA /> 
    </section>
  );
}

function HeroSection() {
  return(
    <HomeHeroAnimation />
  )
}

function Testimonials() {
  return(
    <div className="flex flex-col gap-40 items-center justify-center h-[50vh] my-20">
      <div className="flex gap-20">
        <h2 className="font-semibold text-[2rem]">Testimonials</h2>
        <p className="w-[25vw] text-[1.25rem]">These are a few testimonials from our users! Coming from various backgrounds, they seem to enjoy the experience and benefits of using our app!</p>
      </div>
      <div>
        <TestimonialCarousel />
      </div>
    </div>
  )
}

function CTA() {
  return(
    <div className="flex flex-col gap-10 items-center justify-center h-[50vh] my-10 relative">
      <div className="absolute bottom-0 left-0 bg-green-900 w-[300px] h-[300px] blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 bg-green-400 w-[300px] h-[300px] blur-[150px]"></div>
      <h2 className="font-semibold text-[1.75rem]">Check out our features <Link href="/features" className="font-light text-green-900 hover:text-green-400 transition-all ease-in-out duration-200">here</Link></h2>
      <p className="text-[1.25rem]">OR</p>
      <h2 className="font-semibold text-[1.75rem]">Register Now!</h2>
      <p className="text-[1.25rem]">
        Interested in using <b>Money Tracker</b>? 
        Register <a href={process.env.APP_REGISTER_URL} target="_blank" className="cursor-pointer font-semibold text-green-900 hover:text-green-400 transition-all ease-in-out duration-200">here</a>
      </p>
    </div>
  )
}