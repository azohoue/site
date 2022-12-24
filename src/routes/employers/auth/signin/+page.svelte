<script lang="ts">
  import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
  import { toast } from '@zerodevx/svelte-toast'
  let sbt:any;

  let user_input:any = {
    email:null,
    password: null,
  }
  let input_value = {
    email: null,
    password: null
  }
  let error_input:any = {
    email: null,
    password: null 
  }
</script>

<section class="h-full w-full grid grid-cols-1 sm:grid-cols-2">
  <div class="bg-white flex flex-col justify-center gap-y-4 w-full px-4 xl:px-8 py-20">
    <div class="flex justify-start items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-400">
        <path fill-rule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z" clip-rule="evenodd" />
      </svg>
      <a href="/" class="normal-case text-xl font-semibold text-[20px] h-fit text-red-400">azohoue</a>
    </div>
    <h1 class="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl">Mon compte <span class="underline text-red-400">entreprise</span></h1>

    <form method="POST" class="space-y-5" use:enhance={ ({form, cancel})=> {
        sbt.classList.add("loading")
      return async ({result, update}) => {
        // sbt.classList.remove("loading")
        if(result.type != "success"){
          const payloadError = result.data.payloadError;
          const authmessage = result.data.message

          if(authmessage){
            toast.push(authmessage, {
              theme:{
                "--toastBackground": "#e84118",
                "--toastBarBackground": "#c23616"
              }
            })
          }else{
            // Email check
            if(payloadError.email){
              error_input.email.innerHTML = payloadError.email
              user_input.email.classList.add("input-error")
            }else{
              error_input.email.innerHTML = ""
              if(user_input.email.classList.contains("input-error"))
                user_input.email.classList.remove("input-error")
            }
            // Password check
            if(payloadError.password){
              error_input.password.innerHTML = payloadError.password
              user_input.password.classList.add("input-error")
            }else{
              error_input.password.innerHTML = ""
              if(user_input.password.classList.contains("input-error"))
                user_input.password.classList.remove("input-error")
            }
          }
          
        }else{
          // Si il n'y a pas d'erreur,
          // console.log("Utilisateur connectée ! ");
          goto("/employers/me")
        }
      }
    }}>
      <label class="block">
        <span class="block mb-1 text-sm text-gray-700">Votre addresse email</span>
        <input bind:this={user_input.email} bind:value={input_value.email} class="input input-bordered w-full" type="email" placeholder="Ex: jean.djossou@azohoue.com" name="email" required />
        <span bind:this={error_input.email} class="text-xs text-red-500"></span>
      </label>
      <label class="block">
        <span class="block mb-1 text-sm font-medium text-gray-700">Votre mot de passe</span>
        <input bind:this={user_input.password} bind:value={input_value.password} required class="input input-bordered w-full" type="password" placeholder="••••••••" name="password"  />
        <span bind:this={error_input.password} class="text-xs text-red-500"></span>
      </label>
      <input bind:this={sbt} type="submit" class="btn btn-error text-white normal-case cursor-pointer" value="Me connecter" />
    </form>
    <div class="pt-6 flex gap-x-4 text-sm font-medium text-gray-700 border-t border-gray-200">
      <a href="/employers/auth/signup" class="text-red-400 hover:text-purple-900">Ouvrir un compte</a>
      <a href="/users/auth/signin" class="text-gray-400 hover:text-purple-900">Je suis un utilisateur</a>
    </div>
  </div>
  <div class="h-full w-full hidden sm:flex relative">
    <div id="blur" class="absolute top-0 left-0 h-full w-full bg-[#00000060]"></div>
    <img src="/images/banner-login.jpg" class="h-full w-full object-cover" alt="">
  </div>
</section>
