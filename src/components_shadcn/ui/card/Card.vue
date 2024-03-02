<script setup>
import { cn } from "@/src/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border border-theme-gray bg-card text-card-foreground shadow-sm',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
