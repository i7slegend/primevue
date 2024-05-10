import { getCurrentInstance, watch, ref, computed } from 'vue';
import UniqueComponentId from './UniqueComponentId';

function useUniqueId(refOrGetter = undefined) {
    const instance = getCurrentInstance()

    refOrGetter ??= computed(() => instance?.proxy.$attrs.id);

    const componentId = ref('');

    watch(
        refOrGetter,
        (value) => {
            componentId.value = value || UniqueComponentId();
        },
        { immediate: true }
    );

    return {
        id: componentId,
    };
}

export { useUniqueId as default, useUniqueId }
