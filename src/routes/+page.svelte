<script>
	import { Button } from 'flowbite-svelte';
	import { Heading, P, Hr, Img, Card, Label, Input, Checkbox } from 'flowbite-svelte';
</script>

<main class="dark:bg-gray-800 bg-gray-100  dark:text-gray-100">
	<div class="bg-gray flex  h-screen">
		<div class="relative isolate px-6 md:py-16 mx-auto align-middle ">
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				/>
			</div>
			<div class="mx-auto max-w-2xl align-middle">
				<div class="hidden sm:mb-8 sm:flex sm:justify-center">
					<div
						class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray dark:text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20"
					>
						Trusted by thousands of students. <a
							href="/testimonials"
							class="font-semibold text-indigo-600"
							><span class="absolute inset-0" aria-hidden="true" />Read more
							<span aria-hidden="true">&rarr;</span></a
						>
					</div>
				</div>
				<div class="text-center">
					<p class="text-center font-bold md:text-left md:text-6xl text-2xl">
						PROGRAMMING IS <span class=" text-purple-600 "> MORE </span> DIFFICULT NOW, JOIN NOW
					</p>
					<p class="text-center mt-6 font-extrabold  leading-8 text-black dark:text-white">
						Join Asterisc Today and Solidify your IT career
					</p>
					<div class="mt-6 flex gap-x-4">
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="min-w-0 border-black flex-auto rounded-md bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							placeholder="Search For Courses"
						/>
						<button
							type="submit"
							class="flex-none rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>Search</button
						>
					</div>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/courses"
							class="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Get started</a
						>
						<a
							href="/contactus"
							class="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Contact Us</a
						>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				/>
			</div>
		</div>
	</div>

	<div class="bg-white dark:bg-black py-16 sm:py-16 ">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<p class="text-center font-bold  md:text-6xl text-2xl mb-10">
				LEARN <span class=" text-purple-600 "> MORE </span>NOW
			</p>
			<dl class="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-3">
				<div class="mx-auto flex max-w-xs flex-col gap-y-4">
					<dd
						class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
					>
						<img
							class="col-span-2 rounded  mx-auto   w-22  object-contain lg:col-span-1"
							src="https://cdn-icons-png.flaticon.com/512/2210/2210153.png"
							alt="Transistor"
							width="158"
							height="48"
						/>
						<p class="text-center font-bold  md:text-5xl text-xl mb-10">
							Web Development <br />

							<a href="/courses"
								><button class="border rounded px-3 hover:bg-purple-600 text-lg my-4"
									>Learn Now</button
								></a
							>
						</p>
					</dd>
				</div>

				<div class="mx-auto flex max-w-xs flex-col gap-y-4">
					<dd
						class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
					>
						<img
							class="col-span-2   mx-auto rounded  w-22  object-contain lg:col-span-1"
							src="images/mobdev.webp"
							alt="Transistor"
							width="158"
							height="48"
						/>
						<p class="text-center font-bold  md:text-5xl text-xl mb-10">
							Mobile Development <br />
							<a href="/courses"
								><button class="border rounded px-3 hover:bg-purple-600 text-lg my-4"
									>Learn Now</button
								></a
							>
						</p>
					</dd>
				</div>

				<div class="mx-auto flex max-w-xs flex-col gap-y-4">
					<dd
						class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
					>
						<img
							class="col-span-2  mx-auto rounded  w-22  object-contain lg:col-span-1"
							src="images/testing.webp"
							alt="Transistor"
							width="158"
							height="48"
						/>
						<p class="text-center font-bold  md:text-5xl text-xl mb-10">
							Software Testing <br />
							<a href="/courses"
								><button class="border rounded px-3 hover:bg-purple-600 text-lg my-4"
									>Learn Now</button
								></a
							>
						</p>
					</dd>
				</div>

				<div class="mx-auto flex max-w-xs flex-col gap-y-4">
					<dd
						class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
					>
						<img
							class="col-span-2   mx-auto rounded  w-22  object-contain lg:col-span-1"
							src="images/coding.webp"
							alt="Transistor"
							width="158"
							height="48"
						/>
						<p class="text-center font-bold  md:text-5xl text-xl mb-10">
							Programming Language <br />
							<a href="/courses"
								><button class="border rounded px-3 hover:bg-purple-600 text-lg my-4"
									>Learn Now</button
								></a
							>
						</p>
					</dd>
				</div>

				<div class="mx-auto flex max-w-xs flex-col gap-y-4">
					<dd
						class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
					>
						<img
							class="col-span-2  mx-auto rounded  w-22  object-contain lg:col-span-1"
							src="images/database.webp"
							alt="Transistor"
							width="158"
							height="48"
						/>
						<p class="text-center font-bold  md:text-5xl text-xl mb-10">
							Database Design <br />
							<a href="/courses"
								><button class="border rounded px-3 hover:bg-purple-600 text-lg my-4"
									>Learn Now</button
								></a
							>
						</p>
					</dd>
				</div>

				<div class="mx-auto flex max-w-xs flex-col gap-y-4">
					<dd
						class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
					>
						<img
							class="col-span-2  mx-auto  rounded w-22 object-contain lg:col-span-1"
							src="https://cdn.pixabay.com/photo/2022/01/03/19/56/machine-learning-6913525_1280.png"
							alt="Transistor"
							width="158"
							height="48"
						/>
						<p class="text-center font-bold  md:text-5xl text-xl mb-10">
							Machine Learning <br />
							<a href="/courses"
								><button class="border rounded px-3 hover:bg-purple-600 text-lg my-4"
									>Learn Now</button
								></a
							>
						</p>
					</dd>
				</div>
			</dl>
		</div>
	</div>

	<div class="bg-white  py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<p class="text-center text-3xl font-semibold leading-8 text-gray-900">Our top recruiters</p>

			<div
				class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
			>
				<img
					class="col-span-2 max-h-22  w-full object-contain lg:col-span-1"
					src="/images/jpmorgan.webp"
					alt="Transistor"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 max-h-22 w-full object-contain lg:col-span-1"
					src="/images/tcs.webp"
					alt="Reform"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 max-h-22 w-full object-contain lg:col-span-1"
					src="/images/wipro.webp"
					alt="Tuple"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 max-h-22 w-full object-contain sm:col-start-2 lg:col-span-1"
					src="/images/infosys.webp"
					alt="SavvyCal"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 col-start-2 max-h-22 w-full object-contain sm:col-start-auto lg:col-span-1"
					src="/images/amazon.webp"
					alt="Statamic"
					width="158"
					height="48"
				/>
			</div>
		</div>
	</div>

	<div class="bg-white dark:bg-black py-24 sm:py-32">
		<div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
			<div class="max-w-2xl">
				<h2 class="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
					Meet our leadership
				</h2>
				<p class="mt-6 text-lg leading-8 dark:text-white text-gray-900">
					We have an excellent team of Instructors to guide you.
				</p>
			</div>
			<ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
				<li>
					<div class="flex items-center gap-x-6">
						<img class="h-16 w-16 rounded-full" src="/images/csir.webp" alt="" />
						<div class="">
							<h3
								class="text-base font-semibold  leading-7 tracking-tight dark:text-white text-gray-900"
							>
								Chandrakant Sir
							</h3>
							<p class="text-sm font-semibold leading-6 text-indigo-600">Founder / CEO</p>
						</div>
					</div>
				</li>

				<li>
					<div class="flex items-center gap-x-6">
						<img class="h-16 w-16 rounded-full" src="/images/hsir.webp" alt="" />
						<div>
							<h3
								class="text-base font-semibold leading-7 tracking-tight dark:text-white text-gray-900"
							>
								Haris Sir
							</h3>
							<p class="text-sm font-semibold leading-6 text-indigo-600">Instructor</p>
						</div>
					</div>
				</li>

				<li>
					<div class="flex items-center gap-x-6">
						<img class="h-16 w-16 rounded-full" src="/images/pmaam.webp" alt="" />
						<div>
							<h3
								class="text-base font-semibold leading-7 tracking-tight dark:text-white text-gray-900"
							>
								Pooja Maam
							</h3>
							<p class="text-sm font-semibold leading-6 text-indigo-600">Instructor</p>
						</div>
					</div>
				</li>

				<li>
					<div class="flex items-center gap-x-6">
						<img class="h-16 w-16 rounded-full" src="/images/ssir.webp" alt="" />
						<div>
							<h3
								class="text-base font-semibold leading-7 tracking-tight dark:text-white text-gray-900"
							>
								Shrikant Sir
							</h3>
							<p class="text-sm font-semibold leading-6 text-indigo-600">Instructor</p>
						</div>
					</div>
				</li>

				<!-- More people... -->
			</ul>
		</div>
	</div>

	<div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
				<div class="max-w-xl lg:max-w-lg">
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Access to our free coding courses NOW!
					</h2>
					<!-- <p class="mt-4 text-lg leading-8 text-gray-300">
						Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis
						tempor incididunt dolore.
					</p> -->
					<div class="mt-6 flex max-w-md gap-x-4">
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							placeholder="Enter your email"
						/>
						<button
							type="submit"
							class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>Subscribe</button
						>
					</div>
				</div>
				<dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
					<div class="flex flex-col items-start">
						<div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
							<svg
								class="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
								/>
							</svg>
						</div>
						<dt class="mt-4 font-semibold text-white">Weekly articles</dt>
						<dd class="mt-2 leading-7 text-gray-400">Get Free courses every month</dd>
					</div>
				</dl>
			</div>
		</div>
		<div
			class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
			aria-hidden="true"
		>
			<div
				class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div>
	</div>

	<!-- <section class="sm:py-20">
		<div class="container flex flex-col justify-center  p-4 mx-auto md:p-8">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="md:order-2">
					<img src="/images/prog.webp" class=" rounded  " alt="coding" />
				</div>
				<div class="md:order-1 ">
					<p class="text-center font-bold md:text-left md:text-6xl text-2xl">
						PROGRAMMING IS <span class=" text-purple-600 "> MORE </span> DIFFICULT NOW,
					</p>
					<p class="text-center font-bold md:text-left md:text-6xl text-2xl">JOIN TODAY</p>
					<p class="text-center font-bold md:text-left md:text-6xl text-2xl">BE FREE</p>
					<P
						class="text-md font-normal text-2xl text-center md:text-left  text-gray-900 dark:text-gray-200 py-4"
					>
						Join Asterisc Today and Solidify your IT career
					</P>
					<div class="mx-auto text-center  md:text-left">
						<button
							class="  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded   bg-purple-700 shadow "
							>Call Us</button
						>
						<button
							class="  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded   bg-purple-700 shadow "
							>Chat With Us</button
						>
					</div>
				</div>
			</div>
			<Hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="md:order-2">
					<figure class="">
						<img
							src="/images/mission.webp"
							class="h-auto mx-auto rounded w-25 mt-5 md:w-25 lg:w-25"
							alt="mission"
						/>
						<figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400" />
					</figure>
				</div>
				<div class="md:order-1 ">
					<p class="text-center font-bold md:text-left md:text-6xl text-2xl">
						The Asterisc Misssion
					</p>

					<P
						class="text-lg font-normal  text-center md:text-left text-gray-900 dark:text-gray-200 py-4"
					>
						Our Approach for technology Training recognises critical IT Skills which provides early
						and midcareer professionals opportunities to excel in their Careers. We facilitate
						individuals, professionals and entrepreneurs to up skill and retrain their software
						training & development career. The Course curriculum is designed considering key and
						emerging technologies and is advised by Industry Experts. The course enable Raw
						Fresher’s to be industry ready.
					</P>
				</div>
			</div>
			<Hr class="h-px my-8 bg-black-200 border-0 dark:bg-gray-700" />
		</div>
	</section> -->

	<section id="getstarted" class="  bg-purple-500 dark:bg-blue-400 ">
		<div class="container flex flex-col items-center justify-center p-4 mx-auto md:p-8">
			<Hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

			<h2
				class="mb-4 text-4xl tracking-tight font-semibold text-center text-white dark:text-gray-900"
			>
				Get a free consultation call from our experts
			</h2>
			<h2 class="mb-4 text-2xl tracking-tight font-lg text-white text-center  dark:text-gray-900">
				Take advantage of our free consultation call and let our experts help you to choose the best
				career.
			</h2>

			<Card>
				<form class="flex flex-col justify-center px-9 space-y-6" action="/">
					<Label class="space-y-2">
						<span>Name </span>
						<Input type="text" name="Name" placeholder="Name" required />
					</Label>
					<Label class="space-y-2">
						<span>Email</span>
						<Input type="email" name="email" placeholder="Email" required />
					</Label>
					<Label class="space-y-2">
						<span>Mobile Number</span>
						<Input type="text" name="Mobile Number" placeholder="Mobile Number" required />
					</Label>

					<Button type="submit" class="w-full">Let's Talk</Button>
				</form>
			</Card>
			<Hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
		</div>
	</section>
</main>

<style>
	p {
		font-family: 'Quicksand', sans-serif;
	}
</style>
