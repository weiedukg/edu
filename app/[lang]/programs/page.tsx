import { getDictionary } from "../dictionaries"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, GraduationCap } from "lucide-react"

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ lang: "en" | "ky" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const itCourses = [
    {
      title: dict.programs.cs_bachelor_title,
      description: dict.programs.cs_bachelor_desc,
      duration: "4 Years",
      level: "Bachelor's Degree",
      modules: ["Programming Fundamentals", "Data Structures", "AI", "Web Development", "Databases"],
    },
    {
      title: dict.programs.cybersec_master_title,
      description: dict.programs.cybersec_master_desc,
      duration: "2 Years",
      level: "Master's Degree",
      modules: ["Network Security", "Ethical Hacking", "Cryptography", "Risk Management", "Digital Forensics"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">{dict.programs.title}</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">{dict.programs.subtitle}</p>

        <div className="space-y-8">
          {itCourses.map((course, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 pt-2">
                  <span className="flex items-center gap-1.5"><GraduationCap className="h-4 w-4" /> {course.level}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {course.duration}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <h4 className="font-semibold mb-2">{dict.programs.key_modules}</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.modules.map((mod, i) => (
                    <Badge key={i} variant="secondary">{mod}</Badge>
                  ))}
                </div>
                <Button>
                  {dict.programs.learn_more}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
