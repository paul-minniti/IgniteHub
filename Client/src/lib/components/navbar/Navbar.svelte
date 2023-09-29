<!-- @format -->
<script lang="ts">
	export let props;

	import LoginModal from "../utils/LoginModal.svelte";

	let loginModal = false;
	let pageData = [
		{ name: "Benefits", image: "" },
		{ name: "Projects", image: "" },
		{ name: "Deliverables", image: "" },
		{ name: "Pricing", image: "" },
		{ name: "FAQs", image: "" },
	];
</script>

<nav
	id="header"
	class="fixed w-4/5 z-30 top-5 mx-auto inset-x-0 drop-shadow-md rounded-md text-gray-800 bg-neutral-50">
	<div
		class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
		<div class="ml-4 flex items-center">
			<a
				class="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
				href="#">
				<i class="fa-solid fa-fire text-primary" />
				IgniteHub
			</a>
		</div>
		<div
			class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
			id="nav-content">
			<ul class="list-reset lg:flex justify-center flex-1 items-center">
				{#each pageData as item (item.name)}
					<li class="mr-3">
						<a
							class="inline-block py-2 px-4 text-gray-800 font-bold no-underline"
							href="#{item.name}">{item.name}</a>
					</li>
				{/each}
			</ul>

			<button
				type="button"
				class="py-4 px-8 mr-4 opacity-90 bg-secondary text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out disabled:">
				Book A Call
			</button>
			<button
				type="button"
				class="py-4 px-8 mr-4 opacity-90 bg-orange-400 text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out disabled:"
				on:click={() => {
					loginModal = true;
				}}>
				Login
			</button>
		</div>
	</div>
</nav>

<!-- <LoginModal bind:showModal={loginModal} /> -->
