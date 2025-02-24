import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Default predictions using real events
const PREDICTIONS = [
	{ event: "application-window-opened", probability: 73 },
	{ event: "account-lines:::view", probability: 42 },
	{ event: "account:::view", probability: 38 },
	{ event: "dashboard:my-book::view", probability: 31 },
];

const CHURN_THRESHOLD = 10;

// Check if any event has a probability ≤ 10 (churn risk)
const isChurnRisk = PREDICTIONS.some(
	({ probability }) => probability <= CHURN_THRESHOLD
);

export default function PredictionResults() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Most Likely Events</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4 mb-4 pb-4">
					{PREDICTIONS.map(({ event, probability }) => (
						<div key={event} className="space-y-2">
							<div className="flex justify-between text-sm">
								<span>{event}</span>
								<span className="font-medium">
									{probability}%
								</span>
							</div>
							<Progress value={probability} />
						</div>
					))}
				</div>

				{isChurnRisk && (
					<div className="mt-4 p-2 text-sm text-white text-center rounded-lg bg-red-600">
						Warning: Churn detected...
					</div>
				)}
			</CardContent>
		</Card>
	);
}
