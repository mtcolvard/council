// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'
// import Header from '../components/header.js'
import Navigation  from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

import sacrifice_main_torso_three_quarters from '../../public/Webp_images/sacrifice/sacrifice_main_torso_three_quarters.webp'
import sacrifice_full from '../../public/Webp_images/sacrifice/sacrifice_full.webp'
import sacrifice_back_torso from '../../public/Webp_images/sacrifice/sacrifice_back_torso.webp'
import sacrifice_full_three_quarters from '../../public/Webp_images/sacrifice/sacrifice_full_three_quarters.webp'
import sacrifice_torso from '../../public/Webp_images/sacrifice/sacrifice_torso.webp'
import sacrifice_back from '../../public/Webp_images/sacrifice/sacrifice_back.webp'

const Sacrifice = () => {
  const imageObject = [
    {
      link: "/sacrifice",
      src: sacrifice_back_torso,
      alt: "Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched",
      title: 'Sacrifice,',
      details: '2013, ',
      material: 'Cast Aluminum,',
      size: '186 x 186 cm',
      style: 'regular',
      width: '100%',
      imageFoldernumber: 3,
    }, 
    {
      link: "/sacrifice",
      src: sacrifice_back,
      alt: "Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched",
      title: ', ',
      details: '2013, ',
      material: '',
      size: '',
      style: 'regular',
      width: '100%',
      imageFoldernumber: 4,
    },
    {
      link: "/sacrifice",
      src: sacrifice_main_torso_three_quarters,
      alt: "Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched",
      title: '',
      details: '2013, ',
      material: '',
      size: '',
      style: 'regular',
      width: '100%',
      imageFoldernumber:1,
    },
    {
      link: "/sacrifice",
      src: sacrifice_full,
      alt: "Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched",
      title: '',
      details: '2013, ',
      material: '',
      size: '',
      style: 'regular',
      width: '100%',
      imageFoldernumber: 5,
    },
    {
      link: "/sacrifice",
      src: sacrifice_torso,
      alt: "Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched",
      title: '',
      details: '2013, ',
      material: '',
      size: '',
      style: 'regular',
      width: '100%',
      imageFoldernumber: 2,
    },
    {
      link: "/sacrifice",
      src: sacrifice_full_three_quarters,
      alt: "Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched",
      title: '',
      details: '2013, ',
      material: '',
      size: '',
      style: 'regular',
      width: '100%',
      imageFoldernumber: 6,
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
