<template>
  <button 
    id="dropdownDefaultButton" 
    data-dropdown-toggle="dropdown" 
    class="flex w-full h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1" 
    type="button"
    @click="dropdownStatus = true"
  >
    {{ listValue }}
    <ChevronDown class="w-4 h-4 opacity-50" />
  </button>

  <!-- Dropdown menu -->
  <div 
    id="dropdown"
    ref="dropdown" 
    :data-state="dropdownStatus ? 'open' : 'closed'" 
    :class="dropdownStatus ? '' : 'hidden'" 
    class="absolute z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
  >
    <ul class="p-1 text-sm" aria-labelledby="dropdownDefaultButton">
      <li 
        v-for="(item, index) in listItem"
        :key="index"
        @click="selectValue(item)" 
        class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-10 text-sm outline-none hover:bg-accent hover:cursor-pointer focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      >
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { 
  ChevronDown 
} from 'lucide-vue-next'

import { onClickOutside } from '@vueuse/core'

export default {
    name: 'Selector',
    components: {
      ChevronDown
    },
    props: {
      listItem: {
        type: Array
      },
      modelValue: {
        type: [String, Number]
      },
      placeholder: {
        type: String
      }
    },
    emits: ["getSelectValue"],
    data() {
      return {
        dropdownStatus: false,
        dropdown: null,
        listValue: '',
      }
    },
    mounted() {
      onClickOutside('dropdown', this.closeDropdown)
      this.listValue = this.placeholder
    },
    computed: {
    },
    methods: {
      closeDropdown() {
        this.dropdownStatus = false
      },
      selectValue(value) {
        this.closeDropdown()
        this.listValue = value
        this.$emit('getSelectValue', this.listValue)
      }
    }
}
</script>