<template>
  <section id="demo-page" class="absolute w-full h-full overflow-hidden grid-background">
    <sidemenu />
    <main 
      :class="store.sidemenuStatus ? '' : 'md:!pl-0'"
      class="w-full h-full md:pl-[--menu] xl:pr-[--info] duration-300"
    >
      <header class="flex justify-between h-[--header] border-b bg-white p-7">
        <img 
          @click="openSidemenu"
          :class="store.sidemenuStatus ? '' : 'md:!visible'"
          src="@/src/assets/icon/arrow_left_circle.svg" 
          class="visible w-6 rotate-180 cursor-pointer md:invisible" 
          alt="open menu"
        >
        <div class="text-center px-7 mt-[-.25rem]">
          <h3 class="font-bold text-lg leading-normal">Forgotten City</h3>
          <p class="text-xs opacity-70 max-w-[200px] leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis md:max-w-[300px]">Dive into an entire captivating story just by interacting</p>
        </div>
        <img src="@/src/assets/icon/info_square.svg" class="w-6" alt="close menu">
      </header>
    </main>
    <info-panel />
  </section>
</template>

<script>
import Sidemenu from '@/src/components/Sidemenu.vue'
import InfoPanel from '@/src/components/InfoPanel.vue'

import { useStatusStore } from '@/src/store/useStatusStore'

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
        store: useStatusStore(),
      }
    },
    computed: {
    },
    created() {
    },
    methods: {
      openSidemenu() {
        this.store.sidemenuStatus = true
      }
    }
}
</script>

<style>

</style>