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
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("p-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-2xl font-bold mb-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        placeholder: ("Table Title"),
        ...{ class: ("border p-2 mb-4 w-full") },
    });
    (__VLS_ctx.tableTitle);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex space-x-2 mb-4") },
    });
    // @ts-ignore
    /** @type { [typeof ButtonComponent, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
        onClick: ((__VLS_ctx.addColumn)),
        buttonText: ("Add Column"),
        buttonClass: ("bg-blue-500 text-white px-4 py-2 rounded"),
    }));
    const __VLS_1 = __VLS_0({
        onClick: ((__VLS_ctx.addColumn)),
        buttonText: ("Add Column"),
        buttonClass: ("bg-blue-500 text-white px-4 py-2 rounded"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
        ...{ class: ("min-w-full border") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
        ...{ class: ("bg-gray-200") },
    });
    for (const [column, index] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
            key: ((index)),
            ...{ class: ("border p-2 text-center") },
        });
        (column);
        // @ts-ignore
        /** @type { [typeof ButtonComponent, ] } */ ;
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
            onClick: ((() => __VLS_ctx.removeColumn(index))),
            buttonText: ("X"),
            buttonClass: ("ml-2 text-red-500 text-xs"),
        }));
        const __VLS_6 = __VLS_5({
            onClick: ((() => __VLS_ctx.removeColumn(index))),
            buttonText: ("X"),
            buttonClass: ("ml-2 text-red-500 text-xs"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    for (const [column] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
            key: ((column)),
            ...{ class: ("border p-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-col space-y-2") },
        });
        // @ts-ignore
        /** @type { [typeof ButtonComponent, ] } */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
            onClick: ((() => __VLS_ctx.addRowToColumn(column))),
            buttonText: ("Add Row"),
            buttonClass: ("bg-green-500 text-white px-2 py-1 rounded"),
        }));
        const __VLS_11 = __VLS_10({
            onClick: ((() => __VLS_ctx.addRowToColumn(column))),
            buttonText: ("Add Row"),
            buttonClass: ("bg-green-500 text-white px-2 py-1 rounded"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        for (const [row, rowIndex] of __VLS_getVForSourceType((__VLS_ctx.rows[column]))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((rowIndex)),
                ...{ class: ("flex items-center space-x-2") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
                ...{ class: ("w-full p-1 border rounded") },
            });
            (__VLS_ctx.rows[column][rowIndex]);
            // @ts-ignore
            /** @type { [typeof ButtonComponent, ] } */ ;
            // @ts-ignore
            const __VLS_15 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
                onClick: ((() => __VLS_ctx.removeRowFromColumn(column, rowIndex))),
                buttonText: ("Remove"),
                buttonClass: ("bg-red-500 text-white px-2 py-1 rounded text-xs"),
            }));
            const __VLS_16 = __VLS_15({
                onClick: ((() => __VLS_ctx.removeRowFromColumn(column, rowIndex))),
                buttonText: ("Remove"),
                buttonClass: ("bg-red-500 text-white px-2 py-1 rounded text-xs"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex space-x-4 mt-4") },
    });
    // @ts-ignore
    /** @type { [typeof ButtonComponent, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
        onClick: ((__VLS_ctx.saveTable)),
        buttonText: ("Save"),
        buttonClass: ("bg-blue-600 text-white px-4 py-2 rounded"),
    }));
    const __VLS_21 = __VLS_20({
        onClick: ((__VLS_ctx.saveTable)),
        buttonText: ("Save"),
        buttonClass: ("bg-blue-600 text-white px-4 py-2 rounded"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    // @ts-ignore
    /** @type { [typeof ButtonComponent, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
        onClick: ((__VLS_ctx.showTables)),
        buttonText: ("Show Tables"),
        buttonClass: ("bg-gray-500 text-white px-4 py-2 rounded"),
    }));
    const __VLS_26 = __VLS_25({
        onClick: ((__VLS_ctx.showTables)),
        buttonText: ("Show Tables"),
        buttonClass: ("bg-gray-500 text-white px-4 py-2 rounded"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ['p-4', 'text-2xl', 'font-bold', 'mb-4', 'border', 'p-2', 'mb-4', 'w-full', 'flex', 'space-x-2', 'mb-4', 'min-w-full', 'border', 'bg-gray-200', 'border', 'p-2', 'text-center', 'border', 'p-2', 'flex', 'flex-col', 'space-y-2', 'flex', 'items-center', 'space-x-2', 'w-full', 'p-1', 'border', 'rounded', 'flex', 'space-x-4', 'mt-4',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ButtonComponent: ButtonComponent,
            tableTitle: tableTitle,
            columns: columns,
            rows: rows,
            addColumn: addColumn,
            removeColumn: removeColumn,
            addRowToColumn: addRowToColumn,
            removeRowFromColumn: removeRowFromColumn,
            saveTable: saveTable,
            showTables: showTables,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
