<script lang="ts">
	import Header from '$lib/components/users/header.svelte';
	export let data:import('./$types').PageData

	let content = {
		firstname: data.user.firstname,
		lastname: data.user.lastname,
		email: data.user.email,
		picUrl: data.user.avatar
	}
</script>

<section id="me" class="min-h-full h-fit w-full flex">
	<Header {...content} />
	<div class="h-[calc(100vh-64px)] w-full bg-[#F8F9FD] relative top-16 overflow-x-hidden">
		<slot />
	</div>
</section>