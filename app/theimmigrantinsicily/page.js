import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import image_1 from '../../public/Webp_images/the_immigrant_in_sicily/1.webp'
import image_2 from '../../public/Webp_images/the_immigrant_in_sicily/2.webp'
import image_3 from '../../public/Webp_images/the_immigrant_in_sicily/3.webp'
import image_4 from '../../public/Webp_images/the_immigrant_in_sicily/4.webp'
import image_5 from '../../public/Webp_images/the_immigrant_in_sicily/5.webp'
import image_6 from '../../public/Webp_images/the_immigrant_in_sicily/6.webp'
import image_7 from '../../public/Webp_images/the_immigrant_in_sicily/7.webp'
import image_8 from '../../public/Webp_images/the_immigrant_in_sicily/8.webp'
import image_10 from '../../public/Webp_images/the_immigrant_in_sicily/10.webp'
import image_11 from '../../public/Webp_images/the_immigrant_in_sicily/11.webp'
import image_12 from '../../public/Webp_images/the_immigrant_in_sicily/12.webp'
import image_13 from '../../public/Webp_images/the_immigrant_in_sicily/13.webp'
import image_14 from '../../public/Webp_images/the_immigrant_in_sicily/14.webp'


const TheImmigrantInSicily = () => {
  const imageObject = [

    {
      link: '',
      src: image_1,
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
      src: image_7,
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
      src: image_10,
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
      src: image_11,
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
      src: image_12,
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
      src: image_13,
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
      src: image_14,
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
              <div><span className="italic">The Immigrant in Sicily</span></div>
            </div>
            <div className="pictureCapitionComputer mb-6">
              <div className="hidden md:block ">
                <div><span className="italic text-3xl">The Immigrant in Sicily</span></div>
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

export default TheImmigrantInSicily

