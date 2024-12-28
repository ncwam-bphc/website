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

const Reviewers = [
  // IITs
  {
    value: "gmkarthik.mec@itbhu.ac.in",
    label: "G.M. Karthik",
  },
  {
    value: "jpmisra.mec@itbhu.ac.in",
    label: "Joy Prakash Misra",
  },
  {
    value: "pawan.mec@iitbhu.ac.in",
    label: "Pawan Sharma",
  },
  {
    value: "s.karagadde@iitb.ac.in",
    label: "Shyamprasad Karagadde",
  },
  {
    value: "rakesh@iitdh.ac.in",
    label: "Rakesh Lingam",
  },
  {
    value: "rlnarayan@mse.iitd.ac.in",
    label: "R. Lakshmi Narayan",
  },
  {
    value: "buchibabu@iitpkd.ac.in",
    label: "Buchibabu Vicharapu",
  },
  {
    value: "shiva.sekar@iitjammu.ac.in",
    label: "Siva S",
  },
  {
    value: "sohammujumdar@iitb.ac.in",
    label: "Soham Muzumdar",
  },
  {
    value: "udupaanirudh@gmail.com",
    label: "Anirudh Udupa",
  },
  // NITs
  {
    value: "kishorebabu@nitw.ac.in",
    label: "Kishore Babu Nagumothu",
  },
  {
    value: "talari@nitw.ac.in",
    label: "Mahesh Kumar Talari",
  },
  {
    value: "shivraman@nitw.ac.in",
    label: "Shivraman",
  },
  {
    value: "manjaiah.m@nitw.ac.in",
    label: "Manjaiah M",
  },
  {
    value: "adepu_kumar7@nitw.ac.in",
    label: "Adepu Kumar",
  },
  {
    value: "ksp@nitt.edu",
    label: "Katakam Siva Prasad",
  },
  // R&Ds
  {
    value: "hemant@igcar.gov.in",
    label: "Hemant Kumar",
  },
  {
    value: "meshram.dmrl@gov.in",
    label: "D. Suresh Meshram",
  },
  {
    value: "m_agilan@vssc.gov.in",
    label: "M. Agilan",
  },
  {
    value: "johnmfrg.drdl@gov.in",
    label: "John Rozario Jegaraj",
  },
  {
    value: "kaushal.memsiitb@gmail.com",
    label: "Kaushal Kishore",
  },
  // BITS Pilani
  {
    value: "ravi.vidyarthyfme@hyderabad.bits-pilani.ac.in",
    label: "Ravi Shanker Vidyarthy",
  },
  {
    value: "ksingh@hyderabad.bits-pilani.ac.in",
    label: "Kundan Kumar Singh",
  },
  {
    value: "sujith@hyderabad.bits-pilani.ac.in",
    label: "Sujith R",
  },
  {
    value: "ksuresh@hyderabad.bits-pilani.ac.in",
    label: "Kurra Suresh",
  },
  {
    value: "pavankp@hyderabad.bits-pilani.ac.in",
    label: "Pavan Kumar P",
  },
  {
    value: "amrita@hyderabad.bits-pilani.ac.in",
    label: "Amrita Priyadarshini",
  },
  {
    value: "amol@hyderabad.bits-pilani.ac.in",
    label: "Amol Vuppuluri",
  },
  {
    value: "pj.sharma@pilani.bits-pilani.ac.in",
    label: "P. Jayaprakash Sharma",
  },
  {
    value: "jaidi@hyderabad.bits-pilani.ac.in",
    label: "Jeevan Jaidi",
  },
];

interface AssignReviewersDialogProps {
  isOpen?: boolean;
  onClose?: (val: boolean) => void;
  onAssign: (reviewer: string) => void;
}

export function AssignReviewersDialog({
  isOpen,
  onClose,
  onAssign,
}: AssignReviewersDialogProps) {
  const [reviewer, setReviewer] = useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleAssign = () => {
    if (!reviewer) {
      return;
    }
    onAssign(reviewer);
    setReviewer(null);
    setOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button>Add Reviewer</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign Reviewers</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="w-full max-w-md">
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
