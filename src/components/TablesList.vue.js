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
const addRowToColumn = (tableIndex, columnName) => {
    tableStore.tables[tableIndex].rows[columnName].push('');
};
const removeRowFromColumn = (tableIndex, columnName, rowIndex) => {
    tableStore.tables[tableIndex].rows[columnName].splice(rowIndex, 1);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex space-x-4 mb-6") },
    });
    // @ts-ignore
    /** @type { [typeof ButtonComponent, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
        onClick: ((__VLS_ctx.goToHome)),
        buttonText: (" Home"),
        buttonClass: ("bg-blue-500 text-white px-4 py-2 rounded"),
    }));
    const __VLS_1 = __VLS_0({
        onClick: ((__VLS_ctx.goToHome)),
        buttonText: (" Home"),
        buttonClass: ("bg-blue-500 text-white px-4 py-2 rounded"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof ButtonComponent, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
        onClick: ((__VLS_ctx.goToCreateTable)),
        buttonText: ("+ Create New Table"),
        buttonClass: ("bg-green-500 text-white px-4 py-2 rounded"),
    }));
    const __VLS_6 = __VLS_5({
        onClick: ((__VLS_ctx.goToCreateTable)),
        buttonText: ("+ Create New Table"),
        buttonClass: ("bg-green-500 text-white px-4 py-2 rounded"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    if (__VLS_ctx.tableStore.tables.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("text-gray-600") },
        });
    }
    for (const [table, index] of __VLS_getVForSourceType((__VLS_ctx.tableStore.tables))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((index)),
            ...{ class: ("mb-6 p-4 border rounded") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-semibold") },
        });
        (table.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
            ...{ class: ("min-w-full border mt-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
            ...{ class: ("bg-gray-200") },
        });
        for (const [column] of __VLS_getVForSourceType((table.columns))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
                key: ((column)),
                ...{ class: ("border p-2") },
            });
            (column);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
        for (const [column] of __VLS_getVForSourceType((table.columns))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
                key: ((column)),
                ...{ class: ("border p-2") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("flex flex-col space-y-2") },
            });
            if (__VLS_ctx.editingTables.includes(index)) {
                // @ts-ignore
                /** @type { [typeof ButtonComponent, ] } */ ;
                // @ts-ignore
                const __VLS_10 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
                    onClick: ((() => __VLS_ctx.addRowToColumn(index, column))),
                    buttonText: ("Add Row"),
                    buttonClass: ("bg-green-500 text-white px-2 py-1 rounded"),
                }));
                const __VLS_11 = __VLS_10({
                    onClick: ((() => __VLS_ctx.addRowToColumn(index, column))),
                    buttonText: ("Add Row"),
                    buttonClass: ("bg-green-500 text-white px-2 py-1 rounded"),
                }, ...__VLS_functionalComponentArgsRest(__VLS_10));
            }
            for (const [row, rowIndex] of __VLS_getVForSourceType((table.rows[column]))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((rowIndex)),
                    ...{ class: ("flex items-center space-x-2") },
                });
                __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
                    ...{ class: ("w-full p-1 border rounded") },
                    disabled: ((!__VLS_ctx.editingTables.includes(index))),
                });
                (table.rows[column][rowIndex]);
                if (__VLS_ctx.editingTables.includes(index)) {
                    // @ts-ignore
                    /** @type { [typeof ButtonComponent, ] } */ ;
                    // @ts-ignore
                    const __VLS_15 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
                        onClick: ((() => __VLS_ctx.removeRowFromColumn(index, column, rowIndex))),
                        buttonText: ("Remove "),
                        buttonClass: ("bg-red-500 text-white px-2 py-1 rounded text-xs"),
                    }));
                    const __VLS_16 = __VLS_15({
                        onClick: ((() => __VLS_ctx.removeRowFromColumn(index, column, rowIndex))),
                        buttonText: ("Remove "),
                        buttonClass: ("bg-red-500 text-white px-2 py-1 rounded text-xs"),
                    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
                }
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex space-x-4 mt-4") },
        });
        if (!__VLS_ctx.editingTables.includes(index)) {
            // @ts-ignore
            /** @type { [typeof ButtonComponent, ] } */ ;
            // @ts-ignore
            const __VLS_20 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
                onClick: ((() => __VLS_ctx.startEditing(index))),
                buttonText: ("Edit"),
                buttonClass: ("bg-yellow-500 text-white px-4 py-2 rounded"),
            }));
            const __VLS_21 = __VLS_20({
                onClick: ((() => __VLS_ctx.startEditing(index))),
                buttonText: ("Edit"),
                buttonClass: ("bg-yellow-500 text-white px-4 py-2 rounded"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_20));
        }
        if (__VLS_ctx.editingTables.includes(index)) {
            // @ts-ignore
            /** @type { [typeof ButtonComponent, ] } */ ;
            // @ts-ignore
            const __VLS_25 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
                onClick: ((() => __VLS_ctx.saveChanges(index))),
                buttonText: ("Save Changes"),
                buttonClass: ("bg-green-500 text-white px-4 py-2 rounded"),
            }));
            const __VLS_26 = __VLS_25({
                onClick: ((() => __VLS_ctx.saveChanges(index))),
                buttonText: ("Save Changes"),
                buttonClass: ("bg-green-500 text-white px-4 py-2 rounded"),
            }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        }
    }
    ['p-4', 'text-2xl', 'font-bold', 'mb-4', 'flex', 'space-x-4', 'mb-6', 'text-gray-600', 'mb-6', 'p-4', 'border', 'rounded', 'text-lg', 'font-semibold', 'min-w-full', 'border', 'mt-2', 'bg-gray-200', 'border', 'p-2', 'border', 'p-2', 'flex', 'flex-col', 'space-y-2', 'flex', 'items-center', 'space-x-2', 'w-full', 'p-1', 'border', 'rounded', 'flex', 'space-x-4', 'mt-4',];
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
            tableStore: tableStore,
            editingTables: editingTables,
            startEditing: startEditing,
            saveChanges: saveChanges,
            goToHome: goToHome,
            goToCreateTable: goToCreateTable,
            addRowToColumn: addRowToColumn,
            removeRowFromColumn: removeRowFromColumn,
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
