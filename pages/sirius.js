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
                <p className="text-black tracking-tight">With reminders, you will know what tasks needs to be completed, and what classes need to be attended.</p>
            </div>
        </div>


         <div className="h-auto p-8 sm:p-12 bg-siriusbg grid grid-cols-1 gap-4">
         <div className="py-16">
           <h2 className="text-2xl tracking-tight font-bold md:font-sans text-white md:text-4xl pb-8">
             Best for students 
           </h2>
           <p className="mt-3 text-white  tracking-tight">
             By getting Sirius, you will not get a flexible planning experience only but also help us (as students😄) to make Khota the best app for students.
           </p>


           <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row w-full justify-start">

               <div className=" flex items-start justify-between rounded-md shadow bg-secondryblack p-4" >
                   <div className="flex flex-col mr-4">
                      <p className="text-base sm:text-lg text-white font-bold"><span className="text-primary">$0.99 </span>for 1 month</p>
                      <p className="text-white">$0.99 for 1 month</p>
                   </div>
                   <button className="w-auto flex justify-center border border-transparent py-4 px-4 font-medium rounded-md text-white bg-primary hover:bg-green-700" >
                    Subscribe
                   </button>
               </div>

         

               <div className="w-auto flex items-start justify-between rounded-md shadow bg-secondryblack p-4" >
                   <div className="flex flex-col mr-4">
                      <p className="text-base sm:text-lg text-white font-bold"><span className="text-primary">$0.99 </span>for 1 month</p>
                      <p className="text-white">$0.99 for 1 month</p>
                   </div>
                   <button className="w-auto flex justify-center border border-transparent py-4 px-4 font-medium rounded-md text-white bg-primary hover:bg-green-700" >
                    Subscribe
                   </button>
               </div>


           </div>

           <p className="mt-16 text-base sm:text-lg text-white font-bold">Don’t you think it affordable? <span className="text-primary">Tweet us</span></p>
          </div>


          <div className="grid grid-col">
             <p className="text-3xl sm:text-4xl font-bold text-white pb-4">
               Short-range plans
              </p>
              <p className="mt-4 pb-4 text-white tracking-tight sm:w-3/4">
                 The standard short-range plan will represent annual or semiannual operations with a short-term deliverable. These short-term plans cover the specifics of each day-to-day operation.
              </p>
          </div>

          <div className="grid grid-col">
             <p className="text-3xl sm:text-4xl font-bold text-white pb-4">
               How planning Improves my GPA?
              </p>
              <p className="mt-4 pb-4 text-white tracking-tight sm:w-3/4">
               Britton and Tesser (1991) found a positive correlation between short-range planning and grade point average (GPA) of students,which suggests that students who are actively engaged in time management processes are likely to see attainment benefits.              </p>
          </div>


         </div>



        <JoinUsForm />

        <FAQ />








        </>
    )



}
