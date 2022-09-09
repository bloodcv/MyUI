<template>
  <div class="my-input-t">
    <input :type="props.type" :value="modelValue" @input="inputHandle">
  </div>
</template>

<script lang="ts" setup>
type IProps = {
  modelValue: string | number,
  type: string,
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  type: 'text'
});

const emit = defineEmits(['update:modelValue'])
const inputHandle = (e: Event) => {
  emit('update:modelValue', (e!.target as HTMLInputElement).value);
}
</script>

<style scoped>
</style>