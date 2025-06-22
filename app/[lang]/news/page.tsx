import { getDictionary } from "../dictionaries"
import { NewsGrid } from "@/components/news-grid"
import { NewsFilters } from "@/components/news-filters"

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: "en" | "ky" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{dict.news.title}</h1>

        <NewsFilters dict={dict} />
        <NewsGrid dict={dict} lang={lang} />
      </div>
    </div>
  )
}
