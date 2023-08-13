<template>
  <Cards :items="cards" />
</template>

<script>
import Cards from '../components/cards/Cards.vue'

export default {
  name: 'CardsPage',
  components: {
    Cards
  },
  layout: 'main',

  async asyncData (context) {
    let cards
    try {
      cards = await context.$api.cards.get()
    } catch (error) {
      cards = []
    }

    return {
      cards
    }
  }
}
</script>
