<!-- @format -->
<script lang="ts">
	import { goto } from "$app/navigation";
	import { user } from "$lib/firebase";
	import { onMount } from "svelte";
	import Access from "$lib/assets/access_denied.svg";
</script>

{#if $user}
	<slot />
{:else}
	<div class="container mx-auto mt-16 p-2 m-2 w-3/5 space-y-8 text-center">
		<div class="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
			<img
				src={Access}
				alt="illustration"
				class="relative w-auto max-h-60 mx-auto" />
		</div>
		<p class="h2">Whoops!</p>
		<p class="h3 text-error my-10">
			You must sign in to access your Dashboard.
		</p>
		<a href="/" class="m-2 btn btn-xl variant-filled-secondary text-white">
			Back to Login</a>
	</div>
{/if}
