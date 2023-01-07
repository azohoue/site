<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const user = data.user;
</script>

<div id="profile" class="py-10 px-4 sm:px-0 flex flex-col items-center gap-y-4 h-fit overflow-auto">
	<div id="user-profile" class="min-h-[360px] w-full sm:w-[580px] flex flex-col gap-5">
		<div id="user-profile-header">
			<h3 class="text-md font-semibold">Informations personnelles</h3>
			<p class="text-sm text-[#8A8FAC]">
				Veuillez saisir vos informations personnelles pour nous permettre de vous joindre.
			</p>
		</div>
		<form action="" class="h-full w-full flex flex-col gap-10">
			<div id="avatar-container" class="grid grid-rows-[40px,1fr,30px] items-center">
				<h4 class="font-semibold text-md">Votre photo de profil</h4>
				<div class="grid grid-rows-[144px,1fr] gap-8">
					<div class="h-36 w-full relative flex justify-center sm:justify-start">
						<label for="avatar" class="cursor-pointer">
							<img
								src={user.avatar
									? `http://127.0.0.1:8090/api/files/users/${user.id}/${user.avatar}`
									: '/images/azohoue.png'}
								alt=""
								class="h-full w-36 rounded-full select-none"
							/>
						</label>
						<input id="avatar" type="file" class="hidden" />
					</div>
					<div class="flex flex-col sm:flex-row  gap-4 justify-start">
						<button class="btn btn-primary w-full sm:w-fit normal-case flex gap-x-2" disabled>
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
									d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
								/>
							</svg>
							<span>Changer la photo</span>
						</button>
						<button
							class="btn btn-outline btn-error w-full sm:w-fit normal-case flex gap-x-2 hover:text-white"
						>
							<span>Supprimer la photo</span>
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
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div>
					<p class="text-sm text-[#8A8FAC]">Types de fichier acceptés: png, jpg.</p>
				</div>
			</div>
			<!--  -->
			<!-- user data -->
			<div class="flex flex-col gap-y-0">
				<div class="flex flex-col sm:flex-row gap-y-2 gap-x-4">
					<div class="form-control w-full">
						<label class="label p-0">
							<span class="label-text">Nom de famille</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full h-10 rounded-sm"
							bind:value={user.lastname}
						/>
						<label class="label">
							<!-- <span class="label-text-alt">Alt label</span> -->
						</label>
					</div>
					<!--  -->
					<div class="form-control w-full">
						<label class="label p-0">
							<span class="label-text">Prénom(s)</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							class="input input-bordered w-full h-10 rounded-sm"
							bind:value={user.firstname}
						/>
						<label class="label">
							<!-- <span class="label-text-alt">Alt label</span> -->
						</label>
					</div>
				</div>
				<div class="form-control w-full">
					<label for="" class="label p-0">Adresse email</label>
					<input
						type="text"
						class="input input-bordered rounded-sm w-full h-10"
						placeholder="Ex: jean.djossou@azohoue.ga"
						bind:value={user.email}
					/>
					<label for="" />
				</div>
			</div>
			<div class="w-full flex justify-start">
				<button class="btn btn-primary normal-case">Sauvegarder</button>
			</div>
		</form>
	</div>
</div>
