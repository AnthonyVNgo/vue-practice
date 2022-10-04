<template>
  <div
    id="artists"
    class="flex h-[30px] items-center justify-center bg-white px-4 text-center text-[16px] sm:h-[40px] sm:text-[20px] md:text-[22px] lg:font-[400] lg:tracking-[-0.07em]">
    <h3>2022 TALENT</h3>
  </div>
  <div
    class="flex justify-center bg-black py-5 px-2.5 sm:py-[30px] sm:px-5 md:p-[35px]">
    <ul
      class="dotsbetween max-w-[1150px] p-0 text-center text-[14.4px] font-[800] uppercase tracking-tight text-white sm:text-[16.8px] md:text-[19.2px] lg:text-[21.6px] xl:text-2xl">
      <li
        v-for="item in items"
        class="inline-block transition delay-75 ease-in-out hover:text-[#1da5fb]">
        <RouterLink :to="`/event/${item.artist}`">
          {{ item.artist }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ['data'],
  data() {
    return {
      items: this.data
    };
  }
};
</script>

<style scoped>
ul.dotsbetween li:after {
  content: '\2022';
  font-size: 1.25rem;
  color: #1da5fb;
  margin: 0 10px;
}
</style>
