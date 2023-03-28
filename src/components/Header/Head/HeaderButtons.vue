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
      class="flex text-center mb-2 justify-center items-center py-14px border-2 border-white-4 shadow-def bg-white-2 font-bold rounded-large duration-100 hover:cursor-pointer active:bg-black-2 text-xl active:text-white-2 small:py-1 small:px-5"
      v-for="button in getButtons"
      :key="button.id"
      @click="fiterBtn(button.id)"
      :class="btnId == button.id ? 'bg-black-1 text-white-1' : ''"
      >{{ button.name }}</swiper-slide
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
      btnId: 1,
    };
  },
  methods: {
    fiterBtn(id) {
      this.btnId = id;
      console.log(this.btnId, id);
      this.$store.commit("filterPizzasInBtn", { value: id });
    },
  },
  computed: {
    getButtons() {
      return this.$store.getters.getButtons;
    },
  },
};
</script>
<style></style>
