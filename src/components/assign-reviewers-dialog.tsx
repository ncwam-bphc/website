"use client";
import * as React from "react";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Reviewers } from "~/assets/admin/reviewers";
import { Checkbox } from "./ui/checkbox";

interface AssignReviewersDialogProps {
  isOpen?: boolean;
  setIsOpen?: (val: boolean) => void;
  onAssign: (reviewer: string, sendEmail: boolean) => void;
}

export function AssignReviewersDialog({
  isOpen,
  setIsOpen,
  onAssign,
}: AssignReviewersDialogProps) {
  const [reviewer, setReviewer] = useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const [sendEmail, setSendEmail] = useState(true);

  const handleAssign = () => {
    if (!reviewer) {
      return;
    }
    onAssign(reviewer, sendEmail);
    setReviewer(null);
    setOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Add Reviewer</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign Reviewers</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {reviewer
                    ? Reviewers.find((r) => r.value === reviewer)?.label
                    : "Select reviewer..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput
                    placeholder="Search reviewer..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No reviewer found.</CommandEmpty>
                    <CommandGroup>
                      {Reviewers.map((r) => (
                        <CommandItem
                          key={r.value}
                          onSelect={() => {
                            setReviewer(r.value);
                            setOpen(false);
                          }}
                        >
                          {r.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              reviewer === r.value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <Checkbox
              checked={sendEmail}
              onCheckedChange={(val) => setSendEmail(!!val.valueOf())}
            />
            Send email to reviewer
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAssign} disabled={!reviewer}>
            Assign
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
