import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

interface EventHistoryProps {
	events: string[];
	onClear?: () => void;
	userId: string;
}

interface PredictionResult {
	predicted_event_index: string;
	predicted_time: number;
}

// const defaultPrediction = {
// 	predicted_event_index: "dashboard:my-book::view",
// 	predicted_time: 120.5,
// };

export default function EventHistory({
	events,
	onClear,
	userId,
}: EventHistoryProps) {
	const [prediction, setPrediction] = useState<PredictionResult | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handlePredictClick = async () => {
		const requestData = {
			userId,
			events,
		};

		setIsLoading(true);
		setError(null);
		setPrediction(null);
		console.log("Sending request to /create-session:", requestData);

		try {
			const sessionResponse = await fetch(
				"http://127.0.0.1:5000/create-session",
				{
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(requestData),
				}
			);

			if (!sessionResponse.ok) {
				const errorText = await sessionResponse.text();
				throw new Error(`Failed to create session: ${errorText}`);
			}

			const sessionData = await sessionResponse.json();
			console.log("Session created:", sessionData);

			const predictionResponse = await fetch(
				"http://127.0.0.1:5000/predict/single",
				{
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(sessionData),
				}
			);

			if (!predictionResponse.ok) {
				const errorText = await predictionResponse.text();
				throw new Error(`Failed to get prediction: ${errorText}`);
			}

			const predictionData = await predictionResponse.json();
			console.log("Prediction received:", predictionData);
			setPrediction(predictionData);
		} catch (error) {
			console.error("Error:", error);
			setError(
				error instanceof Error
					? error.message
					: "Failed to get prediction"
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Event History</CardTitle>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[200px] mb-4">
					{events.map((event, index) => (
						<div
							key={index}
							className="p-2 mb-2 bg-muted rounded-md text-sm"
						>
							{event}
						</div>
					))}
				</ScrollArea>
				{error && (
					<div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md">
						<p className="text-sm font-medium">{error}</p>
					</div>
				)}
				{prediction && (
					<div className="mb-4 p-4 bg-blue-50 rounded-md">
						<h3 className="font-medium mb-2">
							Prediction Results:
						</h3>
						<p className="text-sm">
							<span className="font-medium">Event:</span>{" "}
							{prediction.predicted_event_index}
						</p>
						<p className="text-sm">
							<span className="font-medium">Predicted Time:</span>{" "}
							{prediction.predicted_time.toFixed(2)} seconds
						</p>
					</div>
				)}
				<div className="flex gap-2">
					<Button
						className="flex-1"
						onClick={handlePredictClick}
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<Spinner className="mr-2" />
								Predicting...
							</>
						) : (
							"Predict Next Events"
						)}
					</Button>
					<Button
						variant="outline"
						className="flex-1"
						onClick={onClear}
						disabled={isLoading}
					>
						Clear History
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
