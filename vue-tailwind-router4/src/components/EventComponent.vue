<template>
  <div
    class="h-fit bg-black p-5 font-black uppercase sm:flex sm:justify-between">
    <div class="flex">
      <RouterLink :to="`/event/${artist}`">
        <img
          :src="image"
          class="hidden h-[120px] w-[120px] object-scale-down md:block lg:h-[145px] lg:w-[145px]" />
      </RouterLink>
      <div class="leading-tight">
        <RouterLink :to="`/event/${artist}`">
          <h2
            class="w-fit text-[24px] text-[#1da5fb] transition delay-75 ease-in-out hover:text-[white] lg:text-[32px]">
            {{ artist }}
          </h2>
        </RouterLink>
        <RouterLink
          :to="`/events/venue/${venue}`"
          class="text-[15px] text-white transition delay-75 ease-in-out hover:text-[#1da5fb] lg:text-[20px]">
          {{ venue }}
        </RouterLink>
        <RouterLink
          :to="`/events/date/may-${date}`"
          class="text-[12px] text-[#757575] lg:text-[15px]">
          <p>{{ date }}</p>
          <p>{{ time }}</p>
        </RouterLink>
      </div>
    </div>

    <div>
      <a
        href="https://lasvegas.electricdaisycarnival.com/"
        target="_blank"
        class="text-[11px] text-white md:text-[14px]">
        <div
          class="mb-2 w-[150px] bg-[#1da5fb] px-[10px] py-[7px] text-center transition delay-75 ease-in-out hover:bg-[#fdb630]">
          buy tickets
        </div>
      </a>
      <RouterLink
        :to="`/event/${artist}`"
        class="text-[11px] text-white md:text-[14px]">
        <div
          class="mb-2 w-[150px] border-[1px] border-solid border-[#1da5fb] px-[10px] py-[7px] text-center transition delay-75 ease-in-out hover:bg-[#1da5fb]">
          more info
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  artist: {
    type: String,
    default: 'artist name'
  },
  venue: {
    type: String,
    default: 'venue location'
  },
  date: {
    type: String,
    default: 'event date'
  },
  time: {
    type: String,
    default: 'event time'
  },
  image: {
    type: String,
    default: null
  }
});
</script>
