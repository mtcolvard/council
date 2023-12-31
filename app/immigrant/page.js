// import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

// import Header from '../components/header.js'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'

import back_five_quarters from '../../public/Webp_images/black_lives/back_five_quarters.webp'
import left_highlights from '../../public/Webp_images/black_lives/left_highlights.webp'
import left from '../../public/Webp_images/black_lives/left.webp'

const ImmigrantInSicily = () => {
  const imageObject = [
    {
      link: '/immigrantinsicily',
      src: left,
      alt: 'left',
      title: 'Black Lives',
      details: '',
      material: 'Resin',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: '/immigrantinsicily',
      src: left_highlights,
      alt: 'left_highlights',
      title: 'Black Lives',
      details: '',
      material: 'Resin',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: '/immigrantinsicily',
      src: back_five_quarters,
      alt: 'back_five_quarters',
      title: 'Black Lives',
      details: '',
      material: 'Resin',
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

export default ImmigrantInSicily

