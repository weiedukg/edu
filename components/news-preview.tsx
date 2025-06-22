import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NewsPreviewProps {
  dict: any
  lang: "en" | "ky"
}

export function NewsPreview({ dict, lang }: NewsPreviewProps) {
  const newsItems = [
    {
      id: 1,
      title: "New Engineering Lab Opens",
      excerpt: "State-of-the-art engineering laboratory equipped with latest technology opens for students.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-15",
      category: "Academic",
    },
    {
      id: 2,
      title: "International Student Exchange Program",
      excerpt: "Partnership with European universities creates new opportunities for student exchange.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-10",
      category: "International",
    },
    {
      id: 3,
      title: "Research Excellence Award",
      excerpt: "College receives recognition for outstanding research contributions in innovation.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-05",
      category: "Achievement",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{dict.home.news.title}</h2>
            <Button variant="outline" asChild>
              <Link href={`/${lang}/news`}>
                {dict.home.news.view_all}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
