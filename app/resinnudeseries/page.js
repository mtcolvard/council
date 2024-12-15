// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'

import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

// import pandora_back_three_quarters from '../../public/Webp_images/pandora/pandora_back_three_quarters.webp'
// import pandora_back_torso from '../../public/Webp_images/pandora/pandora_back_torso.webp'
// import pandora_back from '../../public/Webp_images/pandora/pandora_back.webp'
// import pandora_full_three_quarters from '../../public/Webp_images/pandora/pandora_full_three_quarters.webp'
// import pandora_head from '../../public/Webp_images/pandora/pandora_head.webp'
// import pandora_left_full from '../../public/Webp_images/pandora/pandora_left_full.webp'
// import pandora_left_torso from '../../public/Webp_images/pandora/pandora_left_torso.webp'
// import pandora_right from '../../public/Webp_images/pandora/pandora_right.webp'
import image_2 from '../../public/Webp_images/infinity_resin/2.webp'
import image_1 from '../../public/Webp_images/desespoir/1.webp'




const ResinNudeSeries = () => {
  const imageObject = [
    {
      link: "/desespoir",
      src: image_1,
      alt: "tk.",
      title: 'Desespoir ',
      details: 'tk., ',
      material: 'Red Resin',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/infinityresin",
      src: image_2,
      alt: "tk.",
      title: 'Infinity ',
      details: 'tk., ',
      material: 'Black Resin',
      size: '',
      style: 'regular',
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
              <div><span className="italic">Resin Nude Series</span></div>
            </div>
            <div className="pictureCapitionComputer mb-6">
              <div className="hidden md:block ">
                <div><span className="italic text-3xl">Resin Nude Series</span></div>
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

export default ResinNudeSeries


