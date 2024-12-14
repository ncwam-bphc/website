import { useState, useEffect } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from "~/components/ui/dialog"

interface AssignReviewersDialogProps {
  isOpen?: boolean;
  onClose?: () => void;
  onAssign: (reviewer: string) => void;
}

export function AssignReviewersDialog({ isOpen, onClose, onAssign }: AssignReviewersDialogProps) {
  const [reviewer, setReviewer] = useState("")

  const [error, setError] = useState("")

  const handleAssign = () => {
    onAssign(reviewer)
    setError("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger> <Button>Add Reviewer</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign Reviewers</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reviewer1" className="text-right">
              Reviewer 1
            </Label>
            <Input
              id="reviewer"
              value={reviewer}
              onChange={(e) => setReviewer(e.target.value)}
              className="col-span-3"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <DialogFooter>
          <Button onClick={handleAssign}>Assign Reviewers</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

