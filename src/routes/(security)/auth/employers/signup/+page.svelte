<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { toast } from '@zerodevx/svelte-toast';

	let user_input: any = {
		firstname: null,
		lastname: null,
		organizaion: null,
		email: null,
		password: null
	};
	let input_value = {
		firstname: null,
		lastname: null,
		organization: null,
		email: null,
		password: null
	};
	let error_input: any = {
		firstname: null,
		lastname: null,
		organization: null,
		email: null,
		password: null
	};

	// onMount(()=>{
	//   toast.push('Success!', {
	//     theme: {
	//       '--toastColor': 'mintcream',
	//       '--toastBackground': 'rgba(72,187,120,0.9)',
	//       '--toastBarBackground': '#2F855A'
	//     }
	//   })
	// })
</script>

<!--  -->
<section class="grid grid-cols-1 md:grid-cols-2 h-screen">
	<div
		class="w-full px-4 xl:px-8 py-20 mx-auto bg-white flex flex-col justify-center gap-y-4 max-w-[500px]"
	>
		<h1
			class="mb-4 mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl"
		>
			Créer mon compte <span class="underline text-[#3498db]">entreprise</span>
		</h1>
		<form
			class="space-y-5"
			method="POST"
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

						// Organization check
						if (payloadError.organization) {
							error_input.organization.innerHTML = payloadError.organization;
							user_input.organization.classList.add('input-error');
						} else {
							error_input.organization.innerHTML = '';
							if (user_input.organization.classList.contains('input-error'))
								user_input.organization.classList.remove('input-error');
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
						goto('/auth/employers/signin');
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
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
				<label class="block">
					<span class="block mb-1 text-sm font-medium text-gray-700">Nom de famille</span>
					<input
						bind:this={user_input.firstname}
						bind:value={input_value.firstname}
						required
						class="input input-bordered w-full rounded"
						type="text"
						placeholder="Ex: Djossou"
						name="firstname"
					/>
					<span bind:this={error_input.firstname} class="text-xs text-[#3498db]" />
				</label>
				<label class="block">
					<span class="block mb-1 text-sm font-medium text-gray-700">Prénom(s)</span>
					<input
						bind:this={user_input.lastname}
						bind:value={input_value.lastname}
						required
						class="input input-bordered w-full rounded"
						type="text"
						placeholder="Ex: Jean"
						name="lastname"
					/>
					<span bind:this={error_input.lastname} class="text-xs text-[#3498db]" />
				</label>
			</div>
			<label class="block">
				<span class="block mb-1 text-sm text-gray-700">Nom de votre entreprise / organisation</span>
				<input
					bind:this={user_input.organization}
					bind:value={input_value.organization}
					required
					class="input input-bordered w-full rounded"
					type="text"
					placeholder="Ex: azohoue"
					name="organization"
				/>
				<span bind:this={error_input.organization} class="text-xs text-[#3498db]" />
			</label>
			<label class="block">
				<span class="block mb-1 text-sm font-medium text-gray-700">Votre adresse email</span>
				<input
					bind:this={user_input.email}
					bind:value={input_value.email}
					required
					class="input input-bordered w-full rounded"
					type="email"
					placeholder="Ex: jean.djossou@azohoue.com"
					name="email"
				/>
				<span bind:this={error_input.email} class="text-xs text-[#3498db]" />
			</label>
			<label class="block">
				<span class="block mb-1 text-sm font-medium text-gray-700"
					>Votre mot de passe <span class="text-xs"
						>(au moins 8 caractères, 1 lettre majuscule, 1 lettre miniscule, 1 chiffre et un
						caractère spécial)</span
					></span
				>
				<input
					bind:this={user_input.password}
					bind:value={input_value.password}
					required
					class="input input-bordered w-full rounded"
					type="password"
					placeholder="••••••••"
					name="password"
				/>
				<span bind:this={error_input.password} class="text-xs text-[#3498db]" />
			</label>
			<label class="flex items-center">
				<input name="cdn" type="checkbox" class="checkbox w-4 h-4 rounded" required />
				<span class="block ml-2 text-xs font-medium text-gray-700 cursor-pointer"
					>J'accepte les <a href="/cgu" class="text-[#3498db] underline"
						>conditions d'utilisations</a
					>
					et la
					<a href="/policy" class="text-[#3498db] underline">politique de confidentialité.</a></span
				>
				<span class="text-xs text-[#3498db]" />
			</label>
			<button
				type="submit"
				class="bg-[#3498db] text-white text-center px-4 py-2 rounded w-full h-12 font-semibold cursor-pointer"
				value="Ouvrir mon compte">Ouvrir mon compte</button
			>
		</form>
		<hr />
		<div class="text-sm font-medium text-gray-700 border-t border-gray-200">
			<a
				href="/auth/employers/signin"
				class="text-[#3498db] h-12 outline outline-[#3498db] rounded outline-1 flex justify-center items-center"
				>Connectez-vous</a
			>
		</div>
	</div>
	<div class="px-4 py-20 space-y-10 bg-[#F8F9FD] flex flex-col justify-center sm:px-20">
		<div class="px-4 flex justify-start items-center gap-1">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6 text-[#3498db]"
			>
				<path
					fill-rule="evenodd"
					d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
					clip-rule="evenodd"
				/>
			</svg>
			<a href="/" class="normal-case text-xl font-semibold text-[20px] h-fit text-[#3498db]"
				>azohoue</a
			>
		</div>
		<div class="flex space-x-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="flex-none w-6 h-6 mt-1 text-[#3498db]"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<div>
				<h2 class="text-xl font-medium text-[#3498db]">Simplicité d'utilisation</h2>
				<p class="mt-1 text-gray-700">
					Créer facilement des offres d'emploi, héberger directement sur notre site web.
				</p>
			</div>
		</div>
		<div class="flex space-x-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="flex-none w-6 h-6 mt-1 text-[#3498db]"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<div>
				<h2 class="text-xl font-medium text-[#3498db]">Données sécurisées</h2>
				<p class="mt-1 text-gray-700">
					Nous stockons uniquement le nécéssaire, les documents des personnes ayant postulé à votre
					offre d'emploi sont visibles par vous uniquement.
				</p>
			</div>
		</div>
		<div class="flex space-x-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="flex-none w-6 h-6 mt-1 text-[#3498db]"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<div>
				<h2 class="text-xl font-medium text-[#3498db]">Notifications mail instantanées</h2>
				<p class="mt-1 text-gray-700">
					Toutes les réponses à votre annonces seront directement envoyé dans votre boîte mail pour
					vous permettre de répondre plus facilement aux candidatures.
				</p>
			</div>
		</div>
		<div class="flex space-x-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="flex-none w-6 h-6 mt-1 text-[#3498db]"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
			<div>
				<h2 class="text-xl font-medium text-[#3498db]">Outils d'analyse et de promotion</h2>
				<p class="mt-1 text-gray-700">
					Visualisé le nombre de personne ayant consulter votre publication et faites-en la
					promotion auprès de plus de monde.
				</p>
			</div>
		</div>
	</div>
</section>
