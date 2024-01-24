<template>
  <section id="homepage" class="homepage">
    <h1 class="text-theme text-2xl">This is Home</h1>
    <cn-button>This is Button</cn-button>
  </section>
</template>

<script>
import { Button } from '@/src/components_shadcn/ui/button'

export default {
    name: 'Homepage',
    components: {
      'cn-button': Button
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