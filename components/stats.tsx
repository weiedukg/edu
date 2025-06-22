import { Users, BookOpen, Globe, Award } from "lucide-react"

interface StatsProps {
  dict: any
}

export function Stats({ dict }: StatsProps) {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: dict.home.stats.students,
    },
    {
      icon: BookOpen,
      number: "150+",
      label: dict.home.stats.faculty,
    },
    {
      icon: Globe,
      number: "25+",
      label: dict.home.stats.programs,
    },
    {
      icon: Award,
      number: "15+",
      label: dict.home.stats.countries,
    },
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <stat.icon className="h-12 w-12 mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
