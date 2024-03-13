<template>
  <div>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
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
              <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-900 dark:text-white" role="none">{{ newUsername }}</p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">{{ newUserEmail }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="ml-64 p-4 mt-20">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-2xl font-semibold mb-4">Paramètres</h1>
        <section>
          <h2 class="text-xl font-semibold mb-2">Paramètres de l'utilisateur</h2>
          <div class="bg-white dark:bg-gray-800 p-4 mt-4 shadow-lg rounded-lg">
            <div class="flex items-center mb-2">
              <label for="username" class="mr-2">Nom d'utilisateur :</label>
              <input type="text" id="username" class="border border-gray-300 rounded px-2 py-1 w-full" v-model="newUsername">
            </div>
            <div class="flex items-center mb-2">
              <label for="email" class="mr-2">Adresse e-mail :</label>
              <input type="email" id="email" class="border border-gray-300 rounded px-2 py-1 w-full" v-model="newUserEmail">
            </div>
          </div>
        </section>
        <div class="mt-6">
          <button class="bg-blue-500 hover-bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg" @click="saveSettings">
            Sauvegarder les paramètres
          </button>
        </div>
      </div>
    </div>
    <Sidemenu></Sidemenu>
  </div>
</template>

<script>
import Sidemenu from './Items/Sidemenu.vue';

export default {
  data() {
    return {
      newUsername: localStorage.getItem('UserName'),
      newUserEmail: localStorage.getItem('Email'),
      userPhoto: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    };
  },
  mounted() {
    this.initDropdownUser();
    this.initLogoSidebar();
  },
  methods: {
    saveSettings() {
      localStorage.setItem('UserName', this.newUsername);
      localStorage.setItem('Email', this.newUserEmail);
      alert('Paramètres sauvegardés !');
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
