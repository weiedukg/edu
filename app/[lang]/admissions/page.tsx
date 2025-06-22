import { getDictionary } from "../dictionaries"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, DollarSign, Globe, FileText } from "lucide-react"

export default async function AdmissionsPage({
  params,
}: {
  params: Promise<{ lang: "en" | "ky" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{dict.admissions.title}</h1>

        {/* Requirements Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="h-6 w-6 mr-2" />
                {dict.admissions.requirements_title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {dict.admissions.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">{dict.admissions.process_title}</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {dict.admissions.process.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tuition & Fees */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <DollarSign className="h-6 w-6 mr-2" />
                  {dict.admissions.fees_title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">{dict.admissions.fees_text}</p>
                <Button className="w-full">View Detailed Fee Structure</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Globe className="h-6 w-6 mr-2" />
                  {dict.admissions.international_title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">{dict.admissions.international_text}</p>
                <Button variant="outline" className="w-full">
                  International Student Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-primary text-primary-foreground rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-6">Start your journey with us today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Schedule Campus Visit
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
