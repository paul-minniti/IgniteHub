<!-- @format -->
<script lang="ts">
	export let props;
</script>

<div
	id={props.name}
	style="background-image: url('{props.image}')"
	class="flex items-stretch min-h-screen bg-cover"
>
	<div class="flex-1 text-center px-4 py-2 m-2">
		<h1>Ignite Your Buiness With Software</h1>
	</div>
</div>
<hr />

<style>
	.bgImg {
		background-size: cover;
	}
</style>
