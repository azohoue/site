<section class="bg-[#F8F9FD] h-full">
  <div class="px-4 py-20 mx-auto max-w-7xl h-full">
    <a href="/" title="Kutty Home Page" class="flex items-center justify-start sm:justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z" clip-rule="evenodd" />
      </svg>
      <span class="font-semibold">azohoue</span>
    </a>
    <div
      class="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5"
    >
      <h1 class="mb-5 text-xl font-semibold text-left text-gray-800 sm:text-center">Connexion au compte</h1>
      <form class="pb-1 space-y-4">
        <label class="block">
          <span class="block mb-1 text-md font-medium text-gray-700">Votre adresse email</span>
          <input class="input input-bordered w-full" type="email" placeholder="Ex: jean.djossou@azohoue.com" inputmode="email" required />
        </label>
        <label class="block">
          <span class="block mb-1 text-md font-medium text-gray-700">Votre mot de passe</span>
          <input class="input input-bordered w-full" type="password" placeholder="••••••••" required />
        </label>
        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input type="checkbox" class="checkbox" />
            <span class="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">Se souvenir de moi</span>
          </label>
          <input type="submit" class="btn" value="Connexion" />
        </div>
      </form>
    </div>
    <p class="mb-4 space-y-2 text-sm text-left text-gray-600 sm:text-center sm:space-y-0">
      <!-- <a href="#" class="w-full btn btn-sm btn-link sm:w-auto">Forgot password</a> -->
      <a href="/users/auth/signup" class="w-full sm:w-auto text-purple-700 hover:text-purple-900">Créer un compte</a>
    </p>
  </div>
</section>
