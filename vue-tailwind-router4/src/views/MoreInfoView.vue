<template>
  <div class="bg-black">
    <h1
      class="flex h-[30px] items-center justify-center bg-white px-4 text-center text-[16px] sm:h-[40px] sm:text-[20px] md:text-[22px] lg:font-[400] lg:tracking-[-0.07em]">
      2022 EDC WEEK EVENTS
    </h1>
    <div class="flex justify-center">
      <div class="w-[1100px] grid-cols-2 p-10 md:grid">
        <div class="flex justify-center">
          <img :src="artistDetails.image" class="mb-8 md:mb-0" />
        </div>
        <div class="md:pl-[30px]">
          <div
            class="mb-6 border-b-[1px] border-[#757575] pb-6 font-black uppercase text-[#757575]">
            <h1
              class="w-fit text-[32px] leading-[1] text-[#1da5fb] transition delay-75 ease-in-out hover:text-white">
              {{ artist }}
            </h1>
            <RouterLink :to="`/events/venue/${artistDetails.venue}`">
              <h2
                class="w-fit text-[20px] text-white transition delay-75 ease-in-out hover:text-[#1da5fb]">
                {{ artistDetails.venue }}
              </h2>
            </RouterLink>
            <RouterLink :to="`/events/date/may-${artistDetails.date}`">
              <h3 class="leading-[1]">{{ artistDetails.date }}</h3>
            </RouterLink>
            <h3 class="leading-[1]">{{ artistDetails.time }}</h3>
          </div>
          <div class="mb-6 border-b-[1px] border-[#A7A7A7] pb-6 text-[#A7A7A7]">
            <p class="mb-6">
              <b> LINEUP </b>
              <br />
              Artist lineup goes here
            </p>
            <p>
              21+
              <br />
              5555 Vegas Strip Dr, Las Vegas, NV 89118
              <br />
              Tel: 555-555-5555
            </p>
          </div>
          <div class="text-center text-[14px] font-black uppercase text-white">
            <a
              href="https://lasvegas.electricdaisycarnival.com/"
              target="_blank">
              <div
                class="mb-6 w-full bg-[#1da5fb] px-[10px] py-[7px] transition delay-75 ease-in-out hover:bg-[#fdb630] md:w-2/5">
                buy tickets
              </div>
            </a>
            <a href="https://www.facebook.com/EDCweek/" target="_blank">
              <div
                class="mb-2 w-full border-[1px] border-solid border-[#1da5fb] px-[10px] py-[7px] transition delay-75 ease-in-out hover:bg-[#1da5fb] md:w-2/5">
                facebook page
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue';
import { useRoute } from 'vue-router';
import EventComponent from '../components/EventComponent.vue';
const route = useRoute();
const data = inject('data');
const artist = route.params.artist;
const artistDetails = data.filter(element => element.artist === artist)[0];
</script>

<style scoped>
p {
  font-size: 14px;
}
</style>
