import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// dummy data placeholder
const SAMPLE_PREDICTIONS = [
  { event: "some event", probability: 10 },
  { event: "some event", probability: 20 },
  { event: "some event", probability: 30 },
]

export default function PredictionResults() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Most Likely Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {SAMPLE_PREDICTIONS.map(({ event, probability }) => (
            <div key={event} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{event}</span>
                <span className="font-medium">{probability}%</span>
              </div>
              <Progress value={probability} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

