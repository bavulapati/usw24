<script setup lang="ts">
import PreviewPage from './PreviewPage.vue'
import DeploymentControls from '../components/DeploymentControls.vue'
import axios from 'axios'
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { type Ref, ref } from 'vue'

let fileURL: string;
let markdownContent: Ref<string> = ref<string>("");
let htmlContent: Ref<string> = ref<string>("");

function getFile() {
  if (fileURL === "") {
    return
  }

  axios({
    method: 'get',
    maxBodyLength: Infinity,
    url: fileURL,
  }).then(async function (response) {
    markdownContent.value = response.data;
    htmlContent.value = DOMPurify.sanitize(await marked.parse(response.data));
  })
}

async function parseMarkdown()
{
  htmlContent.value = DOMPurify.sanitize(await marked.parse(markdownContent.value));
}

</script>

<template>
  <main class="h-full">
    <header class="" id="header">
      <nav
        class="relative flex w-full flex-wrap items-center justify-between bg-gray-400 py-2 shadow-dark-mild lg:py-4">
        <div class="ms-5 flex w-[30%] items-center justify-between">
          <input type="search" v-model="fileURL"
            class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out text-black bg-white"
            placeholder="Markdown URL" />

          <button type="button" @click="getFile()"
            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-1">Get
            file</button>
        </div>
        <DeploymentControls></DeploymentControls>
      </nav>
    </header>

    <div class="columns-2 p-2" id="content">
      <div id="markdown-code-container" class="w-full h-full">
        <textarea name="" id="markdown-code"
          class="w-full h-full resize-none p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          v-model="markdownContent"
          @keyup="parseMarkdown"></textarea>
      </div>
      <PreviewPage :renderContent=htmlContent></PreviewPage>
    </div>
  </main>
</template>

<style scoped>
#header {
  height: 10%;
}

#content {
  height: 90%;
}
</style>