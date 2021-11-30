

const SectionHeader = ({ title: title, description: description }) => {

    return (
        <>
            <div className="grid grid-col">
                <p className="text-3xl sm:text-4xl font-bold text-white pb-4">
                    {title}
                </p>
                <p className="mt-4 pb-4 text-white tracking-tight sm:w-3/4">
                    {description}
                </p>
            </div>

        </>
    );
};
export default SectionHeader