<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { toast } from '@zerodevx/svelte-toast';
	let user = {
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	};
	let user_input: any = {
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	};
	let error_input: any = {
		firstname: '',
		lastname: '',
		email: '',
		password: ''
	};
</script>

<section class="bg-[#F8F9FD] h-fit sm:h-full">
	<div class="px-4 py-20 mx-auto max-w-7xl h-full ">
		<a href="/" class="flex items-center justify-start sm:justify-center text-red-400">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6"
			>
				<path
					fill-rule="evenodd"
					d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
					clip-rule="evenodd"
				/>
			</svg>
			<span class="font-semibold">azohoue</span>
		</a>
		<div
			class="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 md:w-10/12 lg:w-8/12 xl:w-8/12 md:px-6 sm:mt-8 sm:mb-5"
		>
			<h1 class="mb-5 text-xl text-left text-gray-800 sm:text-center font-semibold">
				Compte Utilisateur | Inscription
			</h1>
			<form
				method="post"
				class="pb-1 space-y-4"
				use:enhance={({ form, data, action, cancel }) => {
					// With use enhance, the redirect is not set from back ! Redirects are throw manually
					// Run on submitting
					// check if data send is secure!
					// if not cancel

					return async ({ result, update }) => {
						// Run after the submission
						if (result.type != 'success') {
							toast.push('Inscription échouée !', {
								theme: {
									'--toastColor': 'mintcream',
									'--toastBackground': '#F87171',
									'--toastBarBackground': '#c0392b'
								}
							});

							const payloadError = result.data.payloadError;

							// Fistname check
							if (payloadError.firstname) {
								error_input.firstname.innerHTML = payloadError.firstname;
								user_input.firstname.classList.add('input-error');
							} else {
								error_input.firstname.innerHTML = '';
								if (user_input.firstname.classList.contains('input-error'))
									user_input.firstname.classList.remove('input-error');
							}

							// Lastname check
							if (payloadError.lastname) {
								error_input.lastname.innerHTML = payloadError.lastname;
								user_input.lastname.classList.add('input-error');
							} else {
								error_input.lastname.innerHTML = '';
								if (user_input.lastname.classList.contains('input-error'))
									user_input.lastname.classList.remove('input-error');
							}

							// Email check
							if (payloadError.email) {
								error_input.email.innerHTML = payloadError.email;
								user_input.email.classList.add('input-error');
							} else {
								error_input.email.innerHTML = '';
								if (user_input.email.classList.contains('input-error'))
									user_input.email.classList.remove('input-error');
							}

							// Password check
							if (payloadError.password) {
								error_input.password.innerHTML = payloadError.password;
								user_input.password.classList.add('input-error');
							} else {
								error_input.password.innerHTML = '';
								if (user_input.password.classList.contains('input-error'))
									user_input.password.classList.remove('input-error');
							}

							// IF END
						} else {
							goto('/auth/users/signin');
							toast.push('Inscription réussie !', {
								theme: {
									'--toastColor': 'mintcream',
									'--toastBackground': 'rgba(72,187,120,0.9)',
									'--toastBarBackground': '#2F855A'
								}
							});
						}
					};
				}}
			>
				<div class="flex flex-col gap-4 sm:grid sm:grid-cols-2 w-full">
					<label class="block">
						<span class="block mb-1 font-medium text-gray-700">Votre nom de famille</span>
						<input
							bind:this={user_input.lastname}
							bind:value={user.lastname}
							name="lastname"
							class="input input-bordered w-full"
							type="text"
							placeholder="Ex: Djossou"
						/>
						<span bind:this={error_input.lastname} class="text-xs text-red-500" />
					</label>
					<!--  -->
					<label class="block">
						<span class="block mb-1 font-medium text-gray-700">Votre prénom</span>
						<input
							bind:this={user_input.firstname}
							bind:value={user.firstname}
							name="firstname"
							class="input input-bordered w-full"
							type="text"
							placeholder="Ex: Jean"
						/>
						<span bind:this={error_input.firstname} class="text-xs text-red-500" />
					</label>
				</div>
				<!--  -->
				<label class="block">
					<span class="block mb-1 font-medium text-gray-700">Votre adresse email</span>
					<input
						name="email"
						bind:this={user_input.email}
						bind:value={user.email}
						class="input input-bordered w-full"
						type="email"
						placeholder="Ex: jean.djossou@azohoue.com"
						inputmode="email"
					/>
					<span class="text-xs text-red-500" bind:this={error_input.email} />
				</label>
				<label class="block">
					<span class="block mb-1 font-medium text-gray-700">Votre mot de passe</span>
					<input
						name="password"
						bind:this={user_input.password}
						bind:value={user.password}
						class="input input-bordered w-full"
						type="password"
						placeholder="••••••••"
					/>
					<span class="text-xs text-red-500" bind:this={error_input.password} />
				</label>
				<div class="flex flex-col items-start justify-between sm:items-center sm:flex-row">
					<label class="flex items-center">
						<input name="cdn" type="checkbox" class="checkbox" />
						<span class="block ml-2 text-xs font-medium text-gray-700 cursor-pointer"
							>J'accepte les <a href="#" class="text-red-500 underline">conditions d'utilisations</a
							>
							et la
							<a href="#" class="text-red-400 underline">politique de confidentialité.</a></span
						>
						<span class="text-xs text-red-500" />
					</label>
					<input
						type="submit"
						class="w-full mt-5 btn btn-error text-white sm:w-auto sm:mt-0 normal-case"
						value="Ouvrir mon compte"
					/>
				</div>
			</form>
		</div>
		<p class="my-0 text-xs font-medium text-center text-gray-700 sm:my-5 pb-10">
			Vous avez déjà un compte ?
			<a href="/auth/users/signin" class="text-red-400 hover:text-red-900">Connectez-vous</a>
		</p>
	</div>
</section>
