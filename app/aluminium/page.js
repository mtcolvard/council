// import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'
// import Header from '../components/header.js'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'

import sacrifice_main_torso_three_quarters from '../../public/Webp_images/sacrifice/sacrifice_main_torso_three_quarters.webp'
import infinityBackThreeQuarters from '../../public/Webp_images/infinity/infinity_back_three_quarters.webp'
import pandora_back_three_quarters from '../../public/Webp_images/pandora/pandora_back_three_quarters.webp'

const AluminiumSeries = () => {
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
  ]

  return (
    <div className="bg-transparent">
      <Navigation />
      <main className="">
        <div className="box-border block px-5 md:px-16 ">
          <div className="leadImageContainer">
            <div className="featured ">
              <ImageArray imageObject={imageObject.slice(0, 1)} />
            </div>
          </div>
          <div className="content ">
            <ImageArray imageObject={imageObject.slice(1)} />
          </div>
          {/* <Footer /> */}
        </div>
      </main>
    </div>
  )






}

export default AluminiumSeries

