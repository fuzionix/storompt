<template>
  <router-view></router-view>
  <Toaster />
</template>

<script>
import Toaster from '@/src/components_shadcn/ui/toast/Toaster.vue'
export default {
  name: 'App',
  components: {
    Toaster
  },
  metaInfo: {
    meta: [
      {
        name: 'description',
        content: 'A scenario-based AI story platform which enables interacting with multiple AI-powered characters in a predefined setting.'
      },
      {
        name: 'keywords',
        content: 'AI,artificial intelligence,story,characters,scenario-based,scenario,chatbot,builder,generator'
      }
    ]
  }
}
</script>

<style>

</style>
