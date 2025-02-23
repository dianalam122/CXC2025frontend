import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Detailed_data_summary() {
	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white border-b">
				<div className="container mx-auto px-4 py-4">
					<h1 className="text-2xl font-bold text-gray-900">
						Data Summary
						<Link href="/detailed-data-summary">
							<Button
								variant="secondary"
								size="sm"
								className="ml-2"
							>
								View
							</Button>
						</Link>
					</h1>
				</div>
			</header>

			<main className="container mx-auto px-4 py-6">
				<div className="grid grid-cols-1 gap-6">
					<Card>
						<CardHeader>
							<CardTitle>Data Overview</CardTitle>
						</CardHeader>
						<CardContent>{/* Content will go here */}</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
