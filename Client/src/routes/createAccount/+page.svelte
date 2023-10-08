<!-- @format -->
<script lang="ts">
	export let data: PageData;
	import type { PageData } from "./$types";
	import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
	import { db, user } from "$lib/firebase";
	import { doc, getDoc, writeBatch } from "firebase/firestore";
	import { routeToPage } from "$lib/navigation";

	let email: string;
	let password: string;
	let loading = false;
	let isAvailable: boolean | null = null;
	let debounceTimer: NodeJS.Timeout;
	const auth = getAuth();

	async function checkAvailability() {
		clearTimeout(debounceTimer);
		loading = true;
		debounceTimer = setTimeout(async () => {
			// console.log("checking availability of", email);
			const ref = doc(db, "usernames", email);
			const exists = await getDoc(ref).then((doc) => doc.exists());
			isAvailable = !exists;
			loading = false;
		}, 500);
	}

	async function createAccount() {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				// const user = userCredential.user;
				console.log(userCredential);
				routeToPage("/dashboard");
				// ...
			})
			.catch((error) => {
				console.log(error);
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	}
</script>

<div>
	<h2 class="h2 text-center">Create your Account</h2>
	<!-- <p>
		{#if isAvailable}
			<p>Email is available</p>
		{:else if isAvailable == false}
			<p>Looks like you already have an account.</p>
		{/if}
	</p> -->
	<form class="space-y-8 mt-4">
		<label class="label">
			<span>Email:</span>
			<input
				class="input"
				type="email"
				bind:value={email}
				on:input={checkAvailability}
				placeholder="JohnDoe@ignitehub.com" />
		</label>

		<label class="label">
			<span>Password:</span>
			<input class="input" bind:value={password} type="password" />
		</label>

		<a
			class="btn w-full text-sm font-medium uppercase leading-normal text-white"
			style="background-color: #55acee"
			on:click={createAccount}>
			Submit
		</a>
	</form>
</div>
