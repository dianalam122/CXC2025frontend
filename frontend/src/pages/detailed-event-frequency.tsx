import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"


export default function EventFrequencyPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Event Frequency Analysis</h1>
        <Link href="/">
          <Button variant="outline">Back to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}