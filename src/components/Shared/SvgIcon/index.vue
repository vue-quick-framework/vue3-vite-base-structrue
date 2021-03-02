<template>
  <component :is="componentName"></component>
</template>

<script>
// 异步导入， 等价asyncDefineComponent
// const modules = import.meta.glob('./svg/*.svg')
// 同步导入
const modules = import.meta.globEager('./svg/*.svg')
import {computed} from 'vue'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      componentName: computed(() => `${props.name}-icon`)
    }
  },
  // https://vitejs.dev/guide/features.html#glob-import
  components: {
    ...Object.assign({}, ...Object.keys(modules).map(key => {
      const iconName = key.match(/([\w|-]+).svg$/i)[1]
      const componentName = `${iconName}-icon`
      return { [componentName]: modules[key].default }
    }))
  }
}
</script>