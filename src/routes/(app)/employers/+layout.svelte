<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_API_URL } from '$env/static/public';
	import Header from '$lib/components/employers/header.svelte';
	import type { PageData } from '../../$types';
	import SideBar from './SideBar.svelte';
	export let data: PageData;

	let content = {
		name: data.organization.name,
		email: data.employer.email,
		picUrl: data.organization.logo,
		id: data.organization.id
	};
</script>

<section class="min-h-full h-fit w-full flex">
	<SideBar {data} />
	<div class="h-[calc(100vh-64px)] sm:h-screen w-full bg-[#F8F9FD] overflow-x-hidden">
		<Header {...content} />
		<slot />
	</div>
</section>
