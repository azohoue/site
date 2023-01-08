<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import type { PageData } from './$types';
	export let data: PageData;

	const job = data.job;
	const id = job.expand.organization.id;
	let logo = job.expand.organization.logo;
</script>

<section
	id="job-view"
	class="bg-[#f8f9fd] h-fit min-h-screen w-full flex justify-center px-4 xl:px-0 pt-10"
>
	<div class="w-full flex flex-col md:w-full mb-40 sm:mb-0 xl:w-[90vw] min-h-28 h-fit gap-y-4">
		<a href="/" class="text-red-400 flex gap-x-1">
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
					d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
				/>
			</svg>

			<span class="font-semibold">Retour</span>
		</a>
		<div id="logo" class="h-fit w-full flex justify-start flex-col gap-y-2">
			<img
				src={logo ? `${PUBLIC_API_URL}/api/files/organizations/${id}/${logo}` : '/images/empty.jpg'}
				class="h-[120px] w-[120px] rounded-md object-cover ring ring-red-400 ring-offset-2"
				alt=""
			/>
			<h3 class="font-semibold text-md text-gray-400 capitalize gap-x-1 flex items-center">
				{job.expand.organization.name}
				{#if job.expand.organization.badge}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#DC2626"
						class="w-5 h-5"
					>
						<path
							fill-rule="evenodd"
							d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
							clip-rule="evenodd"
						/>
					</svg>
				{/if}
			</h3>
			<div class="text-sm text-[#A4A4A4] flex items-center gap-x-1">
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
						d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
				<span>{job.views > 1 ? job.views + ' vus' : job.views + ' vu'}</span>
			</div>
		</div>
		<div id="job-details" class="grid grid-cols-1 sm:grid-cols-[2fr,0.8fr]">
			<div class="flex flex-col w-full py-5 md:pr-4 gap-y-5 ">
				<div class="flex flex-col gap-y-1 min-w-full">
					<h3 class="text-[32px] font-semibold">
						{job.name}
					</h3>
					<div class="flex gap-x-10 overflow-x-auto min-w-fit items-center">
						<!--  -->
						<div class="flex gap-1 items-center">
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
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
							<span>{job.location}</span>
						</div>
						<!--  -->
						<div class="flex gap-1 items-center">
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
									d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
								/>
							</svg>
							<span>{job.contract}</span>
						</div>
						<!--  -->
						<div class="flex gap-1 items-center">
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
									d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
								/>
							</svg>
							<span>{job.salary}</span>
						</div>
						<!--  -->
						{#if job.expand.organization.website}
							<div class="flex gap-1 items-center">
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
										d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
									/>
								</svg>
								<a
									href={'https://' + job.expand.organization.website}
									class="text-blue-400 underline">Site Web</a
								>
							</div>
						{/if}
					</div>
				</div>
				<div id="description" class="px-0">
					<!-- TODO: REMOVE CONTENT LATER -->
					<!-- <h2>About Stimulus</h2>
					<p>
						<a href="https://github.com/florentazd">Desipro</a> is a social platform started by Sticker
						Mule to show what's possible if your mission is to increase human happiness.
					</p>
					<h2>We offer</h2>
					<ul>
						<li>Remote work with flexible schedules</li>
						<li>A privately owned, low-stress culture.</li>
						<li>A fun "no bullshit" work environment</li>
					</ul>
					<h2>We like you to know</h2>
					<ul>
						<li>Docker</li>
						<li>NextJS</li>
						<li>TypeScript</li>
					</ul>
					<h2>Compensation and benefits</h2>
					<ul>
						<li>Salary: $120k+ based on experience</li>
						<li>$20,000 signing bonus</li>
						<li>4 weeks vacation + holidays based on your country of residence</li>
					</ul>
					<p>Contact us here <a href="mailto:desipro@desipro.com">desipro@desipro.com</a></p> -->
					{@html job.description}
					<!--  -->
				</div>
				<div class="flex justify-between items-end text-[#EE786B]">
					<a
						href={'/users/me/jobs/' + job.id}
						class="cursor-pointer border-[1px] font-semibold rounded-md px-[16px] py-[7.2px] border-[#EE786B] text-[#EE786B] normal-case"
						>Postuler pour cet offre</a
					>
				</div>
			</div>
			<!--  -->
			<div class="w-full h-fit flex flex-col gap-y-4 py-4 bg-white rounded-md border-[1px] px-4">
				<span class="text-xl font-semibold">Partager l'offre sur:</span>
				<div class="flex gap-x-10">
					<a
						target="_blank"
						href={"https://twitter.com/intent/tweet?text=Offre d'emploi pour un poste de " +
							job.name +
							'&url=https://azohoue.ga/jobs/' +
							job.id}
					>
						<svg class="w-6 h-6 text-[#1DA1F2]" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
							/>
						</svg>
					</a>

					<a
						target="_blank"
						href={"whatsapp://send?text=Offre d'emploi pour un poste de " +
							job.name +
							' https://azohoue.ga/jobs/' +
							job.id}
					>
						<svg class="w-6 h-6 text-[#25d366]" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
