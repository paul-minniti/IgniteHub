<!-- @format -->
<script lang="ts">
	import { goto } from "$app/navigation";
	import { user } from "$lib/firebase";
	import Button from "./common/Button.svelte";
</script>

{#if $user}
	<slot />
{:else}
	<p class="text-error my-10">You dont have permission to be here.</p>
	<Button href="/">Go back</Button>
{/if}
