import Image from "next/image";
import React from "react";
import banner1 from "../../../assets/banner/banner1.webp";
import banner2 from "../../../assets/banner/banner2.webp";
import bannerSide1 from "../../../assets/banner/banner-side1.webp";
import bannerSide2 from "../../../assets/banner/banner-side2.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="container my-8 mx-auto px-4 xl:px-16 grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="col-span-1 lg:col-span-3  relative">
        <Swiper
          pagination={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={banner1}
              alt="Banner Image 1"
              className={`brightness-75 h-[${undefined}] aspect-[1.3] md:aspect-[1.8]`}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="absolute top-[50%] transform translate-y-[-50%] text-white pl-4 md:pl-20 font-semibold">
              <p className="text-sm md:text-lg">BT HEADPHONE</p>
              <h2 className="text-lg md:text-5xl leading-9 md:leading-[70px] mb-4">
                <span className="font-bold">HyperX Cloud III</span>
                <br />
                <span>Headset</span>
              </h2>
              <button className="w-32 py-2 md:py-3 bg-blue-600 rounded">
                Buy Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={banner2}
              alt="Banner Image 2"
              className={`brightness-75 h-[${undefined}] aspect-[1.3] md:aspect-[1.8]`}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
            />
            <div className="absolute top-[50%] transform translate-y-[-50%] text-white pl-4 md:pl-20 font-semibold">
              <p className="text-sm md:text-lg">BT WATCH</p>
              <h2 className="text-lg md:text-5xl leading-9 md:leading-[70px] mb-4">
                <span className="font-bold">Xiaomi IMILAB W01</span>
                <br />
                <span>Smart Watch</span>
              </h2>
              <button className="w-32 py-2 md:py-3 bg-blue-600 rounded">
                Buy Now
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-span-1 h-[400px] flex flex-col md:flex-row lg:flex-col gap-4">
        <div className=" w-full">
          <Image
            src={bannerSide1}
            alt="Banner Image 1"
            className={`brightness-75 h-[${undefined}] aspect-[1.6] lg:aspect-[1.2]`}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className=" w-full">
          <Image
            src={bannerSide2}
            alt="Banner Image 1"
            className={`brightness-75 h-[${undefined}] aspect-[1.6] lg:aspect-[1.2]`}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
