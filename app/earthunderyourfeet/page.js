import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import full from '../../public/Webp_images/earth_under_your_feet/full.webp'
import right from '../../public/Webp_images/earth_under_your_feet/right.webp'
import back from '../../public/Webp_images/earth_under_your_feet/back.webp'
import front from '../../public/Webp_images/earth_under_your_feet/front.webp'
import three_quarters from '../../public/Webp_images/earth_under_your_feet/three_quarters.webp'


const EarthUnderYourFeet = () => {
  const imageObject = [
    {
      link: '',
      src: full,
      alt: '',
      title: 'The Earth Under Your Feet',
      details: '',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: '',
      src: right,
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
      src: back,
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
      src: front,
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
      src: three_quarters,
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="nfull" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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

export default EarthUnderYourFeet

