import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface EventHistoryProps {
  events: string[]
}

export default function EventHistory({ events }: EventHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Event History</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] mb-4">
          {events.map((event, index) => (
            <div key={index} className="p-2 mb-2 bg-muted rounded-md text-sm">
              {event}
            </div>
          ))}
        </ScrollArea>
        <Button className="w-full">Predict Next Events</Button>
      </CardContent>
    </Card>
  )
}

