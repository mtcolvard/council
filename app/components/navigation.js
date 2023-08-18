import Link from 'next/link'
import Header from './header'

export default function Navigation() {
  return (
    <>
    <Header/>
      <div className='flex gap-4 justify-center'>
          <div>
          <Link className='flex-1' href="/about">
            About
          </Link>
          </div>
          <div>
          <Link className='flex-1' href="/sculptures">
            Sculpture
          </Link>
          </div>
          <div>
          <Link className='flex-1' href="/worksonpaper">
            Works on Paper
          </Link>
          </div>
          <div>
          <Link className='flex-1' href="/watercolours">
            Watercolours
          </Link>
          </div>
          <div>
          <Link className='flex-1' href="/painting">
            Painting
          </Link>
          </div>
          <div>
          <Link className='flex-1' href="/movement">
            Movement
          </Link>
        </div>
          <div>
          <Link className='flex-1' href="/contact">
            Contact
          </Link>
          </div>
      </div>
    </>
  )
}


