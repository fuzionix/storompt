<template>
  <menu id="sidemenu" class="absolute left-[calc(var(--menu)*-1)] max-w-[--menu] w-full h-full border-r border-theme-grid bg-white md:left-0">
    <div class="w-full h-[--header] border-b border-theme-grid">
      <div class="flex h-full px-7 justify-between">
        <img src="@/src/assets/logo/storompt_logo_dark_only.svg" class="w-10" alt="storompt logo">
        <img src="@/src/assets/icon/close_square.svg" class="w-6" alt="close button">
      </div>
    </div>
    <div class="p-7 pb-0">
      <h5 class="text-sm text-theme-darklight font-semibold">NAVIGATION</h5>
      <div class="flex flex-col py-4">
        <button class="flex items-center py-2 px-3 mb-2 rounded-lg border-x-theme-gridlight border duration-200 hover:bg-theme-light">
          <img src="@/src/assets/icon/discovery.svg" class="mr-8" alt="explore">
          <span class="mb-[0.125rem] font-medium text-sm">Explore</span>
        </button>
        <button class="flex items-center py-2 px-3 mb-2 rounded-lg border-x-theme-gridlight border duration-200 hover:bg-theme-light">
          <img src="@/src/assets/icon/heart.svg" class="mr-8" alt="liked story">
          <span class="mb-[0.125rem] font-medium text-sm">Liked Story</span>
        </button>
        <button class="flex items-center py-2 px-3 mb-2 rounded-lg border-x-theme-gridlight border duration-200 hover:bg-theme-light">
          <img src="@/src/assets/icon/setting.svg" class="mr-8" alt="setting">
          <span class="mb-[0.125rem] font-medium text-sm">Setting</span>
        </button>
      </div>
    </div>
    <div class="">
    </div>
  </menu>
</template>

<script>
export default {
    name: 'Sidemenu',
    components: {
    },
    props: [
    ],
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