"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Paper, Reviewer, Review, getPapers, getReviewers, getReviews } from "~/lib/data"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { AssignReviewersDialog } from "~/components/assign-reviewers-dialog"
export default function PaperPage() {
    const { id } = useParams()
    const [paper, setPaper] = useState<Paper | null>(null)
    const [reviewers, setReviewers] = useState<Reviewer[]>([])
    const [reviews, setReviews] = useState<Review[]>([])

    useEffect(() => {
        const allPapers = getPapers()
        setPaper(allPapers.find(p => p.papernumber === parseInt(typeof (id) === "string" ? id : id?.join() ?? "0")) || null)
        setReviewers(getReviewers())
        setReviews(getReviews(id as string))
    }, [id])


    if (!paper) return <div>Loading...</div>

    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>{paper.title}</CardTitle>
                    <CardDescription>By {paper.authors}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Status: {paper.status}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Reviewers</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-2">
                        <AssignReviewersDialog onAssign={()=>null} />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    {reviews.map((review) => (
                        <div key={review.id} className="mb-4">
                            <h3 className="font-bold">Reviewer {review.reviewerId}</h3>
                            <p>Status: {review.status}</p>
                            <p>Comments: {review.comments}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}

