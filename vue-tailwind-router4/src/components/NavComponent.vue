<template>
    <div class="flex justify-between items-center p-2 md:px-[25px] md:py-5 mx-auto bg-black h-[80px] fixed top-0 w-full sm:p-5 md:h-[120px] lg:h-[140px]">
      <div>
        <RouterLink to="/">
          <img class="h-[60px] md:h-[80px] lg:h-[100px]" src="../assets/svgs/edclogo.svg" alt="">
        </RouterLink>
      </div>
      <div class="hidden text-white text-[14px] md:grid md:grid-cols-1 md:h-full pr-0 uppercase font-semibold">
        <div>
          <div class="w-full flex justify-end mt-[-5px]">
            <font-awesome-icon icon="fa-brands fa-facebook-square" class="mx-[10px] text-[30px] lg:text-[40px] hover:text-[#1da5fb] transition duration-75 ease-in-out" />
            <font-awesome-icon icon="fa-brands fa-twitter-square" class="mx-[10px] text-[30px] lg:text-[40px] hover:text-[#1da5fb] transition duration-75 ease-in-out"/>
            <font-awesome-icon icon="fa-brands fa-instagram-square" class="mx-[10px] text-[30px] lg:text-[40px] hover:text-[#1da5fb] transition duration-75 ease-in-out"/>
            <font-awesome-icon icon="fa-brands fa-twitch" class=" mx-[10px] text-[30px] text-black bg-white md:border-solid md:border-[1px] md:text-[21.5px] md:p-[2px] md:rounded-[3px] md:mt-[1px] lg:text-[24px] lg:mt-[2px] lg:p-[5px] lg:rounded-[5px] hover:bg-[#1da5fb] hover:border-[#1da5fb] transition duration-75 ease-in-out"/>
            <font-awesome-icon icon="fa-brands fa-tiktok" class="mx-[10px] text-[30px] text-black bg-white md:border-solid md:border-[1px] md:text-[21.5px] md:p-[2px] md:rounded-[3px] md:mt-[1px] lg:text-[24px] lg:mt-[2px] lg:p-[5px] lg:rounded-[5px] hover:bg-[#1da5fb] hover:border-[#1da5fb] transition duration-75 ease-in-out"/>
          </div>
        </div>
        <div class="flex h-fit sm:mb-[-10px] lg:mb-auto md:self-end lg:mt-[10px] justify-end">
          <h3 class="text-right text-[17px] h-fit hover:text-[#1da5fb] transition duration-75 ease-in-out">sign up for our newsletter</h3>
        </div>
        <div class="flex self-end">
          <div class="lg:text-[16px] sm:font-semibold sm:text-[14px] lg:font-bold">
            <RouterLink to="/events">
              view events
            </RouterLink>
            <span class="line sm:px-[10px] lg:px-[15px]">|</span>
            <RouterLink to="/photogallery">
              gallery
            </RouterLink>
            <span class="line sm:px-[10px] lg:px-[15px]">|</span>
            <RouterLink to="/">
              archive
            </RouterLink>
            <span class="line sm:px-[10px] lg:px-[15px]">|</span>
            <a href="https://lasvegas.electricdaisycarnival.com/travel/hotels/" target="_blank">hotels</a>
            <span class="line sm:px-[10px] lg:px-[15px]">|</span>
            <a href="https://lasvegas.electricdaisycarnival.com/" target="_blank">edc las vegas</a>
          </div>
        </div>
      </div>
      <div class="flex md:hidden">
        <DropDownComponent/>
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
