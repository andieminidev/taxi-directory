<script setup>
import { ref, computed } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

// This will later be fetched from your MongoDB
const cities = [
  { id: 1, name: 'New York', taxiCount: 150 },
  { id: 2, name: 'Los Angeles', taxiCount: 120 },
  { id: 3, name: 'Chicago', taxiCount: 90 },
  { id: 4, name: 'Houston', taxiCount: 80 },
  { id: 5, name: 'Phoenix', taxiCount: 70 },
  { id: 6, name: 'Philadelphia', taxiCount: 60 },
]

const searchQuery = ref('')

const filteredCities = computed(() => {
  return cities.filter(city => 
    city.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="text-center max-w-2xl mx-auto space-y-4">
      <h1 class="text-3xl font-bold text-gray-900">Select Your City</h1>
      <p class="text-gray-600">Choose your location to find available taxi services</p>
    </div>

    <!-- Search Bar -->
    <div class="max-w-md mx-auto">
      <div class="relative">
        <MagnifyingGlassIcon class="h-5 w-5 absolute left-3 top-3 text-gray-400" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search cities..."
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 
                 focus:ring-yellow-400 focus:border-transparent outline-none"
        />
      </div>
    </div>

    <!-- City Grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      <router-link
        v-for="city in filteredCities"
        :key="city.id"
        :to="`/city/${city.id}`"
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 
               transform hover:-translate-y-1"
      >
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">{{ city.name }}</h2>
            <p class="text-gray-500 text-sm">{{ city.taxiCount }} services available</p>
          </div>
          <div class="bg-yellow-100 rounded-full p-2">
            <ChevronRightIcon class="h-5 w-5 text-yellow-600" />
          </div>
        </div>
      </router-link>
    </div>

    <!-- No Results -->
    <div v-if="filteredCities.length === 0" class="text-center py-8">
      <p class="text-gray-500">No cities found matching your search.</p>
    </div>
  </div>
</template> 