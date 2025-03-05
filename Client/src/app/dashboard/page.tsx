"use client";

import { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import MainGrid from "./components/MainGrid";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export default function Dashboard() {
	// useEffect(() => {
	// 	async function initializeData() {
	// 		const citiesRef = collection(firestore, "cities");

	// 		await setDoc(doc(citiesRef, "SF"), {
	// 			name: "San Francisco",
	// 			state: "CA",
	// 			country: "USA",
	// 			capital: false,
	// 			population: 860000,
	// 			regions: ["west_coast", "norcal"]
	// 		});
	// 		await setDoc(doc(citiesRef, "LA"), {
	// 			name: "Los Angeles",
	// 			state: "CA",
	// 			country: "USA",
	// 			capital: false,
	// 			population: 3900000,
	// 			regions: ["west_coast", "socal"]
	// 		});
	// 		await setDoc(doc(citiesRef, "DC"), {
	// 			name: "Washington, D.C.",
	// 			state: null,
	// 			country: "USA",
	// 			capital: true,
	// 			population: 680000,
	// 			regions: ["east_coast"]
	// 		});
	// 		await setDoc(doc(citiesRef, "TOK"), {
	// 			name: "Tokyo",
	// 			state: null,
	// 			country: "Japan",
	// 			capital: true,
	// 			population: 9000000,
	// 			regions: ["kanto", "honshu"]
	// 		});
	// 		await setDoc(doc(citiesRef, "BJ"), {
	// 			name: "Beijing",
	// 			state: null,
	// 			country: "China",
	// 			capital: true,
	// 			population: 21500000,
	// 			regions: ["jingjinji", "hebei"]
	// 		});

	// 		const docRef = doc(firestore, "cities", "SF");
	// 		const docSnap = await getDoc(docRef);

	// 		if (docSnap.exists()) {
	// 			console.log("Document data:", docSnap.data());
	// 		} else {
	// 			console.log("No such document!");
	// 		}
	// 	}

	// 	initializeData();
	// }, []);

	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				overflow: "auto"
			}}>
			<Stack
				spacing={2}
				sx={{
					alignItems: "center",
					mx: 3,
					pb: 5,
					mt: { xs: 8, md: 2 }
				}}>
				<MainGrid />
			</Stack>
		</Box>
	);
}
