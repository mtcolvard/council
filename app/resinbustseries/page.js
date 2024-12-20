// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'

import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import image_1 from '../../public/Webp_images/black_lives_matter/1.webp'
import image_2 from '../../public/Webp_images/metamorphose/left_head_close.webp'





const ResinBustSeries = () => {
  const imageObject = [
    {
      link: "/blacklivesmatter",
      src: image_1,
      alt: "tk.",
      title: 'Black Lives Matter ',
      details: 'tk., ',
      material: 'Black Resin',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: "/metamorphose",
      src: image_2,
      alt: "tk.",
      title: 'Metamorphose ',
      details: 'tk., ',
      material: 'Seaglass Resin',
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
              <div><span className="italic">Resin Bust Series</span></div>
            </div>
            <div className="pictureCapitionComputer mb-6">
              <div className="hidden md:block ">
                <div><span className="italic text-3xl">Resin Bust Series</span></div>
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

export default ResinBustSeries


