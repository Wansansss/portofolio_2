import HeaderSection from "@/components/HederSection"
import Navbar from '@/components/Navbar'
import About from '@/components/AboutSection'
import Projects from '@/components/Projects'
import Email from "@/components/Email"
import Footer from "@/components/Footer"
// import AchievementsSection from "@/components/AchievementsSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
    <div className='container mt-32 mx-auto py-4 px-12'>
    <HeaderSection />
    {/* <AchievementsSection /> */}
    <About />
    <Projects/>
    <Email/>
    </div>
   <Footer />
    
    </main>
  )
}
