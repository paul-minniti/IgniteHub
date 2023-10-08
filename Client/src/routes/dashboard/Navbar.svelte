<!-- @format -->
<script lang="ts">
	import { auth } from "$lib/firebase";
	import { signOut } from "firebase/auth";
</script>

<!-- Main navigation container -->
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
		</div>
	</div>
</nav>
<nav
	class="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
	<div class="flex w-full flex-wrap items-center justify-between px-3">
		<!-- Collapsible navigation container -->
		<div
			class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
			id="navbarSupportedContent1"
			data-te-collapse-item>
			<!-- Logo -->
			<a
				class="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
				href="#">
				<img
					src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
					style="height: 15px"
					alt="TE Logo"
					loading="lazy" />
			</a>
			<!-- Left navigation links -->
			<ul
				class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
				data-te-navbar-nav-ref>
				<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
					<!-- Dashboard link -->
					<a
						class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
						href="#"
						data-te-nav-link-ref>Dashboard</a>
				</li>
				<!-- Team link -->
				<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
					<a
						class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
						href="#"
						data-te-nav-link-ref>Team</a>
				</li>
				<!-- Projects link -->
				<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
					<a
						class="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
						href="#"
						data-te-nav-link-ref>Projects</a>
				</li>
			</ul>
		</div>

		<!-- Right elements -->
		<div class="relative flex items-center">
			<!-- Cart Icon -->
			<a
				class="mr-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
				href="#">
				<span class="[&>svg]:w-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="h-5 w-5">
						<path
							d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
					</svg>
				</span>
			</a>

			<!-- Container with two dropdown menus -->
			<div
				class="relative"
				data-te-dropdown-ref
				data-te-dropdown-alignment="end">
				<!-- First dropdown trigger -->
				<a
					class="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
					href="#"
					id="dropdownMenuButton1"
					role="button"
					data-te-dropdown-toggle-ref
					aria-expanded="false">
					<!-- Dropdown trigger icon -->
					<span class="[&>svg]:w-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-5 w-5">
							<path
								fill-rule="evenodd"
								d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
								clip-rule="evenodd" />
						</svg>
					</span>
					<!-- Notification counter -->
					<span
						class="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"
						>1</span>
				</a>
				<!-- First dropdown menu -->
				<ul
					class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
					aria-labelledby="dropdownMenuButton1"
					data-te-dropdown-menu-ref>
					<!-- First dropdown menu items -->
					<li>
						<a
							class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
							href="#"
							data-te-dropdown-item-ref>Action</a>
					</li>
					<li>
						<a
							class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
							href="#"
							data-te-dropdown-item-ref>Another action</a>
					</li>
					<li>
						<a
							class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
							href="#"
							data-te-dropdown-item-ref>Something else here</a>
					</li>
				</ul>
			</div>

			<!-- Second dropdown container -->
			<div
				class="relative"
				data-te-dropdown-ref
				data-te-dropdown-alignment="end">
				<!-- Second dropdown trigger -->
				<a
					class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
					href="#"
					id="dropdownMenuButton2"
					role="button"
					data-te-dropdown-toggle-ref
					aria-expanded="false">
					<!-- User avatar -->
					<img
						src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
						class="rounded-full"
						style="height: 25px; width: 25px"
						alt=""
						loading="lazy" />
				</a>
				<!-- Second dropdown menu -->
				<ul
					class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
					aria-labelledby="dropdownMenuButton2"
					data-te-dropdown-menu-ref>
					<!-- Second dropdown menu items -->
					<li>
						<a
							class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
							href="#"
							data-te-dropdown-item-ref>Action</a>
					</li>
					<li>
						<a
							class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
							href="#"
							data-te-dropdown-item-ref>Another action</a>
					</li>
					<li>
						<a
							class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
							href="#"
							on:click={() => signOut(auth)}
							data-te-dropdown-item-ref>Sign Out</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
