<template>
  <NavigationBar />
  <section id="create-custom-demo" class="create-custom-demo">
    <div id="create-custom-demo-container" class="flex flex-col items-center flex-1 w-full p-7 pt-[calc(1rem+var(--header))] 
      sm:px-20">
      <div class="flex flex-col lg:flex-row w-full max-w-[1000px]">
        <div class="mb-6 lg:w-[250px] lg:mr-16">
          <h4 class="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">
            Embark on a Chatty Adventure
          </h4>
          <h1 class="text-[2rem] sm:text-[3rem] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Make Your Story
          </h1>
          <p class="text-sm mt-6">From whimsical fables to thrilling mysteries, let your imagination soar as you engage with our chatty companions. </p>
        </div>
        
        <div class="flex-1">
          <div class="flex">
            <form @submit.prevent="onSubmit()" class="w-full">
              <Card class="mb-6">
                <CardHeader>
                  <CardTitle class="font-semibold text-base">
                    <BookOpenText class="mb-2" />
                    <span>Background</span>
                  </CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField v-slot="{ componentField }" name="title">
                    <FormItem class="mb-8">
                      <FormLabel>Story Name</FormLabel>
                      <FormControl>
                        <Input type="text" class="h-[50px] pl-6 bg-theme-light text-md" placeholder="Forgotten City" v-bind="componentField" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                  <div class="flex">
                    <FormField v-slot="{ componentField }" name="genre">
                      <FormItem class="mb-8">
                        
                        <button 
                          id="dropdownDefaultButton" 
                          data-dropdown-toggle="dropdown" 
                          class="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[180px]" 
                          type="button"
                          @click="dropdownGenre = true"
                        >
                          Select Genre 
                          <ChevronDown class="w-4 h-4 opacity-50" />
                        </button>

                        <!-- Dropdown menu -->
                        <div 
                          id="dropdown"
                          ref="dropdown" 
                          :data-state="dropdownGenre ? 'open' : 'closed'" 
                          :class="dropdownGenre ? '' : 'hidden'" 
                          class="absolute z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
                        >
                          <ul class="p-1 text-sm" aria-labelledby="dropdownDefaultButton">
                            <li @click="closeDropdown()" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-10 text-sm outline-none hover:bg-accent hover:cursor-pointer focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                              <span>Fantasy</span>
                            </li>
                            <li @click="closeDropdown()" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-10 text-sm outline-none hover:bg-accent hover:cursor-pointer focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                              <span>Science Fiction</span>
                            </li>
                            <li @click="closeDropdown()" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-10 text-sm outline-none hover:bg-accent hover:cursor-pointer focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                              <span>History</span>
                            </li>
                            <li @click="closeDropdown()" class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-10 text-sm outline-none hover:bg-accent hover:cursor-pointer focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                              <span>Horror</span>
                            </li>
                          </ul>
                        </div>

                        
                      </FormItem>
                    </FormField>
                    
                  </div>
                </CardContent>
                <CardFooter class="text-xs text-theme-black opacity-65">
                  Card Footer
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle class="font-semibold text-base">
                    <VenetianMask class="mb-2" />
                    <span>Charactors</span>
                  </CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
                <CardFooter class="text-xs text-theme-black opacity-65">
                  Card Footer
                </CardFooter>
              </Card>
              <Button 
                type="submit"
                class="relative w-full mt-8 h-[50px] before:duration-200 before:content-[url('@/src/assets/icon/game.svg')] 
                before:absolute before:left-0 before:top-0 before:translate-x-[-50%] before:translate-y-[-50%] hover:before:scale-125"
              >
                Create Story
              </Button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import NavigationBar from '@/src/components/NavigationBar.vue'

import { Button } from '@/src/components_shadcn/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components_shadcn/ui/card'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/src/components_shadcn/ui/form'
import { Input } from '@/src/components_shadcn/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components_shadcn/ui/select'

import { 
  BookOpenText, 
  VenetianMask, 
  ChevronDown 
} from 'lucide-vue-next'

import { onClickOutside } from '@vueuse/core'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  title: z.string().max(100),
  genre: z.string().optional()
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const dropdownGenre = ref(false)
const dropdown = ref()

function closeDropdown() {
  dropdownGenre.value = false
}

onClickOutside(dropdown, closeDropdown)


</script>

<style>

</style>