"use client"
import SimpleGallery from '~/components/gallery'
import * as React from "react"
import Image from "next/image"
import { type CarouselApi } from '~/components/ui/carousel'
import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"
import { useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from 'lucide-react'
const GalleryPage = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const galleryimages = [
    {
      largeURL:
        '/gallery/1-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/1-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/2-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/2-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/3-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/3-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/4-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/4-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/5-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/5-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/6-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/6-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/7-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/7-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/8-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/8-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/9-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/9-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/10-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/10-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/11-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/11-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/12-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/12-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/13-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/13-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/14-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/14-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/15-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/15-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/16-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/16-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/17-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/17-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/18-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/18-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/19-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/19-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/20-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/20-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/21-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/21-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/22-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/22-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/23-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/23-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/24-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/24-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/25-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/25-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/26-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/26-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/27-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/27-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/28-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/28-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/29-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/29-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/30-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/30-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/31-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/31-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/32-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/32-2dnwwam2023.JPG',
      width: 4016,
      height: 6016,
    },
    {
      largeURL:
        '/gallery/33-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/33-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/34-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/34-2dnwwam2023.JPG',
      width: 4016,
      height: 6016,
    },
    {
      largeURL:
        '/gallery/35-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/35-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/36-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/36-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/37-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/37-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/38-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/38-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/39-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/39-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/40-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/40-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/40-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/40-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/41-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/41-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/42-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/42-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/43-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/43-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/44-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/44-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/45-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/45-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/46-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/46-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/47-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/47-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/48-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/48-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/49-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/49-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/50-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/50-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/51-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/51-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/52-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/52-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/53-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/53-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/54-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/54-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
    {
      largeURL:
        '/gallery/55-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/55-2dnwwam2023.JPG',
      width: 4016,
      height: 6016,
    },
    {
      largeURL:
        '/gallery/56-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/56-2dnwwam2023.JPG',
      width: 4016,
      height: 6016,
    },
    {
      largeURL:
        '/gallery/57-2dnwwam2023.JPG',
      thumbnailURL:
        '/gallery/57-2dnwwam2023.JPG',
      width: 5184,
      height: 3456,
    },
  ];
  const images = [
    {
      src: '/carousel/a.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/b.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/c.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/d.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/e.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/f.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/g.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/h.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/i.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/j.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/k.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/l.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/m.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/n.JPG',
      width: 5184,
      height: 3456,
    },
    {
      src: '/carousel/o.JPG',
      width: 5184,
      height: 3456,
    },
  ]
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
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
                            paddingBottom: `${(image.height / image.width) * 100}%`
                          }}
                          className="w-full"
                        />
                        <Image
                          src={image.src}
                          alt={`Carousel image ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
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
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 text-gray-800 p-1.5 sm:p-2 md:p-3 rounded-full shadow-md border border-gray-200"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 text-gray-800 p-1.5 sm:p-2 md:p-3 rounded-full shadow-md border border-gray-200"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-1.5 sm:gap-2 px-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === current
                      ? 'bg-white scale-110'
                      : 'bg-white/50 hover:bg-white/70'
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