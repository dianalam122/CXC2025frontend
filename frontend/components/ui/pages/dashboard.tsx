"use client";

import { useState } from "react";
import { Upload, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import EventHistory from "../../event-history";
import PredictionResults from "../../prediction-results";
import AnalyticsSection from "../../analytics-section";
import { EVENT_TYPES } from "@/lib/eventTypes";
// import { SAMPLE_EVENT_TYPES } from "@/lib/eventTypes"

interface UserData {
	user_id: number;
	amplitude_id: number;
	top_events: any;
	top_churn_events: any;
	top_retention_events: any;
	average_session_time: number;
	total_session_time: number;
	frequency_of_sessions: number;
	user_retention_30: number;
	daily_active_periods: any;
}

interface PredictionResult {
	predicted_event_index: string;
	predicted_time: number;
}

export default function Dashboard() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
	const [userId, setUserId] = useState("1");
	const [userData, setUserData] = useState<UserData | null>(null);
	const [prediction, setPrediction] = useState<PredictionResult | null>(null);

	const filteredEvents = EVENT_TYPES.filter((event) =>
		event.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleEventSelect = (event: string) => {
		setSelectedEvents((prev) => [...prev, event]);
	};

	const handleClearEvents = () => {
		setSelectedEvents([]);
		setPrediction(null);
	};

	const handlePrediction = (newPrediction: PredictionResult | null) => {
		setPrediction(newPrediction);
	};

	const handleLoadUserData = async () => {
		try {
			const response = await fetch("http://127.0.0.1:5000/user-data", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ userId }),
			});
			console.log(response);

			if (!response.ok) {
				throw new Error("Failed to load user data");
			}

			const data = await response.json();
			setUserData(data);

			console.log("User data loaded:", data);
		} catch (error) {
			console.error("Error loading user data:", error);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white border-b">
				<div className="container mx-auto px-4 py-4">
					<h1 className="text-2xl font-bold text-gray-900">
						User Retention Analytics
					</h1>
				</div>
			</header>

			<main className="container mx-auto px-4 py-6">
				<div className="mb-6">
					<Card>
						<CardContent className="py-4">
							<div className="flex gap-4 items-center">
								<div className="flex-1">
									<Input
										placeholder="Enter User ID"
										value={userId}
										onChange={(e) =>
											setUserId(e.target.value)
										}
										className="max-w-xs"
									/>
								</div>
								<Button
									variant="secondary"
									className="hover:bg-blue-600 hover:text-white transition-colors"
									onClick={handleLoadUserData}
								>
									Load User Data
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="grid grid-cols-12 gap-6">
					{/* Left Sidebar */}
					<div className="col-span-3 space-y-2">
						<Card>
							<CardHeader>
								<CardTitle>Select Event Type</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="relative">
									<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
									<Input
										placeholder="Search events..."
										className="pl-8"
										value={searchTerm}
										onChange={(e) =>
											setSearchTerm(e.target.value)
										}
									/>
								</div>
								<ScrollArea className="h-[300px]">
									<div className="space-y-2">
										{filteredEvents.map((event) => (
											<Button
												key={event}
												variant="ghost"
												className="w-full justify-start"
												onClick={() =>
													handleEventSelect(event)
												}
											>
												{event}
											</Button>
										))}
									</div>
								</ScrollArea>
								<div className="space-y-2 pt-4 border-t">
									<Button
										className="w-full"
										variant="outline"
									>
										<Upload className="mr-2 h-4 w-4" />
										Upload Event Data
									</Button>
								</div>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-br from-blue-700 to-blue-900 text-primary-foreground">
							<CardHeader>
								<CardTitle>Data Summary</CardTitle>
							</CardHeader>
							<CardContent>
								<Link href="/detailed-data-summary">
									<Button
										variant="secondary"
										size="sm"
										className="bg-white text-primary hover:bg-white/90"
									>
										View
									</Button>
								</Link>
							</CardContent>
						</Card>
					</div>

					{/* Main Content */}
					<div className="col-span-9 space-y-6">
						<div className="grid grid-cols-12 gap-6">
							<div className="col-span-6">
								<EventHistory
									events={selectedEvents}
									onClear={handleClearEvents}
									userId={userId}
									onPrediction={handlePrediction}
								/>
							</div>
							<div className="col-span-6">
								<PredictionResults prediction={prediction} />
							</div>
						</div>

						<AnalyticsSection
						// averageSessionTime={userData?.average_session_time}
						// totalSessionTime={userData?.total_session_time}
						// frequencyOfSessions={
						// 	userData?.frequency_of_sessions
						// }
						// userRetention={userData?.user_retention_30}
						// dailyActivePeriods={userData?.daily_active_periods}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
