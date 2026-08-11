"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import { ArrowRight } from "lucide-react";

import sliderOne from "@/app/components/HomeComponent/images/sliderImg1.png";
import sliderTwo from "@/app/components/HomeComponent/images/sliderImg2.png";
import sliderThree from "@/app/components/HomeComponent/images/sliderImg3.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "../ui/Button";

const slides = [
  {
    title: (
      <>
        Helping African <br />
        Organizations <br />
        Transform With AI
      </>
    ),
    description: (
      <>
        We combine AI strategy, workforce development, technology <br />
        implementation, venture building, and ecosystem programs <br />to help
        organizations prepare for the future.
      </>
    ),
    image: sliderOne,
  },
  {
    title: (
      <>
        Helping African <br />
        Organizations <br />
        Transform With AI
      </>
    ),
     description: (
      <>
        We combine AI strategy, workforce development, technology <br />
        implementation, venture building, and ecosystem programs <br />to help
        organizations prepare for the future.
      </>
    ),
    image: sliderTwo,
  },
  {
    title: (
      <>
        Helping African <br />
        Organizations <br />
        Transform With AI
      </>
    ),
    description: (
      <>
        We combine AI strategy, workforce development, technology <br />
        implementation, venture building, and ecosystem programs <br />to help
        organizations prepare for the future.
      </>
    ),
    image: sliderThree,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} hero-bullet" data-index="${index}"></span>`;
          },
        }}
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full overflow-hidden">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={"Slide Background"}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10  px-16 py-8  flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-[48px] font-bold   leading-tight ">
                      {slide.title}
                    </h1>

                    <p className="mt-6 text-base leading-8 text-gray-200 md:text-lg">
                      {slide.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                      <Link href="/contact">
                        <Button
                          variant="accent"
                          className="flex items-center gap-2 "
                          size="lg"
                          icon={<ArrowRight size={18} />}
                        >
                          Book an AI Session
                        </Button>
                      </Link>

                      <Link href="/ecosystem">
                        <Button
                          variant="transparent"
                          className="flex items-center gap-2"
                          size="lg"
                          icon={<ArrowRight size={18} />}
                        >
                          Explore Ecosystem
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
