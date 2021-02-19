<template>
  <div class="home">
     {{ $store.state.storage.accessToken }}
    <img alt="Vue logo" src="../assets/images/logo.png">
     <HelloWorld msg="Welcome to Your Vue.js App"/>
    <component :is="dynHelloWorld" msg="ABC"></component>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted, getCurrentInstance, defineAsyncComponent } from 'vue'

export default {
  name: 'Home',
  // https://v3.vuejs.org/guide/composition-api-setup.html#setup
  setup(props, context) {
    const hello = 'HelloWorld'
    const dynHelloWorld = defineAsyncComponent(() => import(`../components/${hello}.vue`))

    onMounted(() => {
      const { proxy } = getCurrentInstance()
      console.log('mounted 1')
    })

    return {
      dynHelloWorld
    }
  },
  mounted() {
    console.log('mounted 2')
    this.$store.commit('storage/setAccessToken', 'token')
  },
  components: {
    HelloWorld: defineAsyncComponent(() => import('@/components/HelloWorld.vue'))
  }
}
</script>
