import { Container } from './Container'
import Image from 'next/image'

interface Feature {
  id: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: '01',
    title: 'See your progress in real numbers',
    description:
      'Track your improvement over time. Build confidence and know when to raise the bar',
  },
  {
    id: '02',
    title: 'Train smarter, not harder',
    description:
      'Every session teaches you something. Spot patterns and focus on what improves your shooting',
  },
  {
    id: '03',
    title: 'Fine-tune your setup',
    description:
      'Your gear should work for you. Learn how your firearm and optics impact performance',
  },
  {
    id: '04',
    title: 'Push yourself further',
    description:
      'Set personal goals, track milestones, and challenge yourself to go beyond limits',
  },
  {
    id: '05',
    title: 'Connect with others',
    description:
      'Join a focused community. Share sessions and learn from others',
  },
]

export const Features = () => {
  return (
    <div id="features">
      <Container>
        <h2 className="text-center text-4xl font-bold">
          Built for Your Progress
        </h2>

        <div className="mt-12 grid grid-cols-3 gap-12">
          <div className="col-span-2 space-y-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="grid grid-cols-6 gap-8 border-b border-gray-300 pb-6 last:border-b-0"
              >
                <div className="col-span-3 flex items-center justify-start gap-4">
                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gray-300 text-sm font-medium text-gray-900">
                    {feature.id}
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>

                <p className="col-span-3 text-balance text-right text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/features.png"
              alt="Features"
              width={250}
              height={250}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
