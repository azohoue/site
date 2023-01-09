<script lang="ts">
	import { page } from '$app/stores';
	export let name: any, email: any, id: any, picUrl: any;
</script>

<div class="navbar bg-base-100 lg:px-32 fixed h-16 py-0 z-20 w-screen">
	<div class="flex-1 h-full">
		<div class="px-4 flex justify-center items-center gap-1 text-red-400">
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
			<a href="/" class="normal-case text-xl font-semibold  text-[20px] h-fit">azohoue</a>
		</div>
		<div id="x" class="tabs h-full hidden sm:flex ">
			<a
				href="/employers/home"
				class="tab tab-bordered h-full "
				class:tab-active={$page.url.pathname == '/employers/home'}>Acceuil</a
			>
			<a
				href="/employers/create-job"
				class="tab tab-bordered h-full"
				class:tab-active={$page.url.pathname == '/employers/create-job'}>Créer une offre</a
			>
			<a
				href="/employers/settings"
				class="tab tab-bordered h-full"
				class:tab-active={$page.url.pathname == '/employers/settings'}>Paramètres</a
			>
		</div>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end dropdown-bottom">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar ">
				<div class="w-10 rounded-full ring ring-red-400">
					<img
						class="object-cover "
						src={picUrl
							? `http://127.0.0.1:8090/api/files/organizations/${id}/${picUrl}`
							: '/images/azohoue.png'}
						alt="profile"
					/>
				</div>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<form action="/employers/home?/signout" method="POST">
					<input type="hidden" name="disconnect" value="" />
					<li class="text-red-400"><button type="submit">Déconnexion</button></li>
				</form>
			</ul>
		</div>
		<div class="hidden sm:flex flex-col text-red-400">
			<h4 class="font-semibold">{name}</h4>
			<span class="text-gray-400 text-sm font-semibold">{email}</span>
		</div>
		<div class="dropdown dropdown-end block sm:hidden">
			<label for="" tabindex="0">
				<div class="w-10 rounded-full flex justify-center items-center">
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
							d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
						/>
					</svg>
				</div>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/employers/home">Acceuil</a></li>
				<li><a href="/employers/create-job">Créer une offre</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a href="/employers/settings">Paramètres</a></li>
			</ul>
		</div>
	</div>
</div>

<style>
	.tab-active {
		color: #f87171;
		border-bottom: 2px solid #f87171;
	}
</style>
