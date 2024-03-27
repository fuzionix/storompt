<template>
  <NavigationBar />
  <section id="error" class="flex flex-col items-center justify-center min-h-[100vh]">
    <div id="chat-message-container" class="flex flex-col items-center px-3 py-7 pt-[calc(1rem+var(--header))] 
    sm:px-7">
      <!-- Display Chat Block -->
      <div id="message-block" class="flex items-end w-full max-w-[768px] py-4">
        <div id="avatar-l" class="w-8">
          <img src="@/src/assets/avatar/Shape=5, Color=Infrared.svg" class="" alt="">
        </div>
        <div id="message-bubble" class="flex flex-col items-start flex-1 mx-3">
          <h5 class="mb-2 text-sm font-semibold">System Bot</h5>
          <div class="w-fit px-4 py-3 text-sm !bg-danger text-white shadow-none rounded-lg">
            <p class="w-fit">Oops! {{ error['type'] }}</p>
          </div>
        </div>
        <div id="avatar-r" class="w-8">
          <img src="" class="" alt="">
        </div>
      </div>

      <div id="message-block" class="flex items-end w-full max-w-[768px] py-4">
        <div id="avatar-l" class="w-8">
          <img src="" class="" alt="">
        </div>
        <div id="message-bubble" class="flex flex-col items-end flex-1 mx-3">
          <h5 class="mb-2 text-sm font-semibold">You</h5>
          <div class="w-fit px-4 py-3 text-sm bg-theme-pale rounded-lg">
            <p class="w-fit">What should I do?</p>
          </div>
        </div>
        <div id="avatar-r" class="w-8">
          <img src="@/src/assets/avatar/Shape=10, Color=Rajah.svg" class="" alt="">
        </div>
      </div>

      <div id="message-block" class="flex items-end w-full max-w-[768px] py-4">
        <div id="avatar-l" class="w-8">
          <img src="@/src/assets/avatar/Shape=5, Color=Infrared.svg" class="" alt="">
        </div>
        <div id="message-bubble" class="flex flex-col items-start flex-1 mx-3">
          <h5 class="mb-2 text-sm font-semibold">System Bot</h5>
          <div class="w-fit px-4 py-3 text-sm bg-theme-light rounded-lg shadow-edge">
            <p class="w-fit">{{ error['message'] }}</p>
          </div>
        </div>
        <div id="avatar-r" class="w-8">
          <img src="" class="" alt="">
        </div>
      </div>
      <!-- Display Chat Block -->
    </div>

    <Button @click="goPrevious">Go Back</Button>
  </section>
  <Footer></Footer>
</template>

<script>
import Footer from '@/src/components/Footer.vue'
import NavigationBar from '@/src/components/NavigationBar.vue'

import { Button } from '@/src/components_shadcn/ui/button'


export default {
    name: 'Error',
    components: {
      NavigationBar,
      Footer,
      Button
    },
    props: [
    ],
    data() {
      return {
        errorName: this.$route.params.name,
        error: {
          type: '',
          message: ''
        }
      }
    },
    computed: {
    },
    mounted() {
      switch (this.errorName) {
        case 'page':
          this.error['type'] = 'Error 404 - Page not found.'
          this.error['message'] = 'You may entered the wrong path or the path doesn’t exist anymore. Please go back to the previous page.'
          break
        case 'no-data':
          this.error['type'] = 'No chat data found.'
          this.error['message'] = 'Perhaps it is a network problem or the chat doesn’t exist anymore. Please try again.'
          break
        default:
          this.error['type'] = 'Something went wrong.'
          this.error['message'] = 'Please go back to the previous page.'
      }
    },
    methods: {
      goPrevious() {
        this.$router.go(-1)
      }
    }
}
</script>

<style>

</style>