<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto">
      <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div class="mx-auto max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TCS Employee Dashboard
            </h2>
            <p class="mt-4 text-lg leading-8 text-gray-500">Card List of all the employee's</p>
            <TextSearch />
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12">
        <UserCards />
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Suspense>
      <UserDetails #default />
      <template #fallback> Loading ... </template>
    </Suspense>
  </Teleport>
</template>

<script setup>
import TextSearch from './components/TextSearch.vue'
import UserCards from './components/UserCards.vue'
import UserDetails from './components/UserDetails.vue'
</script>
