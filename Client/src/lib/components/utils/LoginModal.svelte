<!-- @format -->
<script>
	import { onMount } from "svelte";
	// import { auth } from "$lib/firebase";
	// import {
	// 	GoogleAuthProvider,
	// 	signInWithPopup,
	// 	signOut,
	// } from "firebase/auth";

	onMount(async () => {
		const { Collapse, Ripple, Modal, initTE } = await import("tw-elements");
		initTE({ Collapse, Ripple, Modal });
	});

	// async function signInWithGoogle() {
	// 	const provider = new GoogleAuthProvider();
	// 	const user = await signInWithPopup(auth, provider);
	// 	console.log(user);
	// }
</script>

<div
	data-te-modal-init
	class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
	id="rightTopModal"
	tabindex="-1"
	aria-labelledby="rightTopModalLabel"
	aria-hidden="true">
	<div
		data-te-modal-dialog-ref
		class="pointer-events-none absolute right-7 h-auto w-full translate-x-[100%] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
		<div
			class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
			<div
				class="flex flex-shrink-0 items-center justify-between rounded-t-md bg-info-600 p-4 dark:border-b dark:border-neutral-500 dark:bg-transparent">
				<h5
					class="text-xl font-medium leading-normal text-white"
					id="rightTopModalLabel">
					Login
				</h5>
				<button
					type="button"
					class="box-content rounded-none border-none text-white hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
					data-te-modal-dismiss
					aria-label="Close">
					<i class="fa-solid fa-x" />
				</button>
			</div>
			<div class="relative flex flex-auto p-4" data-te-modal-body-ref />
			<button class="btn btn-primary" on:click={signInWithGoogle}
				>Sign in with Google</button>

			<div
				class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
				<button
					type="button"
					class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
					data-te-modal-dismiss>
					Close
				</button>
			</div>
		</div>
	</div>
</div>
