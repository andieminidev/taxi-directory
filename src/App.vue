<script setup>
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-sm fixed w-full top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Left spacer for centering -->
          <div class="w-8"></div>

          <!-- Centered Logo -->
          <router-link to="/" class="flex items-center space-x-2 mx-auto">
            <span class="text-lg sm:text-xl font-bold text-yellow-500">Taxi</span>
            <span class="text-lg sm:text-xl font-bold text-gray-900">Directory</span>
          </router-link>

          <!-- Menu Dropdown -->
          <Menu as="div" class="relative">
            <MenuButton
              class="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <Bars3Icon class="h-5 w-5 sm:h-6 sm:w-6" />
            </MenuButton>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 
                       rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-for="item in menuItems" :key="item.path" v-slot="{ active }">
                    <router-link
                      :to="item.path"
                      :class="[
                        active ? 'bg-yellow-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center px-4 py-2.5 text-sm'
                      ]"
                    >
                      {{ item.name }}
                    </router-link>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </header>

    <!-- Main Content with proper spacing from fixed header -->
    <main class="flex-grow pt-16 pb-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="py-6 text-center text-gray-500 text-md">
      App made by <a href="https://github.com/andieminidev" target="_blank" class="text-yellow-500 hover:text-yellow-600 font-medium underline">Andi</a>
    </footer>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
