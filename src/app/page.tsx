import About from "./dashboard/About/page"
import Gallery from "./dashboard/Gallery/page"
import Hero from "./dashboard/Hero/page"
import Motivate from "./dashboard/Motivate/page"
// import Contact from "./dashboard/Hero/page"
import Project from "./dashboard/Projects/page"
import Skills from "./dashboard/Skills/page"

const page = () => {
  return (
    <div className="w-full">

      <Hero />
      <Skills />
      <Project />
      < Motivate />
      <Gallery />
      <About />

    </div>
  )
}

export default page