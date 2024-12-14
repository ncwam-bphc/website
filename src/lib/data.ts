export type Paper = {
  papernumber: string;
  timestamp: Date;
  userId: string;
  affiliation: string;
  department: string;
  title: string;
  authors: string;
  upload: string | null;
  approved: boolean;
  status: string;
  user: {
    name: string | null;
    email: string | null;
  } | null;
};
export type Reviewer = {
  id: string;
  name: string;
};

export type Review = {
  id: string;
  paperId: string;
  reviewerId: string;
  status: "accepted" | "rejected";
  comments: string;
};

// Mock data
export const papers: Paper[] = [
  {
    papernumber: "1",
    timestamp: new Date(),
    userId: "user1",
    affiliation: "University A",
    department: "Computer Science",
    title: "Paper 1",
    authors: "Author 1",
    upload: null,
    approved: false,
    status: "submitted",
    user: {
      name: "User 1",
      email: "user1@example.com",
    },
  },
  {
    papernumber: "2",
    timestamp: new Date(),
    userId: "user2",
    affiliation: "University B",
    department: "Physics",
    title: "Paper 2",
    authors: "Author 2",
    upload: null,
    approved: false,
    status: "assigned",
    user: {
      name: "User 2",
      email: "user2@example.com",
    },
  },
  {
    papernumber: "3",
    timestamp: new Date(),
    userId: "user3",
    affiliation: "University C",
    department: "Mathematics",
    title: "Paper 3",
    authors: "Author 3",
    upload: null,
    approved: false,
    status: "reviewed",
    user: {
      name: "User 3",
      email: "user3@example.com",
    },
  },
  {
    papernumber: "4",
    timestamp: new Date(),
    userId: "user4",
    affiliation: "University D",
    department: "Biology",
    title: "Paper 4",
    authors: "Author 4",
    upload: null,
    approved: true,
    status: "accepted",
    user: {
      name: "User 4",
      email: "user4@example.com",
    },
  },
  {
    papernumber: "5",
    timestamp: new Date(),
    userId: "user5",
    affiliation: "University E",
    department: "Chemistry",
    title: "Paper 5",
    authors: "Author 5",
    upload: null,
    approved: false,
    status: "rejected",
    user: {
      name: "User 5",
      email: "user5@example.com",
    },
  },
];

export const reviewers: Reviewer[] = [
  { id: "1", name: "Reviewer 1" },
  { id: "2", name: "Reviewer 2" },
  { id: "3", name: "Reviewer 3" },
];

export const reviews: Review[] = [
  {
    id: "1",
    paperId: "1",
    reviewerId: "1",
    status: "accepted",
    comments: "Good paper",
  },
  {
    id: "2",
    paperId: "1",
    reviewerId: "2",
    status: "rejected",
    comments: "Needs improvement",
  },
];

// Utility functions
export function getPapers(status?: Paper["status"]) {
  return status ? papers.filter((paper) => paper.status === status) : papers;
}

export function getReviewers() {
  return reviewers;
}

export function getReviews(paperId: string) {
  return reviews.filter((review) => review.paperId === paperId);
}

export function assignReviewers(paperId: string, reviewerIds: string[]) {
  // In a real app, this would be an API call
  console.log(
    `Assigning reviewers ${reviewerIds.join(", ")} to paper ${paperId}`,
  );
}
