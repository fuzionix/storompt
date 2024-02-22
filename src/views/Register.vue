<template>
    <section id="register" class="flex flex-col items-center justify-center h-[100vh] overflow-hidden md:flex-row overflow-y-scroll">
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
          <div class="items-top flex mt-8 gap-x-2">
            <Checkbox id="terms1" />
            <div class="grid gap-1.5 leading-none">
              <label
                for="terms1"
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p class="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="display-area" class="flex justify-center items-center h-full p-7 md:border-l md:w-[384px] xl:w-[768px]">
        <Accordion type="single" class="w-full md:max-w-[400px]" collapsible>
          <AccordionItem v-for="item in accordionItems" :key="item.value">
            <AccordionTrigger>{{ item.title }}</AccordionTrigger>
            <AccordionContent>
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  </template>
  
  <script>
  import { AlertCircle } from 'lucide-vue-next'
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components_shadcn/ui/accordion'
  import { Alert, AlertDescription, AlertTitle } from '@/src/components_shadcn/ui/alert'
  import { Button } from '@/src/components_shadcn/ui/button'
  import { Checkbox } from '@/src/components_shadcn/ui/checkbox'

  import axios from 'axios'

  export default {
      name: 'Register',
      components: {
        Button,
        AlertCircle,
        Accordion, 
        AccordionContent, 
        AccordionItem, 
        AccordionTrigger,
        Alert, 
        AlertDescription, 
        AlertTitle,
        Checkbox
      },
      props: [
      ],
      data() {
        return {
          loginError: false,
          loginErrorMessage: '',
          defaultValue: 'item-1',
          accordionItems: [
            { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
            { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
            { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
          ]
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