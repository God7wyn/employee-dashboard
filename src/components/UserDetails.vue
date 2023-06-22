<template>
  <TransitionRoot as="template" :show="userStore.userDetailsOpen">
    <Dialog as="div" class="relative z-10" @close="userStore.closeUserDetails()">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500"
                  @click="userStore.closeUserDetails()"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900"
                    >Employee Details</DialogTitle
                  >
                </div>
              </div>

              <div class="mt-2">
                <img
                  class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  :src="userStore.userDetail.imageUrl"
                  :alt="userStore.userDetail.userName"
                />
                <h3 class="mt-6 mb-6 text-sm font-bold text-gray-900">
                  {{ userStore.userDetail.userName }}
                </h3>
                <dl class="mt-1 flex flex-grow flex-row justify-between">
                  <dt class="text-sm text-gray-500 font-medium">Date of Birth:</dt>
                  <dd class="text-sm text-gray-500">{{ userStore.userDetail.dob }}</dd>
                </dl>
                <dl class="mt-1 flex flex-grow flex-row justify-between">
                  <dt class="text-sm text-gray-500 font-medium">Profession:</dt>
                  <dd class="text-sm text-gray-500">{{ userStore.userDetail.profession }}</dd>
                </dl>
                <dl class="mt-1 flex flex-grow flex-row justify-between">
                  <dt class="text-sm text-gray-500 font-medium">About:</dt>
                  <dd class="text-sm text-gray-500">{{ userStore.userDetail.about }}</dd>
                </dl>
                <dl class="mt-1 flex flex-grow flex-row justify-between">
                  <dt class="text-sm text-gray-500 font-medium">Address:</dt>
                  <dd class="text-sm text-gray-500">{{ userStore.userDetail.address }}</dd>
                </dl>
                <dl class="mt-1 flex flex-grow flex-row justify-between">
                  <dt class="text-sm text-gray-500 font-medium">Contact Number:</dt>
                  <dd class="text-sm text-gray-500">{{ userStore.userDetail.contactNo }}</dd>
                </dl>
                <dl class="mt-1 flex flex-grow flex-row justify-between">
                  <dt class="text-sm text-gray-500 font-medium">Salary:</dt>
                  <dd class="text-sm text-gray-500">{{ userStore.userDetail.salary }}</dd>
                </dl>
                <dl class="mt-1 mb-12 flex flex-grow flex-row justify-between">
                  <dt class="text-sm text-gray-500 font-medium">Application Status:</dt>
                  <dd>
                    <Select
                      :selected="userStore.userSelectedStatus"
                      @update:selected="updateSelected"
                    />
                  </dd>
                </dl>
              </div>

              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                  @click="
                    userStore.updateUserApplicationStatus(userStore.userDetail.id, selectedStatus),
                      userStore.closeUserDetails()
                  "
                >
                  Apply
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="userStore.closeUserDetails()"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import Select from './Select.vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

import { useUsersStore } from '../stores/users'
const userStore = useUsersStore()

const updateSelected = (value) => {
  userStore.updateUserSelectedStatus(value)
}
</script>
