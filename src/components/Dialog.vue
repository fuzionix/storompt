<template>
  <div 
    v-if="store.dialogStatus"
    :data-state="store.dialogStatus ? 'open' : 'closed'" 
    @click="closeDialog()"
    class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
  >

  </div>
  <div 
    v-if="store.dialogStatus"
    :data-state="store.dialogStatus ? 'open' : 'closed'" 
    class="fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-md"
  >
    <Card class="border-none">
      <CardHeader>
        <CardTitle class="flex justify-between items-start font-semibold text-base">
          <div>
            <VenetianMask class="mb-2" />
            <span>Charactors</span>
          </div>
          <button @click="closeDialog()">
            <X class="" :size="20" :strokeWidth="1.5" />
          </button>
        </CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField name="charname">
          <FormItem class="mb-8">
            <FormLabel>Charactor Name</FormLabel>
            <FormControl>
              <input 
                v-model="charactorName"
                type="text" 
                class="flex h-[50px] w-full rounded-md border border-transparent bg-theme-light px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-theme-darklight focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-6 text-md" 
                placeholder="Eldric Shadowforge" 
                maxlength="100"  
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="personality">
          <FormItem class="mb-8">
            <FormLabel>Personality</FormLabel>
            <div class="flex flex-wrap gap-2 items-center rounded-md border border-theme-gray bg-background px-3 py-2 text-sm">
              <div 
                v-for="(item, index) in listPersonality"
                :key="index" 
                class="flex h-6 items-center rounded bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background"
              >
                <span class="py-1 px-2 text-sm rounded bg-transparent">{{ item }}</span>
                <button class="flex rounded bg-transparent mr-1" @click.prevent="removeTagItem([index, item], $event)">
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
                @click.prevent="addItemFromPool(item)"
                class="flex h-6 items-center border border-theme-darklight rounded hover:cursor-pointer hover:bg-theme-light data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background"
              >
                <Plus class="ml-1" width="16" height="16" />
                <span class="py-1 px-2 mb-[0.125rem] text-sm rounded bg-transparent">{{ item }}</span>
              </button>
            </div>
          </FormItem>
        </FormField>
        <Button 
          @click="createCharactor()"
          class="relative w-full h-[50px] before:duration-200 
          before:absolute before:left-0 before:top-0 before:translate-x-[-50%] before:translate-y-[-50%] hover:before:scale-125"
        >
          <img 
            v-if="charactorLoading"
            src="@/src/assets/icon/loader.svg" 
            class=""
            alt="" 
            width="24"
          >
          <p v-if="charactorLoading">Creating ...</p>
          <p v-else>Add Charactor</p>
        </Button>
      </CardContent>
    </Card>
  </div>
</template>

<script>
import { useStatusStore } from '@/src/store/useStatusStore'
import { useToast } from '@/src/components_shadcn/ui/toast/use-toast'

import { Button } from '@/src/components_shadcn/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components_shadcn/ui/card'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/src/components_shadcn/ui/form'
import { Input } from '@/src/components_shadcn/ui/input'

import { X, VenetianMask, Plus } from 'lucide-vue-next'


import axios from 'axios'

export default {
    name: 'Dialog',
    components: {
      VenetianMask,
      X,
      Plus,
      Button,
      Card, 
      CardContent, 
      CardDescription, 
      CardFooter, 
      CardHeader, 
      CardTitle,
      FormControl, 
      FormDescription, 
      FormField, 
      FormItem, 
      FormLabel, 
      FormMessage,
      Input
    },
    props: {
      storyId: {
        required: true
      }
    },
    emits: ["updateCharList"],
    data() {
      return {
        store: useStatusStore(),
        charactorName: "",
        listPersonality: [],
        listPersonalityPool: [
          'Brave',
          'Arrogant',
          'Intelligent',
          'Manipulative',
          'Ambitious',
          'Greedy',
          'Creative',
          'Jealous',
          'Funny',
          'Loyal',
          'Shy',
          'Adventurous',
          'Charming',
          'Optimistic',
          'Independent',
          'Selfless',
          'Curious',
          'Trustworthy',
          'Honest',
        ],
        personalityInput: "",
        charactorLoading: false,
        toast: useToast().toast
      }
    },
    computed: {
    },
    methods: {
      handleKeyInput(e) {
        if (e.code === 'Comma' && this.personalityInput.length > 0) {
          if (!this.listPersonality.includes(this.personalityInput)) {
            this.listPersonality.push(this.personalityInput)
            setTimeout(() => {
              this.personalityInput = ''
            }, 0)
          } else {
            setTimeout(() => {
              this.$nextTick(this.personalityInput = this.personalityInput.substring(0, this.personalityInput.length - 1))
            }, 0)
          }
        } else if (e.code === 'Backspace' && this.personalityInput === '' && this.listPersonality.length !== 0) {
          this.personalityInput = ' '
          this.removeTagItem([-1, this.listPersonality.slice(-1)[0]])
        } 
      },
      addItemFromPool(item) {
        this.listPersonality.push(item)
        this.listPersonalityPool.splice(this.listPersonalityPool.indexOf(item), 1)
      },
      removeTagItem(value, e) {
        if ((!e) || (e && e.detail === 1)) {
          this.listPersonality.splice(value[0], 1)  
          this.listPersonalityPool.push(value[1])
        }
      },
      createCharactor() {
        if (this.storyId) {
          if (this.charactorName && this.listPersonality.length > 0) {
            axios({
              method: 'post',
              url: `http://127.0.0.1:8000/chat/add-charactor`,
              data: {
                id: this.storyId,
                name: this.charactorName,
                personality: this.listPersonality
              }
            }).then((res) => {
              this.closeDialog()
              this.charactorName = ""
              this.listPersonality = []
              this.listPersonalityPool = [
                'Brave',
                'Arrogant',
                'Intelligent',
                'Manipulative',
                'Ambitious',
                'Greedy',
                'Creative',
                'Jealous',
                'Funny',
                'Loyal',
                'Shy',
                'Adventurous',
                'Charming',
                'Optimistic',
                'Independent',
                'Selfless',
                'Curious',
                'Trustworthy',
                'Honest',
              ]
              
              this.$emit('updateCharList')
            }).catch((error) => {
              console.error('Error: ', error)
              this.toast({
                variant: 'destructive',
                title: 'Failed To Create Charactor',
                description: error,
              })
            }).finally(() => {
            })
          } else {
            this.toast({
              variant: 'destructive',
              title: 'Charactor Name and Personality Cannot Be Empty',
            })
          }
        } else {
          this.toast({
            variant: 'destructive',
            title: 'Something Went Wrong',
            description: 'Failed To Retrieve Story ID',
          })
        }
      },
      closeDialog() {
        this.store.dialogStatus = false
      }
    }
}
</script>