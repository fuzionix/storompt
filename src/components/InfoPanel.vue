<template>
  <section 
    id="info-panel" 
    :class="store.infomenuStatus ? 'right-0' : 'right-[calc(var(--info)*-1)]'"
    class="absolute top-0 z-20 max-w-[--info] overflow-y-scroll w-full h-full border-l border-theme-grid duration-300 bg-white xl:right-0"
  >
    <section id="panel-header" class="fixed w-[--info] h-[--header] border-b border-r border-theme-grid bg-white z-10 sm:w-full">
      <div class="absolute flex w-full h-full px-7 justify-between items-center">
        <img 
          @click="closeInfomenu"
          src="@/src/assets/icon/close_square.svg" 
          class="w-6 h-6 cursor-pointer duration-200 hover:scale-125 xl:hidden" 
          alt="close button"
        >
      </div>
    </section>
    <section id="panel-content" class="pt-[--header] pb-7">
      <div class="p-7">
        <img src="@/src/assets/img/background_1.png" class="rounded-lg aspect-video object-cover object-center" alt="">
      </div>
      <div class="px-7">
        <h2 class="font-medium text-xl">{{ chatItem['title'] }}</h2>
        <p class="pt-2 text-sm opacity-70">{{ chatItem['title_description'] }}</p>
        <div class="flex my-7 py-7 border-y">
          <div class="flex-1 pr-2">
            <h5 class="pb-1 text-sm font-semibold text-theme-darklight">Genre</h5>
            <p class="text-sm leading-relaxed">{{ chatItem['genre'] }}</p>
          </div>
          <div class="flex-1 pr-2">
            <h5 class="pb-1 text-sm font-semibold text-theme-darklight">Classification</h5>
            <p class="text-sm leading-relaxed">{{ chatItem['classification'] }}</p>
          </div>
        </div>
        <div>
          <h5 class="pb-4 text-sm font-semibold text-theme-darklight">Background</h5>
          <p class="text-sm leading-relaxed">{{ chatItem['background'] }}</p>        
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { useStatusStore } from '@/src/store/useStatusStore'

export default {
    name: 'InfoPanel',
    components: {
    },
    props: [
      'chatItem'
    ],
    data() {
      return {
        store: useStatusStore(),
      }
    },
    computed: {
    },
    methods: {
      closeInfomenu() {
        this.store.infomenuStatus = false
      }
    }
}
</script>

<style>

</style>