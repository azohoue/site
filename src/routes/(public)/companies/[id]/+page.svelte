<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;
	const { company, jobs, banner } = data;
</script>

<section id="company" class="h-screen w-screen bg-[#f8f9fd]">
	<div id="company-banner" class="w-full h-fit">
		<!-- src="https://picsum.photos/1600/900" -->
		<img
			src="https://picsum.photos/1600/900"
			alt=""
			class="object-cover w-full h-[180px] sm:h-[200px]"
		/>
	</div>
	<div id="company-box" class="h-fit">
		<div id="company-logo" class="w-full h-[80px] px-4 sm:px-14">
			<img
				src={company.logo
					? `${PUBLIC_API_URL}/api/files/organizations/${company.id}/${company.logo}`
					: '/images/empty.jpg'}
				alt=""
				class="h-[120px] w-[120px] relative -top-[60px] object-cover rounded-md ring ring-red-400"
			/>
		</div>
		<div
			id="company-description"
			class="h-fit w-full px-4 sm:px-14 grid grid-cols-1 xl:grid-cols-[2fr,1fr] gap-10"
		>
			<div class="flex flex-col gap-y-2">
				<div id="company-name" class="flex flex-wrap gap-x-1 items-center">
					<h3 class="font-bold text-3xl text-[24px] capitalize">{company.name}</h3>
					{#if company.badge}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="#DC2626"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clip-rule="evenodd"
							/>
						</svg>
					{/if}
				</div>
				<div class="badges-container flex flex-wrap gap-2">
					<!-- <span class="badge badge-success text-white rounded-md">Verifier</span> -->
				</div>
				<div id="additional-content" class="flex flex-wrap gap-4">
					<!--  -->
					<div class="flex gap-0 items-center font-semibold text-gray-400 text-base">
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
								d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
							/>
						</svg>
						<span>{company.location ? company.location : 'Non spécifié'}</span>
					</div>
					<!--  -->
					<!-- <div class="flex gap-0 items-center font-semibold text-gray-400 text-base">
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
								d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
							/>
						</svg>
						<span>Categorie</span>
					</div> -->
					<!--  -->
					{#if company.website}
						<a
							href={'https://' + company.website}
							class="flex gap-0 items-center font-semibold text-blue-500 underline text-base"
						>
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
									d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
								/>
							</svg>

							<span>Site Web</span>
						</a>
					{/if}
				</div>
				<div id="description" class="mt-2">
					<h3>Présentation de l'entreprise</h3>
					{#if company.description}
						{@html company.description}
					{:else}
						<i class="text-[#A4A4A4]">Aucune présentation.</i>
					{/if}
				</div>
			</div>
			<div id="company-job-list" class="flex flex-col gap-y-2">
				<h3 class="font-semibold ">Nos offres d'emploi ({jobs.length}) :</h3>
				<div class="flex flex-col gap-10 mb-10">
					{#each jobs as job}
						<div
							class="bg-white w-full h-fit border-[1px] rounded-md shadow-sm p-4 flex flex-col justify-center gap-2"
						>
							<!-- <div class="flex justify-between">
						<h6 class="text-base font-semibold text-gray-400 capitalize">xx</h6>
					</div> -->
							<h3 class="font-semibold text-[20px]">{job.name}</h3>
							<div class="job-details flex gap-4 flex-wrap">
								<div class="flex gap-1 items-center">
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
								<div class="flex gap-1 items-center">
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
								<div class="flex gap-1 items-center">
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
							</div>
							<div class="flex justify-between items-end text-[#EE786B]">
								<a
									href={'/jobs/' + job.id}
									class="cursor-pointer flex justify-center gap-1 items-center border-[1px] font-semibold rounded-md px-[16px] py-[7.2px] border-[#EE786B] text-[#EE786B] normal-case w-full text-center"
									>Consulter <svg
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
											d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
										/>
									</svg>
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
