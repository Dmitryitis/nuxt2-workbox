<template>
  <div class="mx-auto max-w-7xl px-4 mt-8 mb-8 sm:px-6 lg:px-8">
    <div class="grid grid-flow-row grid-cols-1 grid-rows-2 lg:grid-cols-2 gap-4">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  </div>
</template>

<script>
import CardItem from './CardItem.vue'

export default {
  name: 'Cards',
  components: {
    CardItem
  }
}

</script>
