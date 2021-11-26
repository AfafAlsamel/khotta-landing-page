import Head from 'next/head'
import Image from 'next/image'
import Feature from '../components/Feature';
import FeatureRe from '../components/FeatureRe';
import PlanFeature from '../public/Illustrations/plans-pic.svg';
import ReminderFeatur from '../public/Illustrations/reminders-pic.svg';
import ScheduleFeatur from '../public/Illustrations/schedules-pic.svg';
import TaskFeatur from '../public/Illustrations/tasks-pic.svg';
import GPAFeatur from '../public/Illustrations/gpa-pic.svg';




import Rockets from '../public/rockets.svg';
import SpaceCraft from '../public/spaceCraft.svg';
import Qoute from '../public/qoute.svg';
import ButtonPrimary from '../components/misc/ButtonPrimary';
import ButtonSecondry from '../components/misc/ButtonSecondry';





export default function Home() {

  return (
    <>
      <div className="h-auto p-8 sm:p-12 bg-image2 sm:bg-image bg-cover grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-2">

        <div className="py-24">
           <p className="text-3xl sm:text-4xl font-bold text-white pb-4">
             Plan your academic life effectively
           </p>
           <p className="mt-4 pb-4 text-white tracking-tight text-xl">
             Ready to achieve greater results in less time?
             Stop procrastinating and Start planning
           </p>
           <div className="mt-4 sm:mt-8 sm:flex justify-start">
             <ButtonPrimary>Download on Mac</ButtonPrimary>
             <ButtonSecondry>Open Khotta</ButtonSecondry>
           </div>
        </div>

        <div className="text-right">
          <Image
            src={SpaceCraft}
            alt="Space craft of Khotta"
            width="250"
          />
        </div>

      </div>



      <div className="p-8 sm:p-12">
      
        <FeatureRe
          title="Set reminders so you dont forget" 
          description="It is easy to set to-dos, but it is hard to follow, reminders make the hard easy too." 
          alt="Khotta Reminders"
          Illustration={ReminderFeatur} 
        />

        <Feature 
          title="Create and prioritize your tasks" 
          description="Have clear task list and display your tasks in the order you needed." 
          alt="Khotta Tasks"
          Illustration={TaskFeatur}
        />


        <FeatureRe
          title="Easily organize schedules and classes" 
          description="View and adjust your schedules at 2AM from your cosy bed." 
          alt="Khotta Schedule"
          Illustration={ScheduleFeatur} 
        />


        <Feature 
          title="Plan ahead for current and upcoming terms" 
          description="By planning your academic life, you plan to achieve your goal" 
          alt="Khotta Plans"
          Illustration={PlanFeature}
        />

        <FeatureRe
          title="Track your GPAs for each term" 
          description="Avoid overthinking in little details, all you need is to focus on your goals." 
          alt="Track gpa"
          Illustration={GPAFeatur} 
        />

      </div>

      
      <div className="h-screen p-8 sm:p-12 bg-siriusbg grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-1">
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
            <ButtonPrimary>Get Sirius</ButtonPrimary>
          </div>
        </div>
        <Image src={Rockets} alt="Sirius rockets" />
      </div>


      
      <div className="h-auto flex flex-col justify-center p-8">
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


      <div className="h-auto flex flex-col justify-center p-8 mb-24 mt-20">
        <Image src={Qoute} alt="Planning-qout" />
        <div className="mt-4 sm:mt-12 sm:flex justify-center">
          <ButtonPrimary>open Khotta</ButtonPrimary>
        </div>  
      </div>
    </>
  )
}