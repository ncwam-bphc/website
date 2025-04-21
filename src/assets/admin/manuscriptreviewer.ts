import { env } from "~/env";

export const Reviewers =
  env.NEXT_PUBLIC_NODE_ENV === "production"
    ? [
        { value: "shajualbert@gmail.com", label: "Dr. K. Shaju Albert" },
        { value: "hemant.dae@gmail.com", label: "Dr. Hemant Kumar" },
        { value: "agilan103@gmail.com", label: "Dr. M. Agilan" },
        { value: "johnmfrg.drdl@gov.in", label: "Dr. John Rozario Jegaraj" },
        { value: "kaushal.memsiitb@gmail.com", label: "Mr. Kaushal Kishore" },
        { value: "abhiknc@iisc.ac.in", label: "Prof. Abhik N. Choudhury" },
        { value: "gmkarthik.mec@itbhu.ac.in", label: "Prof. G.M. Karthik" },
        { value: "rakesh@iitdh.ac.in", label: "Prof. Rakesh Lingam" },
        {
          value: "rlnarayan@mse.iitd.ac.in",
          label: "Prof. R. Lakshmi Narayan",
        },
        { value: "buchibabu@iitpkd.ac.in", label: "Prof. Buchibabu Vicharapu" },
        { value: "kishorebabu@nitw.ac.in", label: "Prof. N. Kishore Babu" },
        { value: "talari@nitw.ac.in", label: "Prof. Mahesh Kumar Talari" },
        {
          value: "fasee1819@gmail.com",
          label: "Prof. Mohammad Faseeulla Khan",
        },
        {
          value: "smmanladan.mec@buk.edu.ng",
          label: "Prof. Sunusi Marwana Manladan",
        },
        {
          value: "savyasachinb@gmail.com",
          label: "Prof. Nellikode Savyasachi",
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
