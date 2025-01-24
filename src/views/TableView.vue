<!-- <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTableStore } from '@/stores/tableStore';
import ButtonComponent from '@/components/ButtonComponent.vue';

const router = useRouter();
const tableStore = useTableStore();

const tableTitle = ref('');
const columns = ref([]);
const rows = ref({});

const addColumn = () => {
  const columnName = `Column ${columns.value.length + 1}`;
  columns.value.push(columnName);
  rows.value[columnName] = [];
};

const removeColumn = (index) => {
  const columnName = columns.value[index];
  columns.value.splice(index, 1);
  delete rows.value[columnName];
};

const addRow = () => {
  columns.value.forEach((col) => {
    rows.value[col].push('');
  });
};

const saveTable = () => {
  if (tableTitle.value.trim() === '' || columns.value.length === 0) {
    alert('Table title and at least one column are required!');
    return;
  }

  tableStore.addTable({
    title: tableTitle.value,
    columns: [...columns.value],
    rows: JSON.parse(JSON.stringify(rows.value))
  });

  tableTitle.value = '';
  columns.value = [];
  rows.value = {};
};

const showTables = () => {
  router.push('/tables');
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Create a New Table</h2>

    <input v-model="tableTitle" placeholder="Table Title" class="border p-2 mb-4 w-full" />

    <div class="flex space-x-2 mb-4">
      <ButtonComponent
        :onClick="addColumn"
        buttonText="Add Column"
        buttonClass="bg-blue-500 text-white px-4 py-2 rounded"
      />
      <ButtonComponent
        :onClick="addRow"
        buttonText="Add Row"
        buttonClass="bg-green-500 text-white px-4 py-2 rounded"
      />
    </div>

    <table class="min-w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th v-for="(column, index) in columns" :key="index" class="border p-2">
            {{ column }}
            <ButtonComponent
              :onClick="() => removeColumn(index)"
              buttonText="X"
              buttonClass="ml-2 text-red-500"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(_, rowIndex) in rows[columns[0]] || []" :key="rowIndex">
          <td v-for="column in columns" :key="column" class="border p-2">
            <input v-model="rows[column][rowIndex]" class="w-full p-1 border rounded" />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex space-x-4 mt-4">
      <ButtonComponent
        :onClick="saveTable"
        buttonText="Save"
        buttonClass="bg-blue-600 text-white px-4 py-2 rounded"
      />
      <ButtonComponent
        :onClick="showTables"
        buttonText="Show Tables"
        buttonClass="bg-gray-500 text-white px-4 py-2 rounded"
      />
    </div>
  </div>
</template> -->

<!-- sax  tox@@  jnjuma -->

<!-- <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTableStore } from '@/stores/tableStore';
import ButtonComponent from '@/components/ButtonComponent.vue';

const router = useRouter();
const tableStore = useTableStore();

const tableTitle = ref('');
const columns = ref([]);
const rows = ref({});

const addColumn = () => {
  const columnName = `Column ${columns.value.length + 1}`;
  columns.value.push(columnName);
  rows.value[columnName] = [];
};

const removeColumn = (index) => {
  const columnName = columns.value[index];
  columns.value.splice(index, 1);
  delete rows.value[columnName];
};

const addRow = () => {
  columns.value.forEach((col) => {
    rows.value[col].push('');
  });
};

const removeRow = (rowIndex) => {
  columns.value.forEach((col) => {
    rows.value[col].splice(rowIndex, 1);
  });
};

const saveTable = () => {
  if (!tableTitle.value.trim() || columns.value.length === 0) {
    alert('Table title and at least one column are required!');
    return;
  }
  tableStore.addTable({
    title: tableTitle.value,
    columns: [...columns.value],
    rows: JSON.parse(JSON.stringify(rows.value)),
  });
  tableTitle.value = '';
  columns.value = [];
  rows.value = {};
};

const showTables = () => {
  router.push('/tables');
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Create a New Table</h2>

    <input v-model="tableTitle" placeholder="Table Title" class="border p-2 mb-4 w-full" />

    <div class="flex space-x-2 mb-4">
      <ButtonComponent :onClick="addColumn" buttonText="Add Column" buttonClass="bg-blue-500 text-white px-4 py-2 rounded" />
      <ButtonComponent :onClick="addRow" buttonText="Add Row" buttonClass="bg-green-500 text-white px-4 py-2 rounded" />
    </div>

    <table class="min-w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th v-for="(column, index) in columns" :key="index" class="border p-2">
            {{ column }}
            <ButtonComponent :onClick="() => removeColumn(index)" buttonText="X" buttonClass="text-red-500 ml-2" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(_, rowIndex) in rows[columns[0]] || []" :key="rowIndex">
          <td v-for="column in columns" :key="column" class="border p-2">
            <input v-model="rows[column][rowIndex]" class="w-full p-1 border rounded" />
          </td>
          <td class="border p-2 text-center">
            <ButtonComponent :onClick="() => removeRow(rowIndex)" buttonText="Remove Row" buttonClass="text-red-500" />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex space-x-4 mt-4">
      <ButtonComponent :onClick="saveTable" buttonText="Save" buttonClass="bg-blue-600 text-white px-4 py-2 rounded" />
      <ButtonComponent :onClick="showTables" buttonText="Show Tables" buttonClass="bg-gray-500 text-white px-4 py-2 rounded" />
    </div>
  </div>
</template> -->



<!-- jnjuma  avelacnuma   add row  xndir -->





<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTableStore } from '@/stores/tableStore';
import ButtonComponent from '@/components/ButtonComponent.vue';

const router = useRouter();
const tableStore = useTableStore();

const tableTitle = ref('');
const columns = ref([]);
const rows = ref({});

const addColumn = () => {
  const columnName = `Column ${columns.value.length + 1}`;
  columns.value.push(columnName);
  rows.value[columnName] = [];
};

const removeColumn = (index) => {
  const columnName = columns.value[index];
  columns.value.splice(index, 1);
  delete rows.value[columnName];
};

const addRowToColumn = (columnName) => {
  rows.value[columnName].push('');
};

const removeRowFromColumn = (columnName, rowIndex) => {
  rows.value[columnName].splice(rowIndex, 1);
};

const saveTable = () => {
  if (tableTitle.value.trim() === '' || columns.value.length === 0) {
    alert('Table title and at least one column are required!');
    return;
  }

  tableStore.addTable({
    title: tableTitle.value,
    columns: [...columns.value],
    rows: JSON.parse(JSON.stringify(rows.value)),
  });

  tableTitle.value = '';
  columns.value = [];
  rows.value = {};
};

const showTables = () => {
  router.push('/tables');
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Create a New Table</h2>

    <input
      v-model="tableTitle"
      placeholder="Table Title"
      class="border p-2 mb-4 w-full"
    />

    <div class="flex space-x-2 mb-4">
      <ButtonComponent
        :onClick="addColumn"
        buttonText="Add Column"
        buttonClass="bg-blue-500 text-white px-4 py-2 rounded"
      />
    </div>

    <table class="min-w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th
            v-for="(column, index) in columns"
            :key="index"
            class="border p-2 text-center"
          >
            {{ column }}
            <ButtonComponent
              :onClick="() => removeColumn(index)"
              buttonText="X"
              buttonClass="ml-2 text-red-500 text-xs"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="column in columns" :key="column" class="border p-2">
            <div class="flex flex-col space-y-2">
              <ButtonComponent
                :onClick="() => addRowToColumn(column)"
                buttonText="Add Row"
                buttonClass="bg-green-500 text-white px-2 py-1 rounded"
              />
              <div
                v-for="(row, rowIndex) in rows[column]"
                :key="rowIndex"
                class="flex items-center space-x-2"
              >
                <input
                  v-model="rows[column][rowIndex]"
                  class="w-full p-1 border rounded"
                />
                <ButtonComponent
                  :onClick="() => removeRowFromColumn(column, rowIndex)"
                  buttonText="Remove"
                  buttonClass="bg-red-500 text-white px-2 py-1 rounded text-xs"
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex space-x-4 mt-4">
      <ButtonComponent
        :onClick="saveTable"
        buttonText="Save"
        buttonClass="bg-blue-600 text-white px-4 py-2 rounded"
      />
      <ButtonComponent
        :onClick="showTables"
        buttonText="Show Tables"
        buttonClass="bg-gray-500 text-white px-4 py-2 rounded"
      />
    </div>
  </div>
</template>
