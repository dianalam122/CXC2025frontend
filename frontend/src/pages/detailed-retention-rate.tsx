"use client"

import "@/app/globals.css";
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { useState } from "react"
import Link from "next/link"

interface DetailedRetentionRateProps {
  title: string
  parentSection: string
}

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const data = [
  { event_type: "account-lines:::view", average_duration: 247233.5304285714 },
  { event_type: "all-accounts:::view", average_duration: 14188.228105263157 },
  { event_type: "dashboard:my-book::view", average_duration: 12081.371925925929 },
	{ event_type: "account:::view", average_duration: 220.82026666666675 },
	{ event_type: "application-window-opened", average_duration: 1.6458000000000002 },

];

const plotData = [{
    x: data.map(item => item.event_type),
    y: data.map(item => item.average_duration),
    type: 'bar',
    marker: {
      color: '#3b82f6'
    }
}];

const layout = {
    title: 'Event Retention Rate',
    xaxis: {
      tickangle: -45,
      automargin: true
    },
    yaxis: {
      title: 'Count'
    },
    margin: {
      b: 100
    },
    autosize: true
};

const config = {
    responsive: true,
    displayModeBar: false
};

export default function DetailedRetentionRate({ title, parentSection }: DetailedRetentionRateProps) {
  const [filters, setFilters] = useState({
    userId: "",
    Date: "",
    startDate: "",
    endDate: "",
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">{parentSection}</div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>
            <Link href="/">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Filters Sidebar */}
          <div className="col-span-3">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="endDate"
                      type="date"
                      value={filters.endDate}
                      onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                    />
                  </div>
                  <Button className="w-full" variant="secondary">
                    Apply Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-9 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-full h-64">
					        <Plot
                  data={plotData}
                  layout={layout}
                  config={config}
                  style={{ width: '100%', height: '100%' }}
                        />
				        </div>
               
              </CardContent>
            </Card>

            {/* Data Table */}
            <Card>
              <CardContent className="p-6">
                <div className="rounded-md border">
            
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

