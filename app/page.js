
import { HeroSection } from './components/HeroSection'
import { Nav } from './components/Nav'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'
import ContactDetails from './components/ContactDetails'
import EmailSection from './components/EmailSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Nav />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection/>
        <ProjectSection/>
        <EmailSection/>
        <ContactDetails/>
      </div>
      <Footer/>
    </main>
  )
}
