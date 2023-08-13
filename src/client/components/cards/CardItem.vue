<template>
  <div class="flex font-sans hover:shadow-xl ring-1 ring-slate-200 rounded-md">
    <div class="flex-none w-48 relative">
      <img :src="item.image" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          {{ item.name }}
        </h1>
        <div class="text-lg font-semibold text-slate-500">
          {{ item.price }}
        </div>
      </div>

      <div class="flex space-x-4 mb-4 text-sm font-medium">
        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          {{ item.description }}
        </p>
      </div>

      <div class="flex space-x-4 mb-2 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
            Buy now
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
