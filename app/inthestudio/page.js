import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import one from '../../public/Webp_images/in_the_studio/one.webp'
import two from '../../public/Webp_images/in_the_studio/two.webp'
import three from '../../public/Webp_images/in_the_studio/three.webp'
import thrree from '../../public/Webp_images/in_the_studio/thrree.webp'
import thrrree from '../../public/Webp_images/in_the_studio/thrrree.webp'
import image_1 from '../../public/Webp_images/in_the_studio/1.webp'
import image_2 from '../../public/Webp_images/in_the_studio/2.webp'
import image_3 from '../../public/Webp_images/in_the_studio/3.webp'
import image_4 from '../../public/Webp_images/in_the_studio/4.webp'
import image_5 from '../../public/Webp_images/in_the_studio/5.webp'
import image_6 from '../../public/Webp_images/in_the_studio/6.webp'
import image_7 from '../../public/Webp_images/in_the_studio/7.webp'
import image_8 from '../../public/Webp_images/in_the_studio/8.webp'


const InTheStudio = () => {
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
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: one,
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
      src: two,
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
      src: thrree,
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
      src: image_8,
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
      src: thrrree,
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
      src: three,
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
              <div><span className="italic">In the Studio</span></div>
            </div>
            <div className="pictureCapitionComputer mb-6">
              <div className="hidden md:block ">
                <div><span className="italic text-3xl">In the Studio</span></div>
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

export default InTheStudio

