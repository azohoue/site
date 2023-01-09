<script>
	import { page } from '$app/stores';
</script>

<div id="profile" class="py-10 px-4 sm:px-0 flex flex-col items-center gap-y-4 h-fit overflow-auto">
	<div
		class="min-h-[360px] w-full md:w-[70vw] mx-auto flex flex-col sm:grid sm:grid-cols-[280px,1fr] gap-4"
	>
		<div class="h-fit flex flex-col gap-y-4">
			<h3 class="text-2xl font-semibold">Paramètres du compte</h3>
			<ul class="flex flex-row sm:flex-col gap-4 tabs items-start">
				<li class:tab-active={$page.url.pathname == '/users/settings'} class="tab px-0 border-0">
					<a href="/users/settings">Informations personnelles</a>
				</li>
				<li
					class:tab-active={$page.url.pathname == '/users/settings/security'}
					class="tab px-0 border-0"
				>
					<a href="/users/settings/security">Sécurité du compte</a>
				</li>
				<li
					class:tab-active={$page.url.pathname == '/users/settings/notifications'}
					class="tab px-0 border-0"
				>
					<a href="/users/settings/notifications">Notifications</a>
				</li>
			</ul>
		</div>
		<div class="h-full w-full">
			<slot />
		</div>
	</div>
</div>

<style>
	.tab-active {
		color: rgb(248, 113, 113);
		border-bottom: 1px solid rgb(248, 113, 113) !important;
	}
</style>
