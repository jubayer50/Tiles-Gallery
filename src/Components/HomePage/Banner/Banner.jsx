"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import BannerImg1 from "@/assets/b1.jpg";
import BannerImg2 from "@/assets/b2.jpg";
import BannerImg3 from "@/assets/b3.jpg";
import BannerImg4 from "@/assets/b4.jpg";
import BannerImg5 from "@/assets/b5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

const bannerImages = [
  BannerImg1,
  BannerImg2,
  BannerImg3,
  BannerImg4,
  BannerImg5,
];

const Banner = () => {
  return (
    <div className="bg">
      <div className="text-center relative">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          slidesPerView={1}
          loop={true}
          effect="fade"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          fadeEffect={{ crossFade: true }}
          speed={2500}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {bannerImages.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img}
                alt="banner-Image"
                width={1000}
                height={1000}
                className="w-full aspect-square object-cover max-h-150 rounded-xl"
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="bg-[#06001a82] absolute top-0 h-full w-full z-1 flex items-center justify-center text-white rounded-xl px-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-bold text-3xl md:text-[38px]">
                Elevate Every Space with Premium Tiles
              </h2>
              <p className="max-w-130 text-[17px] mx-auto">
                Discover timeless designs crafted for modern living. Durable,
                stylish, and built to last for every corner of your home. Where
                quality meets elegance.
              </p>
            </div>

            <div>
              <Link href={"/all-tiles"}>
                <Button className="bg-[#FF653F] font-semibold">
                  Browse Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
