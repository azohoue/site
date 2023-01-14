<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { fade, fly } from 'svelte/transition';
	import type { PageData } from '../jobs/$typess';
	import { PUBLIC_API_URL } from '$env/static/public';

	export let data: PageData;
	export let form: FormData;

	let jobs = data.jobs.items;

	let search_state = false;
	let filters: {
		location: Array<string>;
		salary: Array<string>;
		contract: Array<string>;
	} = {
		location: [],
		salary: [],
		contract: []
	};
	let query: string = '';

	let modal_content = {
		job_name: '',
		job_location: '',
		job_contract: '',
		job_salary: '',
		job_id: '',
		job_date: '',
		job_organization_name: ''
	};
	const populateLocationFilter = () => {
		if (filters.location.length == 0) jobs = data.jobs.items;
		else {
			if (filters.location.includes('all')) {
				filters.location = ['all'];
				jobs = data.jobs.items;
			} else {
				jobs = data.jobs.items.filter((job: any) => {
					return filters.location.includes(job.location);
				});
			}
		}
	};
	const populateSalaryFilter = () => {
		if (filters.salary.length == 0) jobs = data.jobs.items;
		else {
			if (filters.salary.includes('Autres')) {
				filters.salary = ['Autres'];
				// jobs = data.jobs.items;
			}
			jobs = data.jobs.items.filter((job: any) => {
				return filters.salary.includes(job.salary);
			});
		}
	};
	const populateContractFilter = () => {
		if (filters.location.length == 0) jobs = data.jobs.items;
		else {
			if (filters.location.includes('allc')) {
				filters.location = ['allc'];
				jobs = data.jobs.items;
			} else {
				jobs = data.jobs.items.filter((job: any) => {
					return filters.location.includes(job.location);
				});
			}
		}
	};
</script>

<section id="user-home" class="w-full h-fit pt-10 px-4 xl:px-0 flex flex-col items-center gap-10">
	<div class="h-14 w-full xl:w-[80vw]">
		<!-- <input type="text" class="input h-full w-full input-bordered rounded-md shadow-md "> -->
		<form
			use:enhance={({ form, data, action, cancel }) => {
				return async ({ update, result }) => {
					if (result.status == 200) {
						search_state = true;
						jobs = result.data.items;
					} else {
						if (result.status == 400) {
							query = '';
						}
					}
					if (query.length == 0) {
						search_state = false;
					}
				};
			}}
			method="post"
			action="?/search"
			class="flex rounded-md shadow-sm"
		>
			<input
				bind:value={query}
				type="text"
				name="query"
				placeholder="Recherche une offre d'emploi. Ex: Développeur Web"
				class="py-3 outline-[#3498db] px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-[#3498db] focus:ring-[#3498db] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
			/>
			<button
				type="submit"
				class="shadow-sm inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-[#3498db] text-white hover:bg-[#3498db] focus:z-10 focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-all text-sm"
			>
				<svg
					class="h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path
						d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
					/>
				</svg>
			</button>
		</form>
		{#if search_state}
			<button
				on:click={() => {
					jobs = data.jobs.items;
					search_state = false;
					query = '';
				}}
				transition:fade
				class="py-4 text-xs text-red-400 cursor-pointer font-semibold"
			>
				Annuler la recherche
			</button>
		{/if}
	</div>
	<!--  -->
	<div class="w-full h-fit xl:w-[80vw] sm:grid sm:grid-cols-[220px,1fr]">
		<div class="filter-container flex-col items-start hidden sm:flex">
			<div id="filter-header" class="flex gap-x-1 justify-center items-center mb-4">
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
						d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
					/>
				</svg>
				<h3 class="uppercase text-[#A4A4A4] text-sm font-semibold">Filtre de recherche</h3>
			</div>
			<div class="flex flex-col gap-4">
				<div id="location-filter" class="flex flex-col gap-2">
					<h3 class="text-md font-semibold text-[#3498db]">Localisation</h3>
					<div id="location-values" class="flex flex-col gap-y-4">
						<div class="flex gap-x-1">
							<input
								value="Bénin"
								id="Bénin"
								bind:group={filters.location}
								on:change={populateLocationFilter}
								type="checkbox"
								class="checkbox"
							/>
							<label for="Bénin" class=" text-gray-400 select-none">Bénin</label>
						</div>
						<div class="flex gap-x-1">
							<input
								value="Burkina Faso"
								id="Burkina Faso"
								bind:group={filters.location}
								on:change={populateLocationFilter}
								type="checkbox"
								class="checkbox"
							/>
							<label for="Burkina Faso" class="text-gray-400 select-none">Burkina Faso</label>
						</div>
						<div class="flex gap-x-1">
							<input
								value="Côte d'ivoire"
								id="Côte d'ivoire"
								bind:group={filters.location}
								on:change={populateLocationFilter}
								type="checkbox"
								class="checkbox"
							/>
							<label for="Côte d'ivoire" class=" text-gray-400 select-none">Côte d'ivoire</label>
						</div>
						<div class="flex gap-x-1">
							<input
								value="Mali"
								id="Mali"
								bind:group={filters.location}
								on:change={populateLocationFilter}
								type="checkbox"
								class="checkbox"
							/>
							<label for="Mali" class="text-gray-400 select-none">Mali</label>
						</div>
						<div class="flex gap-x-1">
							<input
								value="Sénégal"
								id="Sénégal"
								bind:group={filters.location}
								on:change={populateLocationFilter}
								type="checkbox"
								class="checkbox"
							/>
							<label for="Sénégal" class=" text-gray-400 select-none">Sénégal</label>
						</div>
						<div class="flex gap-x-1">
							<input
								value="Togo"
								id="Togo"
								bind:group={filters.location}
								on:change={populateLocationFilter}
								type="checkbox"
								class="checkbox"
							/>
							<label for="Togo" class=" text-gray-400 select-none">Togo</label>
						</div>
						<div class="flex gap-x-1">
							<input
								value="all"
								id="all"
								bind:group={filters.location}
								on:change={populateLocationFilter}
								type="checkbox"
								class="checkbox"
							/>
							<label for="all" class=" text-gray-400 select-none">Non spécifié</label>
						</div>
					</div>
				</div>
				<!--  -->
				<div id="salary-filter" class="flex flex-col gap-2">
					<h3 class="text-md font-semibold text-[#3498db]">Salaire</h3>
					<div id="salary-values" class="flex flex-col gap-y-4">
						<div class="flex gap-x-1">
							<input
								bind:group={filters.salary}
								on:change={populateSalaryFilter}
								id="50.000F - 100.000F"
								value="50.000F - 100.000F"
								type="checkbox"
								class="checkbox"
							/>
							<label for="50.000F - 100.000F" class=" text-gray-400 select-none"
								>50.000F - 100.000F</label
							>
						</div>
						<div class="flex gap-x-1">
							<input
								bind:group={filters.salary}
								on:change={populateSalaryFilter}
								type="checkbox"
								class="checkbox"
								id="100.000F - 200.000F"
								value="100.000F - 200.000F"
							/>
							<label for="100.000F - 200.000F" class=" text-gray-400 select-none"
								>100.000F - 200.000F</label
							>
						</div>
						<div class="flex gap-x-1">
							<input
								bind:group={filters.salary}
								on:change={populateSalaryFilter}
								type="checkbox"
								class="checkbox"
								id="200.000F - 500.000F"
								value="200.000F - 500.000F"
							/>
							<label for="200.000F - 500.000F" class=" text-gray-400 select-none"
								>200.000F - 500.000F</label
							>
						</div>
						<div class="flex gap-x-1">
							<input
								bind:group={filters.salary}
								on:change={populateSalaryFilter}
								type="checkbox"
								class="checkbox"
								id="500.000F - 900.000F"
								value="500.000F - 900.000F"
							/>
							<label for="500.000F - 900.000F" class=" text-gray-400 select-none"
								>500.000F - 900.000F</label
							>
						</div>
						<div class="flex gap-x-1">
							<input
								bind:group={filters.salary}
								on:change={populateSalaryFilter}
								type="checkbox"
								class="checkbox"
								value="Autres"
								id="Autres"
							/>
							<label for="Autres" class=" text-gray-400 select-none">Plus</label>
						</div>
					</div>
				</div>
				<!--  -->
				<div id="contract-filter" class="flex flex-col gap-2">
					<h3 class="text-md font-semibold text-[#3498db]">Type de contrat</h3>
					<div id="location-values" class="flex flex-col gap-y-4">
						<div class="flex gap-x-1">
							<input type="checkbox" class="checkbox" />
							<span class=" text-gray-400 select-none">CDD</span>
						</div>
						<div class="flex gap-x-1">
							<input type="checkbox" class="checkbox" />
							<span class=" text-gray-400 select-none">CDI</span>
						</div>
						<div class="flex gap-x-1">
							<input type="checkbox" class="checkbox" />
							<span class=" text-gray-400 select-none">Stage</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="offers-list flex flex-col gap-y-4 pb-10">
			<div id="offers-list-header" class="flex justify-between">
				<h3 class="text-md font-semibold">Liste des offres</h3>
				<div class="text-sm flex gap-x-1 w-fit items-center">
					<span>Trier par</span>
					<select class="p-0 outline-none rounded-sm">
						<option>Plus récent</option>
						<option>Plus vus</option>
						<option>Salaire croissant</option>
						<option>Salaire décroissant</option>
					</select>
				</div>
			</div>
			<div id="list" class="w-full flex gap-4 flex-wrap">
				{#each jobs as job}
					<div class="h-fit w-full sm:w-72 flex flex-col  border-[1px] rounded bg-white p-4 gap-4">
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
								href={'/users/jobs/' + job.id}
								class="border rounded border-[#3498db] text-[#3498db] h-10 w-full flex justify-center items-center"
								>Consulter l'offre</a
							>
						</div>
					</div>
				{:else}
					<i>Aucune offre à afficher</i>
				{/each}
			</div>
		</div>
	</div>
	<input type="checkbox" id="job-action" class="modal-toggle" />
	<div class="modal modal-bottom sm:modal-middle ">
		<div
			class="modal-box h-[80vh] sm:h-[540px] grid grid-rows-[40px,1fr,60px] gap-y-4 p-4 bg-[#F8F9FD]"
		>
			<div class="flex justify-between items-center">
				<label for="job-action" class="font-bold cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</label>
				<span>{modal_content.job_date}</span>
			</div>

			<div class="grid grid-rows-[100px,1fr,140px] gap-y-4">
				<div class="flex flex-col items-center relative top-4 gap-y-1 justify-start h-full">
					<h3 class="text-[20px] font-semibold">{modal_content.job_name}</h3>
					<span class="font-semibold text-gray-400">{modal_content.job_organization_name}</span>
					<div class="flex justify-evenly w-full">
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
							<span>{modal_content.job_location}</span>
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
							<span>{modal_content.job_contract}</span>
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
							<span>{modal_content.job_salary}</span>
						</div>
					</div>
				</div>
				<div id="offer-name" class="flex flex-col gap-1">
					<h3 class="text-md font-semibold">
						Ajouter votre CV <span class="text-[#3498db]">*</span>
					</h3>
					<label
						for="cv"
						class="h-full w-full rounded-md border-[2px] border-dashed bg-white flex justify-center items-center flex-col"
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
								d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
							/>
						</svg>
						<span>Aucun fichier séléctionné</span>
						<input
							id="cv"
							type="file"
							class="file-input input-bordered file-input-ghost h-full w-full hidden"
						/>
					</label>
				</div>
				<div>
					<textarea
						class="h-full w-full input input-bordered bg-white p-2"
						placeholder="Ajouter un message..."
					/>
				</div>
			</div>

			<div class="flex items-center justify-center">
				<button class="btn w-full rounded-md">Postuler</button>
			</div>
		</div>
	</div>
</section>
