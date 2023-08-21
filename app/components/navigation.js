import Link from 'next/link'
import MobileNav from './mobile-nav'

export default function Navigation() {
  return (
    <>    
    <MobileNav />
      <div className="md:px-20 md:my-11 bg-white text-black hidden sm:block ">
      <div>
        <Link href="/">
          <h1 className='md:my-2 text-lg md:text-3xl lg:text-5xl md:text-center'>Gabriella Furno</h1>
        </Link>
      </div>
      <div className='md:my-2 text-lg md:flex md:gap-3 lg:gap-8 justify-center'>
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
    </div>
  </>

  )
}


