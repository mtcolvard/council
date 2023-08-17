// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import Navbar from '../components/navbar.js'
// import Footer from '../components/footer.js'
import ImageArray from '../components/images-array.js'

import sacrifice_main_torso_three_quarters from '../../public/sculpture/sacrifice/sacrifice_main_torso_three_quarters.jpg'
import infinityBackThreeQuarters from '../../public/sculpture/infinity/infinity_back_three_quarters.jpg'
import pandoraBackThreeQuarters from '../../public/sculpture/pandora/pandora_back_three_quarters.jpg'
import classicalWomanAndMan from '../../public/sculpture/classical/classical_woman_and_man.jpg'
// import classicalAlabasterBust from '../public/sculpture/classical/classical_alabaster_bust.jpg'
import metamorphose_three_quarters from '../../public/sculpture/metamorphose/metamorphose_three_quarters.jpg'


// --font-family-serif: "Starling","Times New Roman",serif;
//   --color-grey: #a6a6a6;
//   --color-grey-light: #eee;
//   --gutter: 30px;
//   --margin-x-small: 20px;
//   --margin-small: 40px;
//   --margin-mid: 60px;
//   --margin-large: 80px;
//   --margin-x-large: 120px;
//   --margin-xx-large: 210px;
//   --sm-gutter: 10px;
//   --sm-margin-x-small: 15px;
//   --sm-margin-small: 20px;
//   --sm-margin-mid: 30px;
//   --sm-margin-large: 70px;
//   --sm-margin-x-large: 150px;
//   --sm-font-size-large: 19px;
//   --sm-font-size-body: 14px;
//   --sm-font-size-caption: 12px;

//   --md-font-size-large: 19px;
//   --md-font-size-body: 15px;
//   --md-font-size-caption: 12px;

//   --lg-font-size-large: 22px;
//   --lg-font-size-body: 18px;
//   --lg-font-size-caption: 15px;

//   --font-size-large: 19px;
//   --font-size-body: 15px;
//   --font-size-caption: 12px;

//   --line-height-body: 1.4;
//   --header-height: 90px;
//   --sm-header-height: 45px;

//   --square-frame: calc((100vw - (var(--gutter) * 2) - var(--margin-large)) / 2);
//   --page-width: 36.8em;
//   --wide-page-width: 44.6666666em;

const Home = () => {
  const imageObject = [
    {
      link: "/sacrifice",
      src: sacrifice_main_torso_three_quarters,
      alt: "Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched",
      title: 'Sacrifice, ',
      details: '2013, ',
      material: 'Cast Aluminum,',
      size: '186 x 186 cm',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/infinity",
      src: infinityBackThreeQuarters,
      alt: "Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched",
      title: 'Infinity, ',
      details: '2014, ',
      material: 'Cast Aluminum,',
      size: '218 x 200 cm',
      style: 'regular',
      width: '100%'
    },
    {
      link: "/works/sculpture/pandora",
      src: pandoraBackThreeQuarters,
      alt: "Pandora: a 230 cm tall cast aluminium sculpture of a beautiful African woman, contrapposto with hands framing her head",
      title: 'Pandora, ',
      details: '2013, ',
      material: 'Cast Aluminum,',
      size: '123 x 230 cm',
      style: 'regular',
      width: '100%'
    },
    {
      link:"/works/sculpture/metamorphose",
      src: metamorphose_three_quarters,
      alt:"Metamorphose: a 36 cm tall sparklely green gray black resin sculpture of the head of a Nigerian man",
      title: 'Metamorphose, ',
      details: '2017, ',
      material: 'Cast Resin,',
      size: '36 x 156 cm',
      style: 'skinny',
      width: '50%'
    },
    // {
    //   link:'/works/exhibitions/palazzo-installation',
    //   src:classicalAlabasterBust,
    //   alt: 'tk',
    //   title: 'Woman, ',
    //   details: '2013, ',
    //   material: 'Plaster,',
    //   size: '40  x 40 cm',
    //   style: 'regular',
    //   width: '100%'
    // }

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
          <h1 className="text-xl p-4"> Gabriella Furno </h1>
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

export default Home
