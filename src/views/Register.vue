<template>
    <section id="register" class="flex items-center justify-center h-[100vh] overflow-hidden">
      <div id="register-container" class="flex flex-col items-center flex-1 w-full p-7 pt-[calc(1rem+var(--header))] 
        sm:px-20">
        <div class="max-w-[500px]">
          <h4 class="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">
            Join the Chatty Tales Adventure
          </h4>
          <h1 class="text-[2rem] sm:text-[3rem] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Register Account
          </h1>
          <p class="text-sm mt-6 mb-20">Sign up today and unlock the gateway to a world where stories unfold at your command. </p>
          <Alert v-if="loginError" class="mb-8" variant="destructive">
            <AlertCircle class="w-4 h-4" />
            <AlertTitle>Failed To Create!</AlertTitle>
            <AlertDescription>
              {{ createErrorMessage }}
            </AlertDescription>
          </Alert>
          <div class="flex mt-8 ml-2">
            <Button 
              @click=""
              class="relative flex-1 h-[50px] mr-6 before:duration-200 before:content-[url('./src/assets/icon/game.svg')] 
              before:absolute before:left-0 before:top-0 before:translate-x-[-50%] before:translate-y-[-50%] hover:before:scale-125">Randomly</Button>
            <Button 
              @click=""
              class="relative flex-1 h-[50px] mr-0 before:duration-200 before:content-[url('./src/assets/icon/filter.svg')] max-w-[7.5rem] 
              before:absolute before:left-0 before:top-0 before:translate-x-[-50%] before:translate-y-[-50%] hover:before:scale-125" variant="secondary">Custom</Button>
          </div>
        </div>
      </div>
      <div id="display-area" class="flex h-full md:p-7 w-0 md:w-[384px] xl:w-[768px]">
        123
      </div>
    </section>
  </template>
  
  <script>
  import { AlertCircle } from 'lucide-vue-next'
  import { Button } from '@/src/components_shadcn/ui/button'
  import { Alert, AlertDescription, AlertTitle } from '@/src/components_shadcn/ui/alert'

  import axios from 'axios'

  export default {
      name: 'Register',
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
          loginError: false,
          loginErrorMessage: ''
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