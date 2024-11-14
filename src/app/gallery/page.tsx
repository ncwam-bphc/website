"use client";
import SimpleGallery from "~/components/gallery";
import * as React from "react";
import Image from "next/image";
import { type CarouselApi } from "~/components/ui/carousel";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import images from "~/assets/carousel/images";
import galleryimages from "~/assets/gallery/images";

const GalleryPage = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrevious = () => {
    if (api) {
      if (current === 0) {
        api.scrollTo(images.length - 1);
      } else {
        api.scrollPrev();
      }
    }
  };

  const handleNext = () => {
    if (api) {
      if (current === images.length - 1) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br />
      <div className="w-full">
        <div className="relative mx-auto w-full max-w-7xl">
          <Carousel
            setApi={setApi}
            plugins={[autoplay.current]}
            className="w-full"
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none">
                    <CardContent className="p-0">
                      <div className="relative w-full">
                        <div
                          style={{
                            paddingBottom: `${(image.height / image.width) * 100}%`,
                          }}
                          className="w-full"
                        />
                        <Image
                          src={image.src}
                          alt={`Carousel image ${index + 1}`}
                          fill
                          loading="lazy"
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 
                                 (max-width: 1024px) 90vw, 
                                 (max-width: 1280px) 80vw,
                                 1200px"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/70 p-1.5 text-gray-800 shadow-md hover:bg-white/90 sm:left-4 sm:p-2 md:p-3"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-gray-200 bg-white/70 p-1.5 text-gray-800 shadow-md hover:bg-white/90 sm:right-4 sm:p-2 md:p-3"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform flex-wrap justify-center gap-1.5 px-4 sm:gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 sm:h-2 sm:w-2 md:h-3 md:w-3 ${
                    index === current
                      ? "scale-110 bg-white"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
      <br />
      <SimpleGallery galleryID="my-test-gallery" images={galleryimages} />
      <br />
      <br />
    </div>
  );
};

export default GalleryPage;
