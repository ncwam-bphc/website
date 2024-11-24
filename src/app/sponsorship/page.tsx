"use client";
import "~/styles/fullpagescroll.css";
import Section from "~/components/FullpageSection";
import bg from "~/assets/aboutconference/bg.webp";
import Image from "next/image";

export default function AboutusPage() {
  return (
    <main className="flex flex-col items-center gap-4 px-8">
      <Image
        src={bg}
        alt="Conference background"
        fill={true}
        objectFit="cover"
        className="-z-20 opacity-10"
        priority
      />
      <div className="flex items-center gap-4 md:flex-col">
        <div className="flex flex-col items-center gap-4 font-bold">
          <div className="mt-24 text-nowrap text-center text-3xl text-accent md:text-5xl">
            SPONSORSHIP
          </div>
        </div>
      </div>
      <div className="mt-4 text-justify text-lg md:text-xl">
        We, the Organizers of{" "}
        <span className="text-accent">
          National Conference on Challenges in Welding and Additive
          Manufacturing (NCWAM-2025)
        </span>
        , take immense pleasure in inviting sponsors from equipment and software
        suppliers, service providers and consultants to showcase one&apos;s
        products and services to the delegates and participants from academia,
        R&Ds and core industries. We earnestly request the sponsors to book the
        sponsorship category by online payment through the conference webpage.{" "}
        <span className="text-accent">
          The link will be active from 1st December 2024 onwards
        </span>
      </div>

      <div className="container mx-auto overflow-x-auto p-4">
        <table className="w-full">
          <thead>
            <tr>
              <th>
                <h2 className="px-2 text-lg font-medium customcol md:text-3xl">
                  Sponsorship Category
                </h2>
                <p className="mb-3"></p>
              </th>

              <th scope="col">
                <h2 className="customcol px-2 text-3xl font-medium">Diamond</h2>
                <p className="mb-3"></p>
              </th>
              <th scope="col">
                <h2 className="customcol px-2 text-3xl font-medium">
                  Platinum
                </h2>
                <p className="mb-3"></p>
              </th>
              <th scope="col">
                <h2 className="customcol px-2 text-3xl font-medium">Gold</h2>
                <p className="mb-3"></p>
              </th>
              <th scope="col">
                <h2 className="customcol px-2 text-3xl font-medium">Silver</h2>
                <p className="mb-3"></p>
              </th>
            </tr>
          </thead>
          <tbody className="space-y-1 divide-y text-center dark:divide-gray-300">
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-1 text-lg md:text-xl">
                  Logo display on conference webpage
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="customcol py-1 text-lg md:text-xl">
                  Logo and description on the conference handouts
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-1 text-lg md:text-xl">
                  Banner display (lounges)
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="customcol py-1 text-lg md:text-xl">
                  Exhibition stall
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Standard plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-1 text-lg md:text-xl">Industry talk</h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Premium plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="customcol py-1 text-lg md:text-xl">
                  Delegate registration
                </h3>
              </th>
              <td>
                <span className="block text-lg md:text-xl">3</span>
              </td>
              <td>
                <span className="block text-lg md:text-xl">2</span>
              </td>
              <td>
                <span className="block text-lg md:text-xl">1</span>
              </td>
              <td>
                <span className="block text-lg md:text-xl">1</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-1 text-lg md:text-xl">
                  Special mention during &quot;Vote of Thanks&quot;
                </h3>
              </th>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Included in Free plan"
                  className="mx-auto h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-center">
                <h3 className="py-1 text-lg text-accent md:text-2xl customcol">
                  Sponsorship amount (in lacs)
                </h3>
              </th>
              <td>
                <span className="block text-2xl">2.5</span>
              </td>
              <td>
                <span className="block text-2xl">2.0</span>
              </td>
              <td>
                <span className="block text-2xl">1.5</span>
              </td>
              <td>
                <span className="block text-2xl">1.0</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="max-w-[900px] self-center text-justify text-lg">
        For any queries, please drop an email (
        <a
          href="mailto:ncwam@hyderabad.bits-pilani.ac.in"
          className="text-blue-400"
        >
          ncwam@hyderabad.bits-pilani.ac.in
        </a>
        ) with an expression of interest, and the lead faculty member will get
        back and discuss about your requirements.
      </div>
    </main>
  );
}
