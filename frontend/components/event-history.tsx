import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EventHistoryProps {
	events: string[];
	onClear?: () => void;
	userId: string;
}

export default function EventHistory({
	events,
	onClear,
	userId,
}: EventHistoryProps) {
	const handlePredictClick = async () => {
		const requestData = {
			userId,
			events,
		};

		console.log("Sending request to /create-session:", requestData);

		try {
			const response = await fetch(
				"http://127.0.0.1:5000/create-session",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(requestData),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to create session");
			}

			const data = await response.json();
			console.log("Session created:", data);
		} catch (error) {
			console.error("Error creating session:", error);
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
				<div className="flex gap-2">
					<Button className="flex-1" onClick={handlePredictClick}>
						Predict Next Events
					</Button>
					<Button
						variant="outline"
						className="flex-1"
						onClick={onClear}
					>
						Clear History
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
