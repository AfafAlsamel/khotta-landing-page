import Image from 'next/image'
import Laptop from '../public/hero-images/laptop-pic.svg';
import Android from '../public/android.svg';
import Iphone from '../public/iphone.svg';

import ButtonPrimary from '../components/misc/ButtonPrimary';
import ButtonSecondry from '../components/misc/ButtonSecondry';
import JoinUsForm from '../components/JoinUsForm';
import HeroSection from '../components/HeroSection';

export default function Download() {

    return (
    <div>
  
      <HeroSection
        title="Get Khotta on all your  device"
        description="An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile."
        button1={<ButtonPrimary>Download on Mac</ButtonPrimary>}
        button2={<ButtonSecondry>Open Khotta</ButtonSecondry>}
        illustration={Laptop}
        alt="Laptop"
        illusWidth="450"
        addClass="text-center"
       />

       
        <div className="grid grid-cols-1 md:grid-cols-2 lx:grid-cols-2 p-8 gap-4 bg-mainbg">

          <div className="grid-cols-1 bg-white shadow sm:mt-24 h-auto text-center rounded-md">
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

          <div className="grid-cols-1 bg-white shadow sm:mb-24 h-auto text-center rounded-md">
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

       <JoinUsForm />

    </div>
    )

}