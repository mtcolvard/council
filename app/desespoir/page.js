// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import sacrifice_main_torso_three_quarters from '../../public/Webp_images/sacrifice/sacrifice_main_torso_three_quarters.webp'
import image_1 from '../../public/Webp_images/desespoir/1.webp'
import image_2 from '../../public/Webp_images/desespoir/2.webp'


const Sacrifice = () => {
  const imageObject = [
    {
      link: "/desespoir",
      src: image_1,
      alt: '',
      title: 'Desespoir,',
      details: '2013, ',
      material: 'Red Resin,',
      size: '186 x 186 cm',
      style: 'regular',
      width: '100%',
      imageFoldernumber: 1,
    },
    {
      link: "/desespoir",
      src: image_2,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%',
      imageFoldernumber: 2,
    },

  ]

  return (
    <div className="bg-transparent">
      <Head>
        <title>Gabriella Furno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="site min-h-screen flex flex-col pt-4 px-4 md:pt-24 bg-white text-black">
        {/* <Navbar /> */}
        {/* <Header /> */}
        <div className="">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> */}
        </div>
        <main className="flex-[1_0_auto] px-2.5 md:px-8 text-sm md:text-3xl">
          <div className="leadImageContainer">
            <div className="featured md:px-52">
              <ImageArray imageObject={imageObject.slice(0, 1)} />
            </div>
          </div>
          <div className="content md:px-52 ">
            <ImageArray imageObject={imageObject.slice(1)} />
          </div>
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  )
}

export default Sacrifice
