<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PhoneIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const router = useRouter()
const cityId = route.params.id

const cityInfo = computed(() => {
  const cities = {
    1: { name: 'New York', emoji: '🗽' },
    2: { name: 'Los Angeles', emoji: '🌴' },
    3: { name: 'Chicago', emoji: '🌆' },
    4: { name: 'Houston', emoji: '🌟' },
    5: { name: 'Phoenix', emoji: '🌵' },
    6: { name: 'Philadelphia', emoji: '🏛️' },
  }
  return cities[cityId] || { name: 'Unknown City', emoji: '🚕' }
})

const taxis = ref([
  {
    id: 1,
    name: 'City Taxi Service',
    phone: '+1234567890',
    description: '24/7 Service Available',
  },
  {
    id: 2,
    name: 'Express Taxi',
    phone: '+1234567891',
    description: 'Airport Transfers Specialist',
  }
])

const initiateCall = (phoneNumber) => {
  window.location.href = `tel:${phoneNumber}`
}

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="space-y-8 px-4 sm:px-6 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="flex items-center space-x-4 py-2">
      <button 
        @click="goBack"
        class="p-2.5 rounded-full hover:bg-gray-100 active:bg-gray-200"
      >
        <ArrowLeftIcon class="h-6 w-6 text-gray-600" />
      </button>
      <div>
        <div class="flex items-center space-x-2">
          <span class="text-3xl">{{ cityInfo.emoji }}</span>
          <h1 class="text-2xl font-bold text-gray-900">{{ cityInfo.name }}</h1>
        </div>
        <p class="text-sm text-gray-500 mt-0.5">Available Taxi Services</p>
      </div>
    </div>

    <!-- Taxi List -->
    <div class="space-y-5 max-w-2xl mx-auto">
      <div
        v-for="taxi in taxis"
        :key="taxi.id"
        class="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      >
        <div class="flex justify-between items-start gap-4">
          <div class="space-y-3">
            <h2 class="text-lg sm:text-xl font-semibold text-gray-900">{{ taxi.name }}</h2>
            <p class="text-gray-600 text-sm sm:text-base">{{ taxi.description }}</p>
            <p class="text-base sm:text-lg font-medium text-gray-800 flex items-center">
              <span class="mr-2">📞</span>
              {{ taxi.phone }}
            </p>
          </div>
          
          <button
            @click="initiateCall(taxi.phone)"
            class="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white p-3.5 sm:p-4 
                   rounded-full transform transition hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <PhoneIcon class="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template> 