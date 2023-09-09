

import Image from 'next/image'
import Link from 'next/link'
import pandora_black_background from '../../public/pandora_black_background.webp'

export default function Experiment() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="h-screen  bg-center bg-black">
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
      <div className="flex justify-center items-center h-full">
        <button>button</button>
      </div>
    </div>

  )
}



