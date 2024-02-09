<template>
  <section id="demo-page" class="absolute w-full h-full overflow-hidden grid-background">
    <sidemenu />
    <main 
      :class="store.sidemenuStatus ? '' : 'md:!pl-0'"
      class="w-full h-[100dvh] duration-300 md:pl-[--menu] xl:pr-[--info]"
    >
      <header class="relative flex items-center justify-between h-[--header] border-b bg-[#0000] p-7 backdrop-blur">
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
          <h3 class="font-bold text-lg leading-normal">Forgotten City</h3>
          <p class="text-xs opacity-70 max-w-[200px] leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis md:max-w-[300px]">Dive into an entire captivating story just by interacting</p>
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
            class="flex flex-col items-center px-3 py-7 pt-[calc(1rem+var(--header))] sm:px-7 [&>*:last-child]:pb-20"
          >
            <!-- Display Chat Block -->
            <div 
              id="message-block" 
              v-for="(chat, index) in chatHistory"  
              :key="index"
              class="flex items-end w-full max-w-[768px] py-4"
            >
              <div id="avatar-l" class="w-8">
                <img v-if="!chat.user" src="@/src/assets/avatar/avatar_ai_2.svg" alt="">
              </div>
              <div 
                id="message-bubble" 
                class="flex flex-col flex-1 mx-3"
                :class="chat.user ? 'items-end' : 'items-start'"
              >
                <h5 class="mb-2 text-sm font-semibold">{{ chat.name }}</h5>
                <div class="w-fit px-4 py-3 text-sm bg-theme-light rounded-lg shadow-edge">
                  <p class="w-fit">{{ chat.message }}</p>
                </div>
              </div>
              <div id="avatar-r" class="w-8">
                <img v-if="chat.user" src="@/src/assets/avatar/avatar_me.svg" alt="">
              </div>
            </div>

            
            <!-- Display Chat Block -->
          </div>
        </div>
        <div 
          id="chat-input" 
          :class="store.sidemenuStatus ? 'md:w-[calc(100%-var(--menu))] xl:w-[calc(100%-var(--info)-var(--menu))]' : 'md:w-full xl:w-[calc(100%-var(--info))]'"
          class="fixed bottom-0 h-[--chat] px-7 w-full duration-300 bg-theme-verylight shadow-line focus-within:shadow-line-active">
          <div id="input-frame" class="flex items-center h-full">
            <img src="@/src/assets/icon/magic_spark.svg" class="w-6" alt="">
            <div class="h-5 border-r border-r-theme-gray mx-7"></div>
            <form action="/" method="" @submit.prevent="sendMessage()" class="flex flex-1">
              <input 
                type="text" 
                v-model.trim="userTextInput"
                class="flex-1 pr-7 text-base bg-transparent min-w-0 focus:outline-0" 
                placeholder="Type Something ..." 
                value=""
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
    <info-panel />
  </section>
</template>

<script>
import Sidemenu from '@/src/components/Sidemenu.vue'
import InfoPanel from '@/src/components/InfoPanel.vue'

import { useStatusStore } from '@/src/store/useStatusStore'
import { ref } from 'vue'

export default {
    name: 'DemoPage',
    components: {
      'sidemenu': Sidemenu,
      'info-panel': InfoPanel,
    },
    props: [
    ],
    data() {
      return {
        store: useStatusStore(),
        windowWidth: ref(window.innerWidth),
        minwindowWidth: 640,
        fillIcon: false,
        chatHistory: [
          {
            name: 'Seraphina Windwhisper',
            message: 'Et penatibus ut mauris tellus pharetra.',
            user: false
          },
          {
            name: 'Seraphina Windwhisper',
            message: 'Et penatibus ut mauris tellus pharetra aliquet vestibulum nunc diam. Tristique duis sed sed fermentum vel.',
            user: false
          },
          {
            name: 'You',
            message: 'Et penatibus ut mauris tellus pharetra aliquet.',
            user: true
          },
          {
            name: 'Seraphina Windwhisper',
            message: 'Et penatibus ut mauris tellus pharetra aliquet vestibulum nunc diam. Tristique duis sed sed fermentum vel.',
            user: false
          },
          {
            name: 'Seraphina Windwhisper',
            message: 'Et penatibus ut mauris tellus pharetra aliquet vestibulum nunc diam. ',
            user: false
          },
        ],
        userTextInput: ''
      }
    },
    computed: {
    },
    created() {
      if (this.windowWidth <= this.minwindowWidth) {
        this.store.sidemenuStatus = false
      }
    },
    mounted() {
      window.addEventListener('resize', this.detectWindowSize);
    },
    unmounted() {
      window.removeEventListener('resize', this.detectWindowSize);
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
      sendMessage() {
        if (this.userTextInput) {
          this.chatHistory.push({
            name: 'Seraphina Windwhisper',
            message: this.userTextInput,
            user: true
          })
          this.userTextInput = ''
        }
        
      }
    }
}
</script>

<style>

</style>