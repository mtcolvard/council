// import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/navigation.js'
import ImageArray from '../components/images-array.js'

// import Header from '../components/header.js'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'

import gabby_and_friend from '../../public/Webp_images/invisible_energy/gabby_and_friend.webp'
import one from '../../public/Webp_images/invisible_energy/one.webp'
import two from '../../public/Webp_images/invisible_energy/two.webp'
import four from '../../public/Webp_images/invisible_energy/four.webp'
import six from '../../public/Webp_images/invisible_energy/six.webp'
import seven from '../../public/Webp_images/invisible_energy/seven.webp'

const InvisibleEnergy = () => {
  const imageObject = [
    {
      link: '',
      src: one,
      alt: 'gabby_and_friend',
      title: 'Invisible Energy',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: gabby_and_friend,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: two,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: four,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: six,
      alt: '',
      title: '',
      details: '',
      material: '',
      size: '',
      style: 'regular',
      width: '100%'
    },
    {
      link: '',
      src: seven,
      alt: '',
      title: '',
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

export default InvisibleEnergy

