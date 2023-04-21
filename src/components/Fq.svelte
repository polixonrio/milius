<script>
	import { AccordionItem, Accordion, Button } from 'flowbite-svelte';
	const items = Array(5);

</script>

<section class="dark:bg-gray-800 dark:text-gray-100">
	<div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p class="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
			Frequently Asked Questions
		</h2>
		<div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<Accordion
				multiple
				flush
				activeClasses="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
				inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
			>
				<AccordionItem bind:open={items[0]}>
					<span slot="header">How many hours daily lectures will be ?</span>
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						1 hour teaching and 1 hour practical. Along with that you’ll also have daily homework
						discussion and doubt resolution sessions with your Mentors. You’ll also be given
						practice homework to master the topics.
					</p>
				</AccordionItem>
				<AccordionItem bind:open={items[1]}>
					<div slot="header">Will i get a job assured after completing this training ?</div>
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Your knowledge skills will be in high demand, and future will be bright, but like most
						2important things in life, your prospective employment in the world depends on how hard
						you work. If you consistently apply throughout the 6 months job industrial training
						program and during your job search, then your chances look really good. You will also
						need to be well-prepared for your job interviews. The thing is that we will be assist
						you in every step of the way. We don’t just teach you to programming skills and build
						project, we also work with you on your resume building, prepare for interviews, and
						connect you with job opportunities in your preferred location. Institute maintain
						relationships with a vast network of industry in the software development world as well
						as with our alumni based, which provides our students a variety of potential job
						opportunities.
					</p>
				</AccordionItem>

				<AccordionItem bind:open={items[2]}>
					<span slot="header">What are the various modes of payments accepted here ?</span>
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						You can make payment Via Cash, online payments.
					</p>
				</AccordionItem>

				<AccordionItem bind:open={items[3]}>
					<span slot="header"
						>I do not have a computer programming background. Can i still take this course and get job ?
					</span>
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Our Course curriculum is designed for new freshers candidates and is advised by Industry
						Experts. The course enable basic to advanced raw fresher’s to be industry ready. You
						will start from basic concepts to learning key programming fundamentals. There will be
						daily assignments covering for all topics and after complete training you are making in
						real time live projects according your interest so that you get a chance to concern what
						you learn and trying things for yourself. Although we do not assume any advance
						programming knowledge skills, it would be helpful for you to get a head-start by
						checking out the software development track on Asterisc.
					</p>
				</AccordionItem>

				<AccordionItem bind:open={items[4]}>
					<span slot="header"
						>Can i pay whole amount at once ?
					</span>
					<p class="mb-2 text-gray-500 dark:text-gray-400">
						Yes, you will have the option to pay in full, directly to Asterisc at a 20% discount.
					</p>
				</AccordionItem>

				<AccordionItem bind:open={items[5]}>
					<span slot="header"
						>
						Is it possible that the course might get extended to more than pre decided time ?
					</span>
					<p class="mb-2 text-gray-500 dark:text-gray-400">
                        Yes, sometimes depending on the pace of the batch, the course might get extended by a bit. In the end, we want to make sure that none of our students get left behind. To ensure this we sometimes have to take repeat lectures or slow down the pace of the batch.

					</p>
				</AccordionItem>



			</Accordion>
		</div>
	</div>
</section>
