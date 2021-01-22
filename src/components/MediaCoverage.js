// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const MediaGallery = () => {
  return (
    <div className="bg-white dark:bg-gray-900 font-poppins px-5 md:px-10 pt-10 pb-20">
      <div className=" flex flex-row justify-center text-center uppercase text-4xl sm:text-5xl mb-5 p-6">
        <h2 className="text-bold dark:text-gray-200 pr-2">
         In The
          <span className="text-red-600 ml-5">News</span>
        </h2>
      </div>

      <Swiper
        effect="coverflow"
        spaceBetween={20}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        centeredSlides="true"
        coverflowEffect={{ rotate: 10, stretch: 0, depth: 50, modifier: 1 }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
      >
        {[...Array(25)].map((_, index) => {
          return (
            <SwiperSlide>
              <div
                className="swiper-slide mx-auto mb-10 rounded-xl hover:shadow-lg bg-white"
                style={{
                  width: `555px`,
                  minHeight: `370px`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  backgroundImage: `url(${`../images/media/news${
                    index + 1
                  }.webp`})`,
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MediaGallery;
