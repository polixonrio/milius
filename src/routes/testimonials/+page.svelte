<script>
	let lazyLoadInstance;
	import { onMount } from 'svelte';
	import lazyload from 'vanilla-lazyload';
	onMount(() => {
		lazyLoadInstance = new lazyload();
	});
</script>

<section class="bg-white mt-12 dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm">
			<h2 class="mb-4 text-4xl mt-4 tracking-tight font-extrabold text-gray-900 dark:text-white">
				Testimonials
			</h2>

			<h2 class="mb-12 text-4xl leading-none text-gray-900 dark:text-white text-center sm:text-5xl">
				What does our alumni say about Asterisc ?
			</h2>
		</div>
		<div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
					<p class="my-4">
						Asterisc Computer Institute helped me a lot to learn advance excel and SQL queries. I
						was so scared of SQL but Asterisc Session made everything very easy to learn and ensured
						that I am confident with excel and coding.
					</p>
					<p class="my-4">
						Thank you so much, Asterisc Computer Institute for teaching me skills that I will use
						all my life and for helping me overcome my fear with your support at every step. I
						enjoyed every class so much! I can’t wait to learn other languages too!
					</p>
					<p class="my-4">If you care for your time, I hands down would go with this."</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://asterisc.in/wp-content/uploads/2021/07/Sejal-Ghuge_Team-Amazon-Subscriptions.jpeg"
						alt="profile "
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Sejal Ghuge</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">Amazon, India</div>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
			>
				<iframe
					class="aspect-video h-96 w-full"
					frameborder="0"
					allowfullscreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					title="College Students Develop mobile app in lockdown and start earning | NAGPUR"
					src="https://www.youtube.com/embed/wevIc9MhtIk?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fasterisc.in&amp;widgetid=1"
					id="widget2"
				/>
				
				<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
					<p class="my-4">
						Asterisc institute was good for me in this lockdown because i managed to have some time
						i decided to upgrade my skills. Pooja mam and was helpful of me in many ways. This
						institute provide best online training.
					</p>
					<p class="my-4">
						They will provide proper guidance. This institute having good professional trainers who
						will train students easily and motivate students to learn the course.
					</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
				
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Srishti Mishra</div>
					</div>
				</figcaption>
			</figure>
			
		
		</div>
		<div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
			
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
			>
				<iframe
					class="aspect-video h-96 w-full"
					frameborder="0"
					allowfullscreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					title="College Students Develop mobile app in lockdown and start earning | NAGPUR"
					src="https://www.youtube.com/embed/jE4wYC-PjuE?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fasterisc.in&amp;widgetid=1"
					id="widget2"
				/>
		
		
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
			>
				<iframe
					class="aspect-video h-96 w-full"
					frameborder="0"
					allowfullscreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					title="College Students Develop mobile app in lockdown and start earning | NAGPUR"
					src="https://www.youtube.com/embed/We9uMu6iou4?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fasterisc.in&amp;widgetid=1"
					id="widget2"
				/>
		
			
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
			>
				<iframe
					class="aspect-video h-96 w-full"
					frameborder="0"
					allowfullscreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					title="College Students Develop mobile app in lockdown and start earning | NAGPUR"
					src="https://www.youtube.com/embed/hwmT2q19rCs?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fasterisc.in&amp;widgetid=1"
					id="widget2"
				/>
		
				<figcaption class="flex justify-center items-center space-x-3">
				
					<div class="space-y-0.5 mt-4 font-medium dark:text-white text-left">
						<div>Shubham</div>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
			>
				<iframe
					class="aspect-video h-96 w-full"
					frameborder="0"
					allowfullscreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					title="College Students Develop mobile app in lockdown and start earning | NAGPUR"
					src="https://www.youtube.com/embed/XW-u-bwk9es?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fasterisc.in&amp;widgetid=1"
					id="widget2"
				/>
		
				<figcaption class="flex justify-center items-center space-x-3">
				
					<div class="space-y-0.5 mt-4 font-medium dark:text-white text-left">
						<div>Yog Bharti</div>
					</div>
				</figcaption>
			</figure>
		</div>
	</div>
</section>
