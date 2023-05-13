<script lang="ts">

	import { onMount } from 'svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;
	const { form } = superForm(data.form);

	import lazyload from 'vanilla-lazyload';
	import Learnmorenow from '../components/learnmorenow.svelte';

	let lazyLoadInstance;

	onMount(() => {
		lazyLoadInstance = new lazyload();
	});

	// window.addEventListener('load', function () {
	// 	const form = document.getElementById('my-form');
	// 	form.addEventListener('submit', function (e) {
	// 		e.preventDefault();
	// 		const data = new FormData(form);
	// 		const action = e.target.action;
	// 		fetch(action, {
	// 			method: 'POST',
	// 			body: data
	// 		}).then(() => {
	// 			alert('Success!');
	// 		});
	// 	});
	// });
</script>

<main class="dark:bg-gray-800 bg-gray-100 dark:text-gray-100">
	<section
		class="  pt-12 h-screen flex items-center justify-center bg-cover bg-center sm:bg-center bg-image-one dark:bg-image-two
		bg-no-repeat dark:bg-gray-900"
	>
		<div
			class="w-full h-full flex justify-center items-center
             "
		>
			<div class="py-8 px-4 mx-auto max-w-screen-xl align-middle text-center lg:py-16 lg:px-12">
				<a
					href="/testimonials"
					class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
				>
					<span class="text-xs bg-fresh-eggplant-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
					<span class="text-sm font-medium"><p>Trusted by thousands of students</p></span>
					<svg
						class="ml-2 w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/></svg
					>
				</a>
				<h1
					class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-white"
				>
					<p>Programming is <span class=" text-fresh-eggplant-600"> MORE </span> difficult, Join Now</p>
				</h1>
				<p
					class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
				>
					Join Asterisc Today and Solidify your IT career.
				</p>
				<div
					class="flex flex-col mb-4 lg:mb-10 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
				>
					<!-- <a
						href="/aboutus"
						class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-fresh-eggplant-700 hover:bg-fresh-eggplant-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
					>
						Learn more
						<svg
							class="ml-2 -mr-1 w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</a> -->
					<a
						href="/aboutus"
						class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
					>
						<svg
							class="mr-2 -ml-1 w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
							/></svg
						>
						Learn More
					</a>
					<a
						href="#wat"
						class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
					>
						<svg
							class="mr-2 -ml-1 w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
							/></svg
						>
						Watch video
					</a>
				</div>
				<div class=" flex gap-x-4">
					<label for="search-courses" class="sr-only">Email address</label>
					<input
						id="search-courses"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="min-w-0 border-black flex-auto rounded-md bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
						placeholder="Search For Courses"
					/>
					<button
						type="submit"
						class="flex-none rounded-md bg-fresh-eggplant-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>Search</button
					>
				</div>
			</div>
		</div>
	</section>

	<div class="bg-white dark:bg-black py-16 sm:py-16 bg-cover bg-center sm:bg-center">
		<div class="  grid grid-cols-1 flex-wrap mx-auto max-w-7xl px-6 lg:px-8">
			<Learnmorenow />
		</div>
	</div>

	<div class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<p class="text-center text-3xl font-semibold leading-8 text-gray-900">Our top recruiters</p>

			<div
				class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
			>
				<img
					class="col-span-2 max-h-22 w-full object-contain lg:col-span-1"
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

	<div id="wat" class="bg-white dark:bg-black py-16 sm:py-16">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<p class="text-center font-bold md:text-6xl text-2xl mb-10">
				LEARN <span class=" text-fresh-eggplant-600"> MORE </span>NOW
			</p>
			<div class="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-2">
				<div class="w-full h-96">
					<iframe
						class="aspect-video h-96 w-full lazy video-iframe"
						loading="lazy"
						src=""
						data-src="https://www.youtube-nocookie.com/embed/T9ITgDZWDZg"
						title="College Students Develop mobile app in lockdown and start earning | NAGPUR"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</div>
				<div>
					<p class="text-left font-bold md:text-5xl text-xl mb-10">
						Students Success Journey Build App during lockdown and earn profit <br />
					</p>
					<p class="text-center font-sm text-base mb-10">
						Check out the success story of our students. Student Interview sharing there experience.
						Do you have big dreams & if you want to succeed In life journey.

						<br />
					</p>
				</div>
			</div>
		</div>
	</div>

	<section class="bg-white dark:bg-gray-900">
		<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
			<div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
				<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
					Meet our leadership
				</h2>
				<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
					We have an excellent team of Instructors to guide you.
				</p>
			</div>
			<div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<div class="text-center text-gray-500 dark:text-gray-400">
					<img
						class="mx-auto mb-4 w-36 h-36 rounded-full"
						src="/images/csir.webp "
						alt="Bonnie Avatar"
					/>
					<h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a href="/">Chandrakant Sir</a>
					</h3>
					<p>Founder / CEO</p>
					<ul class="flex justify-center mt-4 space-x-4">
						<li>
							<a href="/" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</li>
						<li>
							<a href="/" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									/></svg
								>
							</a>
						</li>
					</ul>
				</div>
				<div class="text-center text-gray-500 dark:text-gray-400">
					<img
						class="mx-auto mb-4 w-36 h-36 rounded-full"
						src=" /images/hsir.webp "
						alt="Helene Avatar"
					/>
					<h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a href="/">Haris Sir </a>
					</h3>
					<p>CTO/Co-founder</p>
					<ul class="flex justify-center mt-4 space-x-4">
						<li>
							<a href="/" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</li>
						<li>
							<a href="/" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									/></svg
								>
							</a>
						</li>
					</ul>
				</div>
				<div class="text-center text-gray-500 dark:text-gray-400">
					<img
						class="mx-auto mb-4 w-36 h-36 rounded-full"
						src="images/pmaam.webp"
						alt="Pooja Mam"
					/>
					<h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a href="/">Pooja Mam</a>
					</h3>
					<p>SEO & Marketing</p>
					<ul class="flex justify-center mt-4 space-x-4">
						<li>
							<a href="/" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</li>
						<li>
							<a href="/" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									/></svg
								>
							</a>
						</li>
					</ul>
				</div>
				<div class="text-center text-gray-500 dark:text-gray-400">
					<img
						class="mx-auto mb-4 w-36 h-36 rounded-full"
						src="images/ssir.webp"
						alt="Shrikant Sir
						"
					/>
					<h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a href="/">Shrikant Sir </a>
					</h3>
					<p>Sales</p>
					<ul class="flex justify-center mt-4 space-x-4">
						<li>
							<a href="/" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</li>
						<li>
							<a href="/" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									/></svg
								>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<div class="relative isolate overflow-hidden dark:bg-black bg-fresh-eggplant-700 py-16 sm:py-24 lg:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
				<div class="max-w-xl lg:max-w-lg">
					<h2 class="text-3xl font-bold tracking-tight text-white dark:text-white sm:text-4xl">
						Access to our free coding courses NOW!
					</h2>

					<div class="mt-6 flex max-w-md gap-x-4">
						<label for="email-address-subscribe" class=" text-black dark:text-white sr-only"
							>Email address</label
						>
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
	</div>

	<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
		<section class="bg-white dark:bg-gray-900 rounded-xl">
			<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<h2
					class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
				>
					Contact Us
				</h2>
				<p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
					Take advantage of our free consultation call and let our experts help you to choose the
					best career.
				</p>
				<form
					method="POST"
					action="https://script.google.com/macros/s/AKfycby7oJo_s1gF8s7Y3SHWlxL5UodDj7CH6UiAy8vSOnPp85Gd8_MogoBXA63SeLqeAZfW/exec"
					class="space-y-8"
				>
					<div>
						<label
							for="Name"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>Your Name</label
						>
						<input
							type="text"
							id="Name"
							name="Name"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="Jane Doe"
							bind:value={$form.name}
							required
						/>
					</div>
					<div>
						<label
							for="Email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>Your email</label
						>
						<input
							type="email"
							id="Email"
							name="Email"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="name@asterisc.in"
							bind:value={$form.email}
							required
						/>
					</div>
					<div>
						<label
							for="subject"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label
						>
						<input
							type="text"
							id="subject"
							name="Subject"
							class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="Let us know how we can help you"
							required
							bind:value={$form.subject}
						/>
					</div>
					<div class="sm:col-span-2">
						<label
							for="Mobile"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>Your Phone</label
						>
						<input
							id="Mobile"
							name="Mobile"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Mobile Number"
							bind:value={$form.mobileno}
						/>
					</div>
					<div class="sm:col-span-2">
						<label
							for="message"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>Your message</label
						>
						<input
							id="message"
							name="Message"
							class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Leave a comment..."
							bind:value={$form.message}
						/>
					</div>

					<button
						type="submit"
						class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>Send message</button
					>
				</form>
			</div>
		</section>
	</div>
</main>

<style>
	p {
		font-family: 'Quicksand', sans-serif;
	}


</style>
