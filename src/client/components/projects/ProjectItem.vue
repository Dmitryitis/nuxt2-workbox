<template>
  <li class="hover:bg-blue-500 group hover:ring-blue-500 hover:shadow-md rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
    <div>
      <dl class="block items-center">
        <div>
          <dt class="sr-only">
            Title
          </dt>
          <dd class="group-hover:text-white font-semibold text-slate-900">
            {{ item.title }}
          </dd>
        </div>
        <div>
          <dt class="sr-only">
            Category
          </dt>
          <dd class="group-hover:text-blue-200">
            {{ item.category }}
          </dd>
        </div>
        <div class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
          <dt class="sr-only">
            Users
          </dt>
          <dd>user-no</dd>
        </div>
      </dl>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
