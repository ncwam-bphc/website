'use client'

import { useState, useEffect } from 'react'
import { Input } from "~/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table"
import { getReviewersData } from "~/server/actions/reviewerCounter"
import { useQuery } from '@tanstack/react-query'

interface ReviewerData {
  id: string
  name: string
  assignedAbstracts: number
}

export default function ReviewerDashboard() {
  const [searchTerm, setSearchTerm] = useState('')

  const { data: reviewersData, isLoading, error } = useQuery({
    queryKey: ['reviewers'],
    queryFn: async () => {
      const data = await getReviewersData()
      if (!data) throw new Error('Failed to fetch reviewers')
      
      return data.map(([id, name, count]) => {
        if (typeof id !== 'string') throw new Error('Invalid data format')
        return {
          id,
          name,
          assignedAbstracts: count
        } as ReviewerData
      })
    }
  })

  const filteredReviewers = reviewersData?.filter(reviewer =>
    reviewer.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) ?? []

  if (isLoading) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="text-center">Loading reviewer data...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="text-center text-red-500">
          Error loading reviewer data. Please try again later.
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reviewer Statistics</h1>
      </div>
      <Input
        type="text"
        placeholder="Search reviewers..."
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Assigned Abstracts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReviewers.map((reviewer) => (
              <TableRow key={reviewer.id}>
                <TableCell className="font-medium">{reviewer.id}</TableCell>
                <TableCell>{reviewer.name}</TableCell>
                <TableCell className="text-right">{reviewer.assignedAbstracts}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}