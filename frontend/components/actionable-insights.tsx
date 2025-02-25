import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Solution {
	suggestion: string;
	explanation: string;
}

interface InsightsResponse {
	solutions: Solution[];
	summary: string;
}

interface ActionableInsightsProps {
	prediction?: {
		predicted_event_index: string;
		predicted_time: number;
	} | null;
	similarEvents: Array<{ event: string; probability: number }>;
	features?: string[];
	churnEvents?: string[];
}

export default function ActionableInsights({
	prediction,
	similarEvents,
	features = [],
	churnEvents = [],
}: ActionableInsightsProps) {
	const [insights, setInsights] = useState<InsightsResponse | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (prediction?.predicted_event_index && similarEvents.length > 0) {
			setIsLoading(true);
			setError(null);

			const payload = {
				event_type: prediction.predicted_event_index,
				predicted_events: similarEvents.map((e) => [
					e.event,
					e.probability,
				]),
				features: features,
				churn_events: churnEvents,
			};

			console.log("Sending insights payload:", payload);

			fetch("http://127.0.0.1:5000/llminsights", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			})
				.then(async (response) => {
					if (!response.ok) {
						const errorText = await response.text();
						throw new Error(
							`Failed to fetch insights: ${errorText}`
						);
					}
					return response.json();
				})
				.then((data) => {
					console.log("Received insights:", data);
					setInsights(data);
				})
				.catch((error) => {
					console.error("Error fetching insights:", error);
					setError(
						error instanceof Error
							? error.message
							: "Failed to load insights"
					);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [prediction, similarEvents, features, churnEvents]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Actionable Insights</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{isLoading ? (
						<div className="text-sm text-muted-foreground">
							Loading insights...
						</div>
					) : error ? (
						<div className="text-sm text-red-600">{error}</div>
					) : insights ? (
						<>
							<div className="p-4 bg-blue-50 rounded-lg">
								<p className="text-sm font-medium text-blue-900">
									{insights.summary}
								</p>
							</div>
							<div className="space-y-4">
								{insights.solutions.map((solution, index) => (
									<div
										key={index}
										className="p-4 border rounded-lg bg-white"
									>
										<h3 className="font-medium mb-2">
											{solution.suggestion}
										</h3>
										<p className="text-sm text-muted-foreground">
											{solution.explanation}
										</p>
									</div>
								))}
							</div>
						</>
					) : null}
				</div>
			</CardContent>
		</Card>
	);
}
