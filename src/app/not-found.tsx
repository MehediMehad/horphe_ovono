import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-2">
          <div className="relative mx-auto w-40 h-40 mb-8">
            <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-muted-foreground/20">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-20 w-20 text-muted-foreground/70" />
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Page not found</h1>

          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or perhaps never
            existed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

