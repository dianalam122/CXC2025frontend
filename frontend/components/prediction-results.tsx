import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface PredictionResultsProps {
	prediction?: {
		predicted_event_index: string;
		predicted_time: number;
	} | null;
}

interface SimilarEvent {
	event: string;
	probability: number;
}

export default function PredictionResults({
	prediction,
}: PredictionResultsProps) {
	const [similarEvents, setSimilarEvents] = useState<SimilarEvent[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (prediction?.predicted_event_index) {
			setIsLoading(true);
			setError(null);

			fetch("http://127.0.0.1:5000/similar-events", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					event_type: prediction.predicted_event_index,
				}),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error("Failed to fetch similar events");
					}
					return response.json();
				})
				.then((data) => {
					const events = Array.isArray(data) ? data : [];
					setSimilarEvents(events);
				})
				.catch((error) => {
					console.error("Error fetching similar events:", error);
					setError("Failed to load similar events");
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [prediction]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Most Likely Events</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4 mb-11 pb-12">
					{isLoading ? (
						<div className="text-sm text-muted-foreground">
							Loading...
						</div>
					) : error ? (
						<div className="text-sm text-red-600">{error}</div>
					) : (
						similarEvents.map(({ event, probability }) => (
							<div key={event} className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>{event}</span>
									<span className="font-medium">
										{Math.round(probability * 100)}%
									</span>
								</div>
								<Progress value={probability * 100} />
							</div>
						))
					)}
				</div>
			</CardContent>
		</Card>
	);
}
