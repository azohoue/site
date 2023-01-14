<script lang="ts">
	import { fade } from 'svelte/transition';
	import { PUBLIC_API_URL } from '$env/static/public';
	import type { PageData } from './$types';
	export let data: PageData;
	const jobs = data.jobs;
</script>

<svelte:head>
	<title>Azohoue | Un emploi pour tous</title>
</svelte:head>
<div class="h-fit w-full flex flex-col">
	<div class="navbar h-16 px-4 sm:px-16 z-50 bg-[#3498db] text-white shadow-md">
		<div class="navbar-start">
			<div class="flex justify-center items-center gap-1">
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
				<a href="/" class="normal-case text-xl font-semibold text-[20px] h-fit">azohoue</a>
			</div>
		</div>
		<div class="navbar-center hidden lg:flex items-center">
			<ul class="menu menu-horizontal px-1 text-base font-normal font-sans">
				<li class="px-0 py-3">
					<a href="">Tous les offres</a>
				</li>
				<li class="px-0 py-3">
					<a href="">Liste des entreprises</a>
				</li>
				<li class="px-0 py-3" tabindex="0">
					<span>
						Compte Utilisateur
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</span>
					<ul class="p-2 bg-[#fff] text-[#34495e] transition-all">
						<li><a href="/auth/users/signup">Ouvrir mon compte</a></li>
						<li><a href="/auth/users/signin">Me connecter</a></li>
					</ul>
				</li>
				<li class="px-0 py-3" tabindex="0">
					<span>
						Compte Entreprise
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</span>
					<ul class="p-2 bg-[#fff] text-[#34495e] transition-all">
						<li><a href="/auth/employers/signup">Ouvrir mon compte</a></li>
						<li><a href="/auth/employers/signin">Me connecter</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="navbar-end flex gap-x-4">
			<!-- <div class="hidden sm:flex gap-8 md:place-self-center md:justify-self-end text-[#34495e]">
				<a href="https://twitter.com/azohoue_site"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-current"
						><path
							d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
						/></svg
					>
				</a>
				<a href="https://github.com/azohoue"
					><svg style="width:24px;height:24px" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
						/>
					</svg></a
				>
			</div> -->
			<a
				href="/employers/"
				class="flex bg-transparent hover:bg-white border rounded border-white hover:text-gray-700 px-4 py-2 text-white font-semibold cursor-pointer"
				>Poster une offre</a
			>
		</div>
	</div>
	<!-- Hero -->
	<div
		id="hero"
		class="bg-white select-none relative z-0 px-4 gap-x-2 w-full sm:px-16 h-[396px] sm:h-[460px] grid sm:grid-cols-2 text-center justify-around sm:justify-around content-around"
	>
		<div class="flex flex-col gap gap-y-5 justify-center content-between">
			<!-- <img
				src="/images/banner.png"
				class="absolute flex sm:hidden -z-30 h-full w-full blur-sm  object-cover"
				alt=""
			/> -->
			<h3
				id="banner-text"
				class="font-semibold text-2xl sm:text-4xl text-gray-700 text-center sm:text-start"
			>
				Trouver votre emploi <br /> sur <span class="underline text-[#3498db]">azohoue</span>
			</h3>
			<h4 class="font-normal text-base text-gray-700 text-center sm:text-start">
				Parcourer les annonces et à postuler à celles qui vous intéressent en vous inscrivant
				gratuitement sur notre plateforme.
			</h4>
			<span class="text-xs select-text sm:text-left text-center"
				>Powered by <a href="https://devagency.ga" class="underline"><i>DevAgency</i></a>
			</span>
		</div>
		<div class="h-[460px] w-full hidden sm:flex justify-center items-center">
			<img src="/images/banner.png" class="h-full w-full object-cover" alt="" />
		</div>
	</div>
	<!--  -->
	<div
		class="z-50 w-full h-fit min-h-[50vh] mx-auto flex flex-col gap-y-4 pb-10 px-4 sm:px-16 bg-[#F8F9FD]"
	>
		<h5 class="font-semibold mx-auto text-left pt-4 text-[#34495e] w-full">Dernières offres</h5>
		<div id="offers" class="flex flex-wrap  gap-10 w-full mx-auto min-h-[280px]">
			{#each jobs.items as job}
				<div
					in:fade
					class="h-fit w-full sm:w-72 flex flex-col  border-[1px] rounded bg-white p-4 gap-4"
				>
					<div class="grid grid-cols-[60px,1fr] gap-x-2">
						<div>
							<img
								class="w-[60px] h-[60px] sm:h-[60px] rounded-md object-cover"
								src={job.expand.organization.logo
									? `${PUBLIC_API_URL}/api/files/organizations/${job.expand.organization.id}/${job.expand.organization.logo}`
									: '/images/empty.jpg'}
								alt=""
							/>
						</div>
						<div class="overflow-x-hidden flex flex-col justify-center">
							<h3 class="text-gray-900 font-bold text-base w-full sm:text-lg	whitespace-nowrap">
								{job.name}
							</h3>
							<p class="flex mb-1 items-center gap-1">
								<span
									class="capitalize gap-x-1 flex items-center text-sm font-semibold text-gray-500"
									>{job.expand.organization.name}</span
								>
								{#if job.expand.organization.badge}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="#3498db"
										class="w-4 h-4"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
										/>
									</svg>
								{/if}
							</p>
						</div>
					</div>
					<!--  -->
					<p class="text-sm">{job.created}</p>
					<!--  -->
					<div class="flex gap-x-4 text-sm flex-col gap-y-4">
						<div class="flex gap-1 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="flex w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
							<span>{job.location}</span>
						</div>

						<div class="gap-1 items-center flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
								/>
							</svg>
							<span>{job.contract}</span>
						</div>

						<div class="gap-1 items-center flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
								/>
							</svg>
							<span>{job.salary}</span>
						</div>
						<a
							href={'/jobs/' + job.id}
							class="border rounded border-[#3498db] text-[#3498db] h-10 w-full flex justify-center items-center"
							>Consulter l'offre</a
						>
					</div>
				</div>
			{:else}
				<i>Aucune offre disponible pour le moment.</i>
			{/each}
		</div>
	</div>
	<!-- footer -->
	<footer class="footer bg-gray-800 text-white items-center sm:px-8 p-4">
		<div class="items-center grid-flow-col">
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
			<p>Copyright © 2023 - Tous droits réservés</p>
		</div>
		<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<a href="https://twitter.com/azohoue_site"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
					/></svg
				>
			</a>
			<a href="https://github.com/azohoue"
				><svg style="width:24px;height:24px" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
					/>
				</svg></a
			>
		</div>
	</footer>
</div>

<style>
	.important {
		border-color: rgb(248, 113, 113);
	}
	li:active,
	a:active,
	span:active {
		background-color: initial !important;
	}
	/* #banner-text {
		font-family: 'Spline Sans' !important;
	} */
</style>
