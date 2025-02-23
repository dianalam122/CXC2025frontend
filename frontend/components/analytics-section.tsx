"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnalyticsSection() {
	return (
		<div className="grid grid-cols-3 gap-6">
			<Card>
				<CardHeader>
					<CardTitle>Event Frequency</CardTitle>
				</CardHeader>
				<CardContent>
					<Link href="frontend/components/ui/pages/detailed-event-frequency.tsx">
						<Button
							variant="outline"
							size="sm"
							className="border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
						>
							View
						</Button>
					</Link>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Retention Rate</CardTitle>
				</CardHeader>
				<CardContent>
					<Link href="frontend/components/ui/pages/detailed-retention-rate.tsx">
						<Button
							variant="outline"
							size="sm"
							className="border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
						>
							View
						</Button>
					</Link>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Common Features</CardTitle>
				</CardHeader>
				<CardContent>
					<Link href="frontend/components/ui/pages/detailed-common-features.tsx">
						<Button
							variant="outline"
							size="sm"
							className="border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
						>
							View
						</Button>
					</Link>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Feature Penetration</CardTitle>
				</CardHeader>
				<CardContent>
					<Link href="frontend/components/ui/pages/detailed-feature-penetration.tsx">
						<Button
							variant="outline"
							size="sm"
							className="border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
						>
							View
						</Button>
					</Link>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Churn Events</CardTitle>
				</CardHeader>
				<CardContent>
					<Link href="frontend/src/pages/detailed-churn-events">
						<Button
							variant="outline"
							size="sm"
							className="border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
						>
							View
						</Button>
					</Link>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Another Analytic...</CardTitle>
				</CardHeader>
				<CardContent>
					<Link href="/detailed-another-analytics.tsx">
						<Button
							variant="outline"
							size="sm"
							className="border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors"
						>
							View
						</Button>
					</Link>
				</CardContent>
			</Card>
		</div>
	);
}
