import Image from 'next/image';


const FeatureItem = ({ title: title, icon: icon, icon2: icon2 }) => {
    return (
        <>
            <div>
                <div className="flex flex-col w-full border-b border-gray-500 ">
                    <div
                        className="py-5 box-border appearance-none flex items-start justify-between px-2"
                    >
                        <p className="text-sm sm:text-lg text-white font-bold w-3/4">
                            {title}
                        </p>
                        <div className="flex flex-row-1 mr-4">
                            <Image
                                src={icon}
                                alt="expand icon"
                                width="24"
                            />
                        </div>
                        <div className="">
                            <Image
                                src={icon2}
                                alt="expand icon"
                                width="24"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default FeatureItem