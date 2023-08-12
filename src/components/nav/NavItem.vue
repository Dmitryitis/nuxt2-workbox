<template>
  <nuxt-link :to="item.to" class="px-3 py-2 text-sm font-medium" :class="{ 'bg-gray-900 text-white rounded-md': active, 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md': !active }" aria-current="page">
    {{ item.name }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
