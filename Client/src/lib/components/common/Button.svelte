<!-- @format
<script>
	// Declaring props

	/**
	 * @type {string}
	 */
	export let color;
	/**
	 * @type {Array<any>}
	 */
	export let props;
</script>

<button
	on:click
	type="button"
	{...props}
	class="py-4 px-8 mr-4 opacity-90 {color} text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out">
	<slot />
</button> -->
