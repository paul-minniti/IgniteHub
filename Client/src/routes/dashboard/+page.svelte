<!-- @format -->
<script lang="ts">
	import type { PageData } from "./$types";
	import { writable } from "svelte/store";
	export let data: PageData;
	import { routeToPage } from "$lib/navigation";
	import { db } from "$lib/firebase";
	import { projectData } from "$lib/stores/projectStore";
	import { userData } from "$lib/stores/userStore";
	import type { ModalSettings, ModalComponent } from "@skeletonlabs/skeleton";

	import { getModalStore } from "@skeletonlabs/skeleton";
	import ProjectModal from "./ProjectModal.svelte";
	import {
		doc,
		getDoc,
		setDoc,
		collection,
		query,
		where,
		getDocs,
		QueryDocumentSnapshot,
		QuerySnapshot,
		type DocumentData
	} from "firebase/firestore";
	import { onMount } from "svelte";

	const modalStore = getModalStore();
	// let projects: any;
	// let getprojects: any = [];
	// let projectList = writable([]);

	// const userRef = doc(db, "users", user.user.uid);
	// const isUpdated = await getDoc(userRef).then(
	// 	(doc) => doc.data() === user_obj
	// );

	// if (!isUpdated) {
	// 	console.log("creating User data");
	// 	console.log(user.user.metadata);
	// 	await setDoc(userRef, {
	// 		email: user.user.email,
	// 		display_name: user.user.displayName,
	// 		photo_url: user.user.photoURL,
	// 		metadata: {
	// 			lastSignInTime: user.user.metadata.lastSignInTime,
	// 			creationTime: user.user.metadata.creationTime
	// 		}
	// 	});
	// }

	function modalComponentForm(): void {
		const c: ModalComponent = { ref: ProjectModal };
		const modal: ModalSettings = {
			type: "component",
			component: c,
			title: "Add Project",
			response: (r) => console.log("response:", r)
		};
		modalStore.trigger(modal);
	}

	// const q = query(
	// 	collection(db, "projects"),
	// 	where("admin", "==", $userData?.email)
	// );

	// const getprojects = async () => {
	// 	try {
	// 		let projects = await getDocs(q);
	// 		let resp = [];
	// 		// console.log(projects);
	// 		let response = projects.forEach((doc: any) => {
	// 			// console.log(doc.data());
	// 			return doc.data();
	// 		});
	// 		return await response;
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	onMount(async () => {
		// await getDoc(userRef).then((doc) => doc.data() === user_obj);
		// projects = await getDocs(q);
		// getCoffee = projects.map((doc) => {
		// 	return doc.data();
		// });
		// console.log("getCoffee: ", getCoffee);
		// console.log(projects);
		// projects.forEach((doc: any) => {
		// 	getprojects.push(doc.data());
		// 	console.log(doc.data());
		// 	return doc.data();
		// });
		// console.log(getprojects);
	});
</script>

<div class="flex flex-wrap mt-4">
	<div
		class="relative w-64 p-4 overflow-hidden bg-white hover:variant-soft-primary hover:cursor-pointer shadow-lg rounded-2xl m-2">
		<div
			class="justify-center items-center text-center"
			on:click={modalComponentForm}>
			<p class="mb-2 text-lg font-medium text-primary-500">
				<i class="fa-solid fa-plus" />
			</p>
			<p class="text-xl font-medium text-primary-500">Add Project</p>
		</div>
	</div>

	<!-- {#each projects as project}
		<div
			class="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl m-2">
			<div class="">
				<p class="mb-2 text-lg font-medium text-gray-800">
					{project.project_name}
				</p>
				<p class="text-xs text-gray-400">{project.admin}</p>
				<p class="text-sm font-medium text-primary-500 text-end">
					View Details
				</p>
			</div>
		</div>
	{/each} -->

	<!-- {#await getprojects()}
		<p>...waiting</p>
	{:then data}
		{@const dataToBeShown = show_all ? data : data.slice(0, 12)}
		{#each dataToBeShown as item}
			<div
				class="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl m-2">
				<div class="">
					<p class="mb-2 text-lg font-medium text-gray-800">
						{item.project_name}
					</p>
					<p class="text-xs text-gray-400">{item.admin}</p>
					<p class="text-sm font-medium text-primary-500 text-end">
						View Details
					</p>
				</div>
			</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await} -->
	<div
		class="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl m-2">
		<div class="">
			<p class="mb-2 text-lg font-medium text-gray-800">*project name*</p>
			<p class="text-xs text-gray-400">*project description*</p>
			<p class="text-sm font-medium text-primary-500 text-end">View Details</p>
		</div>
	</div>
</div>
