export default function Features() {
  return(
    <section>
      <HeroSection />
      <FeaturesSection />
    </section>
  )
}

function HeroSection() {
  return(
    <div className="flex flex-col items-center justify-center h-screen gap-20 relative">
      <div className="absolute top-0 left-0 bg-green-900 w-[400px] h-[400px] blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 bg-green-400 w-[400px] h-[400px] blur-[150px]"></div>
      <h1 className="font-semibold text-[3rem]">Features</h1>
      <p className="text-[1.5rem]">Curious about our features? No worries! Scroll down to see our features in full display!</p>
    </div>
  )
}

function FeaturesSection() {
  return(
    <div className="flex items-center justify-center h-screen gap-20">
      <div>Features Carousel placeholder</div>
    </div>
  )
}