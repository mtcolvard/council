

import Image from 'next/image'
import Link from 'next/link'
import pandora_black_background from '../public/pandora_black_background.webp'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className='block box-border bg-black '>
      <div>
        <div className='object-center z-50'>
      <div className='relative text-center'>
          <ul className='text-white font-normal block text-xl tracking-widest leading-5 list-disc'>
            <li className='leading-4 inline-block uppercase center'>
              <div className="border-2 border-white py-5 px-7 text-center leading-5 list-outside bg-scroll bg-clip-border bg-transparent bg-origin-padding">
                <Link
                  href="/sculpture">Gabriella Furno</Link>
              </div>
            </li>
          </ul>
        </div>
        </div>
        <div className='absolute z-10'>
          <Link
            href="/sculpture">
        <Image
          alt="Pandora: a monumental, 210 cm sculpture on a pedestal of a beautiful Nigerian woman; cast in crimson coloured resin"
          priority
          // Importing an image will
          // automatically set the width and height
          src={pandora_black_background}
          // sizes="100vh"
          object-fit="cover"
          overflow="hidden"
          // Make the image display full width
          style={{
            width: '100%',
            height: '100%',
          }}
            />
            </Link>
        </div>

      </div>

    </main>
  )
}



