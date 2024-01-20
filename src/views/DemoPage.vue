<template>
  <h1 class="text-theme text-2xl">This is Demo</h1>
  <sidemenu />
  <info-panel />
</template>

<script>
import Sidemenu from '@/components/Sidemenu.vue'
import InfoPanel from '@/components/InfoPanel.vue'

export default {
    name: 'DemoPage',
    props: [
    ],
    components: {
      'sidemenu': Sidemenu,
      'info-panel': InfoPanel
    },
    data() {
      return {

      }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style>

</style>