<template>
<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700" style="margin-bottom: 10rem;">
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
      <div class="flex items-center" >
          <div class="flex items-center ml-3">
            <div>
              <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
              </button>
            </div>
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  {{ UserName }}
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  {{ userEmail }}
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>
<Sidemenu></Sidemenu>

<div class="flex flex-wrap">
  <div class="w-full max-w-sm mx-auto p-4" style="padding-top: 6rem;">
  </div>
  <div class="w-full sm:w-1/3 max-w-sm mx-auto p-4" style="padding-top: 6rem;">
    <Calendar></Calendar>
  </div>
  <div class="w-full sm:w-1/3 max-w-sm mx-auto p-4" style="padding-top: 6rem;">
    <Youtube></Youtube>
  </div>
  <div class="w-full sm:w-1/3 max-w-sm mx-auto p-4" style="padding-top: 6rem;">
    <Github></Github>
  </div>
</div>


    <!-- <Twitter></Twitter> -->
</template>

<script>
import Sidemenu from './Items/Sidemenu.vue';
import Youtube from './Items/Youtube.vue';
import Calendar from './Items/Calendar.vue';
import Twitter from './Items/Twitter.vue';
import Github from './Items/Github.vue';

export default {
    name: 'Dashboard',
    // beforeRouteEnter(to, from, next) {
    //     const isSignedIn = localStorage.getItem("isSignedIn");
    //     if (isSignedIn === null || isSignedIn === 'false') {
    //         next('/login');
    //     }
    //     else {
    //         next();
    //     }
    // },
    data() {
        return {
            serverDateTime: '',
            currentHour: '',
            currentMinute: '',
            currentSecond: '',
            currentDate: '',
            userEmail: '',
            hours: 0,
            minutes: 0,
            seconds: 0,
            selectedCity: 'Paris',
            weatherData: null, 
            UserName: localStorage.getItem("UserName"),
            userEmail: localStorage.getItem("Email"),
        };

    },
    mounted() {
        this.initDropdownUser();
        this.initLogoSidebar();

    },
    methods: {
        logout() {
            localStorage.removeItem("authToken");
            this.$router.push('/login');
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

        async fetchWeatherData() {
      const city = this.selectedCity;

      const response = await fetch(`http://159.89.136.39/api/weather.php?city=${city}`);

      if (response.ok) {
        const data = await response.json();
        this.weatherData = data; 
      } else {
        console.error('Failed to fetch weather data');
      }
    },
  },
    components: { Sidemenu, Youtube, Calendar, Twitter, Github }
};
</script>



<style>
.card-container {
   /* display: flex;
   flex-direction: column;
   justify-content: center; */
   margin-top: 5rem;
}

.card {
   margin-top: 1rem;
}
.max-w-sm {
   max-width: 100%;
   width: 100%;
}

@media (min-width: 640px) {
   .card-date-hour, .card {
      margin-left: 18rem; /* Set the left margin for larger screens */
   }
}

@media (min-width: 768px) {
   .max-w-sm {
      max-width: 400px; /* Adjust the max-width to your desired value */
   }
}

.time-text {
  font-size: 50px;
  margin-top: 0px;
  margin-left: 15px;
  font-weight: 600;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.time-sub-text {
  font-size: 15px;
  margin-left: 5px;
}

.day-text {
  font-size: 18px;
  margin-top: 0px;
  margin-left: 15px;
  font-weight: 500;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
