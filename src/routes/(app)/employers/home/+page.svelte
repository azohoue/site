<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	$: jobs = data.jobs;
</script>

<svelte:head>
	<title>Acceuil | Employeur</title>
</svelte:head>

<section
	id="acceuil"
	class="w-full h-full flex justify-center sm:justify-start relative top-0 sm:top-0 px-4 sm:px-10"
>
	<div class="w-full flex flex-col gap-10 sm:gap-0 mx-auto">
		{#if jobs.length > 0}
			<div class="h-fit flex justify-between items-center py-10 relative top-10 sm:top-0">
				<h2 class="sm:text-xl font-semibold">Vos offres d'emploi</h2>
				<!-- <button
					class="flex items-center gap-x-1 text-sm dropdown dropdown-bottom cursor-pointer indicator"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-4 h-4"
					>
						<path
							d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z"
						/>
					</svg>
					<label>Filtrer vos offres</label>
					<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
						<li><a>Toutes</a></li>
						<li><a>En ligne</a></li>
						<li><a>Fermée</a></li>
						<li><a>Refusée</a></li>
						<li><a>En attente</a></li>
					</ul>
				</button> -->
				<a
					href="/employers/create-job"
					class="bg-[#3498db] text-white h-10 rounded font-semibold px-2 flex gap-x-1 justify-center items-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
					</svg>

					<span>Nouvelle offre</span>
				</a>
			</div>
			<!--  -->
			<div id="offers-list" class="flex flex-col gap-y-2">
				<p><span class="font-semibold">{jobs.length}</span> offre(s) trouvé(s)</p>
				<div class="overflow-x-auto w-full">
					<table class="table w-full">
						<thead>
							<tr class="border-b rounded-none">
								<th>
									<label>
										<input type="checkbox" class="checkbox" />
									</label>
								</th>
								<th>Détails de l'offre</th>
								<th>Salaire</th>
								<th>Type de contrat</th>
								<th>Status</th>
								<th>Vues</th>
								<th>Date de création</th>
								<th />
							</tr>
						</thead>
						<tbody>
							<!-- row 1 -->
							{#each jobs as job}
								<tr class="border-b">
									<th>
										<label>
											<input type="checkbox" class="checkbox" />
										</label>
									</th>
									<td>
										<div class="flex items-center space-x-3">
											<div>
												<div class="font-bold">{job.name}</div>
												<div class="text-sm opacity-50">{job.location}</div>
											</div>
										</div>
									</td>
									<td>
										<!-- Zemlak, Daniel and Leannon
									<br /> -->
										<!-- <span class="badge badge-ghost badge-sm">Desktop Support Technician</span> -->
										<span>{job.salary}</span>
									</td>
									<td>{job.contract}</td>
									<th>
										{#if job.status == 'En ligne'}
											<p class="badge rounded online">En ligne</p>
										{:else if job.status == 'Fermée'}
											<p class="badge rounded offline">Fermée</p>
										{:else if job.status == 'Refusée'}
											<p class="badge rounded reject">Refusée</p>
										{:else}
											<p class="badge rounded pending">En attente</p>
										{/if}
									</th>
									<td> {job.views} vues</td>
									<td>
										<span class="text-gray-700 normal-case font-normal">{job.created}</span>
									</td>
									<th>
										<form action="?/deleteJob" method="post">
											<button class="h-8 text-[#3498db] bg-[#e9f5fe] px-2 rounded"
												><a href={'/employers/jobs/' + job.id + '/update'}>Modifier</a></button
											>
											<button
												formaction="?/deleteJob"
												class="text-red-500 bg-red-50 h-8 px-2 rounded">Supprimer</button
											>
											<input type="hidden" name="jobId" value={job.id} />
										</form>
									</th>
									<!-- <th>
								</th> -->
								</tr>
							{/each}
						</tbody>
						<!-- foot -->
						<!-- <tfoot class="bg-transparent">
						<tr class="bg-transparent">
							<th class="bg-transparent" />
							<td class="bg-transparent">
								<button>Tout Supprimer</button>
							</td>
						</tr>
					</tfoot> -->
					</table>
				</div>
			</div>
		{:else}
			<div class="h-screen w-full flex flex-col gap-y-4 justify-center items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-10 h-10 text-gray-500"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
					/>
				</svg>

				<p class="text-gray-500">Vous n'avez encore créé aucune offre d'emploi</p>
				<a
					href="/employers/create-job"
					class="rounded text-white bg-[#3498db] h-16 px-4 py-2 flex justify-center items-center font-semibold"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6"
					>
						<path
							fill-rule="evenodd"
							d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>Créer une offre d'emploi</span>
				</a>
			</div>
		{/if}
	</div>
</section>

<style>
	::-webkit-scrollbar {
		display: none !important;
	}
	.online {
		background-color: #27ae60;
		border: #27ae60;
	}
	.reject {
		background-color: #e74c3c;
		border: #e74c3c;
	}
	.pending {
		background-color: #f9ca24;
		border: #f9ca24;
	}
	.offline {
		background-color: #95a5a6;
		border: #95a5a6;
	}
</style>
