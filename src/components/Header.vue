<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          </div>

          <div class="block">
            <Nav :nav-items="navItems" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Nav from './nav/Nav.vue'

export default {
  name: 'Header',
  components: {
    Nav
  },
  data: () => ({
    navItems: [{
      to: '/',
      name: 'Home'
    },
    {
      to: '/cards',
      name: 'Cards'
    },
    {
      to: '/gallery',
      name: 'Gallery image'
    },
    {
      to: '/projects',
      name: 'Projects'
    }
    ]
  })
}
</script>
