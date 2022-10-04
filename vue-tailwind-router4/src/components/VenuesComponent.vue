<template>
  <div
    id="venues"
    class="flex h-[30px] items-center justify-center bg-white px-4 text-center text-[16px] sm:h-[40px] sm:text-[20px] md:text-[22px] lg:font-[400] lg:tracking-[-0.07em]">
    <h3>2022 VENUES</h3>
  </div>
  <div
    class="grid grid-cols-1 bg-black p-4 md:grid-cols-3 md:gap-[3px] lg:grid-cols-5 lg:gap-[6px]">
    <RouterLink
      v-for="venue in venues"
      :to="`/events/venue/${venue}`"
      class="flex h-[100px] w-full items-center justify-center border-[2px] border-black bg-[#1e1e1e] text-white transition delay-75 ease-in-out hover:bg-[#1da5fb] md:h-[150px] lg:h-[170px]">
      <img class="h-1/2 sm:h-1/3" :src="`./assets/${venue}.svg`" alt="" />
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useRoute } from 'vue-router';
const data = inject('data');
const venues = [...new Set(data.map(item => item.venue))].sort();
</script>
