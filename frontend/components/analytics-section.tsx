"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function AnalyticsSection() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Event Frequency</CardTitle>
          <Link href="frontend/components/ui/pages/detailed-event-frequency.tsx">
          <Button 
            variant = 'secondary'
            size = 'sm'
          >
            View
          </Button>
          </Link>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Retention Rate</CardTitle>
          <Link href="frontend/components/ui/pages/detailed-retention-rate.tsx">
          <Button 
            variant = 'secondary'
            size = 'sm'
          >
            View
          </Button>
          </Link>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Features</CardTitle>
          <Link href="frontend/components/ui/pages/detailed-common-features.tsx">
          <Button 
            variant = 'secondary'
            size = 'sm'
          >
            View
          </Button>
          </Link>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>Feature Penetration</CardTitle>
          <Link href="frontend/components/ui/pages/detailed-feature-penetration.tsx">
          <Button 
            variant = 'secondary'
            size = 'sm'
          >
            View
          </Button>
          </Link>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Churn Events</CardTitle>
          <Link href="frontend/src/pages/detailed-churn-events">
          <Button 
            variant = 'secondary'
            size = 'sm'
          >
            View
          </Button>
          </Link>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Another Analytic...</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href="/detailed-another-analytics.tsx">
            <Button 
              variant = 'secondary'
              size = 'sm'
            >
              View
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

