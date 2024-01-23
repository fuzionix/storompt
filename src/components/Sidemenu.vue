<template>
  <menu id="sidemenu" class="absolute left-[calc(var(--menu)*-1)] max-w-[--menu] w-full h-full border-r border-theme-grid bg-white md:left-0">
    <div class="w-full h-[--header] border-b border-theme-grid">
      <div class="flex h-full">
        <img src="@/assets/logo/storompt_logo_dark_only.svg" alt="storompt logo" class="w-10">
        <img src="@/assets/icon/close_square.svg" alt="close button" class="w-6">
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