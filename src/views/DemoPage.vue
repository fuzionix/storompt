<template>
  <section id="demo-page" class="absolute w-full h-full overflow-hidden grid-background">
    <sidemenu />
    <main 
      :class="store.sidemenuStatus ? '' : 'md:!pl-0'"
      class="w-full h-[100dvh] duration-300 md:pl-[--menu] xl:pr-[--info]"
    >
      <header class="relative flex items-center justify-between h-[--header] border-b bg-[#0000] p-7 backdrop-blur z-20">
        <img 
          v-if="!fillIcon"
          @mouseover="changeIcon(true)"
          :class="store.sidemenuStatus ? '' : 'md:!visible'"
          src="@/src/assets/icon/arrow_left_circle.svg" 
          class="visible w-6 h-6 rotate-180 cursor-pointer md:invisible" 
          alt="open menu"
        >
        <img 
          v-else
          @click="openSidemenu"
          @mouseleave="changeIcon(false)"
          :class="store.sidemenuStatus ? '' : 'md:!visible'"
          src="@/src/assets/icon/arrow_left_circle_full.svg" 
          class="visible w-6 h-6 rotate-180 cursor-pointer md:invisible" 
          alt="open menu"
        >
        <div class="text-center px-7 mt-[-.25rem]">
          <h3 class="font-bold text-lg leading-normal">{{ chatItem['title'] }}</h3>
          <p class="text-xs opacity-70 max-w-[200px] leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis md:max-w-[300px]">{{ chatItem['title_description'] }}</p>
        </div>
        <img 
          @click="openInfomenu"
          src="@/src/assets/icon/info_square.svg" 
          class="w-6 cursor-pointer xl:invisible" 
          alt="close menu"
        >
      </header>
      <section id="chat" class="w-full h-[calc(100%-var(--chat))] overflow-hidden -mt-[--header]">
        <div id="chat-message" class="h-full overflow-y-scroll">
          <div 
            id="chat-message-container"
            ref="chatMessageBox"
            class="flex flex-col items-center px-3 py-7 pt-[calc(1rem+var(--header))] sm:px-7 [&>*:last-child]:pb-20"
          >
            <!-- Display Chat Block -->
            <div 
              id="message-block" 
              v-for="(chat, index) in chatHistory"  
              :key="index"
              class="flex items-end w-full max-w-[768px] py-4 animate-bubble-fade-in"
            >
              <div id="avatar-l" class="w-8">
                <img v-if="!chat.user" src="@/src/assets/avatar/Shape=10, Color=Fennel Flower.svg" alt="">
              </div>
              <div 
                id="message-bubble" 
                class="flex flex-col flex-1 mx-3"
                :class="[
                  chat.user ? 'items-end' : 'items-start',
                ]"
              >
                <h5 class="mb-2 text-sm font-semibold">{{ chat.name }}</h5>
                <div 
                  class="relative flex flex-col min-h-[2.75rem] min-w-[2.75rem] w-fit px-4 py-3 text-sm rounded-lg md:flex-row"
                  :class="[
                    chat.user ? 'bg-theme-pale shadow-edge-theme' : 'bg-theme-light shadow-edge',
                    chat.danger ? '!bg-danger text-white shadow-none' : ''
                  ]"
                >
                  <img 
                    v-if="chatLoading"
                    src="@/src/assets/icon/loader.svg" 
                    class="absolute w-6"
                    :class="index + 1 === chatHistory.length ? 'inline' : 'hidden'" 
                    alt="" 
                    width="24"
                  >
                  <p v-if="true" class="w-fit">{{ chat.message }}</p>
                  <!-- <p v-else class="w-fit">
                    <span v-for="word in animateText" class="inline-block animate-fade-in">{{ word }}&nbsp</span>
                  </p> -->
                  <button 
                    v-if="chat.danger" 
                    @click="sendMessage(
                      this.chatHistory.length > 1 
                      ? this.chatHistory.slice(-2)[0]['message'] 
                      : this.$router.go(), 
                      true
                    )" 
                    class="flex items-center pt-4 md:pt-0 md:pl-4 hover:opacity-80"
                  >
                    <RefreshCcw size="18" />
                    <span class="px-2">Refresh</span>
                  </button>
                </div>
              </div>
              <div id="avatar-r" class="w-8">
                <img v-if="chat.user" src="@/src/assets/avatar/Shape=10, Color=Lavender.svg" alt="">
              </div>
            </div>

            
            <!-- Display Chat Block -->
          </div>
        </div>
        <div 
          id="chat-input" 
          :class="store.sidemenuStatus ? 'md:w-[calc(100%-var(--menu))] xl:w-[calc(100%-var(--info)-var(--menu))]' : 'md:w-full xl:w-[calc(100%-var(--info))]'"
          class="fixed bottom-0 h-[--chat] px-7 w-full duration-300 bg-theme-verylight shadow-line focus-within:shadow-line-active"
        >
          <div class="absolute flex -top-12 right-3 p-1 bg-theme-gridlight rounded-lg">
            <button @click="chatRetry()" class="rounded p-1 hover:bg-[#0001]">
              <RotateCw :size="20" :strokeWidth="1.5"/>
            </button>
            <button @click="chatUndo()" class="rounded p-1 hover:bg-[#0001]">
              <Undo2 :size="20" :strokeWidth="1.5"/>
            </button>
          </div>
          <div id="input-frame" class="flex items-center h-full">
            <img src="@/src/assets/icon/magic_spark.svg" class="w-6" alt="">
            <div class="h-5 border-r border-r-theme-gray mx-7"></div>
            <form action="/" method="" @submit.prevent="sendMessage(userTextInput)" class="flex flex-1">
              <input 
                type="text" 
                v-model.trim="userTextInput"
                class="flex-1 pr-7 text-base bg-transparent min-w-0 focus:outline-0" 
                placeholder="Type Something ..." 
                value=""
                enter-key-hint="send"
              >
              <button type="submit" class="hover:opacity-75">
                <img src="@/src/assets/icon/voice.svg" class="w-6" alt="">
              </button>
              <button 
                type="submit" 
                class="ml-4 hover:opacity-75" 
              >
                <img src="@/src/assets/icon/send.svg" class="w-8" alt="">
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
    <info-panel 
      :chatItem="chatItem"
      @changeTargetName="changeTargetName"
      @receiveMessage="receiveMessage"
    />
  </section>

  <Dialog :storyId="this.chatItem['story_id']" @updateCharList="updateCharList()"></Dialog>

</template>

<script>
import Sidemenu from '@/src/components/Sidemenu.vue'
import InfoPanel from '@/src/components/InfoPanel.vue'
import Dialog from '@/src/components/Dialog.vue'

import { 
  RefreshCcw,
  Undo2,
  RotateCw
} from 'lucide-vue-next';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/src/components_shadcn/ui/alert-dialog'
import { Button } from '@/src/components_shadcn/ui/button'
import { useToast } from '@/src/components_shadcn/ui/toast/use-toast'

import { useStatusStore } from '@/src/store/useStatusStore'
import { ref } from 'vue'

import axios from 'axios'

export default {
    name: 'DemoPage',
    components: {
      'sidemenu': Sidemenu,
      'info-panel': InfoPanel,
      Undo2,
      RotateCw,
      AlertDialog,
      AlertDialogAction,
      AlertDialogCancel,
      AlertDialogContent,
      AlertDialogDescription,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogTitle,
      AlertDialogTrigger,
      RefreshCcw,
      Button,
      Dialog
    },
    props: [
    ],
    data() {
      return {
        store: useStatusStore(),
        windowWidth: ref(window.innerWidth),
        minwindowWidth: 640,
        fillIcon: false,
        isActive: false,
        chatItem: {
          title: '',
          title_description: ''
        },
        targetName: '',
        personality: '[]',
        chatLoading: false,
        chatLoadingSuccess: true,
        chatHistory: [],
        animateText: [],
        userTextInput: '',
        userTextInputTemp: '',
        isLeaving: false, // TODO
        toast: useToast().toast
      }
    },
    computed: {
    },
    created() {
      if (this.windowWidth <= this.minwindowWidth) {
        this.store.sidemenuStatus = false
      }

      this.chatHistory.push({
        name: '',
        message: '',
        user: false
      })

      this.chatLoading = true

      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/chat/get-item/${this.$route.params.demoId}`,
        data: {
        }
      }).then((res) => {
        this.data = res.data
        this.chatItem['story_id'] = this.data['story_id']
        this.chatItem['title'] = this.data['title']
        this.chatItem['title_description'] = this.data['title_description']
        this.chatItem['genre'] = this.data['genre']
        this.chatItem['classification'] = this.data['classification']
        this.chatItem['background'] = this.data['background']
        this.chatItem['charactor'] = this.data['charactor']
        this.chatItem['chat_history'] = this.data['chat_history']
        if (this.chatItem['chat_history']) {
          this.chatHistory = JSON.parse(this.chatItem['chat_history'])
        } else {
          throw new Error('No chat history found');
        }

        if (this.chatItem['charactor']) {
          this.targetName = JSON.parse(this.chatItem['charactor'])[0]['name']
        }

        console.log('targetName', this.targetName)
        
        this.scrollToBottom()
      }).catch((error) => {
        console.error('Error: ', error)
        this.chatLoadingSuccess = false
        Object.assign(this.chatHistory.slice(-1)[0], {
          name: 'Error System',
          message: `Cannot load the story. Please try again [${error}]`,
          user: false,
          danger: true
        })
        // this.$router.push('/error/no-data')
      }).finally(() => {
        this.chatLoading = false
      })
    },
    mounted() {
      window.addEventListener('resize', this.detectWindowSize);
    },
    unmounted() {
      window.removeEventListener('resize', this.detectWindowSize);
    },
    beforeRouteLeave(to, from) {
      // prevent popup if no data fetched
      if (this.chatLoadingSuccess) {
        const answer = window.confirm('Are you sure you want to leave? Confirm to exit')
        if (!answer) return false
      }
    },
    methods: {
      openSidemenu() {
        this.store.sidemenuStatus = true
      },
      openInfomenu() {
        this.store.infomenuStatus = true
      },
      detectWindowSize() {
        if (ref(window.innerWidth).value <= this.minwindowWidth) {
          this.store.sidemenuStatus = false
        } else {
          this.store.sidemenuStatus = true
        }
      },
      changeIcon(status) {
        this.fillIcon = status
      },
      sendMessage(textInput, refresh = false) {
        if (textInput && !this.isActive) {
          this.isActive = true

          if (this.chatHistory.slice(-1)[0]?.['danger'] == true) {
            this.chatHistory.pop()
          }

          textInput = textInput.replace(/@(\w+)/g, '').trim()

          // insert message into chat history. display new chat bubble automatically
          if (!refresh) {
            this.chatHistory.push({
              name: 'You',
              message: textInput,
              user: true
            })
          }
          
          this.chatHistory.push({
            name: '',
            message: '',
            user: false
          })

          this.chatLoading = true

          // send user input to server
          axios({
            method: 'post',
            url: `http://127.0.0.1:8000/chat/${this.$route.params.demoId}`,
            data: {
              userTextInput: textInput,
              targetName: this.targetName,
              background: this.chatItem['background'],
              category: this.chatItem['classification'],
              personality: this.personality,
              chatHistory: JSON.stringify(this.chatHistory.slice(0, -1))
            }
          }).then((res) => {
            this.data = res.data
            Object.assign(this.chatHistory.slice(-1)[0], {
              name: this.data['name'],
              message: this.data['message'],
              user: false
            })
            // this.displayText(this.data['message'])
          }).catch((error) => {
            Object.assign(this.chatHistory.slice(-1)[0], {
              name: 'Error System',
              message: `Someone tell him that the server side have some issues [${error}]`,
              user: false,
              danger: true
            })
            // this.displayText(this.data['message'])
          }).finally(() => {
            this.scrollToBottom()
            this.isActive = false
            this.chatLoading = false
          })

          this.userTextInputTemp = this.userTextInput
          this.userTextInput = ''
          this.scrollToBottom()
        }
        
      },
      receiveMessage(name, personality) {
        if (!this.isActive) {
          this.isActive = true

          if (this.chatHistory.slice(-1)[0]?.['danger'] == true) {
            this.chatHistory.pop()
          }

          this.chatHistory.push({
            name: '',
            message: '',
            user: false
          })

          this.chatLoading = true

          axios({
            method: 'post',
            url: `http://127.0.0.1:8000/chat/receive-message/${this.$route.params.demoId}`,
            data: {
              targetName: this.targetName,
              background: this.chatItem['background'],
              category: this.chatItem['classification'],
              personality: personality,
              chatHistory: JSON.stringify(this.chatHistory.slice(0, -1))
            }
          }).then((res) => {
            this.data = res.data
            Object.assign(this.chatHistory.slice(-1)[0], {
              name: this.data['name'],
              message: this.data['message'],
              user: false
            })
            // this.displayText(this.data['message'])
          }).catch((error) => {
            Object.assign(this.chatHistory.slice(-1)[0], {
              name: 'Error System',
              message: `Someone tell him that the server side have some issues [${error}]`,
              user: false,
              danger: true
            })
            // this.displayText(this.data['message'])
          }).finally(() => {
            this.scrollToBottom()
            this.isActive = false
            this.chatLoading = false
          })

          console.log(this.targetName, personality)
        }
      },
      scrollToBottom() {
        this.$nextTick(() => {
          this.$refs.chatMessageBox.scrollIntoView({ 
            behavior: "smooth", 
            block: "end", 
            inline: "nearest" 
          })
        })
      },
      displayText() {
        let messageResult = this.chatHistory.slice(-1)[0]['message'].split(' ')
        let messageIndex = 0
        
        const nInterval = setInterval(() => {
          this.animateText.push(messageResult[messageIndex])
          messageIndex += 1

          if ((messageIndex >= messageResult.length) || (messageIndex > 1000)) {
            clearInterval(nInterval)
          }
        }, 50);
      },
      updateCharList() {
        console.log('updateCharList')
        axios({
          method: 'get',
          url: `http://127.0.0.1:8000/chat/get-item/${this.$route.params.demoId}`,
          data: {
          }
        }).then((res) => {
          this.data = res.data
          this.chatItem['charactor'] = this.data['charactor']
        }).catch((error) => {
          console.error('Error: ', error)
        })
      },
      chatRetry() {
        console.log('retry')
      },
      chatUndo() {
        if (this.chatHistory.length > 1) {
          axios({
            method: 'post',
            url: `http://127.0.0.1:8000/chat/undo/${this.$route.params.demoId}`,
            data: {
              chatHistory: JSON.stringify(this.chatHistory.slice(0, -1))
            }
          }).then((res) => {
            this.chatHistory.pop()
          }).catch((error) => {
            console.error('Error: ', error)
          })
        }
      },
      changeTargetName(name, personality) {
        console.log(name)
        this.targetName = name
        this.personality = personality
        // this.userTextInput = this.userTextInput.replace(/@(\w+)/g, '').trim()
        this.userTextInput = ''
        this.userTextInput = `@${this.targetName} ${this.userTextInput}`
      },
    }
}
</script>

<style>

</style>