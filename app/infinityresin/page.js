import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import image_1 from '../../public/Webp_images/infinity_resin/1.webp'
import image_2 from '../../public/Webp_images/infinity_resin/2.webp'
import image_3 from '../../public/Webp_images/infinity_resin/3.webp'
import image_4 from '../../public/Webp_images/infinity_resin/4.webp'
import image_5 from '../../public/Webp_images/infinity_resin/5.webp'
import image_6 from '../../public/Webp_images/infinity_resin/6.webp'
import image_7 from '../../public/Webp_images/infinity_resin/7.webp'
import image_8 from '../../public/Webp_images/infinity_resin/8.webp'
import image_9 from '../../public/Webp_images/infinity_resin/9.webp'


const InfinityResin = () => {
  const imageObject = [

    {
      link: '',
      src: image_1,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'regular',
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
    {
      link: '',
      src: image_4,
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
      src: image_5,
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
      src: image_6,
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
      src: image_8,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: image_9,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: image_7,
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
      src: image_2,
      alt: '',
      title: '',
      details: '',
      material: '',
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
              <div><span className="italic">Infinity - Black Resin</span></div>
            </div>
            <div className="pictureCapitionComputer mb-6">
              <div className="hidden md:block ">
                <div><span className="italic text-3xl">Infinity - Black Resin</span></div>
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

export default InfinityResin

