// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'
// import Header from '../components/header.js'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import front_head_close from '../../public/Webp_images/metamorphose/front_head_close.webp'
import left_head_close from '../../public/Webp_images/metamorphose/left_head_close.webp'
import right_head_close from '../../public/Webp_images/metamorphose/right_head_close.webp'
import right_head_pillar from '../../public/Webp_images/metamorphose/right_head_pillar.webp'
import white_head_four_fifths from '../../public/Webp_images/metamorphose/white_head_four_fifths.webp'
import white_head_front from '../../public/Webp_images/metamorphose/white_head_front.webp'
import white_head_left from '../../public/Webp_images/metamorphose/white_head_left.webp'
import white_head_three_quarters from '../../public/Webp_images/metamorphose/white_head_three_quarters.webp'



const Metamorphose = () => {
  const imageObject = [
    {
      link: "",
      src: front_head_close,
      alt: "",
      title: 'Metamorphose',
      details: ', ',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: "",
      src: left_head_close,
      alt: "",
      title: '',
      details: ', ',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: "",
      src: right_head_close,
      alt: "",
      title: '',
      details: ', ',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: "",
      src: right_head_pillar,
      alt: "",
      title: '',
      details: ', ',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: "",
      src: white_head_four_fifths,
      alt: "",
      title: '',
      details: ', ',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: "",
      src: white_head_front,
      alt: "",
      title: '',
      details: ', ',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: "",
      src: white_head_left,
      alt: "",
      title: '',
      details: ', ',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
    },
    {
      link: "",
      src: white_head_three_quarters,
      alt: "",
      title: '',
      details: ', ',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%'
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

export default Metamorphose
