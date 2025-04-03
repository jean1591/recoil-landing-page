import { Container } from './Container'
import Image from 'next/image'
import { PiCheckBold } from 'react-icons/pi'

export const Features = () => {
  return (
    <div id="features" className="bg-gray-100">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">
              Your shots tell a story. Are you listening?
            </h2>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center justify-start gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800">
                  <PiCheckBold className="h-4 w-4 text-gray-100" />
                </div>

                <div className="flex items-center justify-start gap-1">
                  <p className="font-bold">
                    See your progress in real numbers,
                  </p>
                  <p>skill isn't just a feeling, it's measurable.</p>
                </div>
              </li>
              <li className="flex items-center justify-start gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800">
                  <PiCheckBold className="h-4 w-4 text-gray-100" />
                </div>
                <div className="flex items-center justify-start gap-1">
                  <p className="font-bold">
                    Understand what works and what doesn't
                  </p>
                  <p>so you can train smarter, not harder.</p>
                </div>
              </li>
              <li className="flex items-center justify-start gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800">
                  <PiCheckBold className="h-4 w-4 text-gray-100" />
                </div>
                <div className="flex items-center justify-start gap-1">
                  <p className="font-bold">Fine-tune your setup</p>
                  <p>
                    from firearms to optics, make sure your gear is helping, not
                    hurting.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-start gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800">
                  <PiCheckBold className="h-4 w-4 text-gray-100" />
                </div>
                <div className="flex items-center justify-start gap-1">
                  <p className="font-bold">Push yourself further</p>
                  <p>set goals, break personal records, and stay motivated.</p>
                </div>
              </li>
              <li className="flex items-center justify-start gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800">
                  <PiCheckBold className="h-4 w-4 text-gray-100" />
                </div>
                <div className="flex items-center justify-start gap-1">
                  <p className="font-bold">
                    Connect with others who take shooting seriously,
                  </p>
                  <p>competition and community make you better.</p>
                </div>
              </li>
            </ul>
          </div>
          <Image src="/features.png" alt="features" width={350} height={350} />
        </div>
      </Container>
    </div>
  )
}
