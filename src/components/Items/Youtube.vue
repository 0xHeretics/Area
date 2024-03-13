<template>
  <div class="p-6 max-w-sm mx-auto  border-2 border-red-500 bg-white rounded-xl shadow-xl shadow-red-500 flex items-center space-x-4">
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/800px-YouTube_social_white_squircle.svg.png" alt="Vue logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">YouTube Notifier</div>
      <label for="channelInput" class="text-sm">Chaîne YouTube :</label>
      <input id="channelInput" type="text" v-model="channelId" placeholder="Entrez l'ID de la chaîne YouTube" class="focus:border-red-500 focus:ring-red-500 rounded-lg p-2 my-2 w-full" />
      <label for="webhookInput" class="text-sm">URL de la webhook Discord :</label>
      <input id="webhookInput" type="text" v-model="discordWebhook" placeholder="Entrez l'URL de la webhook Discord" class="focus:border-red-500 focus:ring-red-500 border rounded-lg p-2 my-2 w-full" />
      <label class="text-sm">Recevoir des notifications Discord :</label>
      <input type="checkbox" v-model="notifyOnDiscord" class=" border-red-500 ring-red-500 checked:bg-red-500 checked:ring-red-500 m-2" />
      <br />
      <label for="actionSelect" class="text-sm">Choisir l'action :</label>
      <select v-model="selectedAction" id="actionSelect" class="rounded-lg p-2 my-2 w-full">
        <option value="subscriber">Nouvel Abonné</option>
        <option value="video">Nouvelle Vidéo</option>
        <option value="short">Nouveau Short</option>
      </select>
      <br />
      <label for="apiKeyInput" class="text-sm">Clé d'API YouTube :</label>
      <input id="apiKeyInput" type="text" v-model="apiKey" placeholder="Entrez votre cléf d'pAPI YouTube" class="focus:border-red-500 focus:ring-red-500 rounded-lg p-2 my-2 w-full" />
      <br />
      <button @click="saveSettings" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Enregistrer</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "YoutubeNotificationComponent",
  data() {
    return {
      channelId: "",
      discordWebhook: "",
      notifyOnDiscord: false,
      selectedAction: "video",
      apiKey: "",
      followerCount: 0,
      likeCount: 0,
      commentCount: 0,
    };
  },
  methods: {
    saveSettings() {
      localStorage.setItem("channelId", this.channelId);
      localStorage.setItem("discordWebhook", this.discordWebhook);
      localStorage.setItem("notifyOnDiscord", this.notifyOnDiscord);
      localStorage.setItem("selectedAction", this.selectedAction);
      localStorage.setItem("apiKey", this.apiKey);

      if (this.notifyOnDiscord) {
        if (this.selectedAction === "video") {
          this.checkForNewVideo();
        } else if (this.selectedAction === "subscriber") {
          this.checkForNewSubscriber();
        } else if (this.selectedAction === "short") {
          this.checkForNewShort();
        }
      }
    },
    async checkForNewSubscriber() {
  const API_KEY = this.apiKey;
  const channelId = this.channelId;
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=${channelId}&part=statistics`);
  const subscriberCount = response.data.items[0].statistics.subscriberCount;

  const storedSubscriberCount = localStorage.getItem('latestSubscriberCount');
  if (subscriberCount > storedSubscriberCount) {
    localStorage.setItem('latestSubscriberCount', subscriberCount);
    this.sendDiscordWebhook(`Nouvel abonné sur la chaîne YouTube ! Nombre actuel d'abonnés : ${subscriberCount}`);
  }
},

async checkForNewShort() {
  const API_KEY = this.apiKey;
  const channelId = this.channelId;
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1&type=video&videoDuration=short`);
  const videoId = response.data.items[0].id.videoId;

  const storedShortVideoId = localStorage.getItem('latestShortVideoId');
  if (videoId !== storedShortVideoId) {
    localStorage.setItem('latestShortVideoId', videoId);
    this.sendDiscordWebhook('Nouveau court métrage publié sur la chaîne YouTube !');
  }
},

async checkForNewVideo() {
  const API_KEY = this.apiKey;
  const channelId = this.channelId;
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`);
  const videoId = response.data.items[0].id.videoId;

  const storedVideoId = localStorage.getItem('latestVideoId');
  if (videoId !== storedVideoId) {
    localStorage.setItem('latestVideoId', videoId);
    this.sendDiscordWebhook('Nouvelle vidéo publiée sur la chaîne YouTube !');
  }
},
    sendDiscordWebhook(message) {
      axios.post(this.discordWebhook, {
        content: message,
      });
    },
  },
  created() {
    this.channelId = localStorage.getItem("channelId") || "";
    this.discordWebhook = localStorage.getItem("discordWebhook") || "";
    this.notifyOnDiscord = localStorage.getItem("notifyOnDiscord") === "true";
    this.apiKey = localStorage.getItem("apiKey") || "";
  },
  mounted() {
    if (this.notifyOnDiscord) {
      this.setupStatTracking();
    }
  },
  setupStatTracking() {
    setInterval(this.checkChannelStats, 180000);
  },
};
</script>