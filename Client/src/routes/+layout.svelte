<!-- @format -->
<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';


	import { Modal, initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
</script>

<Modal />
<!-- <div class="min-h-screen flex flex-col">
	<slot />
</div> -->
<AppShell>
	<slot />
</AppShell>