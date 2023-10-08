<!-- @format -->
<script lang="ts">
	import "../app.postcss";
	import {
		AppShell,
		storePopup,
		Modal,
		initializeStores
	} from "@skeletonlabs/skeleton";
	import {
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow
	} from "@floating-ui/dom";
	initializeStores();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<Modal />
<!-- <div class="min-h-screen flex flex-col">
	<slot />
</div> -->
<AppShell>
	<slot />
</AppShell>
