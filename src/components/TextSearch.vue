<template>
  <div>
    <label for="search" class="block text-sm font-medium leading-6 text-gray-900">Search</label>
    <div class="relative mt-2 flex items-center">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by Name or DOB"
        v-model="userStore.searchText"
        @input="updateSearchValue"
        ref="searchInput"
        class="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUsersStore } from '../stores/users'
const userStore = useUsersStore()

const searchInput = ref(null)
onMounted(() => {
  searchInput.value.focus()
})

const updateSearchValue = (event) => {
  userStore.setSearchValue(event.target.value)
}
</script>
