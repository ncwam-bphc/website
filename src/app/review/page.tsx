import Link from "next/link"
import { Button } from "~/components/ui/button"

export default function ReviewerDashboard() {
  return (
    <div className="flex justify-center pt-96">
      <div className="text-center space-y-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/review/manuscripts">
            <Button size="lg" className="w-full sm:w-48 h-16 text-lg">
              Manuscripts
            </Button>
          </Link>
          <Link href="/review/abstracts">
            <Button size="lg" className="w-full sm:w-48 h-16 text-lg">
              Abstracts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

