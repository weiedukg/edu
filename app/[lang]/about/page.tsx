import { getDictionary } from "../dictionaries"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, BookOpen } from "lucide-react"
import Image from "next/image"

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: "en" | "ky" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const facultyMembers = [
    {
      name: "Dr. Aida Nazarova",
      position: "Dean of Engineering",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Computer Science & AI",
    },
    {
      name: "Prof. Bakyt Orozov",
      position: "Head of Business Studies",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "International Business",
    },
    {
      name: "Dr. Gulnara Asanova",
      position: "Director of Research",
      image: "/placeholder.svg?height=200&width=200",
      specialization: "Educational Innovation",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{dict.about.title}</h1>

        {/* History Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">{dict.about.history_title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{dict.about.history_text}</p>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/placeholder.svg?height=320&width=480"
                alt="College Campus"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-2">{dict.about.faculty_title}</h2>
            <p className="text-lg text-muted-foreground">{dict.about.faculty_subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-muted-foreground">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{member.specialization}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">{dict.about.achievements_title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {dict.about.achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="flex items-center p-6">
                  <Award className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                  <p className="text-lg">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Statistics */}
        <section className="bg-muted rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-2" />
              <div className="text-3xl font-bold">2,500+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="h-12 w-12 text-primary mb-2" />
              <div className="text-3xl font-bold">150+</div>
              <div className="text-muted-foreground">Faculty</div>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-12 w-12 text-primary mb-2" />
              <div className="text-3xl font-bold">25+</div>
              <div className="text-muted-foreground">Programs</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-2" />
              <div className="text-3xl font-bold">15+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
