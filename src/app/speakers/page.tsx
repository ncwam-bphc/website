"use client";
import { StaticImageData } from "next/image";
import bits from "~/assets/about.jpeg";
import Image from "next/image";
import spbg from "~/assets/spbg2.jpeg";


function Speak({img1 , img2 , img3}: {img1: StaticImageData , img2: StaticImageData , img3: StaticImageData}) {
  return(
    <div className="flex-col mt-10 gap-56 justify-center sm:flex sm:flex-row sm:mt-10 sm:gap-56 sm:justify-center">
    <div className="flex flex-col ml-2 items-center">
    <Image style = {{borderRadius: '100%'}} className="size-40" src= {img1} alt="img1" />
  <div className="mt-8">NAME</div> <div>INSTITUTION</div>
    </div>
    <div className="flex flex-col items-center">
    <Image style = {{borderRadius: '100%'}} className="size-40" src= {img2} alt="img1" />
    <div className="mt-8">NAME</div> <div>INSTITUTION</div>
  
    </div>
    <div className="flex flex-col mr-2 items-center">
    <Image style = {{borderRadius: '100%'}} className="size-40" src= {img3} alt="img1" />
   <div className="mt-8">NAME</div> <div>INSTITUTION</div>
    </div>
 
    </div>
  )
}


export default function SpeakersPage() {
  return (

     <div className="content h-full gap-8 p-8 lg:p-16">
        <Image
          src={spbg}
          alt="Conference background"
          fill={true}
          objectFit="cover"
          className="-z-20 opacity-15"
          priority
        />
      

    <main className="relative flex-row min-h-screen overflow-hidden font-sans gap-40">
      <div className="flex justify-center mt-20 mb-6 text-6xl font-bold text-[#da583c]">
       MEET OUR
      </div>
      <div className="flex justify-center text-8xl border-b-4 border-white font-bold pb-8">SPEAKERS</div>
      <Speak img1 = {bits} img2 = {bits} img3 = {bits}></Speak>
      <Speak img1 = {bits} img2 = {bits} img3 = {bits}></Speak>
      <Speak img1 = {bits} img2 = {bits} img3 = {bits}></Speak>
    
    </main>

    </div>
  );
}
