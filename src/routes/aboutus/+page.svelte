<script>
	import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
	import { Heading, P, Hr, Img, Card } from 'flowbite-svelte';
</script>

<main class="pt-12 dark:bg-gray-800 bg-gray-100  dark:text-gray-100">
	<section class="sm:py-20 mx-auto max-w-7xl">
		<div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="md:order-2">
					<figure class="">
						<img
							src="/images/aster.webp"
							class="h-auto mx-auto rounded w-96 mt-5 md:w-102 lg:w-148"
							alt="mission"
						/>
					</figure>
				</div>
				<div class="md:order-1 ">
					<p class="text-left font-bold text-[44px] md:text-left">We are Asterisc..!</p>


					<p class="text-lg font-normal text-left md:text-left  text-gray-900 dark:text-gray-200 py-4 ">
						Asterisc Computer Institute is a premier IT education Institute . The institute provides
						a wide variety of professional career, short term and certification courses, designed by
						our experts. Our trainers constantly update their technical skills to maintain their
						expertise.All the courses are taught by certified and experienced faculty. Asterisc
						computer institute ventured in certification lead IT training ,we have produced highly
						successful IT professionals working with best IT companies across the globe. Students
						get placed because of their hardwork and our support and we get business because our
						students know it better than the most.
					</p>
				</div>
			</div>
			<Hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="md:order-2">
						<img
							src="/images/mission.webp"
							class="h-auto mx-auto rounded w-96 mt-5 md:w-102 lg:w-148"
							alt="mission"
						/>
				</div>
				<div class="md:order-2 ">
					<p class="text-left font-bold text-5xl md:text-left">Our Mission</p>

					<p class="text-lg font-normal  text-left md:text-left text-gray-900 dark:text-gray-200 py-4">
						Our Approach for technology Training recognises critical IT Skills which provides early
						and midcareer professionals opportunities to excel in their Careers. We facilitate
						individuals, professionals and entrepreneurs to up skill and retrain their software
						training & development career. The Course curriculum is designed considering key and
						emerging technologies and is advised by Industry Experts. The course enable Raw
						Fresher’s to be industry ready.
					</p>
				</div>
			</div>
			<Hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="md:order-1">

						<img
							src="/images/vision.webp"
							class="h-auto mx-auto rounded w-96 mt-5 md:w-102 lg:w-148"
							alt="inspiration"
						/>
						
				</div>
				<div class="md:order-2">
					<p class="text-left font-bold text-5xl md:text-left">Our Vision</p>

					<p class="text-lg text-left md:text-left font-normal text-gray-900 dark:text-gray-200 py-4">
						The Institute is committed to develop Information Technologies professional with
						specialization skills to resolve problems at the place of work. To achieve the
						characteristics of leadership & skills. We will achieve our vision by: Providing
						excellent training and service delivery to our students which is up to date with the
						company requirements. Nurture ,train and promote talent within the organization ,
						amongst our students who remain motivated at all times . Engaging with all our students
						in a fair manner and democratising the access to quality digital education.
					</p>
				</div>
			</div>
			<Hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="md:order-2">
						<img
							src="/images/inspiration.webp"
							class="h-auto  mx-auto rounded w-96 mt-5 md:w-102 lg:w-148"
							alt="inspiration"
						/>
		
				</div>
				<div class="md:order-1">
					<p class="text-left font-bold text-5xl md:text-left">Our Inspiration</p>

					<p class="text-lg text-left md:text-left font-normal text-gray-900 dark:text-gray-200 py-4">
						Hon’ble Shri Dineshkumar Bobade is the architect of Nagar Yuwak Shikshan Santha, Nagpur.
						He has been the guiding star in spreading the light of education. His can-do-more
						attitude brought about an intellectual revolution that has transformed the social,
						educational, economic and cultural life of rural Maharashtra. One lamp that lit strongly
						and firmly with a great vision of spreading the light of wisdom is our Hon’ble Shri
						Dattaji Meghe the Chairman of Nagar Yuwak Shikshan Sanstha & Founder Chancellor of Datta
						Meghe Institute of Medical Sciences University is in active public life for more than 35
						years. He represented the people of Maharashtra in Lok Sabha for 3 consecutive terms &
						was the Member of Parliament (Rajya Sabha). He strongly believed that quality Education
						& Health can only bring the true transformation of the huge human resources of our
						nation. In pursuit of our Chairman’s social commitment, a modest beginning was made by
						starting a small educational institute 36 years ago, which has grown up into a an
						educational empire covering almost all faculties of education spread all over
						Maharashtra state. This educational society has established 27 institutions right from
						pre-primary to postgraduate levels covering various faculties like Medical Sciences,
						Pharmacy, Engineering, Social Science, Commerce, Science, Physical Education and
						Performing Arts. The Society is like a joint family of about 30000 students and about
						1500 highly educated and skilled staff. Our founder Chairman Shri Dattaji Meghe insists
						on good quality education, discipline and welfare of the students and the staff.
					</p>
				</div>
			</div>
            <Hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			<Timeline>
				<TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						Get access to over 20+ pages including a dashboard layout, charts, kanban board,
						calendar, and pre-order E-commerce & Marketing pages.
					</p>
					<Button color="alternative"
						>Learn more<svg
							class="ml-2 w-3 h-3"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						></Button
					>
				</TimelineItem>
				<TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we keep a parity between
						the two versions even as we update the project.
					</p>
				</TimelineItem>
				<TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements built on top of
						Tailwind CSS.
					</p>
				</TimelineItem>
			</Timeline>
			<Hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

		</div>
	</section>
</main>

<style>
	p {
		font-family: 'Quicksand', sans-serif;
	}
</style>
