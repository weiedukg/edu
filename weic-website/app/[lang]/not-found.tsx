import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="text-muted-foreground mb-6">Could not find the requested page.</p>
        <Button asChild>
          <Link href="/en">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
