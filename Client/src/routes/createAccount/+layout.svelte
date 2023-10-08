<!-- @format -->
<script lang="ts">
	import { AppShell } from "@skeletonlabs/skeleton";

	import { Modal, initializeStores } from "@skeletonlabs/skeleton";
	import Navbar from "./Navbar.svelte";
	initializeStores();
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<div class="container mx-auto p-2 m-2 w-3/5">
		<slot />
	</div>
</AppShell>
