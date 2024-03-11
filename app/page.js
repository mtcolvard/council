import Image from 'next/image';
import Link from 'next/link';
import pandora_black_background from '../public/pandora_black_background.webp';

export default function Home() {
  return (
    <main  className="bg-black relative min-h-screen">
      <div translate="no" className="absolute inset-0 flex items-center justify-center z-10">
        <Link href="/sculpture">
          <div  className="border-2 border-white p-7 text-white text-xl tracking-widest uppercase bg-clip-border bg-transparent bg-origin-padding">
            <span translate="no">Gabriella Furno</span>
          </div>
        </Link>
      </div>

      <div className="relative flex justify-center">
        <Link href="/sculpture">
          <Image
            priority
            alt="Pandora: a monumental, 210 cm sculpture on a pedestal of a beautiful Nigerian woman; cast in crimson coloured resin"
            src={pandora_black_background}
            sizes="100vw"
            quality={100}
            // style={{
            //   width: '100%',
            //   height: 'auto',
              
            // }}
            style={{
              width: 'auto',
              height: '100vh',
              objectFit: 'cover'
            }}
          />
        </Link>
      </div>
    </main>
  );
}






