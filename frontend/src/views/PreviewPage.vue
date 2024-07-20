<script setup lang="ts">
defineProps(['renderContent'])
</script>

<template>
  <main class="h-full">
    <div id="page-preview-container" class="unmodified-style w-full h-full overflow-scroll p-2.5 rounded-lg border border-gray-300 isolate"
      v-html="renderContent">
    </div>
  </main>
</template>