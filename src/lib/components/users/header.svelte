<script lang="ts">
	import { page } from '$app/stores';
	export let user: { any: any };
	import { PUBLIC_API_URL } from '$env/static/public';
</script>

<div class="navbar bg-base-100 lg:px-10 fixed h-16 py-0 z-20 w-screen">
	<div class="flex-1 h-full text-red-400">
		<div class="px-4 flex justify-center items-center gap-1">
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
		<div class="tabs h-full hidden sm:flex ">
			<a
				href="/users/home"
				class="tab tab-bordered h-full flex gap-x-1"
				class:tab-active={$page.url.pathname == '/users/home'}
			>
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
						d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
					/>
				</svg>
				<span>Acceuil</span>
			</a>
			<a
				href="/users/notifications"
				class="tab tab-bordered h-full flex gap-x-1"
				class:tab-active={$page.url.pathname == '/users/notifications'}
			>
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
						d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
					/>
				</svg>
				<span>Notifications</span>
			</a>
			<a
				href="/users/settings"
				class="tab tab-bordered h-full flex gap-x-1"
				class:tab-active={$page.url.pathname.startsWith('/users/settings')}
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
						d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>

				<span>Paramètres</span>
			</a>
		</div>
	</div>
	<div class="flex-none gap-2">
		<div class="dropdown dropdown-left dropdown-bottom">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full ring ring-red-400">
					<img
						class="object-cover"
						src={user.avatar
							? `${PUBLIC_API_URL}/api/files/users/${user.id}/${user.avatar}`
							: '/images/empty.jpg'}
					/>
				</div>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<form action="/users/home?/signout" method="POST">
					<input type="hidden" name="disconnect" value="" />
					<li class="text-red-400"><button type="submit">Se déconnecter</button></li>
				</form>
			</ul>
		</div>
		<div class="hidden sm:flex flex-col">
			<h4 class="font-semibold text-red-400">{user.firstname} {user.lastname}</h4>
			<span class="text-[#A4A4A4] text-sm font-normal">{user.email}</span>
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
				<li><a href="/users/home">Acceuil</a></li>
				<li><a href="/users/settings">Mon profile</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a href="/users/notifications">Notifications</a></li>
				<hr />
				<form action="/users/home?/signout" method="POST">
					<input type="hidden" name="disconnect" value="" />
					<li class="text-red-400"><button type="submit">Se déconnecter</button></li>
				</form>
			</ul>
		</div>
	</div>
</div>

<style>
	.tab-active {
		color: #f87171 !important;
		border-bottom: 2px solid #f87171 !important;
	}
</style>
