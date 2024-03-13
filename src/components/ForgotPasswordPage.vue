<template>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
          Area
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot Password
            </h1>
            <form class="space-y-4 md:space-y-6" action="http://159.89.136.39/api/forgot_password.php" method="post">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required>
              </div>
            <button type="submit" class="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 custom-black-button">Send Email</button>
            <div class="text-center">
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Remember your password? <a href="/login" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-primary-500 custom-blue-link">Sign in now</a></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ForgetPasswordPage',
    props: {
      msg: String
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
  