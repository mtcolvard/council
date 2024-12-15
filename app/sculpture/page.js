// import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

// import Header from '../components/header.js'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'

import gabby_and_friend from '../../public/Webp_images/invisible_energy/gabby_and_friend.webp'
import sacrifice_back from '../../public/Webp_images/sacrifice/sacrifice_back.webp'
import left_head_close from '../../public/Webp_images/metamorphose/left_head_close.webp'
import left from '../../public/Webp_images/black_lives/left.webp'
import three_quarters from '../../public/Webp_images/earth_under_your_feet/three_quarters.webp'
import image_1 from '../../public/Webp_images/desespoir/1.webp'

const SculptureSeries = () => {
  const imageObject = [
    {
      link: '/invisibleenergy',
      src: gabby_and_friend,
      alt: 'gabby_and_friend',
      title: 'Invisible Energy Series',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%',
    },
   
    {
      link: '/aluminium',
      src: sacrifice_back,
      alt: 'Aluminium Nude Series - Sacrifice',
      title: 'Aluminium Nude Series',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%',
    },
    
    {
      link: '/metamorphose',
      src: left_head_close,
      alt: 'Metamorphose Series - Resin Head',
      title: 'Metamorphose',
      details: '',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%',
    },
    {
      link: '/blacklives',
      src: image_1,
      alt: 'blacklives Series - Resin Head',
      title: 'Black Lives Matter',
      details: '',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%',
    },
    {
      link: '/desespoir',
      src: left,
      alt: 'desespoir Series - Red Resin',
      title: 'Desespoir',
      details: '',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%',
    },
    {
      link: '/earthunderyourfeet',
      src: three_quarters,
      alt: 'Earth Under Your Feet - Giraffe',
      title: 'Earth Under Your Feet',
      details: '',
      material: '',
      size: '',
      style: 'skinny',
      width: '100%',
    },
  ]

  return (
    <div className="bg-transparent">
      <Navigation />
      <main className="">
        <div className="md:px-20 md:my-11 bg-white text-black hidden sm:block ">
        </div>
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

export default SculptureSeries

