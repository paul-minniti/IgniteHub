<!-- @format -->
<script lang="ts">
	import AuthCheck from "$lib/components/AuthCheck.svelte";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

<AuthCheck>
	<slot />
</AuthCheck>
