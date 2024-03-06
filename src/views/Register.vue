<template>
  <NavigationBar class="md:pr-[calc(1.75rem+384px)] xl:pr-[calc(1.75rem+768px)]" breakpoint="2xl:block"/>
  <section id="register" class="flex flex-col justify-center md:flex-row md:h-[100vh]">
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
        <Alert v-if="registerError" class="mb-8" variant="destructive">
          <AlertCircle class="w-4 h-4" />
          <AlertTitle>Failed To Create!</AlertTitle>
          <AlertDescription>
            {{ registerErrorMessage }}
          </AlertDescription>
        </Alert>
        <div class="flex mt-8">
          <form @submit.prevent="onSubmit()" class="w-full pb-7">
            <FormField v-slot="{ componentField }" name="username">
              <FormItem class="mb-8">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="text" class="h-[50px] pl-6 text-md" placeholder="example@exmail.com" v-bind="componentField" autocomplete="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="password">
              <FormItem class="mb-8">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" class="h-[50px] pl-6 text-md" placeholder="" v-bind="componentField" autocomplete="new-password" />
                </FormControl>
                <FormDescription>
                  Password must contain at least 8 charactor(s)
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="passowrdConfirm">
              <FormItem class="mb-8">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" class="h-[50px] pl-6 text-md" placeholder="" v-bind="componentField" autocomplete="new-password" />
                </FormControl>
                <FormDescription>
                  Type your password again to confirm
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>
            <Button type="submit" class="h-[50px] px-6">
              Register
            </Button>
            <Button @click="$router.push('/login')" variant="secondary" class="h-[50px] px-6 ml-4" >
              I Have Account
            </Button>
            <FormField v-slot="{ termsValue, handleChange }" type="checkbox" name="termscheck">
              <FormItem>
                <div class="items-top flex mt-8 gap-x-2">
                  <FormControl>
                    <Checkbox id="terms" :checked="termsValue" @update:checked="handleChange" />
                  </FormControl>
                  <div class="grid gap-1.5 leading-none">
                    <Label
                      for="terms"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I accept terms and conditions
                    </Label>
                    <p class="text-sm text-muted-foreground">
                      You agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </div>
              </FormItem>
            </FormField>
          </form>
        </div>
        <Alert v-if="createError" class="mb-8" variant="destructive">
          <AlertCircle class="w-4 h-4" />
          <AlertTitle>Failed To Create!</AlertTitle>
          <AlertDescription>
            {{ createErrorMessage }}
          </AlertDescription>
        </Alert>
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

<script setup>
import NavigationBar from '@/src/components/NavigationBar.vue'

import { ref } from 'vue'

import { AlertCircle } from 'lucide-vue-next'
import { Button } from '@/src/components_shadcn/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/src/components_shadcn/ui/alert'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components_shadcn/ui/accordion'
import { Checkbox } from '@/src/components_shadcn/ui/checkbox'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/src/components_shadcn/ui/form'
import { Input } from '@/src/components_shadcn/ui/input'
import { Label } from '@/src/components_shadcn/ui/label'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

import axios from 'axios'

const formSchema = toTypedSchema(z.object({
  username: z.string().email(),
  password: z.string().min(8),
  passowrdConfirm: z.string().min(8),
  termscheck: z.boolean().default(false)
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const registerError = ref(false)
const registerErrorMessage = ref('')
const defaultValue = ref('item-1')
const accordionItems = ref(
  [
    { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
    { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
    { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
  ]
)
const createErrorMessage = ref("ii")
</script>

<style>

</style>