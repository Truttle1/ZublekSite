import zublekImage from '../assets/zublek.png'

const paragraphStyles = "mt-4 text-left [&_a]:text-blue-600 [&_a:active]:text-red-600 [&_a]:underline [&_a]:decoration-2"
function Homepage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 px-8 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-16 lg:py-0">
      <div className="flex flex-1 justify-center lg:justify-end lg:pr-16">
        <div className="font-mono [&_h1,&_h2,&_p]:text-shadow-xs">
          <h1 className="text-6xl font-bold text-center [&_a]:text-green-900 [&_a:active]:text-red-600 [&_a]:underline [&_a]:decoration-2">Rawr! I'm <a href="/pronunciation">Zublek</a>!</h1>
          <h2 className="text-xl font-bold text-center">Aka Truttle1</h2>
          <p className={paragraphStyles}>
            I'm a Software Engineer currently living in San Francisco, CA. Professionally, I am a full-stack developer with experience in TypeScript (this site's in React), Python,
            Java, and a bit of Kotlin and Swift sometimes. For side projects, I've done a lot of weird things, like a patch for a SimCity bug on the SNES (coming soon), <a href="https://esolangs.org/wiki/Burnlike">reverse-engineering 
            a cellular automaton from 2005</a>, and writing a <a href="https://github.com/Truttle1/bf-compiler">self-hosting compiler in Brainf**k, 
            which can compile itself and was even used to compile an update to itself.</a>
          </p>

          <p className={paragraphStyles}>
            I also run a YouTube channel called <a href="https://youtube.com/@Truttle1">Truttle1</a>, where I post videos mainly about esoteric programming languages, old programming languages, and
            other interesting topics that I feel like making videos about.
          </p>

          <p className={paragraphStyles}>
            Oh yeah I'm also a <a href="https://www.furtrack.com/index/zublek">furry</a>.
          </p>

          <h3 className="mt-6 text-lg font-bold">
            Feel free to contact me on the socials below!
          </h3>
          <ul className={paragraphStyles + " list-disc list-inside"}>
            <li><a href="https://youtube.com/@Truttle1">YouTube</a></li>
            <li><a href="https://instagram.com/zublekderg">Instagram</a></li>
            <li><a href="https://github.com/Truttle1">GitHub</a></li>
            <li><a href="https://twitter.com/Truttle1">Xwitter (I don't use this much)</a></li>
            <li><a href="https://bsky.app/profile/truttle1.bsky.social">Bluesky (I use this slightly more)</a></li>
          </ul>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-end">
        <img
          src={zublekImage}
          alt="Zublek"
          className="max-h-[70vh] w-auto max-w-md object-contain"
        />
      </div>
    </div>
  )
}

export default Homepage
