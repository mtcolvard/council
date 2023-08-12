import Image from 'next/image'
import Link from 'next/link'
import Light_and_Space from '../public/mainPhotoCaliforniaLight.webp'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="flex min-h-screen flex-col  justify-between ">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image
          alt="seeing is forgetting the name of the thing one sees"
          // Importing an image will
          // automatically set the width and height
          src={Light_and_Space}
          sizes="100vw"
          // Make the image display full width
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">       
      <Link href="/about">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Gabriella Lucky{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>
    </main>
  )
}
