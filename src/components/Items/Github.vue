<template>
  <div class="min-h-screen  ">
    <div class="max-w-md w-full bg-white rounded-lg border-2 border-black shadow-xl shadow-black p-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="webhook">Webhook URL:</label>
      <input v-model="webhookUrl" id="webhook" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="repo">GitHub Repository:</label>
      <input v-model="repoUrl" id="repo" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
      <div v-if="latestCommit" class="text-gray-700 text-sm mb-2">
        Latest commit:
        <a :href="latestCommit.html_url" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">{{ latestCommit.commit.message }}</a>
      </div>
      <button @click="checkPushEvent" class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Check Push Event
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      webhookUrl: localStorage.getItem("webhookUrl") || "",
      repoUrl: localStorage.getItem("repoUrl") || "",
      latestCommit: null,
      lastCommitHash: localStorage.getItem("lastCommitHash") || "",
    };
  },
  created() {
    this.checkPushEvent(); // Check immediately on component load
    setInterval(this.checkPushEvent, 60000); // Check every 1 minute
  },
  methods: {
    checkPushEvent() {
      const repoUrlParts = this.repoUrl.split('/');
      if (repoUrlParts.length < 5) {
        console.error('Invalid GitHub repository URL.');
        return;
      }
      const owner = repoUrlParts[repoUrlParts.length - 2];
      const repo = repoUrlParts[repoUrlParts.length - 1];

      axios
        .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
        .then((response) => {
          const latestCommit = response.data[0];
          if (latestCommit && latestCommit.sha !== this.lastCommitHash) {
            this.sendNotification(latestCommit);
            this.lastCommitHash = latestCommit.sha;
            localStorage.setItem("lastCommitHash", this.lastCommitHash);
          }
        })
        .catch((error) => {
          console.error("Error fetching commits:", error);
        });
    },
    sendNotification(latestCommit) {
      const message = {
        content: `New commit: ${latestCommit.commit.message}\n${latestCommit.html_url}`,
      };
      axios
        .post(this.webhookUrl, message)
        .then((response) => {
          console.log("Message sent successfully:", response);
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    },
  },
  watch: {
    webhookUrl(newVal) {
      localStorage.setItem("webhookUrl", newVal);
    },
    repoUrl(newVal) {
      localStorage.setItem("repoUrl", newVal);
    },
  },
};
</script>

<style>
/* Ajoutez vos styles personnalisés ici si nécessaire */
</style>