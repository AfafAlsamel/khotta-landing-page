import ButtonPrimary from '../components/misc/ButtonPrimary';
import SectionHeader from './SectionHeader';


const JoinUsForm = () => {
  return (
    <div className="h-auto bg-mainbg flex flex-col justify-center p-8">
      <div className="bg-black grid grid-cols-1 gap-4 rounded-md p-8">

        <SectionHeader
          title="Join our testers"
          description="Become a beta tester for Khotta, we want to hear from you!Our goal is to make Khotta the best app for students.
            You’ll recieve emails telling you about the latest update of Khotta, with link to try it before all students."
        />

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
  );
};

export default JoinUsForm;