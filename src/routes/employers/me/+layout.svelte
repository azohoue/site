<script lang="ts">
	import Header from '$lib/components/employers/header.svelte';
	export let data:import('./$types').PageData

	let content = {
		name: data.organization.name,
		email: data.employer.email,
		picUrl: data.organization.logo
	}
</script>

<section id="me" class="min-h-full h-fit w-full flex">
	<Header {...content} />
	<div class="h-[calc(100vh-64px)] w-full bg-[#F8F9FD] relative top-16 overflow-x-hidden">
		<slot />
	</div>
</section>