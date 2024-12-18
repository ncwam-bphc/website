export type PaperFrontendStatus = 
  | 'submitted' 
  | 'assigned' 
  | 'accepted' 
  | 'rejected';

export type Paper = {
  papernumber: string;
  frontendStatus: PaperFrontendStatus;
  timestamp: Date;
  userId: string;
  affiliation: string;
  department: string;
  title: string;
  authors: string;
  upload: string | null;
  status: boolean | null;
  user: {
    name: string;
    email: string;
  };
  reviewers: {
    response: boolean | null;
    for: number;
    reviewer: {
      id: string;
      role: string;
      image: string | null;
      name: string | null;
      email: string;
      emailVerified: Date | null;
      phone: string;
    };
    comments: string | null;
  }[];
}