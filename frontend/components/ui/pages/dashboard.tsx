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

export default function Dashboard() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

	const filteredEvents = EVENT_TYPES.filter((event) =>
		event.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleEventSelect = (event: string) => {
		setSelectedEvents((prev) => [...prev, event]);
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
							<div className="col-span-5">
								<EventHistory events={selectedEvents} />
							</div>
							<div className="col-span-4">
								<PredictionResults />
							</div>
							<div className="col-span-3">
								<Card>
									<CardHeader>
										<CardTitle>LLM Suggestions</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground">
											"suggestions should appear here"
										</p>
									</CardContent>
								</Card>
							</div>
						</div>

						<AnalyticsSection />
					</div>
				</div>
			</main>
		</div>
	);
}
