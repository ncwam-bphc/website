import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function ReviewerDashboard() {
  return (
    <div className="flex justify-center pt-96">
      <div className="space-y-8 text-center">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/review/manuscripts">
            <Button size="lg" className="h-16 w-full text-lg sm:w-48">
              Manuscripts
            </Button>
          </Link>
          <Link href="/review/abstracts">
            <Button size="lg" className="h-16 w-full text-lg sm:w-48" disabled>
              Abstracts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
