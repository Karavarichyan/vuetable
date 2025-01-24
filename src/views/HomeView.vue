<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <ButtonComponent
      :onClick="goToTable"
      buttonText="Create New Table"
      buttonClass="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ButtonComponent from '@/components/ButtonComponent.vue';

const router = useRouter();

const goToTable = () => {
  router.push('/table');
};
</script>
