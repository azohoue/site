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
	const removeError = () => {
		error_input.email.innerHTML = '';
		if (user_input.email.classList.contains('input-error'))
			user_input.email.classList.remove('input-error');
		error_input.password.innerHTML = '';
		if (user_input.password.classList.contains('input-error'))
			user_input.password.classList.remove('input-error');
	};
</script>

<section class="bg-[#F8F9FD] h-full">
	<div class="px-4 py-20 h-full max-w-[500px] mx-auto">
		<a href="/" class="flex items-center justify-start sm:justify-center text-[#3498db]">
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
			class="w-full sm:p-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border"
		>
			<h1 class="mb-5 text-xl font-semibold text-left text-gray-800">Page de Connexion</h1>
			<form
				class="pb-1 space-y-4"
				method="post"
				use:enhance={({ form, cancel }) => {
					return async ({ result, update }) => {
						if (result.type != 'success') {
							const payloadError = result.data.payloadError;
							const authmessage = result.data.message;
							if (authmessage) {
								removeError();
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
							goto('/users/home');
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
					<span bind:this={error_input.email} class="text-xs text-red-500" />
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
					<span bind:this={error_input.password} class="text-xs text-red-500" />
				</label>
				<div id="connected" class="flex gap-1 items-center">
					<input type="checkbox" name="" id="" class="text-[#3498db] h-3 w-3" />
					<span class="text-sm">Rester connecté</span>
				</div>
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
								>En attente de vérification. Pas recus d'email ? Vérifier vos spams ou <a
									href=""
									class="text-blue-600">renvoyer</a
								>
							</span>
						</div>
					</div>
				{:else if notVerified == 2}
					<div class="alert alert-error shadow-lg">
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
				<button
					bind:this={sbt}
					type="submit"
					class="bg-[#3498db] font-semibold my-2 w-full h-12 text-white normal-case cursor-pointer rounded"
					>Me connecter</button
				>
				<div class="divider">OU</div>
				<a
					href="/auth/users/signup"
					class="text-[#3498db] h-12 outline outline-[#3498db] rounded outline-1 flex justify-center items-center"
					>Ouvrir un compte</a
				>
				<a
					href="/auth/employers/signin"
					class="bg-gray-700 text-white h-12 outline font-semibold rounded outline-1 flex justify-center items-center"
					>Je suis une entreprise</a
				>
			</form>
		</div>
	</div>
</section>
