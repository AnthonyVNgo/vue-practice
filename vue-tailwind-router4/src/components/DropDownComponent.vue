<template>
  <div class="flex justify-center">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
          <div class="space-y-2">
            <span class="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span class="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span class="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95">
        <MenuItems
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-[#252525] py-[10px] px-5 focus:outline-none">
          <div>
            <MenuItem
              v-slot="{ active }"
              class="block border-b-[1px] border-dotted border-[rgba(255,255,255,0.2)] py-1 uppercase text-white"
              v-for="item in menuItems">
              <a
                :href="item.path"
                class="flex h-10 items-center text-sm font-semibold text-white">
                {{ item.name }}
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { inject } from 'vue';
const menuItems = inject('menuItems');
</script>
