<template>
  <section id="demo-page" class="absolute w-full h-full overflow-hidden grid-background">
    <sidemenu />
    <info-panel />
  </section>
</template>

<script>
import { ref } from 'vue'

import Sidemenu from '@/components/Sidemenu.vue'
import InfoPanel from '@/components/InfoPanel.vue'

export default {
    name: 'DemoPage',
    components: {
      'sidemenu': Sidemenu,
      'info-panel': InfoPanel
    },
    props: [
    ],
    data() {
      return {
        windowWidth: ref(window.innerWidth)
      }
    },
    computed: {
    },
    created() {
    },
    methods: {
    }
}
</script>

<style>

</style>