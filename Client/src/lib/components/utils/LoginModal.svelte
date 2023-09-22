<!-- @format -->
<script>
	/**
	 * @type {boolean}
	 */
	export let showModal;

	/**
	 * @type {HTMLDialogElement}
	 */
	let modal;

	$: if (modal && showModal) modal.showModal();
</script>

<dialog
	class="modal"
	aria-label="Login Modal"
	bind:this={modal}
	on:close={() => (showModal = false)}
	on:click|self={() => modal.close()}
>
	<div class="modal-box" role="form" on:click|stopPropagation>
		<h3 class="font-bold text-lg">Hello!</h3>
		<p class="py-4">Press ESC key or click the button below to close</p>
		<div class="modal-action">
			<form method="dialog">
				<button
					class="btn btn-primary"
					autofocus
					on:click={() => modal.close()}>Submit</button
				>
				<button autofocus on:click={() => modal.close()}>Cancel</button>
			</form>
		</div>
	</div>
</dialog>
