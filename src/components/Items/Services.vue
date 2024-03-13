<template>
  <div class="grid grid-flow-row auto-rows-max">
  <!-- SELLPASS -->
  <div
    class="max-w-sm shadow-2xl shadow-orange-500 bg-white border-2 border-orange-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    style="margin-left: 20rem; margin-top: 5rem;">
    <img class="rounded-t-lg"
      src="https://cdn.discordapp.com/attachments/1153316345623093329/1166359786590326845/sellpass.png?ex=654a3433&is=6537bf33&hm=46501ba7157b8d8598e216c543f53cd3f3df25958f3be4e3240f001390243053&"
      alt="" />
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connect your Sellpass.io Shop
        </h5>
      </a>
      <div class="mb-6">
        <input type="text" id="large-input" placeholder="SellPass.io ApiKey"
          class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500">
      </div>
      <button
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Submit
        </span>
      </button> 
    </div>
  </div>
  <!-- SPOTIFY -->
  <div
    class="max-w-sm bg-white shadow-2xl shadow-green-400 border-2 border-green-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    style="margin-left: 48rem; margin-top: -21.5rem;">
    <a href="#">
      <img class="rounded-t-lg"
        src="https://cdn.discordapp.com/attachments/1153316345623093329/1166360134977605752/spotify.png?ex=654a3486&is=6537bf86&hm=9856ffd7f0e53ec3a5c2d9898633505bc2481bc9ac3794177f7735ffd25bb17e&"
        alt="" style="margin-top: 3%; margin-left: 3%;" />
    </a>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connect your Spotify account !</h5>
      <div class="mb-6">
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Press the button right below to connect your Spotify
        account</p>
      <button @click="redirectToSpotifyAuth"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-200 to-green-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Log-In
        </span>
      </button>
      <button @click="logoutSpotify"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-200 to-green-500 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Log-Out
        </span>
      </button>

    </div>
  </div>

  <!-- DISCORD -->
  <div
    class="max-w-sm shadow-2xl shadow-blue-500 bg-white border-2 border-blue-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    style="margin-left: 76rem; margin-top: -22rem;">
    <a href="#">
      <img class="rounded-t-lg" style="margin-top: 2%; margin-left: 2%;"
        src="https://cdn.discordapp.com/attachments/1153316345623093329/1166360395204800613/discord.png?ex=654a34c4&is=6537bfc4&hm=4c097dc01d9ae0e6d6edb68b7d4c3876f6ebc033a65f6046b5a684f0dcc004f9&"
        alt="" />
    </a>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connect your Discord account !</h5>
      <div class="mb-6">
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Press the button right below to connect your Discord
        account</p>
      <button @click="redirectToDiscordAuth"
        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-700 to-purple-800 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Log-In
        </span>
      </button>
    </div>
  </div>

  <!-- Youtube-->

  <div class="bg-gray-100 dark:bg-gray-800">
    <!-- YouTube Channel Selector -->
    <div class="max-w-sm mx-auto p-5 mt-4">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Choose a YouTube Channel</h5>
      <div class="mb-3">
        <input v-model="selectedChannelId" type="text" id="channel-input" placeholder="Enter YouTube Channel ID"
          class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-blue-500" />
        <button @click="fetchYouTubeChannelInfo(selectedChannelId)"
          class="relative inline-flex items-center justify-center p-0.5 mt-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 to-red-600 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Fetch
            Channel Info</span>
        </button>
      </div>
    </div>
  </div>

  <div v-if="youtubeInfo">
    <div
      class="max-w-sm shadow-2xl bg-white border-2 border-red-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      style="margin-left: 20rem; margin-top: 3rem;">
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">YouTube Channel Info</h5>
        <div class="mb-6"></div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Channel Name: {{ youtubeInfo.channelTitle }}</p>
        <!-- Ajoutez d'autres informations YouTube ici -->
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      isAuthenticated: false,
      discordUsername: '',
      youtubeInfo: null,
      selectedChannelId: '',
    };
  },
  methods: {

    fetchYouTubeChannelInfo(channelId) {
      this.isLoading = true;
      fetch(`http://159.89.136.39/api/youtube-callback.php?channelId=${channelId}`) // Envoyez l'ID de la chaîne à votre script PHP
        .then(response => {
          if (!response.ok) {
            throw new Error('Réponse réseau incorrecte');
          }
          return response.json();
        })
        .then(data => {
          console.log(data); // Vérifiez les données dans la console
          this.youtubeInfo = data;
        })
        .catch(error => {
          console.error('Erreur : ', error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    updateDiscordInfo(username) {
      this.isAuthenticated = true;
      this.discordUsername = username;
    },

    redirectToDiscordAuth() {
      window.location.href = 'http://159.89.136.39/api/discord-callback.php';
    },

    redirectToSpotifyAuth() {
      window.location.href = 'http://159.89.136.39/api/spotify-callback.php';
    },

    logoutSpotify() {
      window.location.href = 'http://159.89.136.39/api/spotify_logout.php';
    },
  },

  mounted() {
    this.fetchYouTubeChannelInfo();
  },

};
</script>