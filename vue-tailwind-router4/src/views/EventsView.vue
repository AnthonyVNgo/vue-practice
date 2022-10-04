<template>
  <div class="flex justify-center bg-black">
    <div class="w-[1130px] p-4">
      <div v-for="day in sortedDaysArr">
        <h3
          class="bg-white p-2 text-[12px] font-black uppercase sm:text-[14px] md:text-[18px]">
          {{ day }}
        </h3>
        <div v-for="item in data">
          <EventComponent
            v-if="item.date === day"
            :artist="item.artist"
            :venue="item.venue"
            :date="day"
            :time="item.time"
            :image="item.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue';
import EventComponent from '../components/EventComponent.vue';
const data = inject('data');
const eventDays = inject('eventDays');

const unsortedDays = computed(() => {
  const days = eventDays.map(element => {
    return element.split(' ');
  });
  return days;
});

const sortedDays = computed(() => {
  let unsorted = unsortedDays.value;
  unsorted.sort(function (a, b) {
    return a[2] - b[2];
  });
  return unsorted;
});

const sortedDaysArr = computed(() => {
  const sorted = sortedDays.value.map(element => {
    return element.join(' ');
  });
  return sorted;
});
</script>

<style scoped></style>
