import Link from "next/link"
import { Button } from "~/components/ui/button"

export default function AdminPage() {
  return (
    <div className="flex justify-center pt-96">
      <div className="text-center space-y-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/admin/manuscripts">
            <Button size="lg" className="w-full sm:w-48 h-16 text-lg">
              Manuscripts
            </Button>
          </Link>
          <Link href="/admin/abstracts">
            <Button size="lg" className="w-full sm:w-48 h-16 text-lg">
              Abstracts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

