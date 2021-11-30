

const ButtonSubscribe = () => {
    return (

        <>
            <div className=" flex items-start justify-between rounded-md shadow bg-secondryblack p-4" >
                <div className="flex flex-col mr-4">
                    <p className="text-base sm:text-lg text-white font-bold">
                        <span className="text-primary">$0.99 </span>for 1 month
                    </p>
                    <p className="text-white">$0.99 for 1 month</p>
                </div>
                <button className="w-auto flex justify-center border border-transparent py-4 px-4 font-medium rounded-md text-white bg-primary hover:bg-green-700" >
                    Subscribe
                </button>
            </div>
        </>

    );
};
export default ButtonSubscribe