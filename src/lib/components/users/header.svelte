<script lang="ts">
	import { page } from '$app/stores';
	export let user: { any: any };
</script>

<div class="navbar bg-base-100 lg:px-32 fixed h-16 py-0 z-20 w-screen">
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
				href="/users/me"
				class="tab tab-bordered h-full flex gap-x-1"
				class:tab-active={$page.url.pathname == '/users/me'}
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
				href="/users/me/profile"
				class="tab tab-bordered h-full flex gap-x-1"
				class:tab-active={$page.url.pathname == '/users/me/profile'}
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
						d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					/>
				</svg>
				<span>Mon profile</span>
			</a>
			<a
				href="/users/me/notifications"
				class="tab tab-bordered h-full flex gap-x-1"
				class:tab-active={$page.url.pathname == '/users/me/notifications'}
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
		</div>
	</div>
	<div class="flex-none gap-2">
		<div class="dropdown dropdown-left dropdown-bottom">
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full ring ring-red-400">
					<img
						src={user.avatar
							? `http://127.0.0.1:8090/api/files/users/${user.id}/${user.avatar}`
							: '/images/azohoue.png'}
					/>
				</div>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<form action="/users/me?/signout" method="POST">
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
				<li><a href="/users/me">Acceuil</a></li>
				<li><a href="/users/me/profile">Mon profile</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a href="/users/me/notifications">Notifications</a></li>
				<hr />
				<form action="/users/me?/signout" method="POST">
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
