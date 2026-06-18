import { Link } from 'react-router-dom'

const paragraphStyles = "mt-4 text-left [&_a]:text-blue-600 [&_a:active]:text-red-600 [&_a]:underline [&_a]:decoration-2"
const linkStyles = "text-blue-600 active:text-red-600 underline decoration-2"
function Pronunciation() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 py-12 lg:px-16">
      <div className="max-w-8xl font-mono [&_h1,&_h2,&_p]:text-shadow-xs">
            <div className="relative flex items-center justify-center">
              <Link to="/" className={`absolute left-0 text-lg ${linkStyles}`}>
                &lt;&lt; Back
              </Link>
              <h1 className="text-6xl font-bold text-center">How does one pronounce Zublek?</h1>
            </div>
            <p className={paragraphStyles}>
                It's actually quite simple!
                <ul className={"list-disc list-inside"}>
                    <li>The "Z" as in "Zebra"</li>
                    <li>The "u" as in "Umbrella"</li>
                    <li>The "b" as in "Banana"</li>
                    <li>The "l" as in "Lion"</li>
                    <li>The "e" as in "Elephant"</li>
                    <li>The "k" as in "Kangaroo"</li>
                </ul>
            </p>
            <p className={paragraphStyles}>
                You may notice that every single letter here is pronounced the same way as in Kindergarten phonics.
                Despite this, everyone keeps calling me "Zoob-lek", pronouncing the "U" like in "Uzbekistan" instead.
                Somehow, I have invented a word that is more likely be pronounced correctly by a 5 year old than by an adult.
            </p>
            <p className={paragraphStyles}>
              The word "Zublek" is based on the name of the programming language <a href="https://esolangs.org/wiki/Subleq">Subleq</a>, 
              which is a one instruction language that subtracts the value of two pointers and jumps to the third pointer if the result is
              less than or equal to zero.
            </p>
        </div>
    </div>
  )
}

export default Pronunciation