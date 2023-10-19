<!-- @format -->
<script lang="ts">
	export let parent: any;
	import { getModalStore } from "@skeletonlabs/skeleton";
	const modalStore = getModalStore();

	import {
		GoogleAuthProvider,
		signInWithEmailAndPassword,
		signInWithPopup
	} from "firebase/auth";
	import { auth } from "$lib/firebase";
	import { routeToPage } from "$lib/navigation";
	import { db } from "$lib/firebase";
	import { userData } from "$lib/stores/userStore";

	import { doc, getDoc, setDoc } from "firebase/firestore";

	let email: string = "";
	let password: string = "";
	let errorMsg: string = "";

	const signInWithGoogle = async () => {
		console.log(userData);
		const provider = new GoogleAuthProvider();
		const user = await signInWithPopup(auth, provider);

		const user_obj = {
			email: user.user.email,
			display_name: user.user.displayName,
			photo_url: user.user.photoURL,
			metadata: {
				lastSignInTime: user.user.metadata.lastSignInTime,
				creationTime: user.user.metadata.creationTime
			}
		};

		const userRef = doc(db, "users", user.user.uid);
		const isUpdated = await getDoc(userRef).then(
			(doc) => doc.data() === user_obj
		);

		if (!isUpdated) {
			console.log("creating User data");
			console.log(user.user.metadata);
			await setDoc(userRef, {
				email: user.user.email,
				display_name: user.user.displayName,
				photo_url: user.user.photoURL,
				metadata: {
					lastSignInTime: user.user.metadata.lastSignInTime,
					creationTime: user.user.metadata.creationTime
				}
			});
		}

		cookies.set("sessionId", "info@gmail.com", {
			httpOnly: true,
			sameSite: "strict",
			secure: false,
			path: "/",
			maxAge: 60 * 60 * 24 * 7
		});

		modalStore.close();
		routeToPage("/dashboard");
	};

	function signInWithEmail() {
		signInWithEmailAndPassword(auth, email, password)
			.then((user) => {
				console.log("Testing: ", user);
				modalStore.close();
				routeToPage("/dashboard");
			})
			.catch((error) => {
				console.log(error);
				errorMsg = error.message;
			});
	}

	function navigate() {
		routeToPage("/createAccount");
	}
</script>

{#if $modalStore[0]}
	<div class="card w-modal shadow-xl">
		<div class="flex flex-shrink-0 items-center justify-between p-2">
			<h5 class="text-xl font-medium leading-normal">
				{$modalStore[0].title ?? ""}
			</h5>
			<button
				type="button"
				class="btn-icon bg-initial"
				on:click={parent.onClose}>
				<i class="fa-solid fa-x" />
			</button>
		</div>
		<div class="p-2 bg-white">
			<form class="p-4 space-y-4 rounded-container-token">
				<label class="label">
					<span>Email</span>
					<input
						class="input"
						type="email"
						bind:value={email}
						placeholder="Enter email address..." />
				</label>
				<label class="label">
					<span>Password</span>
					<input class="input" type="password" bind:value={password} />
				</label>
				<div class="text-center flex flex-col items-center">
					<a
						class="btn mb-6 w-full variant-filled-secondary text-white mb-4"
						on:click={signInWithEmail}>
						Sign In
					</a>
					<a
						href="#!"
						class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
						>Forgot password?</a>
				</div>
				<div
					class="my-4 text-gray-800 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
					<p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
						OR
					</p>
				</div>
				<a
					class="btn w-full text-sm font-medium uppercase leading-normal text-white"
					style="background-color: #3b5998"
					role="button"
					on:click={navigate}
					on:click={parent.onClose}>
					<i class="mr-2 fa-solid fa-envelope" />
					Sign Up
				</a>
				<a
					class="btn w-full text-sm font-medium uppercase leading-normal text-white"
					style="background-color: #55acee"
					role="button"
					on:click={signInWithGoogle}>
					<i class="mr-2 fa-brands fa-google" />
					Continue with Google
				</a>
			</form>
		</div>

		<footer class="p-2 modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}
				>{parent.buttonTextCancel}</button>
		</footer>
	</div>
{/if}
