"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EventFrequencyPage() {
	return (
		<div className="grid grid-cols-3 gap-6">
			<Card>
				<CardHeader>
					<CardTitle>Event Frequency</CardTitle>
				</CardHeader>
				<CardContent>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Retention Rate</CardTitle>
				</CardHeader>
				<CardContent>
				</CardContent>
			</Card>
		</div>
	);
}



// export default function EventFrequencyPage() {
//   return (
//     <div className="container mx-auto py-6">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold">Event Frequency Analysis</h1>
//         <Link href="/">
//           <Button variant="outline">Back to Dashboard</Button>
//         </Link>
//         <Card>
//             <CardHeader>
//               <CardTitle>Some Graph Title</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="aspect-[2/1] w-full bg-muted/10 rounded-lg flex items-center justify-center text-muted-foreground">
//                 Graph will be displayed here
//               </div>
//             </CardContent>
//           </Card>
//       </div>
//     </div>
//   )
// }