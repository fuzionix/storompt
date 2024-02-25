<template>
  <section id="login" class="flex flex-row-reverse items-center justify-center md:h-[100vh] overflow-hidden">
    <div id="login-container" class="flex flex-col items-center flex-1 w-full p-7 pt-[calc(1rem+var(--header))] 
      sm:px-20">
      <div class="max-w-[500px]">
        <h4 class="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Embark on a Chatty Adventure
        </h4>
        <h1 class="text-[2rem] sm:text-[3rem] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Login Now
        </h1>
        <p class="text-sm mt-6">From whimsical fables to thrilling mysteries, let your imagination soar as you engage with our chatty companions. </p>
        
        <Alert v-if="loginError" class="mb-8" variant="destructive">
          <AlertCircle class="w-4 h-4" />
          <AlertTitle>Failed To Create!</AlertTitle>
          <AlertDescription>
            {{ loginErrorMessage }}
          </AlertDescription>
        </Alert>
        <div class="flex mt-8">
          <form @submit.prevent="onSubmit()" class="w-full">
            <FormField v-slot="{ componentField }" name="username">
              <FormItem class="mb-8">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="text" class="h-[50px] pl-6 border-theme-darklight text-md" placeholder="example@exmail.com" v-bind="componentField" autocomplete="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="password">
              <FormItem class="mb-8">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" class="h-[50px] pl-6 border-theme-darklight text-md" placeholder="(◔_◔)" v-bind="componentField" autocomplete="current-password" />
                </FormControl>
                <FormDescription>
                  <a href="" class="hover:underline">Forgot Password?</a>
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>
            <Button type="submit" class="h-[50px] px-6">
              Login
            </Button>
            <Button @click="$router.push('/register')" variant="secondary" class="h-[50px] px-6 ml-4" >
              I Don't Have Account
            </Button>
          </form>
        </div>
      </div>
    </div>
    <div id="display-area" class="flex h-full bg-theme-gridlight md:p-7 w-0 md:w-[384px] xl:w-[768px]">
      
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import { AlertCircle } from 'lucide-vue-next'
import { Button } from '@/src/components_shadcn/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/src/components_shadcn/ui/alert'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/src/components_shadcn/ui/form'
import { Input } from '@/src/components_shadcn/ui/input'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

import axios from 'axios'

const formSchema = toTypedSchema(z.object({
  username: z.string(),
  password: z.string()
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const loginError = ref(false)
const loginErrorMessage = ref('')

</script>

<style>

</style>