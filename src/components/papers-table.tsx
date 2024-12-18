import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import type { Paper } from "~/lib/data";
import Link from "next/link";
import { formatDate } from "~/lib/utils";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Filter } from "lucide-react";

type PaperStatus = Paper['frontendStatus'] | 'all';

export function PapersTable({
  papers,
  filter,
  setFilter
}: {
  papers: Paper[] | undefined;
  filter: PaperStatus;
  setFilter: (filter: PaperStatus) => void;
}) {
  const statuses: PaperStatus[] = ['submitted', 'assigned', 'accepted', 'rejected'];

  const filteredPapers = papers?.filter(paper => filter === 'all' || paper.frontendStatus === filter);

  const ReviewerResponse = ({ response }: { response: boolean | null }) => {
    if (response === null) {
      return (
        <span className="font-bold uppercase text-orange-400">
          N/A
        </span>
      );
    }
    if (response === true) {
      return (
        <span className="font-bold uppercase text-green-400">
          TRUE
        </span>
      );
    }
    return (
      <span className="text-red-700 font-bold uppercase">
        FALSE
      </span>
    );
  };

  const getReviewerResponse = (paper: Paper, reviewerNumber: number) => {
    const reviewer = paper.reviewers?.find(r => r.for === reviewerNumber);
    return reviewer?.response ?? null;
  };

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filter by Status
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              checked={filter === 'all'}
              onCheckedChange={() => setFilter('all')}
            >
              All
            </DropdownMenuCheckboxItem>
            {statuses.map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={filter === status}
                onCheckedChange={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Paper Number</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Authors</TableHead>
            <TableHead>Submitter</TableHead>
            <TableHead>Reviewer 1</TableHead>
            <TableHead>Reviewer 2</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Submitted On</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(filteredPapers ?? []).map((paper) => (
            <TableRow key={paper.papernumber}>
              <TableCell>{paper.papernumber}</TableCell>
              <TableCell>{paper.title}</TableCell>
              <TableCell>{paper.authors}</TableCell>
              <TableCell>
                {paper.user?.name ?? paper.user?.email ?? "Unknown"}
              </TableCell>
              <TableCell>
                <ReviewerResponse response={getReviewerResponse(paper, 1)} />
              </TableCell>
              <TableCell>
                <ReviewerResponse response={getReviewerResponse(paper, 2)} />
              </TableCell>
              <TableCell>
                <span
                  className={`font-semibold uppercase ${paper.frontendStatus === "submitted" ? "text-yellow-500" :
                      paper.frontendStatus === "assigned" ? "text-blue-600" :
                        paper.frontendStatus === "accepted" ? "text-green-700" :
                          paper.frontendStatus === "rejected" ? "text-red-500" : ""
                    }`}
                >
                  {paper.frontendStatus}
                </span>
              </TableCell>
              <TableCell>{formatDate(paper.timestamp)}</TableCell>
              <TableCell>
                <Button asChild>
                  <Link href={`/admin/paper/${paper.papernumber}`}>
                    View Details
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}