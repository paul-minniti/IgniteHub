<!-- @format -->
<script lang="ts">
	import { onMount } from "svelte";
	import type { ModalSettings, ModalComponent } from "@skeletonlabs/skeleton";
	import { getModalStore } from "@skeletonlabs/skeleton";

	import LoginModal from "./LoginModal.svelte";
	import Button from "$lib/components/common/Button.svelte";

	const modalStore = getModalStore();

	onMount(async () => {
		// const { Collapse, Modal, initTE } = await import("tw-elements");
		// initTE({ Collapse, Modal });
	});

	let loginModal = false;
	let pageData = [
		{ name: "Benefits", image: "" },
		{ name: "Projects", image: "" },
		{ name: "Pricing", image: "" },
		{ name: "FAQs", image: "" }
	];

	function modalComponentForm(): void {
		const c: ModalComponent = { ref: LoginModal };
		const modal: ModalSettings = {
			type: "component",
			component: c,
			title: "Login",
			response: (r) => console.log("response:", r)
		};
		modalStore.trigger(modal);
	}
</script>

<nav
	class="fixed flex w-4/5 z-30 top-5 mx-auto inset-x-0 drop-shadow-md rounded-md text-gray-800 bg-neutral-50 items-center justify-between py-2 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
	data-te-navbar-ref>
	<div class="flex w-full flex-wrap items-center justify-between px-3">
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

		<div
			class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
			id="navbarSupportedContentY"
			data-te-collapse-item>
			<ul
				class="mr-auto flex flex-col lg:flex-row justify-center flex-1"
				data-te-navbar-nav-ref>
				{#each pageData as item (item.name)}
					<li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
						<a
							class="block transition duration-150 ease-in-out font-bold hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
							href="#{item.name}"
							data-te-nav-link-ref>{item.name}</a>
					</li>
				{/each}
			</ul>
			<a
				href="https://calendly.com/pminniti94/introductory-call"
				class="m-2 btn variant-filled-tertiary">
				Book A Call</a>
			<button
				type="button"
				class="m-2 btn variant-filled-secondary"
				on:click={modalComponentForm}>
				Login
			</button>
		</div>
	</div>
</nav>
