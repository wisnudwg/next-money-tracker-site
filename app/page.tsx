import Link from "next/link";

import HomeHeroAnimation from "@/components/client/home-hero-animation";
import TestimonialCarousel from "@/components/client/testimonial-carousel";

export default function Home() {
  return (
    <section className="px-1 lg:px-0">
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
    <div className="lg:flex flex-col gap-40 items-center justify-center h-[50vh] my-20">
      <div className="text-center lg:text-left lg:flex gap-20">
        <h2 className="font-semibold text-[2rem]">Testimonials</h2>
        <p className="text-[1.25rem] lg:w-[25vw]">These are a few testimonials from our users! Coming from various backgrounds, they seem to enjoy the experience and benefits of using our app!</p>
      </div>
      <div className="my-20 lg:my-0">
        <TestimonialCarousel />
      </div>
    </div>
  )
}

function CTA() {
  return(
    <div className="flex flex-col gap-10 items-center justify-center h-[100vh] lg:h-[50vh] my-10 relative">
      <div className="absolute bottom-30 lg:bottom-0 left-0 bg-green-900 w-[100px] h-[100px] blur-[60px] lg:w-[300px] lg:h-[300px] lg:blur-[150px]"></div>
      <div className="absolute bottom-30 lg:bottom-0 right-0 bg-green-400 w-[100px] h-[100px] blur-[60px] lg:w-[300px] lg:h-[300px] lg:blur-[150px]"></div>
      <h2 className="font-semibold text-[1.75rem] text-center lg:text-left">Check out our features <Link href="/features" className="font-light text-green-900 hover:text-green-400 transition-all ease-in-out duration-200">here</Link></h2>
      <p className="text-[1.25rem]">OR</p>
      <h2 className="font-semibold text-[1.75rem]">Register Now!</h2>
      <p className="text-[1.25rem] text-center lg:text-left">
        Interested in using <b>Money Tracker</b>? 
        Register <a href={process.env.APP_REGISTER_URL} target="_blank" className="cursor-pointer font-semibold text-green-900 hover:text-green-400 transition-all ease-in-out duration-200">here</a>
      </p>
    </div>
  )
}