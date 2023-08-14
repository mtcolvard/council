import Image from 'next/image'
import Link from 'next/link'
import Light_and_Space from '../public/pandora_black_background.webp'
import About from './about/page'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className='block box-border'>
      <div className='relative text-center px-5 py-20'>
        <Image
          alt="seeing is forgetting the name of the thing one sees"
          priority
          // Importing an image will
          // automatically set the width and height
          src={Light_and_Space}
          sizes="100vw"
        object-fit="cover"
        overflow="hidden"
          // Make the image display full width
          style={{
            width: '100%',
            height: '100%',
          }}  
        />
        <div className='text-center'>
          <div className='inline-block'>
            <ul>
              <li>
                <Link href="/about">Gabriella Furno</Link>
              </li>
            </ul>
          </div>
        </div>
     </div>
    </main>
  )
}
