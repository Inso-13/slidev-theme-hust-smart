<script setup>
const props = defineProps({
  author: {
    type: String,
  },
  date: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <div class="block pt-18">
        <slot />
        <div v-if="author" class="pt-20">
          <span class="author">
            {{ author }}
          </span>
        </div>
        <div v-if="date" class="pt-3">
          <span class="date">
            {{ date }}
          </span>
        </div>
      </div>
      <TopBar />
    </div>
  </div>
</template>
