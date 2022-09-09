<template>
  <div>
    <my-input-t v-model="inputValue" type="text" />
    <br />
    <my-button @click="getInputValue">获取InputValue</my-button>
    <hr />
    <h3>InputValue: {{ inputValue }}</h3>
    <h3>curInputValue: {{ curInputValue }}</h3>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref(0);
const curInputValue = ref(0);
const getInputValue = () => {
  curInputValue.value = inputValue.value
}
</script>