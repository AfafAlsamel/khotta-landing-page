import Head from 'next/head';
import Image from 'next/image'

{/*Components */ }
import Feature from '../components/Feature';
import FeatureRe from '../components/FeatureRe';
import ButtonPrimary from '../components/misc/ButtonPrimary';
import ButtonSecondry from '../components/misc/ButtonSecondry';
import HeroSection from '../components/HeroSection';
import JoinUsForm from '../components/JoinUsForm';

{/*Images*/ }
import Rockets from '../public/rockets.svg';
import SpaceCraft from '../public/hero-images/spacecraft-pic.svg';
import Qoute from '../public/qoute.svg';
import PlanFeature from '../public/Illustrations/plans-pic.svg';
import ReminderFeatur from '../public/Illustrations/reminders-pic.svg';
import ScheduleFeatur from '../public/Illustrations/schedules-pic.svg';
import TaskFeatur from '../public/Illustrations/tasks-pic.svg';
import GPAFeatur from '../public/Illustrations/gpa-pic.svg';






export default function Home() {

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <title>Khotta</title>
        <link rel='icon' href='/logo.svg' />
        <meta
          name='description'
          content='Khotta for ever'
        />
      </Head>


      {/*Hero section */}
      <HeroSection
        title="Plan your academic life effectively"
        description="Ready to achieve greater results in less time? Stop procrastinating and Start planning"
        button1={<ButtonPrimary>Download on Mac</ButtonPrimary>}
        button2={<ButtonSecondry>Open Khotta</ButtonSecondry>}
        illustration={SpaceCraft}
        alt="Space craft of Khotta"
        illusWidth="250"
        addClass="flex justify-end items-end"
      />



      {/*Khotta features section */}
      <div className="p-8 bg-mainbg sm:p-12">

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


      {/*Get Sirius section */}
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
        <Image
          src={Rockets}
          alt="Sirius rockets"
        />
      </div>

      <JoinUsForm />

      <div className="h-auto bg-mainbg flex flex-col justify-center p-8 pb-24">
        <Image src={Qoute} alt="Planning-qout" />
        <div className="mt-4 sm:mt-12 sm:flex justify-center">
          <ButtonPrimary>open Khotta</ButtonPrimary>
        </div>
      </div>
    </>
  )
}