<template>
  <div class="flex font-sans hover:shadow-xl ring-1 ring-slate-200 rounded-md">
    <div class="flex-none w-48 relative">
      <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy">
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          Classic Utility Jacket
        </h1>
        <div class="text-lg font-semibold text-slate-500">
          $110.00
        </div>
      </div>

      <div class="flex space-x-4 mb-4 text-sm font-medium">
        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          This sunny and spacious room staurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
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
  name: 'CardItem'
}
</script>
