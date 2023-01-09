<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const employer = data.employer;
	const organization = data.organization;
</script>

<div id="profile" class="py-10 px-4 sm:px-0 flex flex-col items-center gap-y-4 h-fit overflow-auto">
	<div id="user-profile" class="min-h-[360px] w-full sm:w-[60vw] flex flex-col gap-5">
		<div id="user-profile-header">
			<h3 class="text-md font-semibold">Informations personnelles</h3>
			<p class="text-sm text-[#8A8FAC]">
				Veuillez saisir vos informations personnelles pour nous permettre de vous joindre.
			</p>
		</div>
		<form
			id="user-profile-content"
			class="h-full w-full bg-white rounded-md border-[1px] border-[#A4A4A480] shadow-sm grid grid-rows-[1fr,72px]"
		>
			<div class="flex flex-col justify-center">
				<div class="flex flex-col sm:flex-row  gap-x-4 px-4">
					<!-- Nom de famille form -->
					<div class="form-control w-full ">
						<label class="label">
							<span class="label-text">Nom de famille</span>
						</label>
						<input
							bind:value={employer.lastname}
							type="text"
							placeholder="Ex: Djossou"
							class="input input-bordered w-full"
						/>
						<label class="label">
							<!-- <span class="label-text-alt">Alt label</span> -->
						</label>
					</div>
					<!-- Prénoms form -->
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Prénoms</span>
						</label>
						<input
							bind:value={employer.firstname}
							type="text"
							placeholder="Ex: Paul"
							class="input input-bordered w-full"
						/>
						<label class="label">
							<!-- <span class="label-text-alt">Alt label</span> -->
						</label>
					</div>
				</div>
				<div class="w-full px-4">
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Adresse email</span>
						</label>
						<input
							bind:value={employer.email}
							type="text"
							placeholder="Ex: paul.djossou@azohoue.com"
							class="input input-bordered w-full"
						/>
						<label class="label">
							<!-- <span class="label-text-alt">Alt label</span> -->
						</label>
					</div>
				</div>
			</div>
			<div id="form-submit" class="flex justify-end px-4 items-center gap-x-4 border-t-[1px]">
				<!--  -->
				<button class="text-red-500" type="reset">Annuler</button>
				<button class=" btn normal-case">Modifier</button>
			</div>
		</form>
	</div>
	<div id="company-profile" class="min-h-[360px] w-full sm:w-[60vw] flex flex-col gap-5">
		<div id="user-profile-header">
			<h3 class="text-md font-semibold">Informations sur l'entreprise</h3>
			<p class="text-sm text-[#8A8FAC]">Veuillez saisir vos informations sur votre entreprise.</p>
		</div>
		<!-- formulaire de changement -->
		<form
			id="user-profile-content"
			class="h-full w-full bg-white rounded-md border-[1px] border-[#A4A4A480] shadow-sm grid grid-rows-[1fr,72px]"
		>
			<div class="flex flex-col justify-center">
				<div class="flex flex-col sm:flex-row  gap-x-4 px-4">
					<!--  -->
					<div class="form-control w-full ">
						<label class="label">
							<span class="label-text">Nom de l'entreprise</span>
						</label>
						<input
							bind:value={organization.name}
							type="text"
							placeholder="Ex: azohoue"
							class="input input-bordered w-full"
						/>
						<label class="label">
							<!-- <span class="label-text-alt">Alt label</span> -->
						</label>
					</div>
					<!--  -->
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Adresse mail de recrutement</span>
						</label>
						<input
							bind:value={organization.email}
							type="text"
							placeholder="recrutement@azohoue.com"
							class="input input-bordered w-full"
						/>
						<label class="label">
							<!-- <span class="label-text-alt">Alt label</span> -->
						</label>
					</div>
				</div>

				<div class="w-full px-4">
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Site web de l'entreprise</span>
						</label>
						<div class="flex">
							<span
								class="flex items-center px-3 pointer-events-none text-base sm:text-sm rounded-l-md bg-gray-700 text-white"
								>https://</span
							>
							<input
								bind:value={organization.website}
								type="text"
								name="url"
								id="url"
								placeholder="www.azohoue.com"
								class="input input-bordered w-full rounded-l-none"
							/>
						</div>
						<label class="label">
							<!-- <span class="label-text">Site web de l'entreprise</span> -->
						</label>
					</div>
				</div>
				<div class="w-full px-4">
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Logo de l'entreprise (jpg, png)</span>
						</label>
						<input type="file" class="file-input w-full file-input-bordered" />
						<label class="label">
							<!-- <span class="label-text-alt">Alt label</span> -->
						</label>
					</div>
				</div>
				<div class="w-full px-4">
					<div class="form-control w-full">
						<label class="label">
							<span class="label-text">Décriver votre entreprise</span>
						</label>
						<textarea
							bind:value={organization.description}
							type="text"
							placeholder="Ex: Nous sommes une entreprise basée dans le milieu de la tech..."
							class="input input-bordered w-full h-[200px] p-2 resize-none"
						/>
						<label class="label">
							<!-- <span class="label-text-alt">Alt label</span> -->
						</label>
					</div>
				</div>
			</div>
			<!--  -->
			<div id="form-submit" class="flex justify-end px-4 items-center gap-x-4 border-t-[1px]">
				<!--  -->
				<button class="text-red-500">Annuler</button>
				<button class=" btn bg-gray-700 hover:bg-gray-700 normal-case">Modifier</button>
			</div>
		</form>
	</div>
</div>
