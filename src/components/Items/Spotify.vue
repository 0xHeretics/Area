<template>
    <div>
      <button v-if="!loggedIn" @click="loginWithSpotify">Se connecter à Spotify</button>
      <div v-else>
        <h2>Connecté en tant que {{ userData.display_name }}</h2>
        <button @click="startPlayback">Lire une piste</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loggedIn: false,
        userData: null,
      };
    },
    methods: {
      loginWithSpotify() {
        // Rediriger l'utilisateur vers l'URL d'authentification Spotify
        window.location.href = "https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&redirect_uri=YOUR_REDIRECT_URI&scope=user-read-playback-state";
      },
      startPlayback() {
        // Ajoutez ici la logique pour commencer la lecture d'une piste sur Spotify
  
        // Exemple de code pour envoyer une notification Discord via Webhook
        const discordWebhookURL = 'VOTRE_URL_DE_WEBHOOK_DISCORD'; // Remplacez cette valeur par votre propre URL de webhook Discord
        const notificationMessage = `L'utilisateur ${this.userData.display_name} écoute maintenant TITRE_DE_LA_PISTE`; // Remplacez TITRE_DE_LA_PISTE par le titre de la piste réelle
  
        fetch(discordWebhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: notificationMessage }),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error("Une erreur est survenue lors de l'envoi de la notification Discord.");
            }
          })
          .catch(error => {
            console.error("Erreur lors de l'envoi de la notification Discord:", error);
          });
      },
    },
    mounted() {
      // Vérifiez si l'utilisateur a été redirigé avec les informations d'authentification Spotify
      const params = new URLSearchParams(window.location.hash.substr(1));
      if (params.has('access_token')) {
        // Récupérer les détails de l'utilisateur depuis Spotify
        fetch('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: 'Bearer ' + params.get('access_token'),
          },
        })
          .then(response => response.json())
          .then(data => {
            this.userData = data;
            this.loggedIn = true;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données utilisateur depuis Spotify:', error);
          });
      }
    },
  };
  </script>
  
  <style>
  /* Ajoutez votre style ici */
  </style>