<template>
    <section id="create-demo" class="flex flex-col items-center justify-center min-h-[100vh]">
      <div id="create-demo-container" class="flex flex-col items-center max-w-[500px] p-7 pt-[calc(1rem+var(--header))] 
        sm:px-7">
        <div>
          <h3 class="text-[2rem] font-semibold">Create Story</h3>
          <p class="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </p>
          <div class="flex mt-4">
            <cn-button class="mr-4">Randomly</cn-button>
            <cn-button variant="secondary">Custom</cn-button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { Button } from '@/src/components_shadcn/ui/button'

  export default {
      name: 'CreateDemo',
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