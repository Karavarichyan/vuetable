import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Table {
  title: string;
  columns: string[];
  rows: Record<string, string[]>;
}

export const useTableStore = defineStore('tableStore', () => {
  const tables = ref<Table[]>([]);

  const addTable = (table: Table) => {
    tables.value.push(table);
  };

  return { tables, addTable };
});
