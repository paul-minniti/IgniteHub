// import { PredictionServiceClient } from "@google-cloud/aiplatform";
import { JobServiceClient } from "@google-cloud/aiplatform";
// Assuming you’re using firebase-admin for server-side Firestore access:
import admin from "firebase-admin";

// Initialize Firestore Admin SDK (ensure you initialize admin with proper credentials)
if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.applicationDefault()
	});
}
const db = admin.firestore();

interface TrainingJobParams {
	fileName: string;
	epochs: number;
	learningRate: number;
}

export const TrainingManager = {
	createTrainingJob: async ({
		fileName,
		epochs,
		learningRate
	}: TrainingJobParams) => {
		const trainingJobRequest = {
			displayName: `training-job-${Date.now()}`,
			jobSpec: {
				workerPoolSpecs: [
					{
						machineSpec: { machineType: "n1-standard-4" },
						replicaCount: "1",
						containerSpec: {
							imageUri: "gcr.io/your-project/your-training-container:latest",
							command: ["python", "train.py"],
							args: [
								"--data-file",
								`gs://your-bucket-name/${fileName}`,
								"--epochs",
								epochs.toString(),
								"--learning-rate",
								learningRate.toString()
							]
						}
					}
				]
			}
		};
		const clientOptions = {
			apiEndpoint:
				process.env.VERTEX_API_ENDPOINT ||
				"us-central1-aiplatform.googleapis.com"
		};
		const jobServiceClient = new JobServiceClient(clientOptions);
		// Create the custom training job using the Vertex AI SDK.
		const [response] = await jobServiceClient.createCustomJob({
			parent: `projects/YOUR_PROJECT_ID/locations/YOUR_REGION`,
			customJob: trainingJobRequest
		});

		// Save job metadata to Firestore for tracking
		const jobId = response.name;
		await db
			.collection("trainingJobs")
			.doc(jobId as string)
			.set({
				fileName,
				epochs,
				learningRate,
				status: "PENDING",
				createdAt: admin.firestore.FieldValue.serverTimestamp()
			});

		return { jobId, trainingJobRequest };
	}
};
