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
                  Bishkek, Kyrgyzstan 720001
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
                <p className="text-lg">+996 312 54-78-90</p>
                <p className="text-sm text-muted-foreground mt-1">Admissions: +996 312 54-78-91</p>
                <p className="text-sm text-muted-foreground">International: +996 312 54-78-92</p>
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
                <p className="text-lg">info@wei.edu.kg</p>
                <p className="text-sm text-muted-foreground mt-1">admissions@wei.edu.kg</p>
                <p className="text-sm text-muted-foreground">international@wei.edu.kg</p>
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
              <div className="h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.1234567890123!2d74.5975!3d42.8746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc42c84c1b%3A0x123456789abcdef!2s123%20Education%20Street%2C%20Bishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2skg!4v1234567890123!5m2!1sen!2skg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kyrgyzstan Future Education & Innovation Institute Location"
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
