<template>
  <div class="min-h-full">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Main',
  components: {
    Header
  }
}
</script>
