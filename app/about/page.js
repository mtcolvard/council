
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/navigation'
import gabriellaPhotographTwo from '../../public/Webp_images/about/about_two.webp'



import { usePathname } from 'next/navigation'

export default function About() {
  return (
    <>
      <Navigation/>
      <div className="mx-4 mt-6 md:px-40 ">
        <hr className="mb-6"></hr>
        <div className="hidden sm:grid grid-cols-2">
          <div>
            <h2 className="mt-6 mb-6 "><span className="font-bold">Gabriella Furno</span> (b. Paris, 1986)</h2>
            <p className="mb-6">Born in Paris in 1986, Gabriella Furno is a sculptor whose work spans across Palermo and Berlin. A graduate of the Beaux-Arts in Paris and the Repin Academy in St. Petersburg, she spends much of her time in Palermo, where her main studio is located in the historic Palazzo Merlo. This space serves as the heart of her creative process.
            </p>
            <p className="mb-6">Gabriella's artistic journey is deeply influenced by her family's history of exile, a narrative that stretches across generations and the shores of the Mediterranean. Her work grapples with the profound question: why do so many individuals perish in the Mediterranean Sea while attempting to reach Europe? Through sculpture, she seeks to offer a new perspective on these individuals, challenging the dehumanization they face and inviting viewers to consider the value of human life today.
            </p>
            <p className="mb-6">Her sculptures, often monumental in scale, possess a unique vitality that reconnects us with essential energies. These works, larger than life, use geometry, color, and form to invite the viewer into a new dimension of artistic experience. Gabriella’s realistic depictions of the human form are intertwined with abstract geometrical explorations, creating a vibrant universe that reflects the complexities of human existence.
            </p>
            <p className="mb-6">Gabriella’s work is also a dialogue between the past and the present. She believes that our collective memory and ancestral energies are embodied in her sculptures and paintings. Her creations, crafted from materials like clay, plaster, aluminum, bronze, steel rods, concrete, and resin, are a testament to the enduring traditions of historical sculpture, while also pushing the boundaries of modern artistic practice.
            </p>
            <p className="mb-6">In her creative process, she starts with real-life models, meticulously translating their forms into sculptures that are initially shaped in clay with a metal and wood structure, then cast in plaster, and finally transformed into materials like bronze or aluminum. Her two-dimensional works on canvas and paper serve as a bridge between the second and third dimensions, exploring the geometry of body movements with dynamic lines and vivid colors.
            </p>
            <p className="mb-6">Gabriella Furno’s recent paintings, characterized by a vibrant palette, synthesize the movement of dancers in space, capturing lines, gravity, and dynamics to build a sense of movement through color. Her art is an invitation to reflect on human life and experience, offering a vision of a more just and humane world.
            </p>
          </div>
          <div className=" mt-6 pl-12">
            <Image
            src={gabriellaPhotographTwo}
            alt="Photograph of the artist Gabriella Furno"
            height="750"
            />
          </div>
        </div>
        <div className="sm:hidden">
          <div className=" mt-6">
            <Image
              src={gabriellaPhotographTwo}
              alt="Photograph of the artist Gabriella Furno"
              height="500"
            />
          </div>
          <div>
            <h2 className="mt-6 mb-6 "><span className="font-bold">Gabriella Furno</span> (b. tk, tk.)</h2>
            <p className="mb-6">Working on large forms is a necessity in itself. I think my drive or desire for creating these large works, connects me to a particular emotion hidden inside me; it’s an urge, a necessity, like feeling hungry.
            </p>
            <p className="mb-6">What is the meaning of where we come from? The space around us, the universe, feels like an empty place without answers. But the rhythm that we have every day is the fact that time passes whatever happens. The empty space contrasts to the speed surrounding us. This particular tension is the search for movement in forms. Sculpture gives the emotion of anxiety about what is really happening around us.
            </p>
            <p className="mb-6">The human body, for me, is an incredible source of infinity of movement. It’s the connection to rhythm that inspires color for me, according to each unique shape. It can be abstract or figurative, it doesn’t matter, what is important for me, is to find the energy of the subject and materials, and to set these free in my work. Its a bit of a mystic approach.
            </p>
            <p className="mb-6">When I work with a model, I like to expose the true beauty of my subject, often hidden by society’s norms, creating an object that will express the desires and confidence of the subject and break down society’s constrictive beliefs. In the end the object is the result of a performance of a life experiment. Desire is fundamental, as it is the force of life and this is actually what I am looking to express when I am about to create a new piece.
            </p>
            <p className="mb-6">I see a heroic figure in my African models. After centuries of Western oppression, I want to show their true power, resistance and dynamics, to return the dignity they may not feel in that moment. Like an athlete that pushes himself to the limit, I like to push the possibility of the sculpture to a physical aspect.
            </p>
            <p className="mb-6">The adrenaline I feel to succeed in expressing this as a performance is vital to release the energy boiling inside my subject. They become a sort of spiritual object looking at the world. Looking at tension is like giving birth to a feeling and vision that take place in the space. Sculptures are forms that are trying to come out from inside and connect to each other like a new language; this idea has to always stay up.
            </p>
            <p className="mb-6">I like the fact that Sculpture reminds us how small we are in the universe. It’s very important for me to work on the impact that it has on the viewer, so we understand ourselves more, avoiding the borders that society creates around us.
            </p>
          </div>
          
        </div>
      </div>
    </>
  )
}
