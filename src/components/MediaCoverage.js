// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);
const MediaGallery = () => {
  return (
    <div class="bg-white dark:bg-gray-900 font-poppins px-5 md:px-10 pb-20">
      <div class="flex flex-row mb-10 justify-center text-gray-800 dark:text-white text-xl md:text-4xl uppercase font-semibold pt-16 md:pt-12">
        <h2 class="px-2 py-2 md:py-5">In The News</h2>
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
        coverflowEffect={{ rotate: 20, stretch: 0, depth: 100, modifier: 1 }}
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
            slidesPerView: 3,
          },
        }}
      >
        {[...Array(25)].map((_, index) => {
          return (
            <SwiperSlide>
              <div
                class="swiper-slide mx-4 rounded-xl hover:shadow-lg bg-white"
                style={{
                  width: `500px`,
                  maxWidth: `700px`,
                  minHeight: `380px`,
                  backgroundPosition: `center`,
                  backgroundSize: `cover`,
                  backgroundImage: `url(${`../images/media/news${
                    index + 1
                  }.png`})`,
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
