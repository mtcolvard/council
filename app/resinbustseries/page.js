// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'

import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import pandora_back_three_quarters from '../../public/Webp_images/pandora/pandora_back_three_quarters.webp'
import pandora_back_torso from '../../public/Webp_images/pandora/pandora_back_torso.webp'
import pandora_back from '../../public/Webp_images/pandora/pandora_back.webp'
import pandora_full_three_quarters from '../../public/Webp_images/pandora/pandora_full_three_quarters.webp'
import pandora_head from '../../public/Webp_images/pandora/pandora_head.webp'
import pandora_left_full from '../../public/Webp_images/pandora/pandora_left_full.webp'
import pandora_left_torso from '../../public/Webp_images/pandora/pandora_left_torso.webp'
import pandora_right from '../../public/Webp_images/pandora/pandora_right.webp'



const ResinBustSeries = () => {
  const imageObject = [
    {
      link: "/pandora",
      src: pandora_back_three_quarters,
      alt: "tk.",
      title: 'Pandora, ',
      details: 'tk., ',
      material: 'Cast Aluminium,',
      size: 'tk.',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/pandora",
      src: pandora_back_torso,
      alt: "tk.",
      title: 'Pandora, ',
      details: 'tk., ',
      material: 'Cast Aluminium,',
      size: 'tk.',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/pandora",
      src: pandora_back,
      alt: "tk.",
      title: 'Pandora, ',
      details: 'tk., ',
      material: 'Cast Aluminium,',
      size: 'tk.',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/pandora",
      src: pandora_full_three_quarters,
      alt: "tk.",
      title: 'Pandora, ',
      details: 'tk., ',
      material: 'Cast Aluminium,',
      size: 'tk.',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/pandora",
      src: pandora_head,
      alt: "tk.",
      title: 'Pandora, ',
      details: 'tk., ',
      material: 'Cast Aluminium,',
      size: 'tk.',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/pandora",
      src: pandora_left_full,
      alt: "tk.",
      title: 'Pandora, ',
      details: 'tk., ',
      material: 'Cast Aluminium,',
      size: 'tk.',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/pandora",
      src: pandora_left_torso,
      alt: "tk.",
      title: 'Pandora, ',
      details: 'tk., ',
      material: 'Cast Aluminium,',
      size: 'tk.',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/pandora",
      src: pandora_right,
      alt: "tk.",
      title: 'Pandora, ',
      details: 'tk., ',
      material: 'Cast Aluminium,',
      size: 'tk.',
      style: 'regular',
      width: '100%'
    },
  ]

  return (
    <div className="bg-transparent">
      <Head>
        <title>Gabriella Furno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="site min-h-screen flex flex-col pt-4 px-4 md:pt-24 bg-white text-black">
        {/* <Navbar /> */}
        <Navigation />
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

export default ResinBustSeries
