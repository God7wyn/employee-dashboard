<template>
  <div>
    <label for="status" class="sr-only">Application Status</label>
    <select
      id="status"
      name="status"
      class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      v-model="selected"
      @change="emitSelected"
    >
      <option>Pending</option>
      <option>Processed</option>
      <option>Declined</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['selected'])
const selected = ref(props.selected)

const emit = defineEmits(['update:selected'])

const emitSelected = () => {
  emit('update:selected', selected.value)
}
</script>
