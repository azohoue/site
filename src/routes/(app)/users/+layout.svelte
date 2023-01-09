<script lang="ts">
	import Header from '$lib/components/users/header.svelte';
	export let data: import('./$types').PageData;
	import { page } from '$app/stores';
	const user = data.user;
</script>

<svelte:head>
	<title>Mon compte | Utilisateur</title>
</svelte:head>
<section id="me" class="min-h-full h-fit w-full flex">
	<Header {user} />
	<div class="h-[calc(100vh-64px)] w-full bg-[#F8F9FD] relative top-16 overflow-x-hidden">
		<slot />
	</div>
</section>
