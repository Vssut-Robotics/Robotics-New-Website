import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Autoplay,
} from "swiper";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Pagination, Autoplay]);
const ImagesGallery = () => {
  return (
    <div className="bg-white dark:bg-gray-900 font-poppins">
      <div className=" flex flex-row justify-center text-center uppercase text-5xl mb-5 p-6">
        <h2 className="text-bold dark:text-gray-200 pr-2">GALLERY</h2>
      </div>

      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          1280: {
            slidesPerView: 2,
            spaceBetween :'5'
          },
        }}
      >
        {[...Array(19)].map((_, index) => {
          return (
            <SwiperSlide>
              <div className="p-2">
                <div
                  className="swiper-slide mx-auto lg:mx-10 mb-10 rounded-xl hover:shadow-lg bg-white"
                  style={{
                    width : `500px`,
                    height: `333px`,
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    backgroundImage: `url(${`../images/gallery/gallery_${
                      index + 1
                    }.webp`})`,
                  }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImagesGallery;
