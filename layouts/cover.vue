<script setup lang="ts">
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
    <TopBar />

    <div class="my-auto w-full">
      <div class="block">
        <slot />
        <div v-if="props.author" class="pt-20">
          <span class="author">
            {{ props.author }}
          </span>
        </div>
        <div v-if="props.date" class="pt-3">
          <span class="date">
            {{ props.date }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
