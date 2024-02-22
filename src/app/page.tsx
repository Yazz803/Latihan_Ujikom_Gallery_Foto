import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Sidebar />

      <section className="container mx-auto px-52 ms-32">
        <div className="h-screen flex justify-center items-center">
          <h2 className="text-center text-4xl font-semibold">
            Silahkan Pilih User dibagian Sidebar Untuk Melihat Gallery Mereka
          </h2>
        </div>
        <Footer />
      </section>
    </main>
  )
}
