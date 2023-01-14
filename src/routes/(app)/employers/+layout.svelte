<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_API_URL } from '$env/static/public';
	import Header from '$lib/components/employers/header.svelte';
	export let data: import('./$types').PageData;

	let content = {
		name: data.organization.name,
		email: data.employer.email,
		picUrl: data.organization.logo,
		id: data.organization.id
	};
</script>

<!-- <section id="me" class="min-h-full h-fit w-full flex">
	<Header {...content} />
	<div class="h-[calc(100vh-64px)] w-full bg-[#F8F9FD] relative top-16 overflow-x-hidden">
		<slot />
	</div>
</section> -->

<section class="min-h-full h-fit w-full flex">
	<article
		id="sidebar"
		class="hidden min-h-screen h-fit z-10 min-w-[280px] p-4 md:grid grid-rows-[64px,1fr,40px] gap-y-4"
	>
		<div
			class="grid grid-cols-[48px,1fr] justify-center items-center gap-1 text-[#3498db] h-[64px] w-full rounded bg-[#F8F9FD] px-4 gap-x-4"
		>
			<div id="icon">
				<img
					src={content.picUrl
						? `${PUBLIC_API_URL}/api/files/organizations/${content.id}/${content.picUrl}`
						: '/images/empty.jpg'}
					class="h-12 w-12 rounded-full"
					alt=""
				/>
			</div>
			<div class="flex flex-col justify-center">
				<p class="flex flex-nowrap overflow-hidden gap-x-1 text-gray-600 font-semibold">
					<span>{data.employer.firstname}</span>
					<span class="">{data.employer.lastname}</span>
				</p>
				<span class="capitalize text-sm text-gray-300">{content.name}</span>
			</div>
		</div>
		<!--  -->
		<ul class="links flex flex-col gap-y-1 w-full">
			<li>
				<a
					class:active={$page.url.pathname == '/employers/home'}
					href="/employers/home"
					class="h-10 rounded px-4 flex items-center gap-x-1 text-[#CED1DE] hover:text-[#3498db] transition-all hover:bg-[#F5F5F5] cursor-pointer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-5 h-5"
					>
						<path
							d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
						/>
						<path
							d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
						/>
					</svg>

					<span class="font-semibold">Dashboard</span></a
				>
			</li>
			<li>
				<a
					class:active={$page.url.pathname == '/employers/create-job'}
					href="/employers/create-job"
					class="h-10  rounded px-4 flex items-center gap-x-1 text-[#CED1DE] hover:text-[#3498db] transition-all hover:bg-[#F5F5F5] cursor-pointer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-5 h-5"
					>
						<path
							d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
						/>
					</svg>

					<span class="font-semibold">Créer une offre</span></a
				>
			</li>
			<li>
				<a
					class:active={$page.url.pathname == '/employers/settings'}
					href="/employers/settings"
					class="h-10  rounded px-4 flex items-center gap-x-1 text-[#CED1DE] hover:text-[#3498db] transition-all hover:bg-[#F5F5F5] cursor-pointer"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-5 h-5"
					>
						<path
							fill-rule="evenodd"
							d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="font-semibold">Paramètres</span></a
				>
			</li>
		</ul>
		<form action="/employers/home?/signout" method="POST">
			<button
				class="w-full h-10 text-white bg-red-500 rounded font-semibold flex gap-1 items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6"
				>
					<path
						fill-rule="evenodd"
						d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Déconnexion</span>
			</button>
		</form>
	</article>
	<!--  -->
	<div class="h-[calc(100vh-64px)] sm:h-screen w-full bg-[#F8F9FD] overflow-x-hidden">
		<Header {...content} />
		<slot />
	</div>
</section>

<style>
	.active {
		background-color: #e9f5fe;
		color: #3498db;
	}
</style>
