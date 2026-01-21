import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Abstract dark water texture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-6">
          Capstone Project 2025
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight text-balance mb-8">
          Revolutionizing healthcare through
          <br />
          <span className="font-medium">intelligent AI solutions</span>
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto text-pretty leading-relaxed">
          HealthSync AI is an innovative platform that combines machine learning 
          with clinical expertise to deliver personalized patient care and 
          streamlined healthcare operations.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
