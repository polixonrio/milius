<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Input
	} from 'flowbite-svelte';
	import {
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright,
		FooterIcon
	} from 'flowbite-svelte';
	import '@fontsource/poppins';

	let active = 0;

	function setActive(index: number) {
		active = index;
	}

	let showMenu = false;

	function toggleNavbar() {
	
	showMenu = !showMenu;
	}
	

	// let breakPoint: number = 1500;
	// let width: number;
	// let activateClickOutside = true;
	// let drawerHidden: boolean = false;
	// $: if (width >= breakPoint) {
	// 	drawerHidden = false;
	// 	activateClickOutside = false;
	// } else {
	// 	drawerHidden = true;
	// 	activateClickOutside = true;
	// }
	// onMount(() => {
	// 	if (width >= breakPoint) {
	// 		drawerHidden = false;
	// 		activateClickOutside = false;
	// 	} else {
	// 		drawerHidden = true;
	// 		activateClickOutside = true;
	// 	}
	// });
	// let darkmodebtn =
	// 	'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5  right-2 top-12  md:top-3 md:right-2 z-50';
	// let divClass = 'w-full md:block md:w-auto';
	// let ulClass =
	// 	'flex flex-col p-4 text-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium';
</script>

<!-- <svelte:window bind:innerWidth={width} /> -->

<header class="sticky shadow-xl dark:shadow-indigo-500/50 top-0 z-50 ">

	<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center">
			<img src="images/logos.webp"  class="h-8 mr-3" alt="Asterisc Logo">
			<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Asterisc</span>
		</a>
		<div class="flex md:order-2">
			<DarkMode />

			<button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Get started</button>
			<button on:click={toggleNavbar} data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
			  <span class="sr-only">Open main menu</span>
			  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
			</button>
		</div>
		<div class="items-center justify-between w-full md:flex md:w-auto md:order-1 text-center {showMenu ? '' : 'hidden'} " id="navbar-sticky">
		  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
			<li>
			  <a href="/" on:click={()=>setActive(0)} class="block py-2 pl-3 pr-4 {active === 0 ? 'bg-purple-800' : 'bg-transparent'} sm:bg-transparent text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
			</li>
			<li>
			  <a href="/aboutus"  on:click={()=>setActive(1)} class="block py-2 pl-3 pr-4 {active === 1 ? 'bg-purple-800' : 'bg-transparent'} sm:bg-transparent text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
			</li>
			<li>
			  <a href="/testimonials"  on:click={()=>setActive(2)} class="block py-2 pl-3 pr-4 {active === 2 ? 'bg-purple-800' : 'bg-transparent'} sm:bg-transparent text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonials</a>
			</li>
			<li>
			  <a href="/contactus"  on:click={()=>setActive(3)} class="block py-2 pl-3 pr-4 {active === 3 ? 'bg-purple-800' : 'bg-transparent'} sm:bg-transparent text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
			</li>
			<li>
				<a href="/faqs"   on:click={()=>setActive(4)} class="block py-2 pl-3 pr-4 {active === 4 ? 'bg-purple-800' : 'bg-transparent'} sm:bg-transparent text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">FAQs</a>
			  </li>
			  <li>
				<a href="https://astr-one.vercel.app/" on:click={()=>setActive(5)} class="block py-2 pl-3 pr-4 {active === 5 ? 'bg-purple-800' : ''}  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
			  </li>
			  <!-- <li>
				<a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
			  </li> -->
		  </ul>
		</div>
		</div>
	  </nav>
	
</header>

<main>
	<slot />
</main>

<Footer customClass="bg-slate-100" footerType="socialmedia">
	<div class="mx-auto 	 max-w-screen-xl text-center">
		<FooterBrand
			href="https://asterisc.in"
			src="/images/logos.webp"
			alt="Asterisc Logo"
			name="Asterisc.in"
			aClass="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
		/>
		
		<p class="my-6 text-gray-500 dark:text-gray-400">
			Asterisc Computer Institute is a premier IT education Institute . The institute provides a wide variety of professional career, short term and certification courses, designed by our experts. 
			<!-- Our trainers constantly update their technical skills to maintain their expertise.All the courses are taught by certified and experienced faculty. Asterisc computer institute ventured in certification lead IT training ,we have produced highly successful IT professionals working with best IT companies across the globe. Students get placed because of their hardwork and our support and we get business because our students know it better than the most. -->


		</p>
		<FooterLinkGroup
			ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
		>
			<FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">About Us</FooterLink>
			<FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">FAQs</FooterLink>
			<FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Testimonials</FooterLink
			>
			<FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="https://astr-one.vercel.app/">Projects</FooterLink>

			<FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Contact Us</FooterLink>
		</FooterLinkGroup>
		<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
			>© 2021-2023 <a href="https://asterisc.in/" class="hover:underline">Asterisc.in™ </a>.
			Developed by Asterisc Technocrat Pvt. Ltd. All Rights Reserved.</span
		>
	</div>
</Footer>



<style>
	p {
		font-family: 'Quicksand', sans-serif;
	}
</style>
