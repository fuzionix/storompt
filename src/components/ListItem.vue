<script setup lang="ts">
import { NavigationMenuLink } from 'radix-vue'

const props = defineProps({
  title: String,
})
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <a
        v-bind="$attrs"
        class="focus:shadow-[0_0_0_2px] focus:shadow-green7 hover:bg-theme-verylight block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
      >
        <div class="mb-[5px] font-medium leading-[1.2]">
          {{ props.title }}
        </div>
        <p class="text-sm opacity-80 my-0 leading-[1.4]">
          <slot />
        </p>
      </a>
    </NavigationMenuLink>
  </li>
</template>