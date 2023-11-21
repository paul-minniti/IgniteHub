<!-- @format -->
<script lang="ts">
	export let parent: any;
	import { getModalStore } from "@skeletonlabs/skeleton";
	const modalStore = getModalStore();

	import { auth } from "$lib/firebase";
	import { routeToPage } from "$lib/navigation";
	import { db } from "$lib/firebase";
	import { userData } from "$lib/stores/userStore";
	import { doc, getDoc, setDoc } from "firebase/firestore";

	// let errorMsg: string = "";
	let projectName: string;
	let projectId: string;

	const addProject = async () => {
		projectId = `${projectName}_${makeid(8)}`;
		const projectRef = doc(db, "projects", projectId);
		const exists = await getDoc(projectRef).then((doc) => doc.exists());

		if (!exists) {
			await setDoc(projectRef, {
				project_name: projectName,
				admin: $userData?.email,
				discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
			});
			modalStore.close();
			routeToPage("/dashboard/hub/");
		}
	};

	function makeid(length: number) {
		let result = "";
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
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
					<span>Project Name: </span>
					<input
						class="input"
						type="text"
						bind:value={projectName}
						placeholder="Enter a project name..." />
				</label>
				<div class="text-center flex flex-col items-center">
					<a
						class="btn mb-6 w-full variant-filled-secondary text-white mb-4"
						on:click={addProject}>
						Add Project
					</a>
				</div>
			</form>
		</div>

		<footer class="p-2 modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}
				>{parent.buttonTextCancel}</button>
		</footer>
	</div>
{/if}
