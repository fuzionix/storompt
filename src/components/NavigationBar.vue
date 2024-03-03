<template>
  <nav id="navigation-bar" class="absolute flex justify-between items-center w-full h-[75px] px-7">
    <div>
      <router-link to="/">
        <img src="@/src/assets/logo/storompt_logo_dark_only.svg" width="40" alt="storompt logo" class="w-10">
      </router-link>
    </div>
    <NavigationMenu class="hidden pl-[100px]" :class="breakpoint">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
              <li class="row-span-3">
                <NavigationMenuLink as-child>
                  <router-link
                    class="relative flex h-full w-full select-none flex-col justify-end rounded-md overflow-hidden bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/demo"
                  >
                    <img 
                      src="@/src/assets/icon/game_colored.svg" 
                      class="absolute opacity-85
                      top-[-25px] right-[-15px] h-[100px] w-[100px] rotate-[15deg]
                      lg:top-[-25px] lg:left-[-25px] lg:h-[125px] lg:w-[125px] lg:-rotate-[15deg]"
                    >
                    <div class="mb-2 mt-4 text-lg font-medium">
                      Make Story
                    </div>
                    <p class="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </router-link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Randomize">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Customize">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Explore More">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem
                v-for="item in navigationItems"
                @click.prevent="$router.push(item.href)"
                :key="item.title"
                :title="item.title"
              >
                {{ item.description }}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem class="px-4 py-2">
          <NavigationMenuLink @click.prevent="$router.push('/')" class="text-sm font-medium leading-[2]">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div class="">
      <a 
        class="flex items-center font-semibold border px-6 py-3 hover:bg-theme-verylight" 
        href="https://github.com/TaylonChan/storompt" 
        target="_blank"
      >
        <span class="text-sm pr-4">GITHUB</span>
        <img src="@/src/assets/logo/github.svg" width="20" alt="Github logo" class="w-5">
      </a>
    </div>
  </nav>
</template>

<script>
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/src/components_shadcn/ui/navigation-menu'
import ListItem from '@/src/components/ListItem.vue'

export default {
    name: 'NavigationBar',
    components: {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
      ListItem
    },
    props: {
      breakpoint: {
        default: 'md:block'
      }
    },
    data() {
      return {
        navigationItems: [
          {
            title: 'Fantasy',
            href: '/explore/fantasy',
            description:
              'A modal dialog that interrupts the user with important content and expects a response.',
          },
          {
            title: 'Science Fiction',
            href: '/explore/science-fiction',
            description:
              'For sighted users to preview content available behind a link.',
          },
          {
            title: 'Romance',
            href: '/explore/romance',
            description:
              'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
          },
          {
            title: 'Mystery',
            href: '/explore/mystery',
            description: 'Visually or semantically separates content.',
          },
          {
            title: 'Historical Fiction',
            href: '/explore/historical-fiction',
            description:
              'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
          },
          {
            title: 'Horror',
            href: '/explore/horror',
            description:
              'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
          },
        ]
      }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style>

</style>