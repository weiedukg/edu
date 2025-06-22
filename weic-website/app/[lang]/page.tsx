import { getDictionary } from "./dictionaries"
import { Hero } from "@/components/hero"
import { MissionVision } from "@/components/mission-vision"
import { Stats } from "@/components/stats"
import { NewsPreview } from "@/components/news-preview"

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: "en" | "ky" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col">
      <Hero dict={dict} lang={lang} />
      <MissionVision dict={dict} />
      <Stats dict={dict} />
      <NewsPreview dict={dict} lang={lang} />
    </div>
  )
}
