import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-gradient-to-l md:bg-gradient-to-r">
  <div>
    <div className="lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-16">
        <div className="justify-start ">
          <h1 className="text-4xl tracking-tight font-bold md:font-sans text-white sm:text-5xl md:text-6xl">
            <span>Plan your academic life effectively</span>
          </h1>
          <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 ">
            Ready to achieve greater results in less time ?
            Stop procrastinating and Start planning 
          </p>
          <div className="mt-5 sm:mt-8 sm:flex justify-start">
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
      </main>
    </div>
  </div>
  
</div>
  )
}