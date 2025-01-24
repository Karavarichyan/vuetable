// import { defineStore } from 'pinia';
// import { ref } from 'vue';

// export const useTableStore = defineStore('tableStore', () => {
//   const tables = ref([]);

//   // Добавить таблицу
//   const addTable = (table) => {
//     tables.value.push(table);
//   };

//   return { tables, addTable };
// });
import { defineStore } from 'pinia';
import { ref } from 'vue';

// Описание интерфейса таблицы
interface Table {
  title: string;
  columns: string[];
  rows: Record<string, string[]>;
}

// Определение хранилища Pinia
export const useTableStore = defineStore('tableStore', () => {
  // Указываем тип для `tables` как массив объектов `Table`
  const tables = ref<Table[]>([]);

  // Добавить таблицу с типизацией параметра
  const addTable = (table: Table) => {
    tables.value.push(table);
  };

  return { tables, addTable };
});
