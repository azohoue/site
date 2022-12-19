<section class="bg-gray-50 h-full">
    <div class="px-4 py-20 mx-auto max-w-7xl h-full">
      <div
        class="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5"
      >
        <h1 class="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">Sign up to our product today for free</h1>
        <form class="pb-1 space-y-4">
          <label class="block">
            <span class="block mb-1 text-xs font-medium text-gray-700">Name</span>
            <input class="form-input" type="text" placeholder="Your full name" required />
          </label>
          <label class="block">
            <span class="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
            <input class="form-input" type="email" placeholder="Ex. james@bond.com" inputmode="email" required />
          </label>
          <label class="block">
            <span class="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
            <input class="form-input" type="password" placeholder="••••••••" required />
          </label>
          <div class="flex flex-col items-start justify-between sm:items-center sm:flex-row">
            <label class="flex items-center">
              <input type="checkbox" class="form-checkbox" />
              <span class="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">Agree to Privacy Policy</span>
            </label>
            <input type="submit" class="w-full mt-5 btn btn-primary sm:w-auto sm:mt-0" value="Sign up" />
          </div>
        </form>
      </div>
      <p class="my-0 text-xs font-medium text-center text-gray-700 sm:my-5">
        Already have an account?
        <a href="/users/auth/signin" class="text-purple-700 hover:text-purple-900">Sign in</a>
      </p>
    </div>
  </section>
  