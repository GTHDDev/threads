/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Metadata } from 'next'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Bottombar from '@/components/shared/Bottombar'
import RightSidebar from '@/components/shared/RightSidebar'
import Topbar from '@/components/shared/Topbar'

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Next.js 15 Meta Threads Clone App by @Ghosthard'
}

export default function MainLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Topbar />
      <main className='flex flex-row'>
        <LeftSidebar />
        <section className='main-container'>
          <div className='w-full max-w-4xl'>{children}</div>
        </section>
        <RightSidebar />
      </main>
      <Bottombar />
    </>
  )
}
