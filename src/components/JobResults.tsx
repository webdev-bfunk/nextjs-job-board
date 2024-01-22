import React from 'react'
import JobListItem from './JobListItem'
import prisma from '@/lib/prisma'
import { JobFilterValues } from '@/lib/validation'
import { Prisma } from '@prisma/client';

interface JobResultsProps {
    filterValues: JobFilterValues,
}
// 2hrs into video
export default async function JobResults({
    filterValues: {q, type, location, remote },
}: JobResultsProps) {
    
    const searchString = q?.split(" ").filter((word) => word.length > 0).join(" & ");

    const searchFilter: Prisma.JobWhereInput = searchString ? 
    {
        OR: [
            { title: { search: searchString } },
            { companyName: { search: searchString } },
            { type: { search: searchString } },
            { locationType: { search: searchString } },
            { location: { search: searchString } },
        ]
    } 
    : {};

    const where: Prisma.JobWhereInput = {
        AND: [
            searchFilter,
            type ? { type } : {},
            location ? { location } : {},
            remote ? { locationType: "Remote" } : {},
            { approved: true },
        ],
    };

    const jobs = await prisma.job.findMany({
        where,
        orderBy: { createdAt: "desc" }
      })


  return (
    <div className="space-y-4 grow">
    {jobs.map(job => (
      <JobListItem job={job} key={job.id} />
    ))}
    {jobs.length === 0 && (
        <p className='text-center m-auto'>
            No jobs found. <br />Try adjusting your search filters.
        </p>
    )}
  </div>
  )
}
