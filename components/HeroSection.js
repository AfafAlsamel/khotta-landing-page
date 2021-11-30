import Image from 'next/image'



const HeroSection = ({ title:title, description:description,button1:button1,button2:button2, alt:alt, illustration:illustration, illusWidth:illusWidth, addClass:addClass}) => {
    return (

        <div className="h-auto p-8 sm:p-12 bg-heromb sm:bg-hero bg-cover grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lx:grid-cols-2">

        <div className="py-24">
           <p className="text-3xl sm:text-4xl font-bold text-white pb-4">
             {title}
           </p>
           <p className="mt-4 pb-4 text-white tracking-tight text-xl">
            {description}
           </p>
           <div className="mt-4 sm:mt-8 sm:flex justify-start">
             {button1}
             {button2}
           </div>
        </div>

        <div className={"" + addClass}>
          <Image
            src={illustration}
            alt={alt}
            width={illusWidth}
          />
        </div>

      </div>

    );
  };
  
  export default HeroSection