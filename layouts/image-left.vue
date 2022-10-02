<script setup lang="ts">
const props = defineProps({
    image: {
        type: String,
    },
    alt: {
        type: String,
    }
})
</script>

<template>
    <div class="slidev-layout default image-left">
        <TopBar />

        <div class="grid grid-cols-2 px-15">
            <div class="my-auto">
                <img class="border-image" :src="props.image" alt="props.alt" />
            </div>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>