<script setup>
import { ref, computed } from 'vue'
import { MagnifyingGlassIcon, PhoneIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

// This will later be fetched from your MongoDB
const cities = [
  { id: 1, name: 'New York', taxiCount: 150, emoji: '🗽' },
  { id: 2, name: 'Los Angeles', taxiCount: 120, emoji: '🌴' },
  { id: 3, name: 'Chicago', taxiCount: 90, emoji: '🌆' },
  { id: 4, name: 'Houston', taxiCount: 80, emoji: '🌟' },
  { id: 5, name: 'Phoenix', taxiCount: 70, emoji: '🌵' },
  { id: 6, name: 'Philadelphia', taxiCount: 60, emoji: '🏛️' },
]

const searchQuery = ref('')

const filteredCities = computed(() => {
  return cities.filter(city => 
    city.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div class="space-y-8 sm:space-y-12 px-4 sm:px-6 max-w-7xl mx-auto">
    <!-- Hero Section -->
    <div class="text-center space-y-4 sm:space-y-6 max-w-xl mx-auto pt-4 sm:pt-8">
      <div class="flex justify-center items-center space-x-3">
        <span class="text-3xl sm:text-4xl">🚕</span>
        <PhoneIcon class="h-10 w-10 sm:h-14 sm:w-14 text-yellow-400" />
      </div>
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 md:text-5xl">
        Find Taxi Numbers
      </h1>
      <p class="text-lg sm:text-xl text-gray-600">
        Quick access to taxi services in your city 📱
      </p>
    </div>

    <!-- Search Bar -->
    <div class="max-w-md mx-auto">
      <div class="relative">
        <MagnifyingGlassIcon class="h-5 w-5 absolute left-3.5 top-3.5 text-gray-400" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search your city... 🔍"
          class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full 
                 focus:ring-2 focus:ring-yellow-400 focus:border-transparent 
                 outline-none shadow-sm text-base sm:text-lg"
        />
      </div>
    </div>

    <!-- City Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <router-link
        v-for="city in filteredCities"
        :key="city.id"
        :to="`/city/${city.id}`"
        class="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg 
               transition-all duration-200 transform hover:-translate-y-1 
               active:scale-95"
      >
        <div class="flex justify-between items-center">
          <div>
            <div class="flex items-center space-x-2.5">
              <span class="text-2xl sm:text-3xl">{{ city.emoji }}</span>
              <h2 class="text-lg sm:text-xl font-semibold text-gray-900">{{ city.name }}</h2>
            </div>
            <p class="text-gray-500 text-sm mt-1.5">{{ city.taxiCount }} services available</p>
          </div>
          <div class="bg-yellow-50 rounded-full p-3">
            <ChevronRightIcon class="h-5 w-5 text-yellow-600" />
          </div>
        </div>
      </router-link>
    </div>

    <!-- No Results -->
    <div v-if="filteredCities.length === 0" class="text-center py-8">
      <p class="text-gray-500 text-lg">No cities found matching your search 😕</p>
    </div>

    <!-- Features Section -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16">
      <div class="p-4 text-center">
        <div class="text-2xl sm:text-3xl mb-2">⚡</div>
        <h3 class="font-semibold text-gray-900">Quick Access</h3>
        <p class="text-gray-600 text-sm">Find taxis instantly</p>
      </div>
      <div class="p-4 text-center">
        <div class="text-2xl sm:text-3xl mb-2">📞</div>
        <h3 class="font-semibold text-gray-900">One-Click Call</h3>
        <p class="text-gray-600 text-sm">Direct phone connection</p>
      </div>
      <div class="p-4 text-center">
        <div class="text-2xl sm:text-3xl mb-2">🌆</div>
        <h3 class="font-semibold text-gray-900">City-Wide Coverage</h3>
        <p class="text-gray-600 text-sm">All local taxi services</p>
      </div>
    </div>
  </div>
</template> 