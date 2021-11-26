import Image from 'next/image'
import Laptop from '../public/hero-images/laptop-pic.svg';
import Android from '../public/android.svg';
import Iphone from '../public/iphone.svg';

import ButtonPrimary from '../components/misc/ButtonPrimary';
import ButtonSecondry from '../components/misc/ButtonSecondry';

export default function Home() {

    return (
    <div>
        <div className="h-auto p-8 sm:p-12 bg-image2 sm:bg-image bg-cover grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-2">

          <div className="py-24">
             <p className="text-3xl sm:text-4xl font-bold text-white pb-4">
               Get Khotta on all your  device
             </p>
             <p className="mt-4 pb-4 text-white tracking-tight text-xl">
               An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.
             </p>
             <div className="mt-4 sm:mt-8 sm:flex justify-start">
               <ButtonPrimary>Download on Mac</ButtonPrimary>
               <ButtonSecondry>Open Khotta</ButtonSecondry>
             </div>
          </div>
          
          <div className="text-center">
            <Image
              src={Laptop}
              alt="Space craft of Khotta"
              width="450"
            />
          </div>
          
        </div>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lx:grid-cols-2 p-8 gap-4 bg-mainbg">
                <div className="grid-cols-1 bg-white shadow mt-24 h-auto text-center rounded-md">
                  <p className="text-3xl sm:text-4xl font-bold text-black pt-4">iOS</p>
                  <div className="mx-12 my-4 sm:flex justify-center">
                    <ButtonPrimary>Download</ButtonPrimary>
                   </div>
                  <Image
                    src={Android}
                    alt="Space craft of Khotta"
                    width="450"
                  />
                 
                </div>
                <div className="grid-cols-1 bg-white shadow mb-24 h-auto text-center rounded-md">
                <p className="text-3xl sm:text-4xl font-bold text-black pt-4">Android</p>
                <div className="mx-12 my-4 sm:flex justify-center">
                    <ButtonPrimary>Download</ButtonPrimary>
                   </div>
                  <Image
                    src={Iphone}
                    alt="Space craft of Khotta"
                    width="450"
                  /> 
                  
                  </div>

            </div>

        </div>


        <div className="h-auto flex flex-col justify-center p-8 bg-mainbg">
        <div className="bg-black grid grid-cols-1 gap-4 rounded-md p-8">
            <h2 className="text-2xl tracking-tight font-bold md:font-sans text-white md:text-4xl">
              Join our testers
            </h2>
            <p className="mt-3 text-white tracking-tight sm:w-2/3">
                Become a beta tester for Khotta, we want to hear from you!
                Our goal is to make Khotta the best app for students.
                You’ll recieve emails telling you about the latest update of Khotta, with link to try it before all students.
            </p>
            <div className="mt-4 sm:mt-8 sm:flex justify-start">
              <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-1 text-right">
                 <input 
                   type="email"
                   className="px-8 py-3 w-full text-white bg-white rounded-md outline-none text-left mr-3" 
                   placeholder="Email">
                 </input>
                 <ButtonPrimary>Join</ButtonPrimary>
              </form>
            </div>
        </div>
      </div>


        
    </div>
    )

}