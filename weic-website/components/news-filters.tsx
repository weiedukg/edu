"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface NewsFiltersProps {
  dict: any
}

export function NewsFilters({ dict }: NewsFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filters = [
    { id: "all", label: dict.news.filter_all },
    { id: "academic", label: dict.news.filter_academic },
    { id: "student", label: dict.news.filter_student },
    { id: "events", label: dict.news.filter_events },
  ]

  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={dict.news.search_placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => setActiveFilter(filter.id)}
            className="text-sm"
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
