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
        <h1 class="mb-5 text-xl text-left text-gray-800 sm:text-center font-semibold">Inscrivez-vous gratuitement</h1>
        <form class="pb-1 space-y-4">
          <label class="block">
            <span class="block mb-1 font-medium text-gray-700">Votre nom complet</span>
            <input class="input input-bordered w-full" type="text" placeholder="Ex: Jean Djossou" required />
          </label>
          <label class="block">
            <span class="block mb-1 font-medium text-gray-700">Votre adresse email</span>
            <input class="input input-bordered w-full" type="email" placeholder="Ex: jean.djossou@azohoue.com" inputmode="email" required />
          </label>
          <label class="block">
            <span class="block mb-1 font-medium text-gray-700">Votre mot de passe</span>
            <input class="input input-bordered w-full" type="password" placeholder="••••••••" required />
          </label>
          <div class="flex flex-col items-start justify-between sm:items-center sm:flex-row">
            <label class="flex items-center">
              <input type="checkbox" class="checkbox" />
              <span class="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">J'accepte les conditions d'utilisations et la politique de confidentialité.</span>
            </label>
            <input type="submit" class="w-full mt-5 btn sm:w-auto sm:mt-0" value="M'inscrire" />
          </div>
        </form>
      </div>
      <p class="my-0 text-xs font-medium text-center text-gray-700 sm:my-5">
        Vous avez déjà un compte ?
        <a href="/users/auth/signin" class="text-purple-700 hover:text-purple-900">Connectez-vous</a>
      </p>
    </div>
</section>
  