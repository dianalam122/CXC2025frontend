"use client"

import "@/app/globals.css";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import Link from "next/link"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface DetailedEventFrequencyProps {
  title: string
  parentSection: string
}

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const data = [
    { event_type: "dashboard:my-book::view", return_rate: 2 },
    { event_type: "application-window-opened", return_rate: 1 },
    { event_type: "all-accounts:::view", return_rate: 1 },
	{ event_type: "all-accounts::accounts-table:account-click", return_rate: 1 },
	{ event_type: "account:::view", return_rate: 1 },

];

const plotData = [{
    x: data.map(item => item.event_type),
    y: data.map(item => item.return_rate),
    type: 'bar',
    marker: {
      color: '#3b82f6'
    }
}];

const layout = {
    title: 'Event Type Frequency',
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

export default function DetailedEventFrequency({ title, parentSection }: DetailedEventFrequencyProps) {
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