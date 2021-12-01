import Head from 'next/head';

{/*Components */ }
import Benefit from '../components/Benefit';
import FAQ from '../components/faq';
import HeroSection from "../components/HeroSection";
import JoinUsForm from '../components/JoinUsForm';
import ButtonSecondry from "../components/misc/ButtonSecondry";
import ButtonSubscribe from '../components/misc/ButtonSubscribe';
import SectionHeader from '../components/SectionHeader';
import SiriusFeatures from '../components/SiriusFeatures';

{/*Images*/ }
import SiriusRockets from "../public/hero-images/sirius-rockets-pic.svg"
import DoubleArrow from "../public/sirius-features/double-arrow.svg"
import Outcomes from "../public/sirius-features/outcomes.svg"
import WorkDone from "../public/sirius-features/work-done.svg"




export default function Sirius() {

    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <title>Sirius</title>
                <link rel='icon' href='/logo.svg' />
                <meta
                    name='description'
                    content='Khotta for ever'
                />
            </Head>

            {/*Hero section */}
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



            {/*Benefits section */}

            <div className="sm:flex sm:h-screen sm:p-12 grid grid-cols-1 gap-12 p-8 items-center bg-mainbg ">
                <Benefit
                    title="Be flexible to change"
                    description="Follow short-range planning technique. Adjust your plans, schedule and tasks to fast changes."
                    icon={DoubleArrow}
                    alt="Flexible icon"
                />

                <Benefit
                    title="Act toward desired outcomes"
                    description="Try out different plans until reaching the most beneficial, flexible and effective plan for you."
                    icon={Outcomes}
                    alt="Outcomes icon"
                />

                <Benefit
                    title="Get much more work done"
                    description="With reminders, you will know what tasks needs to be completed, and what classes need to be attended."
                    icon={WorkDone}
                    alt="WorkDone icon"
                />
            </div>


            {/*Sirius features/plans section */}
            <div className="h-auto p-8 sm:p-12 bg-siriusbg grid grid-cols-1 gap-4">

                <SiriusFeatures />

                <div className="py-16">
                    <SectionHeader
                        title="Best for students"
                        description="By getting Sirius, you will not get a flexible planning experience only but also help us (as students😄) to make Khota the best app for students."
                    />

                    <div className="mt-4 sm:mt-8 gap-4 flex flex-col sm:flex-row w-full justify-start">
                        <ButtonSubscribe />
                        <ButtonSubscribe />
                    </div>
                    <p className="mt-16 text-base sm:text-lg text-white font-bold">
                        Don’t you think it affordable? <span className="text-primary">Tweet us</span>
                    </p>
                </div>


                <SectionHeader
                    title="Short-range plans"
                    description="The standard short-range plan will represent annual or semiannual operations with a short-term deliverable. These short-term plans cover the specifics of each day-to-day operation."
                />

                <SectionHeader
                    title="How planning Improves my GPA?"
                    description="Britton and Tesser (1991) found a positive correlation between short-range planning and grade point average (GPA) of students,which suggests that students who are actively engaged in time management processes are likely to see attainment benefits."
                />

            </div>


            <JoinUsForm />

            <FAQ />
        </>
    )



}
