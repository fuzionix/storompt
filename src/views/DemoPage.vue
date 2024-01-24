<template>
  <section id="demo-page" class="absolute w-full h-full overflow-hidden grid-background">
    <sidemenu />
    <main class="w-full h-full md:pl-[--menu] xl:pr-[--info]">
      <header class="flex justify-between h-[--header] border-b bg-white p-7">
        <img src="@/src/assets/icon/arrow_left_circle.svg" class="w-6" alt="close menu">
        <div class="text-center px-7 mt-[-.25rem]">
          <h3 class="font-bold text-lg leading-normal">Forgotten City</h3>
          <p class="text-xs opacity-70 leading-relaxed">Dive into an entire captivating story just by interacting</p>
        </div>
        <img src="@/src/assets/icon/info_square.svg" class="w-6" alt="close menu">
      </header>
    </main>
    <info-panel />
  </section>
</template>

<script>
import { ref } from 'vue'

import Sidemenu from '@/src/components/Sidemenu.vue'
import InfoPanel from '@/src/components/InfoPanel.vue'

export default {
    name: 'DemoPage',
    components: {
      'sidemenu': Sidemenu,
      'info-panel': InfoPanel,
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