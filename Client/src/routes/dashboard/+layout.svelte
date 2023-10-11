<!-- @format -->
<script lang="ts">
	import { AppShell, AppBar, popup } from "@skeletonlabs/skeleton";

	import { Modal, initializeStores } from "@skeletonlabs/skeleton";
	import Navbar from "./Navbar.svelte";
	import Sidebar from "./Sidebar.svelte";
	import AuthCheck from "$lib/components/AuthCheck.svelte";

	initializeStores();
</script>

<Modal />

<AuthCheck>
	<AppShell>
		<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
		<svelte:fragment slot="pageHeader"><Navbar /></svelte:fragment>
		<div class="container mx-auto p-2 m-2">
			<slot />
		</div>
	</AppShell>
</AuthCheck>
