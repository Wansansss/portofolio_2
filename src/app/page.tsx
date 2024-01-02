import Image from 'next/image'
import HeaderSection from "@/components/HederSection"
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
    <div className='container mt-32 mx-auto py-4 px-12'>
    <HeaderSection />
    </div>
   
    
    </main>
  )
}
