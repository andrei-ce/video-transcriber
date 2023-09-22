import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>HELLO AI 👋</div>
      <blockquote className='mt-6 border-l-2 pl-6 italic'>
        {/* eslint-disable-next-line react/no-unescaped-entities  */}
        After all -- he said, --everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege.
      </blockquote>
      <Button>Click Me</Button>
    </main>
  )
}
