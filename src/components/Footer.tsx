import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='mx-auto max-w-5xl space-y-5 px-3 py-5'>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div className="space-y-2">
                <h3 className='text-xl font-semibold'>
                    Flow Jobs
                </h3>
                <p className="text-sm text-muted-foreground">
                    Connecting talents with opportunities
                </p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                <Link href="/" className="hover:underline">About us</Link>
                <Link href="/" className="hover:underline">Contact</Link>
                <Link href="/" className="hover:underline">Terms of Service</Link>
                <Link href="/" className="hover:underline">Privacy Policy</Link>
            </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Flow Jobs, Inc. All Rights Reserved.
        </div>
    </div>
  )
}
