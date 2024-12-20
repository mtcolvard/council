import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import painting_4 from '../../public/Webp_images/painting/painting_4.webp'
import painting_3 from '../../public/Webp_images/painting/painting_3.webp'
import painting_2 from '../../public/Webp_images/painting/painting_2.webp'
import painting_1 from '../../public/Webp_images/painting/painting_1.webp'


const Painting = () => {
  const imageObject = [
    {
      link: '',
      src: painting_4,
      alt: '',
      title: 'Apparently there were an invisible',
      details: '',
      material: 'Acrylique on canvas',
      size: '120 x 60 cm, ',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: painting_1,
      alt: '',
      title: 'My emotion my soul',
      details: '',
      material: 'Acrylique on canvas',
      size: '120 x 60 cm, ',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: painting_2,
      alt: '',
      title: 'Meeting you for the first time',
      details: '',
      material: 'Acrylique on canvas',
      size: '120 x 60 cm, ',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: painting_3,
      alt: '',
      title: 'Trying to get out of my body',
      details: '',
      material: 'Acrylique on canvas',
      size: '120 x 60 cm, ',
      style: 'regular',
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

export default Painting

