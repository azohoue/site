<script>
	import Header from '$lib/components/users/header.svelte';
</script>

<section id="me" class="min-h-full h-fit w-full flex">
	<Header />
	<div class="h-[calc(100vh-64px)] w-full bg-[#F8F9FD] relative top-16 overflow-x-hidden">
		<slot />
	</div>
</section>