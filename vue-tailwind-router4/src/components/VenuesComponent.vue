<template>
  <div
    id="venues"
    class="bg-white px-4 text-center h-[30px] flex items-center justify-center sm:h-[40px] text-[16px] sm:text-[20px] md:text-[22px] lg:font-[400] lg:tracking-[-0.07em]">
    <h3>2022 VENUES</h3>
  </div>
  <div
    class="bg-black p-4 grid grid-cols-1 md:grid-cols-3 md:gap-[3px] lg:grid-cols-5 lg:gap-[6px]">
    <RouterLink
      v-for="venue in venues"
      :to="`/events/venue/${venue}`"
      class="w-full border-[2px] border-black bg-[#1e1e1e] text-white flex justify-center items-center h-[100px] md:h-[150px] lg:h-[170px] hover:bg-[#1da5fb] transition ease-in-out delay-75">
      <!-- <img class="h-1/2 sm:h-1/3" :src="`../../public/assets/${venue}.svg`" alt=""> -->
      <!-- <img class="h-1/2 sm:h-1/3" :src="`../../assets/${venue}.svg`" alt=""> -->
      <img class="h-1/2 sm:h-1/3" :src="`../../src/assets/venues/${venue}.svg`" alt="">
      <!-- <img class="h-1/2 sm:h-1/3" :src="`../../assets/venues/${venue}.svg`" alt=""> -->
      <!-- <img class="h-1/2 sm:h-1/3" :src="`../assets/svgs/edclogo.svg`" alt=""> -->
      <!-- <img class="h-1/2 sm:h-1/3" :src="`../assets/svgs/edclogo.svg`" alt=""> -->
      <!-- <img class="h-1/2 sm:h-1/3" :src="`../assets/venues/${venue}.svg`" alt=""> -->
      <!-- <span>{{venue}}</span> -->
    </RouterLink>

  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRoute } from 'vue-router';
const data = inject('data');
const venues = [...new Set(data.map(item => item.venue))].sort();
console.log(venues);
</script>
