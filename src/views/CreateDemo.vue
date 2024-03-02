<template>
  <section id="create-demo" class="flex items-center justify-center h-[100vh] overflow-hidden">
    <div id="create-demo-container" class="flex flex-col items-center flex-1 w-full p-7 pt-[calc(1rem+var(--header))] 
      sm:px-20">
      <div class="max-w-[500px]">
        <h4 class="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Make story
        </h4>
        <h1 class="text-[2rem] sm:text-[3rem] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Unleash Your Imagination
        </h1>
        <p class="text-sm mt-6 mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </p>
        <Alert v-if="createError" class="mb-8" variant="destructive">
          <AlertCircle class="w-4 h-4" />
          <AlertTitle>Failed To Create!</AlertTitle>
          <AlertDescription>
            {{ createErrorMessage }}
          </AlertDescription>
        </Alert>
        <div class="flex mt-8 ml-2">
          <Button 
            @click="createItem()"
            class="relative flex-1 h-[50px] mr-6 before:duration-200 before:content-[url('@/src/assets/icon/game.svg')] 
            before:absolute before:left-0 before:top-0 before:translate-x-[-50%] before:translate-y-[-50%] hover:before:scale-125">Randomly</Button>
          <Button 
            @click="$router.push('/custom-demo')"
            class="relative flex-1 h-[50px] mr-0 before:duration-200 before:content-[url('@/src/assets/icon/filter.svg')] max-w-[7.5rem] 
            before:absolute before:left-0 before:top-0 before:translate-x-[-50%] before:translate-y-[-50%] hover:before:scale-125" variant="secondary">Custom</Button>
        </div>
      </div>
    </div>
    <div id="display-area" class="flex h-full md:p-7 w-0 md:w-[384px] xl:w-[768px]">
      <div id="display-col-1" class="hidden flex-1 mt-[-10rem] animate-shift-up md:block">
        <img src="@/src/assets/img/create_display_3.png" class="w-full h-[50vh] p-3 object-cover" alt="">
        <img src="@/src/assets/img/create_display_1.png" class="w-full h-[50vh] p-3 object-cover" alt="">
        <img src="@/src/assets/img/create_display_5.png" class="w-full h-[50vh] p-3 object-cover" alt="">
      </div>
      <div id="display-col-2" class="hidden flex-1 mt-[+10rem] animate-shift-down xl:block">
        <img src="@/src/assets/img/create_display_2.png" class="w-full h-[50vh] p-3 object-cover" alt="">
        <img src="@/src/assets/img/create_display_4.png" class="w-full h-[50vh] p-3 object-cover" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import { AlertCircle } from 'lucide-vue-next'
import { Button } from '@/src/components_shadcn/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/src/components_shadcn/ui/alert'

import axios from 'axios'

export default {
    name: 'CreateDemo',
    components: {
      Button,
      Alert,
      AlertDescription,
      AlertTitle,
      AlertCircle
    },
    props: [
    ],
    data() {
      return {
        createError: false,
        createErrorMessage: ''
      }
    },
    computed: {
    },
    methods: {
      createItem() {
        this.createError = false,
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/chat/create-item',
          data: {
            type: 'random'
          }
        }).then((res) => {
          this.data = res.data
          this.$router.push(`/demo/${this.data['id']}`)
        }).catch((error) => {
          this.createError = true
          this.createErrorMessage = `Please try again later. [${error['name']} - ${error['message']}]. `
        })
      }
    }
}
</script>

<style>

</style>