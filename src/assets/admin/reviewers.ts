import { env } from "~/env";

export const Reviewers =
  env.NEXT_PUBLIC_NODE_ENV === "production"
    ? [
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
        // R&Ds
        {
          value: "hemant.dae@gmail.com",
          label: "Hemant Kumar",
        },
        {
          value: "meshramdmrl@gmail.com",
          label: "D. Suresh Meshram",
        },
        {
          value: "agilan103@gmail.com",
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
      ]
    : [
        {
          value: "jaidi@hyderabad.bits-pilani.ac.in",
          label: "Jeevan Jaidi",
        },
        {
          value: "f20230740@hyderabad.bits-pilani.ac.in",
          label: "Shiv",
        },
        {
          value: "f20232163@hyderabad.bits-pilani.ac.in",
          label: "Achal",
        },
      ];
