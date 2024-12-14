import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { Button } from "~/components/ui/button"
import { Paper } from "~/lib/data"
import Link from "next/link"
import { formatDate } from "~/lib/utils"

export function PapersTable({ papers }: { papers: Paper[] | undefined }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Paper Number</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Authors</TableHead>
          <TableHead>Submitter</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Submitted On</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(papers ?? []).map((paper) => (
          <TableRow key={paper.papernumber}>
            <TableCell>{paper.papernumber}</TableCell>
            <TableCell>{paper.title}</TableCell>
            <TableCell>{paper.authors}</TableCell>
            <TableCell>
              {paper.user?.name || paper.user?.email || 'Unknown'}
            </TableCell>
            <TableCell>
              <span className={`
                ${paper.status === 'submitted' && 'text-yellow-500'}
                ${paper.status === 'assigned' && 'text-blue-500'}
                ${paper.status === 'reviewed' && 'text-green-500'}
                ${paper.status === 'accepted' && 'text-green-700'}
                ${paper.status === 'rejected' && 'text-red-500'}
                uppercase font-semibold
              `}>
                {paper.status}
              </span>
            </TableCell>
            <TableCell>{formatDate(paper.timestamp)}</TableCell>
            <TableCell>
              <Button asChild>
                <Link href={`/admin/paper/${paper.papernumber}`}>View Details</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}