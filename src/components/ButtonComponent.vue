<template>
  <button @click="onClick" :class="buttonClass" class="px-4 py-2 rounded">
    {{ buttonText }}
  </button>
</template>

<script setup>
const props = defineProps({
  onClick: {
    type: Function,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonClass: {
    type: String,
    default: '',
  },
})
</script>
