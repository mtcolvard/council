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
      alt: 'sacrifice_back',
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
      alt: 'left_head_close',
      title: 'Immigrant in Sicily Series',
      details: '',
      material: '',
      size: '',
      style: 'regular',
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
