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
        implementation, venture building, and ecosystem programs <br />
        to help organizations prepare for the future.
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
        implementation, venture building, and ecosystem programs <br />
        to help organizations prepare for the future.
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
        implementation, venture building, and ecosystem programs <br />
        to help organizations prepare for the future.
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
              <div className="relative z-10 flex h-full items-center px-4 py-8 sm:px-6 md:px-16">
                <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 md:px-6">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-[48px]">
                      {slide.title}
                    </h1>

                    <p className="mt-4 text-sm leading-6 text-gray-200 sm:mt-5 sm:text-base sm:leading-7 md:mt-6 md:text-lg md:leading-8">
                      {slide.description}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
                      <Link href="/contact">
                        <Button
                          variant="accent"
                          className="flex items-center gap-2"
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
