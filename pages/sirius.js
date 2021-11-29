import Image from 'next/image'
import FAQ from '../components/faq';

import HeroSection from "../components/HeroSection";
import JoinUsForm from '../components/JoinUsForm';
import ButtonSecondry from "../components/misc/ButtonSecondry";
import SiriusRockets from "../public/hero-images/sirius-rockets-pic.svg"
import DoubleArrow from "../public/sirius-features/double-arrow.svg"
import Outcomes from "../public/sirius-features/outcomes.svg"
import WorkDone from "../public/sirius-features/work-done.svg"




export default function Sirius() {

    return(
        <>
        <HeroSection 
          title="Khotta Sirius"
          description="Get a flexible planning experience and improve your GPA. Unlimited plans and schedules, reminders and more."
          button1={<ButtonSecondry>Download</ButtonSecondry>}
          button2={<ButtonSecondry>Open</ButtonSecondry>}
          addClass="flex justify-end items-end"
          illustration={SiriusRockets}
          illusWidth={450}
          alt="siruis"
        />



        <div className="sm:flex sm:h-screen sm:p-12 grid grid-cols-1 gap-12 p-8 items-center bg-mainbg ">
            <div className="p-4 text-center sm:text-left">
                <Image src={DoubleArrow} alt="Flexible" />
                <p className="text-2xl font-bold text-black">Be flexible to change</p>
                <p className="text-black tracking-tight">Follow short-range planning technique. Adjust your plans, schedule and tasks to fast changes.</p>
            </div>
            <div className="p-4 text-center sm:text-left">
                <Image src={Outcomes} alt="Flexible" />
                <p className="text-2xl font-bold text-black">Act toward desired outcomes</p>
                <p className="text-black tracking-tight">Try out different plans until reaching the most beneficial, flexible and effective plan for you.</p>
            </div>
            <div className="p-4 text-center sm:text-left">
                <Image src={WorkDone} alt="Flexible" />
                <p className="text-2xl font-bold text-black">Get much more work done</p>
                <p className="text-black tracking-tight">With reminders, you'll know what tasks needs to be completed, and what classes need to be attended.</p>
            </div>
        </div>

        <JoinUsForm />

        <FAQ />








        </>
    )



}
