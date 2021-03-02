<template>
  <div @click="testClick" @longpress="testLongpress">
    <h1>{{ msg }}</h1>
  </div>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <el-button>hello</el-button>
  <el-date-picker v-model="state.date"></el-date-picker>
  <svg-icon name="help"></svg-icon>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0, date: '' })

const testClick = () => { console.log('testClick') }
const testLongpress = () => { console.log('testLongpress') }

</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}
</style>