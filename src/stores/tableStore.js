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
// Определение хранилища Pinia
export const useTableStore = defineStore('tableStore', () => {
    // Указываем тип для `tables` как массив объектов `Table`
    const tables = ref([]);
    // Добавить таблицу с типизацией параметра
    const addTable = (table) => {
        tables.value.push(table);
    };
    return { tables, addTable };
});
