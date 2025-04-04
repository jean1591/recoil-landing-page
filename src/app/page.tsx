import { CallToAction } from '@/components/CallToAction'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow flex-col gap-24">
        <div className="p-4">
          <div className="flex flex-col gap-8 rounded-2xl bg-slate-800 p-4 pb-0 text-gray-100 lg:py-8 lg:pb-0">
            <Navbar />
            <Hero />
          </div>
        </div>
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
