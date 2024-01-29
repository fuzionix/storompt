<template>
  <section id="demo-page" class="absolute w-full h-full overflow-hidden grid-background">
    <sidemenu />
    <main 
      :class="store.sidemenuStatus ? '' : 'md:!pl-0'"
      class="w-full h-full md:pl-[--menu] xl:pr-[--info] duration-300"
    >
      <header class="relative flex items-center justify-between h-[--header] border-b bg-white p-7">
        <img 
          v-if="!fillIcon"
          @mouseover="changeIcon(true)"
          :class="store.sidemenuStatus ? '' : 'md:!visible'"
          src="@/src/assets/icon/arrow_left_circle.svg" 
          class="visible w-6 h-6 rotate-180 cursor-pointer md:invisible" 
          alt="open menu"
        >
        <img 
          v-else
          @click="openSidemenu"
          @mouseleave="changeIcon(false)"
          :class="store.sidemenuStatus ? '' : 'md:!visible'"
          src="@/src/assets/icon/arrow_left_circle_full.svg" 
          class="visible w-6 h-6 rotate-180 cursor-pointer md:invisible" 
          alt="open menu"
        >
        <div class="text-center px-7 mt-[-.25rem]">
          <h3 class="font-bold text-lg leading-normal">Forgotten City</h3>
          <p class="text-xs opacity-70 max-w-[200px] leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis md:max-w-[300px]">Dive into an entire captivating story just by interacting</p>
        </div>
        <img 
          @click="openInfomenu"
          src="@/src/assets/icon/info_square.svg" 
          class="w-6 cursor-pointer xl:invisible" 
          alt="close menu"
        >
      </header>
      <section id="chat" class="w-full h-full">
        <div id="chat-message" class="h-full overflow-y-scroll">
          <div class="h-[2000px]">123</div>
          <p class="">1n1</p>
        </div>
        <div id="chat-input" class="relative bottom-[calc(var(--header)+var(--chat))] h-[--chat] w-full px-7 bg-theme-verylight duration-200 focus-within:shadow-line">
          <div id="input-frame" class="flex items-center h-full">
            <img src="@/src/assets/icon/magic_spark.svg" class="w-6" alt="">
            <div class="h-5 border-r border-r-theme-gray mx-7"></div>
            <form action="/" method="" class="flex flex-1">
              <input type="text" class="flex-1 pr-7 text-base bg-transparent min-w-0 focus:outline-0" placeholder="Type Something ...">
              <button type="submit">
                <img src="@/src/assets/icon/voice.svg" class="w-6" alt="">
              </button>
              <button type="submit" class="ml-4">
                <img src="@/src/assets/icon/send.svg" class="w-8" alt="">
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <info-panel />
  </section>
</template>

<script>
import Sidemenu from '@/src/components/Sidemenu.vue'
import InfoPanel from '@/src/components/InfoPanel.vue'

import { useStatusStore } from '@/src/store/useStatusStore'
import { ref } from 'vue'

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
        windowWidth: ref(window.innerWidth),
        minwindowWidth: 640,
        fillIcon: false
      }
    },
    computed: {
    },
    created() {
      if (this.windowWidth <= this.minwindowWidth) {
        this.store.sidemenuStatus = false
      }
    },
    mounted() {
      window.addEventListener('resize', this.detectWindowSize);
    },
    unmounted() {
      window.removeEventListener('resize', this.detectWindowSize);
    },
    methods: {
      openSidemenu() {
        this.store.sidemenuStatus = true
      },
      openInfomenu() {
        this.store.infomenuStatus = true
      },
      detectWindowSize() {
        if (ref(window.innerWidth).value <= this.minwindowWidth) {
          this.store.sidemenuStatus = false
        } else {
          this.store.sidemenuStatus = true
        }
      },
      changeIcon(status) {
        this.fillIcon = status
      }
    }
}
</script>

<style>

</style>