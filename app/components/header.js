import Link from 'next/link'


export default function Header() {
  return (
    <div>
      <div className="object-center">
        <Link href="/">
          <h1 className='text-4xl'>Gabriella Furno</h1>
        </Link>
      </div>
    </div>
    )
}