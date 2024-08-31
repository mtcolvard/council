import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/navigation'
import gabriellaCarving from '../../public/gabriella-carving.webp'

// export default function Contact() {
//   return (
//     <>
//       <Navigation />
//       <div className="mx-4 mt-6 md:px-40  object-center">
//         <Image
//           src={gabriellaCarving}
//           alt="Gabriella shaping a large sculpture's head"
//           height="500"
//         />
//         <h1 className="pt-6 text-lg">Studio Berlin</h1>
//         <div>
//           <p>Grossgorschenstrasse 7</p>
//           <p>10827 Berlin</p>
//         </div>

//         <h1 className="pt-6 text-lg">Studio Palermo</h1>
//         <div>
//           <p>Via Pacini, 113</p>
//           <p>90143 Palermo</p>
//         </div>

//         <div className="pt-6 ">
//           <a href="tel:+393493267015">+39 349 3267015</a>
//         </div>
//         <div>
//           <a href="mailto:gabriellafurno.gf@gmail.com">gabriellafurno.gf@gmail.com</a>
//         </div>
//       </div>
//     </>
//   )
// }



export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="mx-4 mt-6 md:px-40 ">
        <hr className="mb-6"></hr>
        <div className="hidden sm:grid grid-cols-4">
          <div className=" mt-6 pr-12 col-span-3">
            <Image
              src={gabriellaCarving}
              alt="Gabriella shaping a large sculpture's head"
              height="500"
            />
          </div>
          <div>
            <h1 className="mt-6 mb-3 text-lg">Studio Berlin</h1>
            <div>
              <p>Hauptstrasse 48</p>
              <p>13055 Berlin, Germany</p>
            </div>
            <h1 className="mt-12 mb-3 text-lg">Studio Palermo</h1>
            <div>
              <p>Via Merlo 20</p>
              <p>90133 Palermo, Italie</p>
            </div>
            <h1 className="mt-20 mb-3 text-lg">Contact</h1>
            <div>
              <a href="tel:+393493267015">+39 349 3267015</a>
            </div>
            <div>
              <a href="mailto:gabriellafurno.gf@gmail.com">gabriellafurno.gf@gmail.com</a>
            </div>
          </div>
          
        </div>
        <div className="sm:hidden">
          <div className=" mt-6">
            <Image
              src={gabriellaCarving}
              alt="Gabriella shaping a large sculpture's head"
              height="500"
            />
          </div>
          <div>
            <h1 className="mt-12 mb-1.5 text-lg">Studio Berlin</h1>
            <div>
              <p>Grossgorschenstrasse 7</p>
              <p>10827 Berlin</p>
            </div>
            <h1 className="mt-12 mb-1.5 text-lg">Studio Palermo</h1>
            <div>
              <p>Via Pacini, 113</p>
              <p>90143 Palermo</p>
            </div>
            <h1 className="mt-12 mb-1.5 text-lg">Contact</h1>
            <div>
              <a href="tel:+393493267015">+39 349 3267015</a>
            </div>
            <div>
              <a href="mailto:gabriellafurno.gf@gmail.com">gabriellafurno.gf@gmail.com</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

