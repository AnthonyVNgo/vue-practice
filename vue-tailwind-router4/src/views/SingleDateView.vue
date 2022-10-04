<template>
  <div class="items-center justify-center bg-black text-white">
    <h1
      class="w-full bg-[#211d1d] px-4 py-[15px] text-center text-[14.4px] font-black uppercase leading-none sm:text-[16px] lg:text-[18px]">
      {{
        eventOrDate
          ? `showing all events on ${fullDay}`
          : `showing all events at ${route.params.venue}`
      }}
    </h1>
    <div class="flex justify-center">
      <div v-if="eventOrDate" class="w-[1130px] p-[15px]">
        <h1
          class="bg-white p-2 text-[12px] font-black uppercase text-black sm:text-[14px] md:text-[18px]">
          {{ fullDay }}
        </h1>
        <div v-for="item in data">
          <EventComponent
            v-if="item.date.includes(split)"
            :artist="item.artist"
            :venue="item.venue"
            :date="item.date"
            :time="item.time"
            :image="item.image" />
        </div>
      </div>
      <div v-else class="w-[1130px] p-[15px]">
        <div v-for="item in sortedDays">
          <h1
            class="bg-white p-2 text-[12px] font-black uppercase text-black sm:text-[14px] md:text-[18px]">
            {{ item }}
          </h1>
          <div v-for="day in venueDays">
            <EventComponent
              v-if="day.date.includes(item)"
              :artist="day.artist"
              :venue="day.venue"
              :date="day.date"
              :time="day.time"
              :image="day.image" />
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
const eventDays = inject('eventDays');
const day = route;

const eventOrDate = computed(() => {
  return route.path.split('/').includes('date');
});

const split = computed(() => {
  if (eventOrDate.value) {
    return day.params.day.split('-')[1];
  }
});

const fullDay = computed(() => {
  if (eventOrDate.value) {
    return eventDays.filter(day => day.includes(split.value))[0];
  }
});

const venue = computed(() => {
  if (eventOrDate.value === false) {
    return route.params.venue;
  }
});

const venueDays = computed(() => {
  return data.filter(event => event.venue.includes(route.params.venue));
});

const uniqueVenueDays = computed(() => {
  const unique = [...new Set(venueDays.value.map(item => item.date))];
  return unique;
});

const sortedDays = computed(() => {
  let unsorted = uniqueVenueDays.value.slice(0);
  unsorted.sort(function (a, b) {
    let aa = parseInt(a.split(' ')[2]);
    let bb = parseInt(b.split(' ')[2]);
    let answer = aa - bb;
    return answer;
  });
  return unsorted;
});
</script>
