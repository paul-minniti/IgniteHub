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

<div class="nav-container content-center items-center">
	<div
		class="navbar flex justify-between bg-base-100 w-4/5 fixed top-5 mx-auto inset-x-0 drop-shadow-md rounded-md"
	>
		<div class="">
			<a href="#" class="btn btn-ghost normal-case text-xl contents"
				><i class="fa-solid fa-fire text-orange-400" />
				{" "}IgniteHub</a
			>
		</div>
		<div class="">
			<ul class="menu menu-horizontal px-1 d-c">
				{#each pageData as item (item.name)}
					<li><a href="#{item.name}">{item.name}</a></li>
				{/each}
			</ul>
		</div>
		<div class="navbar-end">
			<a
				href="#"
				class="btn btn-ghost"
				on:click={() => {
					loginModal = true;
				}}>Login</a
			>
		</div>
	</div>
</div>

<LoginModal bind:showModal={loginModal} />

<style>
	.nav-container {
		z-index: 999;
	}
</style>
