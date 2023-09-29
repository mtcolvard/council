import Image from 'next/image';
import Link from 'next/link';
import pandora_black_background from '../public/pandora_black_background.webp';

export default function Home() {
  return (
    <main className="bg-black relative min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Link href="/sculpture">
          <div className="border-2 border-white p-7 text-white text-xl tracking-widest uppercase bg-clip-border bg-transparent bg-origin-padding">
            Gabriella Furno
          </div>
        </Link>
      </div>

      <div className="relative flex justify-center">
        <Link href="/sculpture">
          <Image
            priority
            alt="Pandora: a monumental, 210 cm sculpture on a pedestal of a beautiful Nigerian woman; cast in crimson coloured resin"
            src={pandora_black_background}
            style={{
              width: '100%',
              height: '100vh',
            }}
          />
        </Link>
      </div>
    </main>
  );
}






