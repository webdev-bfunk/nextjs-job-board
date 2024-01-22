import JobFilterSidebar from "@/components/JobFilterSidebar"
import JobListItem from "@/components/JobListItem"
import JobResults from "@/components/JobResults"
import prisma from "@/lib/prisma"
import { JobFilterValues } from "@/lib/validation"
import { Metadata } from "next"


interface PageProps {
  searchParams: {
    q?: string,
    type?: string,
    location?: string,
    remote?: string,
  }
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
  ? `${q} jobs`
  : type
  ? `${type} developer jobs`
  : remote
  ? "Remote developer jobs"
  : "All developer jobs";
  
  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`
}

export function generateMetadata({
  searchParams: { q, type, location, remote }
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | Flow Jobs`
  }
}

export default async function Home({
  searchParams: {q, type, location, remote}
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  }

  return (
    <main className="max-w-5xl m-auto px-3 my-10 space-y-10">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {getTitle(filterValues)}
        </h1>
        <p className="text-muted-foreground">Find your dream job.</p>
      </div>
      <section className="flex flex-col md:flex-row gap-4">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues}/>
      </section>
    </main>
  )
}