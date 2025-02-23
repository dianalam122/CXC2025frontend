import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Dummy data placeholder
const PREDICTIONS = [
  { event: "some event1", probability: 10 },
  { event: "some event2", probability: 20 },
  { event: "some event3", probability: 30 },
]

const CHURN_THRESHOLD = 10

// Check if any event has a probability ≤ 10 (churn risk)
const isChurnRisk = PREDICTIONS.some(({ probability }) => probability <= CHURN_THRESHOLD);

export default function PredictionResults() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Most Likely Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {PREDICTIONS.map(({ event, probability }) => (
            <div key={event} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{event}</span>
                <span className="font-medium">{probability}%</span>
              </div>
              <Progress value={probability} />
            </div>
          ))}

          {isChurnRisk && (
            <div className="mt-4 p-2 text-sm text-white text-center rounded-lg bg-red-600">
              Warning: Churn detected...
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
