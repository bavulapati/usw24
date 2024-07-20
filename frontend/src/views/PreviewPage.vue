<script setup lang="ts">
defineProps(['renderContent'])
</script>

<template>
  <main class="h-full">
    <div id="page-preview-container" class="w-full h-full overflow-scroll p-2.5 rounded-lg border border-gray-300"
      v-html="renderContent">
    </div>
  </main>
</template>

<style scoped>
:deep(img),
:deep(svg),
:deep(video),
:deep(canvas),
:deep(audio),
:deep(iframe),
:deep(embed),
:deep(object) {
  display: initial;
}
</style>