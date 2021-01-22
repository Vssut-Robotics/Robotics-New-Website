import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/testimonials";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/swiper.scss";
SwiperCore.use([Pagination, Navigation, Autoplay]);
const Testimonial = () => {
  return (
    <div className="py-10 md:py-24 dark:bg-gray-900 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
      <div className="relative w-full py-2 md:py-24 bg-blue-700 md:w-1/3 flex flex-col item-center justify-center">
        <div className="absolute top-0 left-0 z-3 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:pt-24"></div>

        <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-4">
          <span className="md:block">What</span>
          <span className="md-block">People Say</span>
          <span className="block">About Us!</span>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 md:w-2/3">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          centeredSlides="true"
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, _) => {
            return (
              <SwiperSlide>
                <div className="flex flex-col h-full relative">
                  <div className="max-w-full mx-10 py-4 px-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg my-20">
                    <div className="flex justify-center md:justify-end -mt-16">
                      <img
                        alt={testimonial.name}
                        className="w-32 h-32 object-cover rounded-full border-2 border-indigo-500"
                        src={`/images/testimonials/${testimonial.image}.webp`}
                      />
                    </div>

                    <div className="flex flex-col h-full relative">
                      <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-indigo-200 dark:text-indigo-700 fill-current w-12 h-12 md:w-16 md:h-16"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                        </svg>
                      </div>

                      <div className="h-full relative z-10">
                        <div>
                          <p className="text-gray-600 dark:text-gray-300 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                            {testimonial.testimonial}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-1 mr-5">
                      <h3 className="serif font-normal text-blue-600 dark:text-blue-300 italic text-right text-xl md:text-2xl">
                        {testimonial.name}
                      </h3>
                      <h3 className="serif font-normal text-blue-600  dark:text-blue-300  italic text-right text-l md:text-xl">
                        {testimonial.designation}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
