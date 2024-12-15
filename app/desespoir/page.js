// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import image_1 from '../../public/Webp_images/desespoir/1.webp'
import image_2 from '../../public/Webp_images/desespoir/2.webp'


const Desespoir = () => {
  const imageObject = [

    {
      link: '',
      src: image_1,
      alt: '',
      title: 'Desespoir',
      details: '',
      material: 'Red Resin',
      size: '',
      style: 'regular',
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
    
  ]

  return (
    <div className="bg-transparent">
      <Navigation />
      <div className="site min-h-screen flex flex-col mx-4 md:px-40  bg-white text-black">
        <main className="">
          <div className="text-base mt-4 md:m-0 md:pt-4">
            <div className="pictureCaptionMobile text-sm md:hidden mb-6">
              <div><span className="italic"></span></div>
            </div>
            <div className="pictureCapitionComputer mb-6">
              <div className="hidden md:block ">
                <div><span className="italic text-3xl"></span></div>
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

export default Desespoir

