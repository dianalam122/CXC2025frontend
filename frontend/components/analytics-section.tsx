"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false })

export default function AnalyticsSection() {
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

      <Card>
        <CardHeader>
          <CardTitle>Common Features</CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>Feature Penetration</CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Churn Events</CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Another Analytic...</CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  )
}

