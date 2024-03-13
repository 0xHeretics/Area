<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow-xl shadow-purple-500  border-2 border-purple-500 overflow-hidden">
    <div class="space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Calendrier</h2>
        <div class="mt-8 space-y-6">
          <div>
            <flat-pickr
              v-model="dateTime"
              class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Sélectionnez la date et l'heure"
              :config="flatpickrConfig"
            />
          </div>
          <div>
            <input v-model="webhookUrl" type="text" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="URL du webhook Discord" />
          </div>
          <div>
            <button @click="scheduleTask" class="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Planifier la tâche
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    FlatPickr,
  },
  data() {
    return {
      dateTime: null,
      webhookUrl: localStorage.getItem('discordWebhook') || '',
      flatpickrConfig: {
        enableTime: true,
        dateFormat: 'd/m/Y H:i',
      },
    };
  },
  methods: {
    scheduleTask() {
      if (this.dateTime && this.webhookUrl) {
        const selectedDate = new Date(this.dateTime);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
          const timeDifference = selectedDate.getTime() - currentDate.getTime();
          setTimeout(() => {
            const taskName = 'AREA'; 
            const message = `***RAPPEL !*** La tâche ${taskName} est planifiée pour aujourd'hui à ${this.dateTime} .`;
            this.sendNotificationToDiscord(this.webhookUrl, message);
          }, timeDifference);
        } else {
          console.error('La date sélectionnée doit être ultérieure à la date actuelle.');
        }
      } else {
        console.error('Veuillez sélectionner une date et une heure, et fournir l\'URL du webhook Discord.');
      }
    },
    sendNotificationToDiscord(webhookURL, message) {
      fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Une erreur est survenue lors de l'envoi de la notification Discord.");
          }
          console.log('Notification Discord envoyée avec succès.');
        })
        .catch(error => {
          console.error("Erreur lors de l'envoi de la notification Discord:", error);
        });
    },
  },
  watch: {
    webhookUrl(newUrl) {
      localStorage.setItem('discordWebhook', newUrl);
    },
  },
};
</script>