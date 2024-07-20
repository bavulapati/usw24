<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

let githubHandle = ref<string>("");

const props = defineProps(['pageContent'])

function deployInstance() {
  console.log("deploy")
  let fullPage = '<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body> ' + props.pageContent + ' </body>\n</html>'
  let data = JSON.stringify({ 
    "githubHandle": githubHandle.value,
    "markdown": fullPage
  });
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/profiles',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: data
  };

  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

function redeployInstance() {
  console.log("redeploy")
}

function deleteInstance() {
  console.log("delete")
}
</script>

<template>
  <main class="h-full">
    <div class="ms-5 flex w-[30%] items-end align-middle">
      <input type="text" placeholder="GitHub username" v-model="githubHandle"
        class="relative mb-2 mr-2 rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal transition duration-300 ease-in-out text-black bg-white">
      <button type="button" @click="deployInstance"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Deploy</button>
      <button type="button" @click="redeployInstance"
        class="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Redeploy</button>
      <button type="button" @click="deleteInstance"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
    </div>
  </main>
</template>

<style scoped></style>