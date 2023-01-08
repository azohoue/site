<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const notifications: [any] = data.notifications;
</script>

<section class="w-full h-fit pt-10 px-4 xl:px-0 flex flex-col items-center gap-10">
	<div class="h-fit w-full xl:w-[80vw] flex flex-col gap-8 mb-[100px]">
		{#each notifications as notification}
			<div
				class="w-full h-[100px] bg-white border-[1px] rounded-md grid items-center grid-cols-[40px,1fr,40px] sm:grid-cols-[80px,1fr,60px] px-2 sm:px-4 pr-0 sm:pr-0"
			>
				<div>
					<img src="/images/azohoue.png" alt="" class="h-full w-full rounded-md" />
				</div>
				<div class="overflow-hidden p-2 h-full w-full flex flex-col justify-center">
					<span class="font-semibold text-sm">Email confirmée</span>
					<span>Votre email d'innscription a été confirmée avec succès.</span>
				</div>
				<button
					class="h-full w-full group transition-all cursor-pointer hover:bg-red-400 flex justify-center items-center rounded-r-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 text-red-400 transition-all group-hover:text-white"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
						/>
					</svg>
				</button>
			</div>
		{:else}
			<p><i>Aucune notification pour le moment.</i></p>
		{/each}
	</div>
</section>
