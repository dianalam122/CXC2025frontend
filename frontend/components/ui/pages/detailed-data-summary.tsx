"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChurnEvent {
	event: string;
	totalOccurrences: number;
	averageTerminalRate: number;
}

interface CommonEvent {
	event: string;
	numberOfUsers: number;
	percentageOfUsers: number;
}

interface RetentionEvent {
	event: string;
	numberOfUsers: number;
	percentageOfUsers: number;
}

interface TimeStats {
	numberOfUsers: number;
	averageDuration: number;
	maxDuration: number;
	medianDuration: number;
	percentile25: number;
	percentile75: number;
}

interface TimePeriod {
	timePeriod: string;
	numberOfUsers: number;
	percentageOfUsers: number;
}

interface TotalSessionStats {
	numberOfUsers: number;
	averageTotalTime: number;
	maxTotalTime: number;
	medianTotalTime: number;
	percentile25: number;
	percentile75: number;
}

interface SessionFrequencyStats {
	numberOfUsers: number;
	averageSessions: number;
	maxSessions: number;
	medianSessions: number;
	percentile25: number;
	percentile75: number;
}

interface FrequencyDistribution {
	range: string;
	users: number;
	percentage: number;
}

interface RetentionStats {
	numberOfUsers: number;
	averageRate: number;
	maxRate: number;
	medianRate: number;
	percentile25: number;
	percentile75: number;
}

interface RetentionDistribution {
	range: string;
	users: number;
	percentage: number;
}

export default function DetailedDataSummary() {
	const churnEvents: ChurnEvent[] = [
		{
			event: "dashboard:my-book::view",
			totalOccurrences: 65960,
			averageTerminalRate: 6.38,
		},
		{
			event: "application-window-opened",
			totalOccurrences: 29394,
			averageTerminalRate: 7.52,
		},
		{
			event: "account-lines:::view",
			totalOccurrences: 24806,
			averageTerminalRate: 4.64,
		},
		{
			event: "account:::view",
			totalOccurrences: 21642,
			averageTerminalRate: 2.5,
		},
		{
			event: "dashboard:my-book:configurable-table:render",
			totalOccurrences: 19425,
			averageTerminalRate: 1.93,
		},
	];

	const commonEvents: CommonEvent[] = [
		{
			event: "application-window-opened",
			numberOfUsers: 1011,
			percentageOfUsers: 73.0,
		},
		{
			event: "account-lines:::view",
			numberOfUsers: 579,
			percentageOfUsers: 41.8,
		},
		{
			event: "account:::view",
			numberOfUsers: 526,
			percentageOfUsers: 38.0,
		},
		{
			event: "dashboard:my-book::view",
			numberOfUsers: 427,
			percentageOfUsers: 30.8,
		},
		{
			event: "account-lines::widget:render",
			numberOfUsers: 322,
			percentageOfUsers: 23.2,
		},
	];

	const retentionEvents: RetentionEvent[] = [
		{
			event: "application-window-opened",
			numberOfUsers: 633,
			percentageOfUsers: 46.1,
		},
		{
			event: "dashboard:my-book::view",
			numberOfUsers: 407,
			percentageOfUsers: 29.6,
		},
		{
			event: "action-center:::close-click",
			numberOfUsers: 259,
			percentageOfUsers: 18.9,
		},
		{
			event: "account-lines:::view",
			numberOfUsers: 255,
			percentageOfUsers: 18.6,
		},
		{
			event: "agency-dashboard:::view",
			numberOfUsers: 247,
			percentageOfUsers: 18.0,
		},
	];

	const sessionTimeStats: TimeStats = {
		numberOfUsers: 1385,
		averageDuration: 3.08,
		maxDuration: 104.15,
		medianDuration: 0.0,
		percentile25: 0.0,
		percentile75: 0.21,
	};

	const activePeriods: TimePeriod[] = [
		{
			timePeriod: "15:00-16:00",
			numberOfUsers: 657,
			percentageOfUsers: 47.4,
		},
		{
			timePeriod: "19:00-20:00",
			numberOfUsers: 629,
			percentageOfUsers: 45.4,
		},
		{
			timePeriod: "14:00-15:00",
			numberOfUsers: 627,
			percentageOfUsers: 45.3,
		},
		{
			timePeriod: "16:00-17:00",
			numberOfUsers: 583,
			percentageOfUsers: 42.1,
		},
		{
			timePeriod: "18:00-19:00",
			numberOfUsers: 579,
			percentageOfUsers: 41.8,
		},
	];

	const totalSessionStats: TotalSessionStats = {
		numberOfUsers: 1385,
		averageTotalTime: 0.83,
		maxTotalTime: 26.75,
		medianTotalTime: 0.0,
		percentile25: 0.0,
		percentile75: 0.01,
	};

	const sessionFrequencyStats: SessionFrequencyStats = {
		numberOfUsers: 1385,
		averageSessions: 4.7,
		maxSessions: 104,
		medianSessions: 0,
		percentile25: 0,
		percentile75: 1,
	};

	const frequencyDistribution: FrequencyDistribution[] = [
		{ range: "0-1 sessions", users: 1051, percentage: 75.9 },
		{ range: "2-5 sessions", users: 74, percentage: 5.3 },
		{ range: "6-10 sessions", users: 45, percentage: 3.2 },
		{ range: "11-20 sessions", users: 85, percentage: 6.1 },
		{ range: "21-30 sessions", users: 59, percentage: 4.3 },
		{ range: "31+ sessions", users: 71, percentage: 5.1 },
	];

	const retentionStats: RetentionStats = {
		numberOfUsers: 1385,
		averageRate: 2.1,
		maxRate: 16.7,
		medianRate: 0.0,
		percentile25: 0.0,
		percentile75: 3.3,
	};

	const retentionDistribution: RetentionDistribution[] = [
		{ range: "0%-10%", users: 1354, percentage: 97.8 },
		{ range: "10%-30%", users: 166, percentage: 12.0 },
		{ range: "30%-50%", users: 0, percentage: 0.0 },
		{ range: "50%-70%", users: 0, percentage: 0.0 },
		{ range: "70%-90%", users: 0, percentage: 0.0 },
		{ range: "90%-100%", users: 0, percentage: 0.0 },
	];

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white border-b">
				<div className="container mx-auto px-4 py-4">
					<h1 className="text-2xl font-bold text-gray-900">
						Data Analytics Summary
					</h1>
				</div>
			</header>

			<main className="container mx-auto px-4 py-6">
				<div className="grid grid-cols-12 gap-6">
					{/* Left Column */}
					<div className="col-span-6 space-y-6">
						{/* Churn Events Card */}
						<Card>
							<CardHeader>
								<CardTitle>
									Top 5 Most Common Churn Events
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{churnEvents.map((event, index) => (
									<div
										key={index}
										className="space-y-2 p-4 rounded-lg border bg-white"
									>
										<div className="font-medium">
											{event.event}
										</div>
										<div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
											<div>
												Total Occurrences:{" "}
												{event.totalOccurrences.toLocaleString()}
											</div>
											<div>
												Terminal Rate:{" "}
												{event.averageTerminalRate}%
											</div>
										</div>
									</div>
								))}
							</CardContent>
						</Card>

						{/* Common Events Card */}
						<Card>
							<CardHeader>
								<CardTitle>
									Top 5 Most Common Events Overall
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{commonEvents.map((event, index) => (
									<div
										key={index}
										className="space-y-2 p-4 rounded-lg border bg-white"
									>
										<div className="font-medium">
											{event.event}
										</div>
										<div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
											<div>
												Users:{" "}
												{event.numberOfUsers.toLocaleString()}
											</div>
											<div>
												Usage: {event.percentageOfUsers}
												%
											</div>
										</div>
									</div>
								))}
							</CardContent>
						</Card>

						{/* Retention Events Card */}
						<Card>
							<CardHeader>
								<CardTitle>
									Top 5 Most Common Retention Events
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{retentionEvents.map((event, index) => (
									<div
										key={index}
										className="space-y-2 p-4 rounded-lg border bg-white"
									>
										<div className="font-medium">
											{event.event}
										</div>
										<div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
											<div>
												Users:{" "}
												{event.numberOfUsers.toLocaleString()}
											</div>
											<div>
												Retention:{" "}
												{event.percentageOfUsers}%
											</div>
										</div>
									</div>
								))}
							</CardContent>
						</Card>
					</div>

					{/* Right Column */}
					<div className="col-span-6 space-y-6">
						{/* Session Time Statistics Card */}
						<Card>
							<CardHeader>
								<CardTitle>Session Time Statistics</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-2 gap-4">
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Total Users
										</div>
										<div className="text-lg font-medium">
											{sessionTimeStats.numberOfUsers.toLocaleString()}
										</div>
									</div>
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Average Duration
										</div>
										<div className="text-lg font-medium">
											{sessionTimeStats.averageDuration}{" "}
											min
										</div>
									</div>
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Max Duration
										</div>
										<div className="text-lg font-medium">
											{sessionTimeStats.maxDuration} min
										</div>
									</div>
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Median Duration
										</div>
										<div className="text-lg font-medium">
											{sessionTimeStats.medianDuration}{" "}
											min
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Total Session Time Statistics */}
						<Card>
							<CardHeader>
								<CardTitle>
									Total Session Time Statistics
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-2 gap-4">
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Average Total Time
										</div>
										<div className="text-lg font-medium">
											{totalSessionStats.averageTotalTime}{" "}
											hours
										</div>
									</div>
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Maximum Total Time
										</div>
										<div className="text-lg font-medium">
											{totalSessionStats.maxTotalTime}{" "}
											hours
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Session Frequency Statistics */}
						<Card>
							<CardHeader>
								<CardTitle>
									Session Frequency (30-day period)
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="grid grid-cols-2 gap-4">
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Average Sessions
										</div>
										<div className="text-lg font-medium">
											{
												sessionFrequencyStats.averageSessions
											}
										</div>
									</div>
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Maximum Sessions
										</div>
										<div className="text-lg font-medium">
											{sessionFrequencyStats.maxSessions}
										</div>
									</div>
								</div>
								<div className="space-y-3">
									{frequencyDistribution.map(
										(dist, index) => (
											<div
												key={index}
												className="flex justify-between p-3 rounded-lg border bg-white"
											>
												<span className="text-sm">
													{dist.range}
												</span>
												<span className="text-sm text-muted-foreground">
													{dist.users} users (
													{dist.percentage}%)
												</span>
											</div>
										)
									)}
								</div>
							</CardContent>
						</Card>

						{/* Retention Statistics */}
						<Card>
							<CardHeader>
								<CardTitle>
									30-Day Retention Statistics
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="grid grid-cols-2 gap-4">
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Average Rate
										</div>
										<div className="text-lg font-medium">
											{retentionStats.averageRate}%
										</div>
									</div>
									<div className="p-4 rounded-lg border bg-white">
										<div className="text-sm text-muted-foreground">
											Maximum Rate
										</div>
										<div className="text-lg font-medium">
											{retentionStats.maxRate}%
										</div>
									</div>
								</div>
								<div className="space-y-3">
									{retentionDistribution.map(
										(dist, index) => (
											<div
												key={index}
												className="flex justify-between p-3 rounded-lg border bg-white"
											>
												<span className="text-sm">
													{dist.range}
												</span>
												<span className="text-sm text-muted-foreground">
													{dist.users} users (
													{dist.percentage}%)
												</span>
											</div>
										)
									)}
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
		</div>
	);
}
