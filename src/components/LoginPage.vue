<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
        Area
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#" method="POST" @submit.prevent="login">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required="true">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input v-model="password" type="password" name="password" id="password" placeholder="Enter your Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true">
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="true">
                </div>
              </div>
              <a href="/forgot-password" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 custom-blue-link">Forgot password?</a>
            </div>
            <button @click="handleSignInMail" class="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 custom-black-button">Sign in</button>
            <div class="text-center">
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account? <a href="/signup" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-primary-500 custom-blue-link">Sign Up</a></p>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400 line">Or With</p>
            </div>
            <div class="flex-row">
              <button class="btn google" @click="handleSignInGoogle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512" height="20">
                  <path fill="#4285F4" d="M503.3 267.9c0-17.9-1.3-31.5-4.6-44.9H258v85.3h149.5c-6.6 35.1-25.7 65.2-53.1 85.3v71.1h85.2c49.8-45.9 78.2-113.5 78.2-193.1z"/>
                  <path fill="#0F9D58" d="M258 514c70.5 0 129.5-23.4 172.3-63.8l-85.2-71.1c-23.9 16.2-54.8 25.8-87.1 25.8-66 0-122.2-44.8-142.3-105.4H15.8v66.2C58.1 449 152.1 514 258 514z"/>
                  <path fill="#F4B400" d="M115.7 305.8c-8.3-24-8.3-49 0-73.1V166H30.7C11.7 210.9 0 238.4 0 267.9s11.7 57 30.7 101.9l85-66.1z"/>
                  <path fill="#DB4437" d="M258 100.2c38.4 0 73.6 13.3 101 39.9l75.2-75.2C387.5 13.8 323.4 0 258 0 152.1 0 58.1 64.9 30.7 166h85.2c20.1-60.6 76.3-105.4 142.3-105.4z"/>
                </svg>
                Google
              </button>

              <button class="btn apple" @click="handleSignInGitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#000000" d="M12,0.306c-6.627,0-12,5.373-12,12c0,5.303,3.438,9.8,8.207,11.387c0.6,0.111,0.793-0.261,0.793-0.578 c0-0.285-0.012-1.042-0.018-2.044c-3.338,0.725-4.042-1.609-4.042-1.609c-0.547-1.389-1.333-1.758-1.333-1.758 c-1.089-0.745,0.083-0.729,0.083-0.729c1.204,0.084,1.838,1.236,1.838,1.236c1.07,1.833,2.807,1.305,3.491,0.998 c0.108-0.776,0.416-1.305,0.757-1.605c-2.651-0.301-5.437-1.326-5.437-5.89c0-1.303,0.465-2.365,1.235-3.195 c-0.124-0.301-0.536-1.516,0.117-3.155c0,0,1.005-0.32,3.301,1.224c0.959-0.266,1.983-0.398,3.003-0.403 c1.019,0.005,2.043,0.137,3.003,0.403c2.294-1.545,3.297-1.224,3.297-1.224c0.655,1.639,0.244,2.854,0.12,3.155 c0.771,0.83,1.232,1.893,1.232,3.195c0,4.573-2.789,5.585-5.445,5.881c0.427,0.368,0.808,1.096,0.808,2.214 c0,1.599-0.015,2.887-0.015,3.277c0,0.318,0.191,0.695,0.799,0.578c4.769-1.587,8.199-6.084,8.199-11.387 C24,5.679,18.627,0.306,12,0.306z"/>
                </svg>
                Github
              </button>
              <button class="btn apple" @click="handleSignInTwitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#000000" d="M21.9,4.3c-0.8,0.4-1.7,0.7-2.6,0.8c0.9-0.5,1.6-1.3,1.9-2.3c-0.8,0.5-1.7,0.9-2.6,1.2 c-0.8-0.8-1.9-1.3-3.2-1.3c-2.4,0-4.4,2-4.4,4.4c0,0.3,0,0.6,0.1,0.9c-3.7-0.2-7-2-9.2-4.7c-0.4,0.6-0.6,1.3-0.6,2 c0,1.5,0.8,2.8,2,3.5c-0.7,0-1.3-0.2-1.8-0.5c0,0,0,0,0,0c0,2.1,1.5,3.9,3.4,4.3c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1 c0.6,1.9,2.5,3.3,4.7,3.4c-1.7,1.3-3.9,2-6.3,2c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.6,2.2c9.1,0,14.1-7.5,14.1-14.1 c0-0.2,0-0.5,0-0.7C20.6,6,21.3,5.2,21.9,4.3z"/>
                </svg>
                Twitter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebaseConfig from '../../firebaseConfig';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithEmailAndPassword} from "firebase/auth";

firebaseConfig

const provider = new GoogleAuthProvider();
const providerTwitter = new TwitterAuthProvider();
const providerGithub = new GithubAuthProvider();
const auth = getAuth();

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: '',
      isSignedIn: false,
      email: null,
      password: null,
    }
  },
  methods: {
    handleSignInMail(){
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.isSignedIn = true;
          localStorage.setItem('IsSignedIn', this.isSignedIn)
          localStorage.setItem('Email', this.email)
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {          
          // const user = result.user;
          console.log(result.user.displayName)
          console.log(result.user.email)
          this.user = result.user.displayName;
          this.email = result.user.email;
          this.isSignedIn = true;
          localStorage.setItem('UserName', this.user)
          localStorage.setItem('IsSignedIn', this.isSignedIn)
          localStorage.setItem('Email', this.email) 
          this.$router.push('/dashboard');
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignInTwitter() {
      signInWithPopup(auth, providerTwitter)
        .then((result) => {          
          this.user = result.user.displayName;
          this.email = result.user.email;
          this.isSignedIn = true;
          localStorage.setItem('UserName', this.user)
          localStorage.setItem('IsSignedIn', this.isSignedIn)
          localStorage.setItem('Email', this.email)
          this.$router.push('/dashboard');
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignInGitHub() {
      signInWithPopup(auth, providerGithub)
        .then((result) => {   
          console.log(result.user)       
          this.user = result.user.displayName;
          this.email = result.user.email;
          this.isSignedIn = true;
          localStorage.setItem('UserName', this.user)
          localStorage.setItem('IsSignedIn', this.isSignedIn)
          localStorage.setItem('Email', this.email)
          this.$router.push('/dashboard');
        }).catch((error) => {
          console.log(error);
        });
    },
    handleSignOut() {
      signOut(auth).then(() => {
          this.user = '';
          this.isSignedIn = false;
        }).catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>


<style>
.custom-blue-link {
color: #3182ce; /* Couleur bleue */
}

.custom-blue-link:hover {
color: #2c5282; /* Couleur bleue au survol */
}
.custom-darker-text {
  color: #000000; /* Couleur noire */
}

.custom-black-button {
  background-color: #000; /* Couleur de fond noire */
  color: #fff; /* Couleur du texte blanc */
}

.custom-black-button:hover {
  background-color: #333; /* Couleur de fond au survol */
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  border: 1px solid #2d79f3;
}

</style>
