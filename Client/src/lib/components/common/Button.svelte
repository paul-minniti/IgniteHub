<!-- @format -->
<script lang="ts">
	// import { onMount } from "svelte";

	// onMount(async () => {
	// 	const { Ripple, Class, initTE } = await import("tw-elements");
	// 	initTE({ Ripple, Class });
	// });
	export let href: string = "#";
	export let textColor: string = "text-white";
	export let bgColor: string = "bg-primary";
</script>

<a
	type="button"
	{...$$props}
	on:click
	{href}
	class="m-2 inline-block rounded {textColor} {bgColor} px-7 pb-2.5 pt-3 text-sm font-bold uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-opacity-80 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-opacity-80 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
>
	<slot />
</a>
