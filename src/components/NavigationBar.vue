<template>
  <nav id="navigation-bar" class="flex items-center h-[75px] px-6">
    
    <div>
      <a href=""><img src="@/src/assets/logo/storompt_logo_dark_only.svg" width="40" alt="storompt logo" class="w-10"></a>
    </div>
    <NavigationMenu class="pl-8">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
              <li class="row-span-3">
                <NavigationMenuLink as-child>
                  <a
                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6">
                    <div class="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p class="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <div
                v-for="component in components"
                :key="component.title"
                :title="component.title"
                :href="component.href"
              >
                {{ component.description }}
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem class="px-4 py-2">
          <NavigationMenuLink href="/docs" class="text-sm font-medium leading-[2]">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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

export default {
    name: 'NavigationBar',
    components: {
      NavigationMenu,
      NavigationMenuContent,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuTrigger,
    },
    props: [
    ],
    data() {
      return {
        components: [
          {
            title: 'Alert Dialog',
            href: '/docs/primitives/alert-dialog',
            description:
              'A modal dialog that interrupts the user with important content and expects a response.',
          },
          {
            title: 'Hover Card',
            href: '/docs/primitives/hover-card',
            description:
              'For sighted users to preview content available behind a link.',
          },
          {
            title: 'Progress',
            href: '/docs/primitives/progress',
            description:
              'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
          },
          {
            title: 'Scroll-area',
            href: '/docs/primitives/scroll-area',
            description: 'Visually or semantically separates content.',
          },
          {
            title: 'Tabs',
            href: '/docs/primitives/tabs',
            description:
              'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
          },
          {
            title: 'Tooltip',
            href: '/docs/primitives/tooltip',
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