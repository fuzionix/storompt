<template>
  <section id="homepage" class="homepage">
    <h1 class="text-theme text-2xl">This is Home</h1>
    <Button>This is Button</Button>
  </section>
</template>

<script>
import { Button } from '@/src/components_shadcn/ui/button'

export default {
    name: 'Homepage',
    components: {
      Button
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