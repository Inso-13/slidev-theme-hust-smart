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
    <div class="slidev-layout default image-right">
        <TopBar />

        <div class="grid grid-cols-2 p-15">
            <div>
                <slot />
            </div>
            <div class="my-auto">
                <img class="border-image" :src="props.image" alt="props.alt" />
            </div>
        </div>
    </div>
</template>