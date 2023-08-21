// import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import Header from '../components/header.js'
import Navigation from '../components/navigation.js'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'
import ImageArray from '../components/images-array.js'

import sacrifice_main_torso_three_quarters from '../../public/Webp_images/sacrifice/sacrifice_main_torso_three_quarters.webp'
import infinityBackThreeQuarters from '../../public/Webp_images/infinity/infinity_back_three_quarters.webp'
import pandora_back_three_quarters from '../../public/Webp_images/pandora/pandora_back_three_quarters.webp'
import classicalWomanAndMan from '../../public/Webp_images/classical/classical_woman_and_man.webp'
// import classicalAlabasterBust from '../public/Webp_images/classical/classical_alabaster_bust.webp'
import white_head_four_fifths from '../../public/Webp_images/metamorphose/white_head_four_fifths.webp'

const Sculptures = () => {
  const imageObject = [
    {
      link: "/sacrifice",
      src: sacrifice_main_torso_three_quarters,
      alt: "Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched",
      title: 'Sacrifice',
      details: '2013, ',
      material: '    Cast Aluminum',
      size: '186cm,',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/infinity",
      src: infinityBackThreeQuarters,
      alt: "Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched",
      title: 'Infinity ',
      details: '2014, ',
      material: ' Cast Aluminum',
      size: '200cm,',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/pandora",
      src: pandora_back_three_quarters,
      alt: "Pandora: a 230 cm tall cast aluminium sculpture of a beautiful African woman, contrapposto with hands framing her head",
      title: 'Pandora ',
      details: '2013, ',
      material: ' Cast Aluminum',
      size: '230cm,',
      style: 'regular',
      width: '100%'
    },
    {
      link:"/metamorphose",
      src: white_head_four_fifths,
      alt:"Metamorphose: a 36 cm tall sparklely green gray black resin sculpture of the head of a Nigerian man",
      title: 'Metamorphose ',
      details: '2017, ',
      material: ' Cast Resin',
      size: '156cm,',
      style: 'skinny',
      width: '50%'
    },
    // {
    //   link:'/works/exhibitions/palazzo-installation',
    //   src:classicalAlabasterBust,
    //   alt: 'tk',
    //   title: 'Woman ',
    //   details: '2013, ',
    //   material: 'Plaster,',
    //   size: '40  x 40 cm',
    //   style: 'regular',
    //   width: '100%'
    // }

  ]

  return (
    <div className="bg-transparent">
        <Navigation />
      <div className="site min-h-screen flex flex-col mx-4 md:px-40  bg-white text-black">
        {/* <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div> */}
        <main className="">
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

export default Sculptures

// flex - [1_0_auto]