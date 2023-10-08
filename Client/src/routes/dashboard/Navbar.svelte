<!-- @format -->
<script lang="ts">
	import { auth } from "$lib/firebase";
	import { signOut } from "firebase/auth";
	import { popup } from "@skeletonlabs/skeleton";

	console.log(auth);
</script>

<nav class="bg-surface-300">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div
				class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex items-center">
					<a
						class="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
						href="#">
						<i class="fa-solid fa-fire text-secondary-500 text-primary" />
						IgniteHub
					</a>
					<button
						class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
						type="button"
						data-te-collapse-init
						data-te-target="#navbarSupportedContentY"
						aria-controls="navbarSupportedContentY"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="[&>svg]:w-5">
							<i class="fa-solid fa-bars" />
						</span>
					</button>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a href="/" class="leading-6 shadow-none btn bg-initial">Home</a>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				<div class="relative hidden lg:block">
					<!-- trigger -->
					<button
						class="btn hover:variant-soft-primary shadow-none"
						use:popup={{
							event: "click",
							target: "features",
							placement: "bottom"
						}}>
						<span>Username</span>
						<i class="fa-solid fa-user-gear opacity-50" />
					</button>
					<!-- popup -->
					<div class="card p-2 w-40 shadow-xl" data-popup="features">
						<nav class="list-nav text-sm">
							<ul>
								<li>
									<a
										class="justify-end"
										href="/"
										on:click={() => signOut(auth)}>
										<span class="w-6 text-center"
											><i class="fa-solid fa-home" /></span>
										<span>Sign Out</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
