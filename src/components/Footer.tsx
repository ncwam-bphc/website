"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import mottoImage from "~/assets/homepage/motto.webp";

const Footer = () => {
  const pathname = usePathname();
  return pathname !== "/" ? (
    <Image
      src={mottoImage}
      alt="bits"
      className="fixed bottom-4 right-4 w-40 object-contain md:w-52 md:-z-10"
    />
  ) : null;
};

export default Footer;
