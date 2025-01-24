import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTableStore = defineStore('tableStore', () => {
  const tables = ref([]);

  // Добавить таблицу
  const addTable = (table) => {
    tables.value.push(table);
  };

  return { tables, addTable };
});
