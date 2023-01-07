<script>
	import '../app.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<SvelteToast />
<div class="h-screen w-screen">
	<!-- <div class="navbar h-16 px-4 sm:px-16 z-50 bg-white sm:bg-[#34495e] text-white">
		<div class="navbar-start">
			<div class="flex justify-center items-center gap-1 text-red-400">
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
		</div>
		<div class="navbar-center hidden lg:flex justify-start">
			<ul class="menu menu-horizontal px-1">
				<li tabindex="0">
					<a>
						Compte Utilisateur
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-[#34495e] transition-all">
						<li><a href="/users/auth/signup">Ouvrir mon compte</a></li>
						<li><a href="/users/auth/signin">Me connecter</a></li>
					</ul>
				</li>
				<li tabindex="0">
					<a>
						Compte Entreprise
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-[#34495e] transition-all">
						<li><a href="/employers/auth/signup">Ouvrir mon compte</a></li>
						<li><a href="/employers/auth/signin">Me connecter</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="navbar-end flex gap-x-4">
			<a
				href="/users/auth/signin"
				class="bg-red-400 px-4 py-2 rounded-md text-white font-semibold cursor-pointer">Connexion</a
			>
		</div>
	</div> -->
	<slot />
</div>
