// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'

import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import image_1 from '../../public/Webp_images/the_immigrant_in_sicily/2.webp'
import image_2 from '../../public/Webp_images/earth_under_your_feet/three_quarters.webp'





const MonumentalWorks = () => {
  const imageObject = [
    {
      link: "/theimmigrantinsicily",
      src: image_1,
      alt: "The Immigrant in Sicily",
      title: 'The Immigrant in Sicily',
      details: '',
      material: 'Mixed Resin',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/earthunderyourfeet",
      src: image_2,
      alt: "Earth Under Your Feet - Giraffe",
      title: 'Earth Under Your Feet',
      details: '',
      material: 'Aluminum',
      size: '',
      style: 'skinny',
      width: '100%'
    },

  ]

  return (
    <div className="bg-transparent">
      <Navigation />
      <div className="site min-h-screen flex flex-col mx-4 md:px-40  bg-white text-black">
        <main className="">
          <div className="text-base mt-4 md:m-0 md:pt-4">
            <div className="pictureCaptionMobile text-sm md:hidden mb-6">
              <div><span className="italic">Monumental Works</span></div>
            </div>
            <div className="pictureCapitionComputer mb-6">
              <div className="hidden md:block ">
                <div><span className="italic text-3xl">Monumental Works</span></div>
              </div>
            </div>
          </div>
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

export default MonumentalWorks


