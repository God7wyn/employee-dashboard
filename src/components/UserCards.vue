<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li
      v-for="person in userStore.filteredUsers"
      :key="person.id"
      class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
    >
      <div
        class="flex flex-1 flex-col p-8 cursor-pointer"
        @click="userStore.openUserDetails(person.id)"
      >
        <img
          class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
          :src="person.imageUrl"
          :alt="person.userName"
        />
        <h3 class="mt-6 mb-6 text-sm font-bold text-gray-900">{{ person.userName }}</h3>
        <dl class="mt-1 flex flex-grow flex-row justify-between">
          <dt class="text-sm text-gray-500 font-medium">Date of Birth:</dt>
          <dd class="text-sm text-gray-500">{{ person.dob }}</dd>
        </dl>
        <dl class="mt-1 flex flex-grow flex-row justify-between">
          <dt class="text-sm text-gray-500 font-medium">Profession:</dt>
          <dd class="text-sm text-gray-500">{{ person.profession }}</dd>
        </dl>
        <dl class="mt-1 flex flex-grow flex-row justify-between">
          <dt class="text-sm text-gray-500 font-medium">Salary:</dt>
          <dd class="text-sm text-gray-500">{{ person.salary }}</dd>
        </dl>
        <dl class="mt-1 flex flex-grow flex-row justify-between">
          <dt class="text-sm text-gray-500 font-medium">Application Status:</dt>
          <dd
            v-if="person.applicationStatus === 'Pending'"
            class="text-sm text-yellow-400 font-medium"
          >
            {{ person.applicationStatus }}
          </dd>
          <dd
            v-else-if="person.applicationStatus === 'Processed'"
            class="text-sm text-green-500 font-medium"
          >
            {{ person.applicationStatus }}
          </dd>
          <dd
            v-else-if="person.applicationStatus === 'Declined'"
            class="text-sm text-red-500 font-medium"
          >
            {{ person.applicationStatus }}
          </dd>
        </dl>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { useUsersStore } from '../stores/users'
const userStore = useUsersStore()
userStore.setUsers()
</script>
