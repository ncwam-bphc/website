"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import mottoImage from "~/assets/homepage/motto.webp";

const Footer = () => {
  const pathname = usePathname();
  return !["/", "/gallery", "/aboutconference", "/aboutus"].includes(
    pathname,
  ) ? (
    <Image
      src={mottoImage}
      alt="bits"
      className="fixed bottom-4 right-4 w-40 object-contain md:z-[-1] md:w-52"
    />
  ) : null;
};

export default Footer;
