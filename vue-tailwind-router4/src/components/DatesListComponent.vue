<template>
  <div
    id="dates"
    class="flex h-[30px] items-center justify-center bg-white px-4 text-center text-[16px] sm:h-[40px] sm:text-[20px] md:text-[22px] lg:font-[400] lg:tracking-[-0.07em]">
    <h3>2022 DATES</h3>
  </div>
  <div
    class="grid grid-cols-1 bg-black sm:grid-cols-4 sm:p-[15px] lg:grid-cols-7">
    <RouterLink
      :class="{ active: item.date.includes(date) }"
      v-for="item in items"
      class="date-item flex h-[61px] w-full items-center justify-center border-[1px] border-black bg-[#252525] font-bold uppercase text-white sm:h-[114px] md:h-[124px] lg:h-[174px]"
      :to="`/events/date/may-${item.date}`">
      <h3
        :class="{ active: item.date.includes(date) }"
        class="h-fit text-[23px] font-extrabold uppercase tracking-normal sm:m-0 sm:text-center md:p-0">
        <span
          class="sm:block sm:text-[18px] sm:leading-[.8] sm:tracking-tight lg:text-[20px]"
          >{{ item.day }}</span
        >
        <span
          class="px-[6px] sm:block sm:leading-[.8] lg:text-3xl lg:leading-[.8]"
          >{{ item.month }}</span
        >
        <span
          class="sm:block sm:text-[2.8rem] sm:font-black sm:leading-[.8] lg:text-[50px]"
          :class="{
            yellow: item.date === '18',
            orange: item.date === '19',
            red: item.date === '20',
            violet: item.date === '21',
            purple: item.date === '22',
            deepurple: item.date === '23',
            blue: item.date === '24',
            'active-number': item.date.includes(date)
          }">
          {{ item.date }}
        </span>
      </h3>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, inject, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const date = computed(() => {
  if (route.path.includes('date')) {
    return route.params.day.split('-')[1];
  }
});

const routeIncludesDate = computed(() => {
  return route.path.includes('date');
});

const items = ref([
  {
    day: 'wednesday,',
    month: 'may',
    date: '18'
  },
  {
    day: 'thursday,',
    month: 'may',
    date: '19'
  },
  {
    day: 'friday,',
    month: 'may',
    date: '20'
  },
  {
    day: 'saturday,',
    month: 'may',
    date: '21'
  },
  {
    day: 'sunday,',
    month: 'may',
    date: '22'
  },
  {
    day: 'monday,',
    month: 'may',
    date: '23'
  },
  {
    day: 'tuesday,',
    month: 'may',
    date: '24'
  }
]);
</script>

<style scoped>
.yellow {
  color: #fed474;
}
.orange {
  color: #fdb630;
}
.red {
  color: #fc2f65;
}
.violet {
  color: #e91cb1;
}
.purple {
  color: #9b1fd7;
}
.deepurple {
  color: #6424fa;
}
.blue {
  color: #373efa;
}

.active {
  background-color: #1da5fb;
  color: white;
}

.active-number {
  color: white;
}

.date-item:hover span {
  background-color: #1da5fb;
  color: white;
}
.date-item:hover {
  background-color: #1da5fb;
  color: white;
}
</style>
