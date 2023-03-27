<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="1"
    :loop="true"
    :centeredSlides="false"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: true,
    }"
    :breakpoints="{
      
      '@0.75': {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      '@1.00': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@1.50': {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      
    }"
    :modules="modules"
    class="mySwiper w-full h-full"
  >
    <swiper-slide
      class="flex text-center mb-2 justify-center items-center py-14px border-2 border-white-4 shadow-def bg-white-2 font-bold rounded-large hover:bg-white-3 duration-100 active:bg-orange-1 text-xl active:text-white-2 small:py-1 small:px-5"
      v-for="button in buttons"
      :key="button"
      >{{ button }}</swiper-slide
    >
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  data() {
    return {
      buttons: [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
      ],
    };
  },
};
</script>
<style></style>
