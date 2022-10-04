<template>
  <header>
    <nav>
      <NavBar />
    </nav>
  </header>

  <RouterView
    class="mt-[80px] md:mt-[120px] lg:mt-[140px]"
    :key="$route.path" />

  <footer>
    <DatesListComponent />
    <TalentComponent />
    <VenuesComponent />
    <FooterComponent />
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { provide } from 'vue';
import NavBar from './components/NavComponent.vue';
import VenuesComponent from './components/VenuesComponent.vue';
import DatesListComponent from './components/DatesListComponent.vue';
import TalentComponent from './components/TalentComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>
