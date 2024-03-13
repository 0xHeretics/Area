<template>
    <div class="p-6 max-w-sm mx-auto border-2 border-blue-500 bg-white rounded-xl shadow-md">
      <div class="text-xl font-medium text-black mb-4">Twitter Bot Notification</div>
      <label for="twitterUsername" class="text-sm">Nom d'utilisateur Twitter :</label>
      <input
        id="twitterUsername"
        type="text"
        v-model="twitterUsername"
        placeholder="Entrez le nom d'utilisateur Twitter"
        class="focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2 my-2 w-full"
      />
      <label for="discordWebhook" class="text-sm">Webhook Discord :</label>
      <input
        id="discordWebhook"
        type="text"
        v-model="discordWebhook"
        placeholder="Entrez l'URL de la webhook Discord"
        class="focus:border-blue-500 focus:ring-blue-500 border rounded-lg p-2 my-2 w-full"
      />
      <button @click="startMonitoring" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Soumettre
      </button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TwitterBotNotification",
    data() {
      return {
        twitterUsername: "",
        discordWebhook: "",
      };
    },
    methods: {
      async startMonitoring() {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Utilisation d'un proxy pour contourner les restrictions de CORS
        const targetUrl = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${this.twitterUsername}`;
        try {
          const response = await axios.get(proxyUrl + targetUrl, {
            headers: {
              Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAAM%2BqwEAAAAAd5kvdtReqTJ1c7zpoIDwAlPV1vQ%3DU0SiQxB7dysrpAmtCV8Wy5LCU5NpbUUc9WzR3kzVaqXZCnlk3F",
              "X-Requested-With": "XMLHttpRequest",
            },
          });
          const tweets = response.data;
          if (tweets.length > 0) {
            this.sendDiscordNotification(`Nouveau tweet de ${this.twitterUsername} : ${tweets[0].text}`);
          }
        } catch (error) {
          console.error("Une erreur s'est produite lors de la récupération des données", error);
        }
      },
      sendDiscordNotification(message) {
        axios.post(this.discordWebhook, { content: message });
      },
    },
  };
  </script>
  
  <style>
  /* Utilisation de Tailwind CSS pour le style */
  </style>