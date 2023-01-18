<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_API_URL } from '$env/static/public';
	import Header from '$lib/components/employers/header.svelte';
	import type { PageData } from '../../$types';
	export let data: PageData;

	let content = {
		name: data.organization.name,
		email: data.employer.email,
		picUrl: data.organization.logo,
		id: data.organization.id
	};
</script>

<article
	id="sidebar"
	class="hidden min-h-screen h-fit z-10 min-w-[280px] md:grid grid-rows-[64px,1fr] gap-y-4 bg-[#201C26] text-[#ffffff50]"
>
	<div class="px-4 py-3 grid grid-cols-[40px,1fr] gap-x-2">
		<div class="h-full w-full">
			<img
				src={content.picUrl
					? `${PUBLIC_API_URL}/api/files/organizations/${content.id}/${content.picUrl}`
					: '/images/empty.jpg'}
				alt=""
				class="rounded h-full w-full object-cover"
			/>
		</div>
		<div id="organization-name" class="w-full h-full flex items-center justify-between text-white">
			<p class="capitalize  text-base font-semibold">{content.name}</p>
			<span class="dropdown dropdown-hover dropdown-left ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">
					<li class="w-full h-full">
						<form action="/employers/home?/signout" method="POST" class="w-full h-full">
							<button class="text-red-500 w-full h-full text-start"> Déconnexion </button>
						</form>
					</li>
				</ul>
			</span>
		</div>
	</div>
	<ul class="w-full text-[#ffffff50] font-semibold">
		<li class="h-10 w-full">
			<a
				class:active={$page.url.pathname == '/employers/home'}
				href="/employers/home"
				class="h-10 px-4 flex items-center gap-x-4 transition-all cursor-pointer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
					/>
				</svg>
				<span class="font-semibold">Acceuil</span></a
			>
		</li>
		<!--  -->
		<li class="h-10 w-full">
			<a
				class:active={$page.url.pathname == '/employers/create-job'}
				href="/employers/create-job"
				class="h-10 px-4 flex items-center gap-x-4 transition-all cursor-pointer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span class="font-semibold">Nouvelle offre</span></a
			>
		</li>
		<!--  -->
		<li class="h-10 w-full">
			<a
				class:active={$page.url.pathname == '/employers/settings'}
				href="/employers/settings"
				class="h-10 px-4 flex items-center gap-x-4 transition-all cursor-pointer"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>

				<span class="font-semibold">Paramètres</span></a
			>
		</li>
	</ul>
</article>

<!-- 	<ul class="links flex flex-col gap-y-1 w-full">
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
	</form> -->
<style>
	.active {
		background-color: #ffffff20;
		color: white;
	}
</style>
