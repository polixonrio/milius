<script>
	let lazyLoadInstance;
	import { onMount } from 'svelte';
	import lazyload  from "vanilla-lazyload";
	onMount(() => {
		lazyLoadInstance = new lazyload();
	});

</script>

<section class="bg-white mt-12 dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
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
						"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy
						this was to integrate within my application. Most templates are a pain, code is
						scattered, and near impossible to theme.
					</p>
					<p class="my-4">
						Flowbite has code in one place and I'm not joking when I say it took me a matter of
						minutes to copy the code, customise it and integrate within a Laravel + Vue application.
					</p>
					<p class="my-4">If you care for your time, I hands down would go with this."</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
						alt="profile "
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Vatsal Maheshwari</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">J.P. Morgan Chase</div>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
					<p class="my-4">
						It was very good decision,choosing this institution for learning ms office. I must say
						that the faculty is really experienced and with great knowledge not only with the
						subject but also gives you interview tips and inspires saying always "dream big". Every
						topic is well explained. This is a perfect place for the learners,and now I'm confident
						on my subject which i learnt here. It was amazing experience!!! Thank you very much...
					</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
						alt="profile "
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Sejal Ghuge</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">Amazon</div>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
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
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
						alt="profile "
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Sejal Ghuge</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">Amazon</div>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
					<p class="my-4">
						Teaching is so good excellent teaching experience and they also look up to every
						student.I had Studied Web Development here.The Experience was Fabulous. All Staff are
						very good at teaching, also enjoyed while learning. Thank you sir & mam.
					</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
						alt="profile "
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Neha Kadukar</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
					</div>
				</figcaption>
			</figure>
		</div>
		<div class="grid mb-8 lg:mb-12 lg:grid-cols-2">

			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
			>
			
					<iframe class="lazy player-ratio" title="testimonial" data-src="https://www.youtube.com/embed/wevIc9MhtIk"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					<div class="space-y-0.5 mt-4 font-medium dark:text-white text-left">
						<div>Srishti Mishra</div>
						<!-- <div class="text-sm font-light text-gray-500 dark:text-gray-400">J.P. Morgan Chase</div> -->
					</div>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
					<div class="aspect-w-16 aspect-h-9">
						<iframe class="lazy video-iframe" title="testimonial"  src="" data-src="https://www.youtube.com/embed/jE4wYC-PjuE"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					  </div>
					<!-- <p class="my-4">
						Asterisc institute was good for me in this lockdown because i managed to have some time i decided to upgrade my skills. Pooja mam and was helpful of me in many ways. This institute provide best online training. </p>
						<p class="my-4"> 
						They will provide proper guidance. This institute having good professional trainers who will train students easily and motivate students to learn the course. 					
					</p> -->
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Kanishk Mishra
						</div>
						<!-- <div class="text-sm font-light text-gray-500 dark:text-gray-400">Amazon</div> -->
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
					<div class="aspect-w-16 aspect-h-9">
						<iframe title="testimonial" src="https://www.youtube.com/embed/jE4wYC-PjuE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<iframe width="853" height="480" src="https://www.youtube.com/embed/We9uMu6iou4" title="What our students says About Online Training" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					  </div>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
						alt="profile "
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Sejal Ghuge</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">Amazon</div>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
			>
				<blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
					<p class="my-4">
						Teaching is so good excellent teaching experience and they also look up to every
						student.I had Studied Web Development here.The Experience was Fabulous. All Staff are
						very good at teaching, also enjoyed while learning. Thank you sir & mam.
					</p>
				</blockquote>
				<figcaption class="flex justify-center items-center space-x-3">
					<img
						class="w-9 h-9 rounded-full"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
						alt="profile "
					/>
					<div class="space-y-0.5 font-medium dark:text-white text-left">
						<div>Neha Kadukar</div>
						<div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
					</div>
				</figcaption>
			</figure>
		</div>


</section>
