import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface HeroProps {
  dict: any
  lang: "en" | "ky"
}

export function Hero({ dict, lang }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-campus.jpg" alt="College Campus" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{dict.home.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">{dict.home.hero.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href={`/${lang}/admissions`}>
                {dict.home.hero.cta_apply}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href={`/${lang}/about`}>{dict.home.hero.cta_explore}</Link>
            </Button>
            <Button size="lg" variant="ghost" className="text-lg px-8 py-3 text-white hover:bg-white/20">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
