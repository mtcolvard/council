import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import image_1 from '../../public/Webp_images/black_lives_matter/1.webp'
import image_2 from '../../public/Webp_images/black_lives_matter/2.webp'
import image_3 from '../../public/Webp_images/black_lives_matter/3.webp'



const BlackLives = () => {
  const imageObject = [
    {
      link: '',
      src: image_1,
      alt: '',
      title: 'Black Lives Matter',
      details: '',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: '',
      src: image_2,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: '',
      src: image_3,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
  ]

  return (
    <div className="bg-transparent">
      <Navigation />
      <div className="site min-h-screen flex flex-col mx-4 md:px-40  bg-white text-black">
        {/* <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div> */}
        <main className="">
          <div className="leadImageContainer">
            <div className="featured ">
              <ImageArray imageObject={imageObject.slice(0, 1)} />
            </div>
          </div>
          <div className="content ">
            <ImageArray imageObject={imageObject.slice(1)} />
          </div>
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  )
}

export default BlackLives

