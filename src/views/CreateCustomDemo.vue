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
                  <FormField v-slot="{ componentField }" name="username">
                    <FormItem class="mb-8">
                      <FormLabel>Story Name</FormLabel>
                      <FormControl>
                        <Input type="text" class="h-[50px] pl-6 bg-theme-light text-md" placeholder="Forgotten City" v-bind="componentField" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
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
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="nuxt">
                        Nuxt.js
                      </SelectItem>
                      <SelectItem value="next">
                        Next.js
                      </SelectItem>
                      <SelectItem value="sveltekit">
                        SvelteKit
                      </SelectItem>
                      <SelectItem value="astro">
                        Astro
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
                <CardFooter class="text-xs text-theme-black opacity-65">
                  Card Footer
                </CardFooter>
              </Card>
              <Button 
                @click="createItem()"
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

import { BookOpenText } from 'lucide-vue-next'
import { VenetianMask } from 'lucide-vue-next'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'


</script>

<style>

</style>