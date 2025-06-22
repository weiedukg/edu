import { getDictionary } from "../dictionaries"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: "en" | "ky" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{dict.contact.title}</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {dict.contact.address_title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  123 Education Street
                  <br />
                  Bishkek, Kyrgyzstan 720000
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  {dict.contact.phone_title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">+996 312 123 456</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  {dict.contact.email_title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">info@weic.kg</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>{dict.contact.form_title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm dict={dict} />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-12">
          <Card>
            <CardContent className="p-0">
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive Map Placeholder</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
