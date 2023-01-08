<script lang="ts">
	import type { PageData } from '../$types';
	export let data: PageData;
	const user = data.user;
	import { PUBLIC_API_URL } from '$env/static/public';
</script>

<svelte:head>
	<title>Paramètres | Informations peronnelles</title>
</svelte:head>

<div class="h-full w-full sm:py-14 flex flex-col gap-y-5 sm:gap-y-10">
	<div>
		<h3 class="text-base font-semibold">Informations personnelles</h3>
		<p class="text-sm text-[#A4A4A4]">Uploader une photo pour l'afficher sur votre profil.</p>
	</div>
	<div class="profile-image-container h-fit flex flex-col sm:grid sm:grid-cols-[100px,1fr] gap-4">
		<div class="image w-full flex justify-center sm:justify-start">
			<img
				class="h-[100px] w-[100px] rounded-full object-cover ring ring-[#fff]"
				src={user.avatar
					? `${PUBLIC_API_URL}/api/files/users/${user.id}/${user.avatar}`
					: '/images/empty.jpg'}
				alt=""
			/>
		</div>
		<div class="flex flex-col items-center gap-y-2 sm:items-start justify-between py-2">
			<label
				for="image_pic"
				class="text-sm text-center bg-slate-900 text-white font-semibold w-full sm:w-fit sm:min-w-[240px] px-4 py-2 rounded-md cursor-pointer"
			>
				Uploader une photo
			</label>
			<button
				class="text-sm transition-all border-[1px] border-red-400 text-red-400 hover:text-white hover:bg-red-400 font-semibold w-full sm:w-fit sm:min-w-[240px] px-4 py-2 rounded-md cursor-pointer"
			>
				Supprimer la photo
			</button>
			<input type="file" name="" class="hidden" id="image_pic" accept="image/*" />
		</div>
	</div>
	<form action="" class="flex flex-col gap-y-2 w-full items-end">
		<div id="fn_ln" class="w-full flex flex-col md:grid md:grid-cols-2 gap-x-4 gap-y-2">
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Nom de famille</span>
				</label>
				<input
					bind:value={user.lastname}
					type="text"
					placeholder="Type here"
					class="input h-10 rounded-sm input-bordered w-full"
				/>
				<label class="label py-0">
					<span class="hidden text-xs label-text-alt">Alt label</span>
				</label>
			</div>
			<!--  -->
			<div class="form-control w-full">
				<label class="label">
					<span class="label-text">Prénom(s)</span>
				</label>
				<input
					bind:value={user.firstname}
					type="text"
					placeholder="Type here"
					class="input h-10 rounded-sm input-bordered w-full"
				/>
				<label class="label py-0">
					<span class="hidden text-xs label-text-alt">Alt label</span>
				</label>
			</div>
		</div>
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text">Adresse Email</span>
			</label>
			<input
				bind:value={user.email}
				type="text"
				class="input h-10 rounded-sm input-bordered w-full"
				disabled
			/>
			<label class="label py-0">
				<span class="hidden text-xs label-text-alt">Alt label</span>
			</label>
		</div>
		<!-- <div class="form-control w-full">
			<label class="label">
				<span class="label-text">Bio</span>
			</label>
			<textarea
				placeholder="Ajouter une bio à votre profil"
				name=""
				id=""
				class="p-2 w-full rounded-sm resize-none input input-bordered h-[120px]"
			/>
			<label class="label py-0">
				<span class="hidden text-xs label-text-alt">Alt label</span>
			</label>
		</div> -->
		<button
			class="mt-4 w-full text-sm text-center bg-slate-900 text-white font-semibold sm:min-w-[240px] px-4 py-2 rounded-md cursor-pointer"
			>Sauvegarder</button
		>
	</form>

	<div>
		<h3 class="text-base font-semibold">Liens externes</h3>
		<p class="text-sm text-[#A4A4A4]">Ajouter des liens externes à votre compte:</p>
	</div>
	<div class="flex flex-col items-end">
		<form action="" class="flex flex-col gap-4 w-full">
			<div class="grid grid-cols-[100px,1fr] w-full">
				<select
					name=""
					id=""
					class="text-slate-900 text-center rounded-l-md h-10 border-[1px] outline-none"
				>
					<option value="website">Site Web</option>
					<option value="twitter">Twitter</option>
					<option value="linkedin">Linkedin</option>
				</select>
				<input
					placeholder="https://www.azohoue.ga"
					type="text"
					class="input input-bordered border-l-0 h-10 rounded-l-none"
				/>
			</div>
		</form>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<button
			class="w-full text-sm my-4 text-center bg-slate-900 text-white font-semibold sm:min-w-[240px] px-4 py-2 rounded-md cursor-pointer"
			>Ajouter un lien</button
		>
	</div>
</div>
