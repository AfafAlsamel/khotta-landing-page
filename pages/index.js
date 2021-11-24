import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/Feature';
import FeatureRe from '../components/FeatureRe';
import Illustration from '../public/planspic.svg';
import Illustration2 from '../public/reminderspic.svg';
import Illustration3 from '../public/rockets.svg';
import Illustration4 from '../public/spacecraft.svg';
import Qoute from '../public/qoute.svg';




import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="h-screen p-8 sm:p-12 bg-image md:bg-black bg-cover grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-1">
      <div className="py-24">
            
            <p className="text-3xl sm:text-4xl font-bold text-white pb-4">Plan your academic life effectively</p>
            <p className="mt-4 pb-4 text-white tracking-tight text-xl">
            Ready to achieve greater results in less time?
            Stop procrastinating and Start planning
            </p>
            <div className="mt-4 sm:mt-8 sm:flex justify-start">
            <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Download on Mac
                    </a>
                  </div>

                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-green-500 md:py-4 md:text-lg md:px-10">
                      Open khotta
                    </a>
                  </div>

            </div>
            
          </div>

      </div>
      <div className="p-8 sm:p-12">
       <Feature />
       <FeatureRe />
      </div>
      
      <div className="h-screen p-8 sm:p-12 bg-image2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-1">
      <div className="py-16">
            <h2 className="text-2xl tracking-tight font-bold md:font-sans text-white md:text-4xl pb-12">
              Have a flexible planning experience
              </h2>
              <p className="text-2xl font-bold text-white">Khotta</p>
              <p className="text-6xl font-bold text-white pb-4">Sirius</p>
            <p className="mt-3 text-white tracking-tight">
            Make Khotta more powerful, improve your GPA.
            Unlimited plans and schedules, reminders and more.
            </p>
            <div className="mt-4 sm:mt-8 sm:flex justify-start">
            <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Download on Mac
                    </a>
                  </div>
            </div>
          </div>
          <Image src={Illustration3} alt="Khotta" />
      </div>
      <div className="h-auto flex flex-col justify-center p-8">
        <div className="bg-black grid grid-cols-1 gap-4 rounded-md p-8">
            <h2 className="text-2xl tracking-tight font-bold md:font-sans text-white md:text-4xl">
              Join our testers
            </h2>
            <p className="mt-3 text-white tracking-tight sm:w-2/3">
            Become a beta tester for Khotta, we want to hear from you!
            Our goal is to make Khotta the best app for students. You’ll recieve emails telling you about the latest update of Khotta, with link to try it before all students.
            </p>
            <div className="mt-4 sm:mt-8 sm:flex justify-start">
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-1 text-right">
            <input type="email" className="px-8 py-3 w-full text-white bg-white rounded-md outline-none text-left mr-3" placeholder="Email"></input>
            <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Join us
                    </a>
                  </div>
            </form>
    
            </div>
        </div>
      </div>
      <div className="h-auto flex flex-col justify-center p-8 mb-24 mt-20">
      <Image src={Qoute} alt="Planning-qout" />
        <div className="mt-4 sm:mt-12 sm:flex justify-center">
        <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                      Open khotta
                    </a>
                  </div>
                  </div>  
                 </div>
    </>
  )
}