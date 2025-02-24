"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"

// import { ChevronLeft } from "lucide-react"
// import Link from "next/link"
// import { Button } from "@/src/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
// import { Input } from "@/src/components/ui/input"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"


export default function AnotherAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-lg font-semibold">User Analytics</h1>
        </div>
      </header>
      <main className="container p-4 md:p-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
          <Card>
            <CardHeader>
              <CardTitle>Some Graph Title</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[2/1] w-full bg-muted/10 rounded-lg flex items-center justify-center text-muted-foreground">
                Graph will be displayed here
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}