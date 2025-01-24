import { useRouter } from 'vue-router';
import ButtonComponent from '@/components/ButtonComponent.vue';
const router = useRouter();
const goToTable = () => {
    router.push('/table');
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-center h-screen bg-gray-100") },
    });
    // @ts-ignore
    /** @type { [typeof ButtonComponent, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ButtonComponent, new ButtonComponent({
        onClick: ((__VLS_ctx.goToTable)),
        buttonText: ("Create New Table"),
        buttonClass: ("bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"),
    }));
    const __VLS_1 = __VLS_0({
        onClick: ((__VLS_ctx.goToTable)),
        buttonText: ("Create New Table"),
        buttonClass: ("bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ['flex', 'items-center', 'justify-center', 'h-screen', 'bg-gray-100',];
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
            goToTable: goToTable,
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
