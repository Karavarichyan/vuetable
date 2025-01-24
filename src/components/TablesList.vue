<!-- <script setup>
import { useTableStore } from '@/stores/tableStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ButtonComponent from '@/components/ButtonComponent.vue';

const tableStore = useTableStore();
const editingTables = ref([]);
const router = useRouter();

const startEditing = (index) => {
  if (!editingTables.value.includes(index)) {
    editingTables.value.push(index);
  }
};

const saveChanges = (index) => {
  editingTables.value = editingTables.value.filter(i => i !== index);
};

const goToHome = () => {
  router.push('/');
};

const goToCreateTable = () => {
  router.push('/table');
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Saved Tables</h2>

    <div class="flex space-x-4 mb-6">
      <ButtonComponent
        :onClick="goToHome"
        buttonText=" Home"
        buttonClass="bg-blue-500 text-white px-4 py-2 rounded"
      />
      <ButtonComponent
        :onClick="goToCreateTable"
        buttonText="+ Create New Table"
        buttonClass="bg-green-500 text-white px-4 py-2 rounded"
      />
    </div>

    <div v-if="tableStore.tables.length === 0">
      <p class="text-gray-600">No saved tables.</p>
    </div>

    <div v-for="(table, index) in tableStore.tables" :key="index" class="mb-6 p-4 border rounded">
      <h3 class="text-lg font-semibold">{{ table.title }}</h3>

      <table class="min-w-full border mt-2">
        <thead>
          <tr class="bg-gray-200">
            <th v-for="column in table.columns" :key="column" class="border p-2">{{ column }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in table.rows[table.columns[0]] || []" :key="rowIndex">
            <td v-for="column in table.columns" :key="column" class="border p-2">
              <input
                v-model="table.rows[column][rowIndex]"
                class="w-full p-1 border rounded"
                :disabled="!editingTables.includes(index)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex space-x-4 mt-4">
        <ButtonComponent
          v-if="!editingTables.includes(index)"
          :onClick="() => startEditing(index)"
          buttonText="Edit"
          buttonClass="bg-yellow-500 text-white px-4 py-2 rounded"
        />
        <ButtonComponent
          v-if="editingTables.includes(index)"
          :onClick="() => saveChanges(index)"
          buttonText="Save Changes"
          buttonClass="bg-green-500 text-white px-4 py-2 rounded"
        />
      </div>
    </div>
  </div>
</template> -->

<script setup>
import { useTableStore } from '@/stores/tableStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ButtonComponent from '@/components/ButtonComponent.vue';

const tableStore = useTableStore();
const editingTables = ref([]);
const router = useRouter();

const startEditing = (index) => {
  if (!editingTables.value.includes(index)) {
    editingTables.value.push(index);
  }
};

const saveChanges = (index) => {
  editingTables.value = editingTables.value.filter(i => i !== index);
};

const deleteTable = (index) => {
  if (confirm('Are you sure you want to delete this table? This action cannot be undone.')) {
    tableStore.tables.splice(index, 1);
  }
};

const goToHome = () => {
  router.push('/');
};

const goToCreateTable = () => {
  router.push('/table');
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Saved Tables</h2>

    <div class="flex space-x-4 mb-6">
      <ButtonComponent
        :onClick="goToHome"
        buttonText=" Home"
        buttonClass="bg-blue-500 text-white px-4 py-2 rounded"
      />
      <ButtonComponent
        :onClick="goToCreateTable"
        buttonText="+ Create New Table"
        buttonClass="bg-green-500 text-white px-4 py-2 rounded"
      />
    </div>

    <div v-if="tableStore.tables.length === 0">
      <p class="text-gray-600">No saved tables.</p>
    </div>

    <div v-for="(table, index) in tableStore.tables" :key="index" class="mb-6 p-4 border rounded">
      <h3 class="text-lg font-semibold">{{ table.title }}</h3>

      <table class="min-w-full border mt-2">
        <thead>
          <tr class="bg-gray-200">
            <th v-for="column in table.columns" :key="column" class="border p-2">{{ column }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in table.rows[table.columns[0]] || []" :key="rowIndex">
            <td v-for="column in table.columns" :key="column" class="border p-2">
              <input
                v-model="table.rows[column][rowIndex]"
                class="w-full p-1 border rounded"
                :disabled="!editingTables.includes(index)"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex space-x-4 mt-4">
        <ButtonComponent
          v-if="!editingTables.includes(index)"
          :onClick="() => startEditing(index)"
          buttonText="Edit"
          buttonClass="bg-yellow-500 text-white px-4 py-2 rounded"
        />
        <ButtonComponent
          v-if="editingTables.includes(index)"
          :onClick="() => saveChanges(index)"
          buttonText="Save Changes"
          buttonClass="bg-green-500 text-white px-4 py-2 rounded"
        />
        <ButtonComponent
          :onClick="() => deleteTable(index)"
          buttonText="Delete Table"
          buttonClass="bg-red-500 text-white px-4 py-2 rounded"
        />
      </div>
    </div>
  </div>
</template>
