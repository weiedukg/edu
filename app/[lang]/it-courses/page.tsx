import { getDictionary } from "../dictionaries"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Briefcase, CheckCircle, Code, Database, Shield, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function ITCoursesPage({
  params,
}: {
  params: Promise<{ lang: "en" | "ky" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  const programIcons = {
    "Bachelor of Computer Science": Code,
    "Bachelor of Information Systems": Database,
    "Bachelor of Cybersecurity": Shield,
    "Master of Computer Science": Brain,
    "Компьютердик илимдер боюнча бакалавр": Code,
    "Маалыматтык системалар боюнча бакалавр": Database,
    "Киберкоопсуздук боюнча бакалавр": Shield,
    "Компьютердик илимдер боюнча магистр": Brain,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.it_courses.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">{dict.it_courses.subtitle}</p>

          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
            <Image src="/images/engineering-lab.jpg" alt="IT Laboratory" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold mb-2">Modern IT Facilities</h2>
                <p className="text-lg">State-of-the-art labs and equipment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{dict.it_courses.overview_title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{dict.it_courses.overview_text}</p>
            </CardContent>
          </Card>
        </section>

        {/* Programs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">{dict.it_courses.programs_title}</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {dict.it_courses.programs.map((program, index) => {
              const IconComponent = programIcons[program.name] || Code
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{program.name}</CardTitle>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{program.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{program.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, subIndex) => (
                          <Badge key={subIndex} variant="secondary" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" asChild>
                        <Link href={`/${lang}/admissions`}>{dict.it_courses.apply_now}</Link>
                      </Button>
                      <Button size="sm" variant="outline">
                        {dict.it_courses.learn_more}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Requirements & Career Opportunities */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <BookOpen className="h-6 w-6 mr-2" />
                  {dict.it_courses.requirements_title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {dict.it_courses.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Career Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Briefcase className="h-6 w-6 mr-2" />
                  {dict.it_courses.career_title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {dict.it_courses.careers.map((career, index) => (
                    <div key={index} className="flex items-center p-2 bg-muted/50 rounded">
                      <Users className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary text-primary-foreground rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your IT Career?</h2>
          <p className="text-xl mb-6">Join our comprehensive IT programs and build your future in technology</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href={`/${lang}/admissions`}>{dict.it_courses.apply_now}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link href={`/${lang}/contact`}>Contact Admissions</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
