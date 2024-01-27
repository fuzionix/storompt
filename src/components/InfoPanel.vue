<template>
  <section 
    id="info-panel" 
    :class="store.infomenuStatus ? 'right-0' : 'right-[calc(var(--info)*-1)]'"
    class="absolute top-0 z-20 max-w-[--info] w-full h-full border-l border-theme-grid duration-300 bg-white xl:right-0"
  >
    <section class="fixed w-[--info] h-[--header] border-b border-r border-theme-grid bg-white z-10 sm:w-full">
      <div class="absolute flex w-full h-full px-7 justify-between items-center">
        <img 
          @click="closeInfomenu"
          src="@/src/assets/icon/close_square.svg" 
          class="w-6 h-6 cursor-pointer duration-200 hover:scale-125 xl:hidden" 
          alt="close button"
        >
      </div>
    </section>
    <section class="pt-[--header]">
      <div class="p-7">
        <img src="@/src/assets/img/background_1.png" alt="">
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