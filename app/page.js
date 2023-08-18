

import Image from 'next/image'
import Link from 'next/link'
import Light_and_Space from '../public/pandora_black_background.webp'
import About from './about/page'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className='block box-border bg-black'>
      <div className='relative text-center px-5 py-20'>
        <Image
          alt="seeing is forgetting the name of the thing one sees"
          priority
          // Importing an image will
          // automatically set the width and height
          src={Light_and_Space}
          // sizes="100vh"
          object-fit="cover"
          overflow="hidden"
          // Make the image display full width
          style={{
            width: '100%',
            height: '100%',
          }}  
        />
            <div className='inline-block'>
              <ul className='font-normal block text-xl tracking-widest leading-5 list-disc'>
                <li className= 'leading-4 inline-block uppercase center'>
                  <div className="border-2 border-white py-5 px-7 text-center leading-5 list-outside bg-scroll bg-clip-border bg-transparent bg-origin-padding">
                  <Link
                      href="/sculptures">Gabriella Furno</Link>
                  </div>
                </li>
              </ul>
          </div>
        </div>
      {/* </div> */}

    </main>
  )
}



  