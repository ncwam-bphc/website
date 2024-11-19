"use client";
import "~/styles/fullpagescroll.css";
import Section from "~/components/FullpageSection";
import bg from "~/assets/aboutconference/bg.webp";

export default function AboutusPage() {
  return (
    <div className="container">
      <main className="main">
        <Section bgImage={bg} className="flex-col gap-4">
          <div className="flex items-center gap-4 md:flex-col">
            <div className="flex flex-col items-center gap-4 font-bold">
              <div className="text-nowrap text-center text-3xl mt-24 text-accent md:text-5xl">
                SPONSORSHIP
              </div>
            </div>
          </div>
          <div className="text-center text-xl mt-4">
            We, the Organizers of National Conference on Challenges in Welding and Additive Manufacturing (NCWAM-2025), take immense pleasure in inviting sponsors from equipment and software suppliers, service providers and consultants to showcase one’s products and services to the delegates and participants from academia, R&Ds and core industries. We earnestly request the sponsors to book the sponsorship category by online payment through the conference webpage. The link will be active from 1st December 2024 onwards
          </div>

          	<div className="container mx-auto p-4 overflow-x-auto">
		<table className="w-full">
			<thead>
				<tr>
					<th>
          <h2 className="px-2 text-3xl font-medium">Sponsorship Category</h2>
						<p className="mb-3">
						</p>
					</th>

	
					<th scope="col">
						<h2 className="px-2 text-3xl font-medium">Diamond</h2>
						<p className="mb-3">
						</p>
					</th>
					<th scope="col">
						<h2 className="px-2 text-3xl font-medium">Platinum</h2>
						<p className="mb-3">
						</p>
					</th>
					<th scope="col">
						<h2 className="px-2 text-3xl font-medium">Gold</h2>
						<p className="mb-3">
						</p>
					</th>
          <th scope="col">
						<h2 className="px-2 text-3xl font-medium">Silver</h2>
						<p className="mb-3">
						</p>
					</th>
				</tr>
			</thead>
			<tbody className="space-y-1 text-center divide-y dark:divide-gray-300">
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-1">Logo display on conference webpage</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
          <td>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
          </td>
				</tr>
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-1">Logo and description on the conference handouts</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
          <td>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
          </td>
				</tr>
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-1">Banner display (lounges)</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-400">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</td>
          <td>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-400">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
          </td>
				</tr>
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-1">Exhibition stall</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
          <td>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-400">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
          </td>
				</tr>
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-1">Industry talk</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-400">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-400">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
					</td>
          <td>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-400">
							<path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
						</svg>
            </td>
				</tr>
				<tr>
					<th scope="row" className="text-left">
						<h3 className="py-1">Delegate registration</h3>
					</th>
					<td>
						<span className="block text-sm">3</span>
					</td>
					<td>
						<span className="block text-sm">2</span>
					</td>
					<td>
						<span className="block text-sm">1</span>
					</td>
          <td>
          <span className="block text-sm">1</span>
          </td>
				</tr>
        <tr>
        <th scope="row" className="text-left">
						<h3 className="py-1">Special mention during "Vote of Thanks"</h3>
					</th>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
					<td>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
					</td>
          <td>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-600">
							<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
						</svg>
          </td>
        </tr>
        <tr>
        <th scope="row" className="text-center">
						<h3 className="py-1">Sponsor amount (in lakh)</h3>
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
  <div className="text-center text-sm">
  ​For any queries, please drop an email (ncwam@hyderabad.bits-pilani.ac.in) with an expression of interest, and the lead faculty member will get back and discuss about your requirements.
  </div>


        </Section>


      </main>
    </div>
  );
}
