import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";

import "swiper/swiper.scss";
SwiperCore.use([Pagination, Navigation, Autoplay]);
const ImagesGallery = () => {
  return (
    <div className="bg-white dark:bg-gray-900 font-poppins px-5 pb-20 md:px-10">
      <div className="flex flex-row mb-10 justify-center text-gray-800 dark:text-white text-xl md:text-4xl uppercase font-semibold pt-16 md:pt-12">
        <h2 className="px-2 py-2 md:py-5">GAllery</h2>
      </div>

      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        centeredSlides="true"
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {[...Array(17)].map((_, index) => {
          return (
            <SwiperSlide>
              <div
                className="swiper-slide mx-4 rounded-xl hover:shadow-lg bg-white"
                style={{
                  minHeight: `400px`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  backgroundImage: `url(${`../images/gallery/${
                    index + 1
                  }.jpg`})`,
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImagesGallery;
