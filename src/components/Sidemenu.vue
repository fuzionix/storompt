<template>
  <menu id="sidemenu" class="absolute left-[calc(var(--menu)*-1)] max-w-[--menu] overflow-y-scroll w-full h-full border-r border-theme-grid bg-white md:left-0 [&>*]:select-none">
    <div class="fixed w-[--menu] h-[--header] border-b border-r border-theme-grid bg-white z-10">
      <div class="absolute flex w-full h-full px-7 justify-between">
        <img src="@/src/assets/logo/storompt_logo_dark_only.svg" class="w-10" alt="storompt logo">
        <img src="@/src/assets/icon/close_square.svg" class="w-6" alt="close button">
      </div>
    </div>
    <div class="mt-[--header] p-7 pb-0">
      <h5 class="text-sm text-theme-darklight font-semibold">NAVIGATION</h5>
      <div class="flex flex-col py-4">
        <button class="flex items-center py-2 px-3 mb-2 rounded-lg border-x-theme-gridlight border duration-200 hover:bg-theme-light active:bg-theme-grid">
          <img src="@/src/assets/icon/discovery.svg" class="mr-8" alt="explore">
          <span class="mb-[0.125rem] font-medium text-sm">Explore</span>
        </button>
        <button class="flex items-center py-2 px-3 mb-2 rounded-lg border-x-theme-gridlight border duration-200 hover:bg-theme-light active:bg-theme-grid">
          <img src="@/src/assets/icon/heart.svg" class="mr-8" alt="liked story">
          <span class="mb-[0.125rem] font-medium text-sm">Liked Story</span>
        </button>
        <button class="flex items-center py-2 px-3 mb-2 rounded-lg border-x-theme-gridlight border duration-200 hover:bg-theme-light active:bg-theme-grid">
          <img src="@/src/assets/icon/setting.svg" class="mr-8" alt="setting">
          <span class="mb-[0.125rem] font-medium text-sm">Setting</span>
        </button>
      </div>
    </div>
    <div class="">
      <h5 class="px-7 pt-4 text-sm text-theme-darklight font-semibold">YOUR JOURNEY</h5>
      <div class="my-4 border-y border-y-theme-gridlight">
        <button class="group relative flex flex-col justify-center w-full h-20 px-10 border-b border-b-theme-gridlight first:bg-theme-pale hover:bg-theme-light last:border-0 
        [&>*]:max-w-[200px] [&>*]:whitespace-nowrap [&>*]:overflow-hidden [&>*]:text-ellipsis">
          <h6 class="pb-1.5 text-xs opacity-50">Fantasy</h6>
          <h3 class="pb-0.5 text-sm font-semibold">Forgotten City</h3>
          <p class="text-xs opacity-70">Dive into an entire captivating story just by interacting</p>
          <img src="@/src/assets/icon/more_square.svg" class="hidden absolute right-2 top-2 w-5 rounded-full group-hover:block hover:bg-[#0001] active:bg-theme-darklight" alt="more">
        </button>
        <button class="group relative flex flex-col justify-center w-full h-20 px-10 border-b border-b-theme-gridlight first:bg-theme-pale hover:bg-theme-light last:border-0 
        [&>*]:max-w-[200px] [&>*]:whitespace-nowrap [&>*]:overflow-hidden [&>*]:text-ellipsis">
          <h6 class="pb-1.5 text-xs opacity-50">Science Fiction</h6>
          <h3 class="pb-0.5 text-sm font-semibold">Hidden Secrets</h3>
          <p class="text-xs opacity-70">Non suscipit magna interdum eu suscipit magna interdum</p>
          <img src="@/src/assets/icon/more_square.svg" class="hidden absolute right-2 top-2 w-5 rounded-full group-hover:block hover:bg-[#0001] active:bg-theme-darklight" alt="more">
        </button>
        <button class="group relative flex flex-col justify-center w-full h-20 px-10 border-b border-b-theme-gridlight first:bg-theme-pale hover:bg-theme-light last:border-0 
        [&>*]:max-w-[200px] [&>*]:whitespace-nowrap [&>*]:overflow-hidden [&>*]:text-ellipsis">
          <h6 class="pb-1.5 text-xs opacity-50">Romance</h6>
          <h3 class="pb-0.5 text-sm font-semibold">Midnight Whispers</h3>
          <p class="text-xs opacity-70">Curabitur pellentesque nibh nib</p>
          <img src="@/src/assets/icon/more_square.svg" class="hidden absolute right-2 top-2 w-5 rounded-full group-hover:block hover:bg-[#0001] active:bg-theme-darklight" alt="more">
        </button>
        <button class="group relative flex flex-col justify-center w-full h-20 px-10 border-b border-b-theme-gridlight first:bg-theme-pale hover:bg-theme-light last:border-0 
        [&>*]:max-w-[200px] [&>*]:whitespace-nowrap [&>*]:overflow-hidden [&>*]:text-ellipsis">
          <h6 class="pb-1.5 text-xs opacity-50">Mystery</h6>
          <h3 class="pb-0.5 text-sm font-semibold">Distant Shores</h3>
          <p class="text-xs opacity-70">At maximus ante fermentum sit</p>
          <img src="@/src/assets/icon/more_square.svg" class="hidden absolute right-2 top-2 w-5 rounded-full group-hover:block hover:bg-[#0001] active:bg-theme-darklight" alt="more">
        </button>
        

      </div>
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