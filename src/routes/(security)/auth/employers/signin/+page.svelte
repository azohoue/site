<script lang="ts">
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { toast } from '@zerodevx/svelte-toast';
	let sbt: any;
	let notVerified = 0;

	let user_input: any = {
		email: null,
		password: null
	};
	let input_value = {
		email: null,
		password: null
	};
	let error_input: any = {
		email: null,
		password: null
	};
</script>

<section class="h-full w-full grid grid-cols-1 sm:grid-cols-2">
	<div
		class="bg-white flex flex-col justify-center gap-y-4 w-full px-4 xl:px-8 py-20 max-w-[500px] mx-auto"
	>
		<div class="flex justify-start items-center gap-1">
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
		<h1
			class="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl"
		>
			Mon compte <span class="underline text-[#3498db]">entreprise</span>
		</h1>

		<form
			method="POST"
			class="flex flex-col gap-y-5"
			use:enhance={({ form, cancel }) => {
				sbt.classList.add('loading');
				return async ({ result, update }) => {
					// sbt.classList.remove("loading")
					if (result.type != 'success') {
						const payloadError = result.data.payloadError;
						const authmessage = result.data.message;

						if (authmessage) {
							if (result.status == 403) {
								notVerified = 3;
								toast.push(authmessage, {
									theme: {
										'--toastBackground': '#f1c40f',
										'--toastBarBackground': '#f39c12'
									}
								});
							} else {
								toast.push(authmessage, {
									theme: {
										'--toastBackground': '#e84118',
										'--toastBarBackground': '#c23616'
									}
								});
							}
						} else {
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
						}
					} else {
						// Si il n'y a pas d'erreur,
						// console.log("Utilisateur connectée ! ");
						goto('/employers/home');
					}
				};
			}}
		>
			<label class="block">
				<span class="block mb-1 text-sm text-gray-700">Votre addresse email</span>
				<input
					bind:this={user_input.email}
					bind:value={input_value.email}
					class="input input-bordered w-full rounded"
					type="email"
					placeholder="Ex: jean.djossou@azohoue.com"
					name="email"
					required
				/>
				<span bind:this={error_input.email} class="text-xs text-[#3498db]" />
			</label>
			<label class="block">
				<span class="block mb-1 text-sm font-medium text-gray-700">Votre mot de passe</span>
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
			<div id="connected" class="flex gap-1 items-center">
				<input type="checkbox" name="" id="" class="color-[#3498db] h-3 w-3" />
				<span class="text-sm">Rester connecté</span>
			</div>
			<button
				bind:this={sbt}
				type="submit"
				class="bg-[#3498db] font-semibold my-2 w-full h-12 text-white normal-case cursor-pointer rounded"
				>Me connecter</button
			>
		</form>
		{#if notVerified == 3}
			<div transition:fade class="alert alert-warning shadow-md">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/></svg
					>
					<span class="text-xs"
						>Pas recus d'email ? Vérifier vos spams ou <a href="" class="text-blue-600">renvoyer</a>
					</span>
				</div>
			</div>
		{:else if notVerified == 2}
			<div transition:fade class="alert alert-error shadow-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>
					<span class="text-xs"
						>Vous avez dépassé le nombre de demande, contacter l'assistance.
					</span>
				</div>
			</div>
		{/if}
		<div
			class="pt-6 flex flex-col gap-4 text-sm font-medium text-gray-700 border-t border-gray-200"
		>
			<a
				href="/auth/employers/signup"
				class="text-[#3498db] h-12 outline outline-[#3498db] rounded outline-1 flex justify-center items-center"
				>Ouvrir un compte</a
			>
			<!-- <a href="/auth/users/signin" class="text-gray-400 hover:text-purple-900"
				>Je suis un utilisateur</a
			> -->
		</div>
	</div>
	<!--  -->
	<div class="h-full w-full hidden sm:flex relative">
		<div id="blur" class="absolute top-0 left-0 h-full w-full bg-[#00000060]" />
		<img src="/images/banner-login.jpg" class="h-full w-full object-cover" alt="" />
	</div>
</section>
