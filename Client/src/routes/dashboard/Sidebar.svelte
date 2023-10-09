<!-- @format -->
<script lang="ts">
	import { auth } from "$lib/firebase";
	import { signOut } from "firebase/auth";
	import { popup } from "@skeletonlabs/skeleton";
	import { userData } from "$lib/stores/userStore";
</script>

<div class="relative bg-surface-300 dark:bg-gray-800">
	<div class="flex flex-col sm:flex-row sm:justify-around">
		<div class="h-screen w-72">
			<nav class="px-6 mt-2">
				<div>
					<a
						class="toggleColour no-underline hover:no-underline font-bold text-2xl"
						href="#">
						<i class="fa-solid fa-fire text-secondary-500 text-primary" />
						IgniteHub
					</a>
					<p
						class="w-full pb-2 mb-4 ml-2 font-normal text-gray-500 border-b-2 border-gray-300 text-md" />
					<a
						href="/dashboard"
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md">Dashboard</span>
					</a>
				</div>
				<div>
					<p
						class="w-full pb-2 mb-4 ml-2 font-normal text-gray-500 border-b-2 border-gray-300 text-md">
						Apps
					</p>
					<button
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md"> SocialHub </span>
					</button>
					<button
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md"> TaskHub </span>
					</button>
					<button
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md"> MoneyHub </span>
					</button>
					<button
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md"> AdHub </span>
					</button>
					<button
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md"> SocialHub </span>
					</button>
					<button
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md"> WebHub </span>
					</button>
					<button
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md"> MailHub </span>
					</button>
					<button
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md"> ChatHub </span>
					</button>
					<button
						class="btn hover:variant-soft-primary shadow-none p-2 lex items-center justify-start transition-colors duration-200 w-full">
						<i class="fa-solid fa-house-fire text-secondary-500 opacity-80" />
						<span class="mx-4 font-normal text-md"> BrandHub </span>
					</button>
				</div>
			</nav>
		</div>
	</div>
</div>
