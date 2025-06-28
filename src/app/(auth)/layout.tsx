import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Website created by @Ghosthard'
}

export default function AuthLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen'>
      {children}
    </div>
  )
}
