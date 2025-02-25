import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface PredictionResultsProps {
	prediction?: {
		predicted_event_index: string;
		predicted_time: number;
	} | null;
	similarEvents: Array<{ event: string; probability: number }>;
}

export default function PredictionResults({
	prediction,
	similarEvents,
}: PredictionResultsProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Most Likely Events</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4 mb-11 pb-12">
					{similarEvents.map(({ event, probability }) => (
						<div key={event} className="space-y-2">
							<div className="flex justify-between text-sm">
								<span>{event}</span>
								<span className="font-medium">
									{Math.round(probability * 100)}%
								</span>
							</div>
							<Progress value={probability * 100} />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
