<template>
  <div class="ml-10 flex items-baseline space-x-4">
    <NavItem v-for="(item, index) in navItems" :key="index" :item="item" :active="item.to === $route.path" />
  </div>
</template>

<script>
import NavItem from './NavItem.vue'

export default {
  name: 'Nav',
  components: {
    NavItem
  },
  props: {
    navItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>
