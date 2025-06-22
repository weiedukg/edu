import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

interface NewsGridProps {
  dict: any
  lang: "en" | "ky"
}

export function NewsGrid({ dict, lang }: NewsGridProps) {
  const newsItems = [
    {
      id: 1,
      title: "New Engineering Lab Opens",
      excerpt:
        "State-of-the-art engineering laboratory equipped with latest technology opens for students. This facility will enhance practical learning experiences.",
      image: "/images/engineering-lab.jpg",
      date: "2024-01-15",
      category: "Academic",
    },
    {
      id: 2,
      title: "International Student Exchange Program",
      excerpt:
        "Partnership with European universities creates new opportunities for student exchange. Students can now study abroad for a semester.",
      image: "/images/international-students.jpg",
      date: "2024-01-10",
      category: "International",
    },
    {
      id: 3,
      title: "Research Excellence Award",
      excerpt:
        "College receives recognition for outstanding research contributions in innovation. This marks our third consecutive year of recognition.",
      image: "/images/research-award.jpg",
      date: "2024-01-05",
      category: "Achievement",
    },
    {
      id: 4,
      title: "Student Innovation Competition",
      excerpt:
        "Annual innovation competition showcases creative solutions from our talented students. Winners receive scholarships and mentorship.",
      image: "/images/student-competition.jpg",
      date: "2024-01-01",
      category: "Student Life",
    },
    {
      id: 5,
      title: "New Partnership with Tech Companies",
      excerpt:
        "Strategic partnerships with leading technology companies provide internship and job opportunities for graduates.",
      image: "/images/tech-partnership.jpg",
      date: "2023-12-28",
      category: "Partnership",
    },
    {
      id: 6,
      title: "Campus Sustainability Initiative",
      excerpt:
        "Green campus project launches with solar panels and waste reduction programs. Environmental consciousness is our priority.",
      image: "/images/sustainability.jpg",
      date: "2023-12-20",
      category: "Campus",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
            <Button variant="ghost" className="p-0 h-auto">
              {dict.news.read_more}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
