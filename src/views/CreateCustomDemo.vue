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
                        <Input type="text" class="h-[50px] pl-6 bg-theme-light text-md" placeholder="Forgotten City" v-bind="componentField" maxlength="100" autofocus  />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                  <div class="flex flex-col sm:flex-row">
                    <FormField name="genre">
                      <FormItem class="mb-8 flex-1 sm:pr-4">
                        <FormLabel>Genre</FormLabel>
                        <Selector 
                          :listItem="listGenre" 
                          @getSelectValue="getSelectValueGenre"
                          placeholder="Select Genre"
                        ></Selector>
                      </FormItem>
                    </FormField>
                    <FormField name="category">
                      <FormItem class="mb-8 flex-1 sm:pl-4">
                        <FormLabel>Catergory</FormLabel>
                        <Selector 
                          :listItem="listGenre" 
                          @getSelectValue="getSelectValueCategory"
                          placeholder="Select Category"
                        ></Selector>
                      </FormItem>
                    </FormField>
                  </div>
                  <FormField v-slot="{ componentField }" name="description">
                    <FormItem class="mb-8">
                      <FormLabel>Story Description (Optional)</FormLabel>
                      <CardDescription>Make one or two sentences to describe your story background</CardDescription>
                      <FormControl>
                        <Input type="text" class="h-[50px] pl-6 bg-theme-light text-md" placeholder="" v-bind="componentField" maxlength="500" />
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
                  <FormField v-slot="{ componentField }" name="charname">
                    <FormItem class="mb-8">
                      <FormLabel>Charactor Name</FormLabel>
                      <FormControl>
                        <Input type="text" class="h-[50px] pl-6 bg-theme-light text-md" placeholder="Eldric Shadowforge" v-bind="componentField" maxlength="100"  />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                  <FormField name="personality">
                    <FormItem class="mb-8">
                      <FormLabel>Personality</FormLabel>
                      <div class="flex flex-wrap gap-2 items-center rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <div 
                          v-for="(item, index) in listPersonality"
                          :key="index" 
                          class="flex h-6 items-center rounded bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background"
                        >
                          <span class="py-1 px-2 text-sm rounded bg-transparent">{{ item }}</span>
                          <button class="flex rounded bg-transparent mr-1" @click="removeTagItem([index, item], $event)">
                            <Plus class="rotate-45" width="16" height="16" />
                          </button>
                        </div>
                        <input 
                          type="text"
                          v-model="personalityInput"
                          class="focus:outline-none" 
                          placeholder="Personalities ..."
                          @keydown.exact="handleKeyInput"
                        >
                      </div>
                      <FormMessage />
                      <div class="flex flex-wrap gap-2 items-center rounded-md border-input bg-background py-2 text-sm">
                        <button 
                          v-for="(item, index) in listPersonalityPool"
                          :key="index" 
                          @click="addItemFromPool(item)"
                          class="flex h-6 items-center border border-theme-darklight rounded hover:cursor-pointer hover:bg-theme-light data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background"
                        >
                          <Plus class="ml-1" width="16" height="16" />
                          <span class="py-1 px-2 mb-[0.125rem] text-sm rounded bg-transparent">{{ item }}</span>
                        </button>
                      </div>
                    </FormItem>
                  </FormField>
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
import { ref, toRaw, nextTick } from 'vue'

import NavigationBar from '@/src/components/NavigationBar.vue'
import Selector from '@/src/components/Selector.vue'

import { Button } from '@/src/components_shadcn/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components_shadcn/ui/card'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/src/components_shadcn/ui/form'
import { Input } from '@/src/components_shadcn/ui/input'


import { 
  BookOpenText, 
  VenetianMask,
  Plus  
} from 'lucide-vue-next'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  title: z.string().max(100, 'At most 100 charactors'),
  description: z.string().max(500, 'At most 500 charactors').optional(),
  charname: z.string().max(100, 'At most 100 charactors')
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values)
})

const listGenre = ref(['Fantasy', 'Science Fiction', 'History', 'Horror'])
const listPersonality = ref([
])
const listPersonalityPool = ref([
  'Generous',
  'Funny',
  'Evil',
  'Approachable'
])
const personalityInput = ref('')

function getSelectValueGenre(value) {
  console.log('getSelectValueGenre', value)
}

function getSelectValueCategory(value) {
  console.log('getSelectValueCategory', value)
}

function handleKeyInput(e) {
  const listPersonalityRaw = toRaw(listPersonality.value)
  if (e.code === 'Comma' && personalityInput.value.length > 0) {
    if (!listPersonalityRaw.includes(personalityInput.value)) {
      listPersonalityRaw.push(personalityInput.value)
      setTimeout(() => {
        personalityInput.value = ''
      }, 0)
    } else {
      setTimeout(() => {
        nextTick(personalityInput.value = personalityInput.value.substring(0, personalityInput.value.length - 1))
      }, 0)
    }
  } else if (e.code === 'Backspace' && personalityInput.value === '' && listPersonalityRaw.length !== 0) {
    personalityInput.value = ' '
    removeTagItem([-1, listPersonalityRaw.slice(-1)[0]])
  } 
}

function addItemFromPool(item) {
  const listPersonalityRaw = toRaw(listPersonality.value)
  listPersonalityRaw.push(item)
  listPersonalityPool.value.splice(listPersonalityPool.value.indexOf(item), 1)
}

function removeTagItem(value, e) {
  if ((!e) || (e && e.detail === 1)) {
    const listPersonalityRaw = toRaw(listPersonality.value).splice(value[0], 1)  
    listPersonalityPool.value.push(value[1])
  }
}


</script>

<style>

</style>