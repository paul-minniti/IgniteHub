// actions/createTrainingJobAction.ts
"use server";

import { TrainingManager } from "./TrainingManager";

export async function createTrainingJobAction(data: {
	fileName: string;
	epochs: number;
	learningRate: number;
}) {
	// Delegate the creation of the training job to your manager
	const jobInfo = await TrainingManager.createTrainingJob(data);
	return jobInfo;
}
