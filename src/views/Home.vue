<template>
  <div class="home">
     {{ $store.state.storage.accessToken }}
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted, getCurrentInstance } from 'vue'

export default {
  name: 'Home',
  // https://v3.vuejs.org/guide/composition-api-setup.html#setup
  setup(props, context) {
    onMounted(() => {
      const { proxy } = getCurrentInstance()
      console.log('mounted 1')
    })
  },
  mounted() {
    console.log('mounted 2')
    this.$store.commit('storage/setAccessToken', 'token')
  },
  components: {
    HelloWorld
  }
}
</script>
