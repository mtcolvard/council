import Link from 'next/link'


export default function Header() {
  return (
    <div>
      <div className="bg-white text-black">
        <Link href="/">
          <h1 className='text-4xl text-center'>Gabriella Furno</h1>
        </Link>
      </div>
    </div>
    )
}