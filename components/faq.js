import { Accordion } from './accordian';

const FAQ = () => {
	return (
		<section className="bg-mainbg py-20 px-8 sm:px-12">
			<div className="w-full">
				{/* Heading */}
				<div className="w-full">
					<h1 className="text-3xl text-left text-black">
						Frequently Asked Questions
					</h1>
					<p className="text-left text-black mt-4">
						Here are some of our FAQs. If you have any other questions
						unanswered, feel free to email us.
					</p>
				</div>
				{/* FAQ Items */}
				<Accordion title="What is Sirius?" content="What Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" />
				<Accordion title="Why Sirius?" content="This template can be used as a landing page for your company." />
				<Accordion title="Is Nitro better? tell me" content="This template can be used as a landing page for your company."/>
                <Accordion title="Why we still here?" content="This template can be used as a landing page for your company." />
			</div>
		</section>
	);
};

export default FAQ;