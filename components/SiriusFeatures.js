import Image from 'next/image';
import CheckIcon from '../public/icons/check.svg';
import LockIcon from '../public/icons/lock.svg';

import FeatureItem from './FeatureItem';


const SiriusFeatures = ({ title: title, icon: icon }) => {
    return (
        <>
            <div className="my-16">
                <div className="w-full pb-8">
                    <h1 className="text-3xl text-left text-white font-bold">
                        Achieve greater results in less time
                    </h1>
                </div>

                <div className="flex flex-col w-full">
                    <div
                        className="py-2 sm:py-5 box-border appearance-none flex items-start justify-between"
                    >
                        <p className="text-sm sm:text-lg text-white font-bold w-3/4">
                        </p>
                        <div className="flex flex-row-1 mr-4 text-gray-600 font-bold">
                            <p>Basic</p>
                        </div>
                        <div className="text-gray-600 font-bold">
                            <p>Sirius</p>
                        </div>
                    </div>
                </div>

                <FeatureItem
                    title="All you need to plan effectively"
                    icon={CheckIcon}
                    icon2={CheckIcon}
                />

                <FeatureItem
                    title="Tasks and classes reminders"
                    icon={LockIcon}
                    icon2={CheckIcon}
                />

                <FeatureItem
                    title="Unlimited plans"
                    icon={LockIcon}
                    icon2={CheckIcon}
                />

                <FeatureItem
                    title="Unlimited schedules"
                    icon={LockIcon}
                    icon2={CheckIcon}
                />

                <FeatureItem
                    title="Sirius tag in your profiley"
                    icon={LockIcon}
                    icon2={CheckIcon}
                />

            </div>
        </>

    );
};

export default SiriusFeatures