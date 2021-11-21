import Image from 'next/image';
import Illustration from '../public/planspic.svg';

const Feature = () => {
  return (
   
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-10">
            <Image
              src={Illustration}
              alt="Khotta"
              layout="responsive"
              quality={100}
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <h3 className="text-2xl tracking-tight font-bold md:font-sans text-black md:text-4xl">
           Set reminders so you dont forget
          </h3>
          <p className="text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0 ">
             Ready to achieve greater results in less time?
             Stop procrastinating and Start planning
          </p>
        </div>
      </div>
   
  );
};

export default Feature