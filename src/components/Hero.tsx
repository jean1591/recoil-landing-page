import { Container } from './Container'
import Image from 'next/image'

export const Hero = () => {
  return (
    <Container>
      <div className="flex items-center justify-between gap-12">
        <div className="flex flex-col gap-8">
          <h1 className="text-balance text-5xl font-semibold leading-tight tracking-tight text-gray-100">
            Turn Every Range Day Into Progress
          </h1>

          <h2 className="text-lg leading-tight tracking-tight text-gray-400">
            Understand your performance over time so you can spot patterns, fix
            mistakes, and become a more accurate, consistent shooter with every
            session.
          </h2>

          <div className="flex gap-4">
            <button className="rounded-full border border-gray-100 bg-gray-100 px-4 py-2 text-sm font-medium text-slate-900 transition-colors duration-500 hover:bg-slate-800 hover:text-slate-100">
              Download on the Play Store
            </button>
            <button className="rounded-full border border-gray-100 px-4 py-2 text-sm font-medium text-slate-100 transition-colors duration-500 hover:bg-gray-100 hover:text-slate-900">
              Download on the App Store
            </button>
          </div>
        </div>

        <Image src="/hero.png" alt="hero" width={700} height={700} />
      </div>
    </Container>
  )
}
