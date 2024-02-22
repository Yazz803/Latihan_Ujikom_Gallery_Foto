import Footer from '@/components/Footer'
import Posts from '@/components/ProfilePage/Posts'
import ProfileInfo from '@/components/ProfilePage/ProfileInfo'
import Tabs from '@/components/ProfilePage/Tabs'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function ProfileUserPage() {
  return (
    <main className="overflow-x-hidden">
      <Sidebar />
      <section className="container mx-auto px-52 ms-32 mt-12">
        <ProfileInfo />

        <div className="mt-10">
          <Tabs />
        </div>

        <div className="mt-4">
          <Posts />
        </div>

        <Footer />
      </section>
    </main>
  )
}
