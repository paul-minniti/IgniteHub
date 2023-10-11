<!-- @format -->
<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<div class="flex flex-wrap mt-4">
	<div
		class="relative w-64 p-4 overflow-hidden bg-white hover:variant-soft-primary hover:cursor-pointer shadow-lg rounded-2xl m-2">
		<div class="justify-center items-center text-center">
			<p class="mb-2 text-lg font-medium text-primary-500">
				<i class="fa-solid fa-plus" />
			</p>
			<p class="text-xl font-medium text-primary-500">Add Project</p>
		</div>
	</div>

	<div
		class="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl m-2">
		<div class="">
			<p class="mb-2 text-lg font-medium text-gray-800">*project name*</p>
			<p class="text-xs text-gray-400">*project description*</p>
			<p class="text-sm font-medium text-primary-500 text-end">View Details</p>
		</div>
	</div>
</div>
