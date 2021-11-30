import Image from 'next/image';


const Benefit = ({ title:title, description:description, icon:icon, alt:alt}) => {
    return (

        <>
            <div className="p-4 text-center sm:text-left">
                <Image 
                  src={icon} 
                  alt={alt} 
                />
                <p className="text-2xl font-bold text-black">{title}</p>
                <p className="text-black tracking-tight">{description}</p>
            </div>
        </>

    );

};
export default Benefit;