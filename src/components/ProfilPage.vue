<template>
  <div>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark-hover:bg-gray-700 dark-focus-ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <a href="/dashboard" class="flex ml-2 md:mr-24">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
              <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">AREA</span>
            </a>
          </div>
          <div class="flex items-center">
            <div class="flex items-center ml-3">
              <div>
                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" :src="userPhoto" alt="User Photo">
                </button>
              </div>
              <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark-divide-gray-600" id="dropdown-user">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-900 dark:text-white" role="none">{{ UserName }}</p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">{{ userEmail }}</p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">{{ userBirthDate }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="p-4 mt-20">
      <div class="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-md dark:bg-gray-800">
        <img class="w-20 h-20 rounded-full mb-4" :src="userPhoto" alt="User Photo" />
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">{{ UserName }}</h2>
        <p class="text-gray-500 dark:text-gray-400">{{ userEmail }}</p>
        <p class="text-gray-500 dark:text-gray-400">{{ userBirthDate }}</p>
        <p class="text-gray-600 dark:text-gray-300 mt-4" v-if="!isEditing">{{ userDescription }}</p>
        <form v-else @submit.prevent="saveProfile">
          <div>
            <img class="w-20 h-20 rounded-full mb-4" :src="userPhoto" alt="User Photo" />
            <input type="file" accept="image/*" @change="handleFileUpload" />
          </div>
          <textarea v-model="newDescription" class="w-full p-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg" rows="4"></textarea>
          <div class="mt-4">
            <label for="userBirthDate" class="block text-gray-700 dark:text-gray-300">Date de naissance</label>
            <input type="date" id="userBirthDate" v-model="userBirthDate" class="w-full p-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg" />
          </div>
          <div class="mt-4">
            <button type="button" @click="cancelEdit" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-300">
              Annuler
            </button>
            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300">
              Enregistrer
            </button>
          </div>
        </form>
        <div class="mt-6">
          <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300" @click="editProfile">
            Éditer le profil
          </button>
                <!-- Informations supplémentaires -->
        <div class="mt-4">
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Informations supplémentaires</h3>
          <div class="flex items-center mt-2">
            <div class="w-1/2">
              <label for="userAddress" class="block text-gray-700 dark:text-gray-300">Adresse</label>
              <input type="text" id="userAddress" v-model="userAddress" class="w-full p-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg" />
            </div>
            <div class="w-1/2 ml-4">
              <label for="userPhone" class="block text-gray-700 dark:text-gray-300">Numéro de téléphone</label>
              <input type="text" id="userPhone" v-model="userPhone" class="w-full p-2 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg" />
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-600 text-white mt-4 py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300" @click="saveAdditionalInfo">
            Enregistrer les informations supplémentaires
          </button>
        </div>
      </div>
        </div>
      </div>
    <Sidemenu></Sidemenu>
  </div>
</template>

<script>
import Sidemenu from './Items/Sidemenu.vue';
import axios from 'axios';

export default {
  data() {
    return {
      isEditing: false,
      newDescription: '',
      userDescription: localStorage.getItem('userDescription'),
      UserName: localStorage.getItem('UserName'),
      userEmail: localStorage.getItem('Email'),
      userPhoto: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      userBirthDate: localStorage.getItem('userBirthDate'),
      userAddress: localStorage.getItem('userAddress'),
      userPhone: localStorage.getItem('userPhone'),
    };
  },

  mounted() {
    this.initDropdownUser();
    this.initLogoSidebar();
  },
  methods: {
    editProfile() {
      this.isEditing = true;
      this.newDescription = this.userDescription;
    },
    cancelEdit() {
      this.isEditing = false;
    },
    saveDescription() {
      localStorage.setItem('userDescription', this.newDescription);
      this.userDescription = this.newDescription;
      this.isEditing = false;
    },
    saveProfile() {
      this.saveDescription();
      localStorage.setItem('userPhoto', this.userPhoto);
      localStorage.setItem('userBirthDate', this.userBirthDate);
      alert('Profil enregistré avec succès');
    },
    saveAdditionalInfo() {
      localStorage.setItem('userAddress', this.userAddress);
      localStorage.setItem('userPhone', this.userPhone);
      alert('Informations supplémentaires enregistrées avec succès');
      this.sendDiscordMessage("Votre adresse et votre numéro de téléphone ont été mis à jour avec succès !");
    },

    sendDiscordMessage(message) {
      const discordWebhookUrl = 'https://discord.com/api/webhooks/1170789574084149248/3WMFRtJYZIb65tHBovfYO_Axihg_FNOCn2FNNU2X94nYsrOWDIKuExIrDMNW6B5rTq5e';

      if (discordWebhookUrl) {
        axios.post(discordWebhookUrl, { content: message })
          .then(response => {
            console.log("Message Discord envoyé avec succès", response);
          })
          .catch(error => {
            console.error("Erreur lors de l'envoi du message Discord", error);
          });
      }
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        localStorage.setItem('userPhoto', imageUrl);
        this.userPhoto = imageUrl;
      }
    },
    initDropdownUser() {
      const dropdownUser = document.querySelector('[data-dropdown-toggle="dropdown-user"]');
      const dropdownUserMenu = document.querySelector('#dropdown-user');
      const dropdownUserMenuItems = dropdownUserMenu.querySelectorAll('a');
      dropdownUser.addEventListener('click', () => {
        dropdownUserMenu.classList.toggle('hidden');
      });
      dropdownUserMenuItems.forEach((item) => {
        item.addEventListener('click', () => {
          dropdownUserMenu.classList.add('hidden');
        });
      });
    },
    initLogoSidebar() {
      const logoSidebar = document.querySelector('[data-drawer-toggle="logo-sidebar"]');
      const logoSidebarMenu = document.querySelector('#logo-sidebar');
      logoSidebar.addEventListener('click', () => {
        logoSidebarMenu.classList.toggle('-translate-x-full');
      });
    },
  },
  components: { Sidemenu },
};
</script>
