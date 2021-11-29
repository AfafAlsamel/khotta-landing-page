import React, { useRef, useState } from 'react';
import Image from 'next/image'
import Arrow from '../public/expand_more_black_24dp.svg';



export const Accordion = ({ title, content }) => {
	const [active, setActive] = useState(false);
	const [height, setHeight] = useState("0px");
	const [rotate, setRotate] = useState("transform duration-700 ease");

	const contentSpace = useRef(null);

	function toggleAccordion() {
		setActive(!active);
		setHeight(
			active ? "0px" : `${contentSpace.current.scrollHeight}px`
		);
		setRotate(
			active
				? "transform duration-700 ease"
				: "transform duration-700 ease rotate-180"
		);
	}
    

	return (
		<div className="flex flex-col w-full border-b border-primary">
			<button
				className="py-5 box-border appearance-none cursor-pointer focus:outline-none flex items-start justify-between"
				onClick={toggleAccordion}
			>
				<p className="inline-block text-footnote light">{title}</p>
				<Image
					src={Arrow}
					alt="expand icon"
					className={`${rotate} inline-block`}
				/>
			</button>
			<div
				ref={contentSpace}
				style={{ maxHeight: `${height}` }}
				className="overflow-hidden transition-max-height duration-700 ease-in-out"
			>
				<div className="pb-5">{content}</div>
			</div>
		</div>
	);
};