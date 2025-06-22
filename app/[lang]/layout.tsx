import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getDictionary } from "./dictionaries"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ky" }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "ky" }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: lang === "en" ? "en_US" : "ky_KG",
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: "en" | "ky" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <html lang={lang} dir="ltr">
      <body className={inter.className}>
        <Navigation lang={lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  )
}
