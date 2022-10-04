<template>
  <div
    class="fixed top-0 mx-auto flex h-[80px] w-full items-center justify-between bg-black p-2 sm:p-5 md:h-[120px] md:px-[25px] md:py-5 lg:h-[140px]">
    <div>
      <RouterLink to="/">
        <img
          class="h-[60px] md:h-[80px] lg:h-[100px]"
          src="../assets/svgs/edclogo.svg"
          alt="" />
      </RouterLink>
    </div>
    <div
      class="hidden pr-0 text-[14px] font-semibold uppercase text-white md:grid md:h-full md:grid-cols-1">
      <div>
        <div class="mt-[-5px] flex w-full justify-end">
          <font-awesome-icon
            icon="fa-brands fa-facebook-square"
            class="mx-[10px] text-[30px] transition duration-75 ease-in-out hover:text-[#1da5fb] lg:text-[40px]" />
          <font-awesome-icon
            icon="fa-brands fa-twitter-square"
            class="mx-[10px] text-[30px] transition duration-75 ease-in-out hover:text-[#1da5fb] lg:text-[40px]" />
          <font-awesome-icon
            icon="fa-brands fa-instagram-square"
            class="mx-[10px] text-[30px] transition duration-75 ease-in-out hover:text-[#1da5fb] lg:text-[40px]" />
          <font-awesome-icon
            icon="fa-brands fa-twitch"
            class="mx-[10px] bg-white text-[30px] text-black transition duration-75 ease-in-out hover:border-[#1da5fb] hover:bg-[#1da5fb] md:mt-[1px] md:rounded-[3px] md:border-[1px] md:border-solid md:p-[2px] md:text-[21.5px] lg:mt-[2px] lg:rounded-[5px] lg:p-[5px] lg:text-[24px]" />
          <font-awesome-icon
            icon="fa-brands fa-tiktok"
            class="mx-[10px] bg-white text-[30px] text-black transition duration-75 ease-in-out hover:border-[#1da5fb] hover:bg-[#1da5fb] md:mt-[1px] md:rounded-[3px] md:border-[1px] md:border-solid md:p-[2px] md:text-[21.5px] lg:mt-[2px] lg:rounded-[5px] lg:p-[5px] lg:text-[24px]" />
        </div>
      </div>
      <div
        class="flex h-fit justify-end sm:mb-[-10px] md:self-end lg:mb-auto lg:mt-[10px]">
        <h3
          class="h-fit text-right text-[17px] transition duration-75 ease-in-out hover:text-[#1da5fb]">
          sign up for our newsletter
        </h3>
      </div>
      <div class="flex self-end">
        <div
          class="sm:text-[14px] sm:font-semibold lg:text-[16px] lg:font-bold">
          <RouterLink to="/events"> view events </RouterLink>
          <span class="line sm:px-[10px] lg:px-[15px]">|</span>
          <RouterLink to="/photogallery"> gallery </RouterLink>
          <span class="line sm:px-[10px] lg:px-[15px]">|</span>
          <RouterLink to="/"> archive </RouterLink>
          <span class="line sm:px-[10px] lg:px-[15px]">|</span>
          <a
            href="https://lasvegas.electricdaisycarnival.com/travel/hotels/"
            target="_blank"
            >hotels</a
          >
          <span class="line sm:px-[10px] lg:px-[15px]">|</span>
          <a href="https://lasvegas.electricdaisycarnival.com/" target="_blank"
            >edc las vegas</a
          >
        </div>
      </div>
    </div>
    <div class="flex md:hidden">
      <DropDownComponent />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import DropDownComponent from './DropDownComponent.vue';
export default {
  components: {
    DropDownComponent
  }
};
</script>

<style scoped>
.line {
  color: #1da5fb;
}
</style>
