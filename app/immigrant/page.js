// import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

// import Header from '../components/header.js'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'

import left_head_close from '../../public/Webp_images/metamorphose/left_head_close.webp'

const ImmigrationInSicily = () => {
  const imageObject = [
    {
      link: '',
      src: left_head_close,
      alt: 'left_head_close',
      title: 'Lucky',
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

export default ImmigrationInSicily
