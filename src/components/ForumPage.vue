<template>
  <div>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark-hover:bg-gray-700 dark-focus-ring-gray-600">
              <span class="sr-only">Open sidebar</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
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
                <button type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false" data-dropdown-toggle="dropdown-user">
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" :src="userPhoto" alt="User Photo" />
                </button>
              </div>
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark-divide-gray-600"
                id="dropdown-user">
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-900 dark:text-white" role="none">{{ UserName }}</p>
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">{{ userEmail }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div v-if="showCreatePostForm" class="fixed inset-0 flex items-center justify-center">
      <div class="bg-white p-4 rounded shadow w-full max-w-md">
        <h2 class="text-2xl font-semibold mb-2 text-center">Créer un nouveau post</h2>
        <input v-model="newPostTitle" type="text" placeholder="Titre du post" class="w-full p-2 mb-2 rounded border" />
        <textarea v-model="newPostDescription" placeholder="Description du post" class="w-full p-2 mb-2 rounded border"></textarea>
        <button @click="createPost" class="bg-blue-500 text-white p-2 rounded-lg mx-auto block">Créer</button>
      </div>
    </div>

    <div class="my-8">
      <div class="max-w-md mx-auto">
        <h2 class="text-2xl font-semibold mb-4 text-center">Derniers articles</h2>
        <div v-for="(post, index) in posts" :key="index" class="mt-4">
          <article class="bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105">
            <h3 class="text-xl font-semibold text-blue-600 mb-2">{{ post.title }}</h3>
            <p class="text-gray-700">{{ post.description }}</p>
            <button @click="toggleLike(post)" :class="{ 'text-red-500': post.liked }" class="text-gray-500 hover:text-red-500 focus:outline-none focus:text-red-500">
              J'aime
            </button>
          </article>
        </div>
      </div>
    </div>

    <button @click="toggleCreatePostForm" class="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-lg">
      Créer un post
    </button>

    <Sidemenu></Sidemenu>
  </div>
</template>

<script>
import Sidemenu from './Items/Sidemenu.vue';

export default {
  data() {
    return {
      showCreatePostForm: false,
      newPostTitle: '',
      newPostDescription: '',
      posts: [],
      userPhoto: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      UserName: localStorage.getItem('userName'),
      userEmail: localStorage.getItem('userEmail'),
    };
  },
  mounted() {
    this.initDropdownUser();
    this.initLogoSidebar();
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    this.posts = savedPosts.map(post => ({ ...post, liked: false }));
  },
  methods: {
    toggleCreatePostForm() {
      this.showCreatePostForm = !this.showCreatePostForm;
    },
    createPost() {
      if (this.newPostTitle && this.newPostDescription) {
        const newPost = {
          title: this.newPostTitle,
          description: this.newPostDescription,
          liked: false,
        };
        this.posts.push(newPost);
        localStorage.setItem('posts', JSON.stringify(this.posts));
        this.newPostTitle = '';
        this.newPostDescription = '';
        this.showCreatePostForm = false;
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
    toggleLike(post) {
      post.liked = !post.liked;
    },
  },
  components: { Sidemenu },
};
</script>
