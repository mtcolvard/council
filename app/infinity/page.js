// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'
import ImageArray from '../components/images-array.js'

import infinity_back_full from '../../public/sculpture/infinity/infinity_back_full.jpg'
import infinity_back_three_quarters from '../../public/sculpture/infinity/infinity_back_three_quarters.jpg'
import infinity_back_torso from '../../public/sculpture/infinity/infinity_back_torso.jpg'
import infinity_full from '../../public/sculpture/infinity/infinity_full.jpg'
import infinity_torso from '../../public/sculpture/infinity/infinity_torso.jpg'




const Infinity = () => {
  const imageObject = [
    {
      link: 'null',
      src: infinity_torso,
      alt: "Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched",
      title: 'Infinity, ',
      details: '2014, ',
      material: 'Cast Aluminum,',
      size: '218 x 200 cm',
      style: 'regular',
      width: '100%'
    },
    {
      link: 'null',
      src: infinity_back_three_quarters,
      alt: "Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched",
      title: 'Infinity, ',
      details: '2014, ',
      material: 'Cast Aluminum,',
      size: '218 x 200 cm',
      style: 'regular',
      width: '100%'
    },
    {
      link: 'null',
      src: infinity_full,
      alt: "Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched",
      title: 'Infinity, ',
      details: '2014, ',
      material: 'Cast Aluminum,',
      size: '218 x 200 cm',
      style: 'regular',
      width: '100%'
    },
    {
      link: 'null',
      src: infinity_back_torso,
      alt: "Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched",
      title: 'Infinity, ',
      details: '2014, ',
      material: 'Cast Aluminum,',
      size: '218 x 200 cm',
      style: 'regular',
      width: '100%'
    },   
    {
      link: 'null',
      src: infinity_back_full,
      alt: "Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched",
      title: 'Infinity, ',
      details: '2014, ',
      material: 'Cast Aluminum,',
      size: '218 x 200 cm',
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
        <div className="">
          <h1 className="text-2xl p-4 justify-center"> Gabriella Furno </h1>
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

export default Infinity
