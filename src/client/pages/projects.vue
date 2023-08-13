<template>
  <Project :items="projects" />
</template>

<script>
import Project from '../components/projects/Project.vue'

export default {
  name: 'ProductsPage',
  components: {
    Project
  },
  layout: 'main',
  async asyncData ({ $api }) {
    let projects

    try {
      projects = await $api.projects.get()
    } catch (error) {
      projects = []
    }

    return {
      projects
    }
  }
}
</script>
