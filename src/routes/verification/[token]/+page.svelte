<script lang="ts">
	let verified = false;

	export let data: import('./$types').PageData;

	verified = data.verified;
</script>

<div class="h-full w-full bg-[#f8f9fd] flex justify-center items-center px-4 sm:px-0">
	{#if verified}
		<div
			class="w-full sm:w-[60vw] h-[400px]  bg-white rounded-md border-[1px] shadow-md flex flex-col items-center py-4 justify-around"
		>
			<h3 class="text-[#A4A4A480] font-semibold underline">Vérification de mot de passe</h3>
			<div class="flex flex-col items-center text-center w-full gap-5 px-2 sm:px-8">
				<div class="p-4 rounded-full bg-[#7bed9f30]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-[#2ed573]"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
				</div>
				<h2 class="text-xl text-[#2ed573] font-semibold">Vérification éffectué</h2>

				<p class="hidden">
					L'inscription à votre compte à été effectué avec succès, veuillez vous connecter pour
					continuer.
				</p>
			</div>
			<a
				href="/users/auth/signin"
				class="bg-[#2ed573] text-white font-semibold rounded-sm p-4 flex gap-2"
			>
				<span>Accéder au compte</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
					/>
				</svg>
			</a>
		</div>
	{:else}
		<div
			class="w-full sm:w-[60vw] h-[400px]  bg-white rounded-md border-[1px] shadow-md flex flex-col items-center py-4 justify-around"
		>
			<h3 class="text-[#A4A4A480] font-semibold underline">Vérification de mot de passe</h3>
			<div class="flex flex-col items-center text-center w-full gap-5 px-2 sm:px-8">
				<div class="p-4 rounded-full bg-[#e8411840]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-[#c23616]"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>
				</div>
				<h2 class="text-xl text-[#c23616] font-semibold">Vérification non éffectué</h2>

				<p class="">Le lien de vérification utilisé est invalide ou obsolète.</p>
			</div>
			<a href="/" class="bg-[#c23616] text-white font-semibold rounded-sm p-4 flex gap-2">
				<span>Accéder à l'acceuil</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
					/>
				</svg>
			</a>
		</div>
	{/if}
</div>
