<script setup>
import { computed } from "vue";
import { AlertDialogAction } from "radix-vue";
import { cn } from "@/src/lib/utils";
import { buttonVariants } from "@/src/components_shadcn/ui/button";

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AlertDialogAction
    v-bind="delegatedProps"
    :class="cn(buttonVariants(), props.class)"
  >
    <slot />
  </AlertDialogAction>
</template>
