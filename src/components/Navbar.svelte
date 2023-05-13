<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';
	import { page } from '$app/stores';
	let active = 0;
	import PreloadingIndicator from './PreloadingIndicator.svelte';

	function setActive(index: number) {
		active = index;
		showMenu = !showMenu;
	}

	let showMenu = false;
	import { navigating } from '$app/stores';

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<nav
	class=" backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-xl dark:shadow-blue-500/50 fixed w-full z-20 top-0 left-0"
>
	{#if $navigating}
		<PreloadingIndicator />
	{/if}

	<div
		class="max-w-screen-xl backdrop-filter backdrop-blur-lg flex flex-wrap items-center justify-between mx-auto p-2"
	>
		<a href="/" class="flex items-center">
			<img
				src="images/logos.webp"
				height="20rem"
				width="30rem"
				class="ml-1 mr-1"
				alt="Asterisc Logo"
			/>
			<span
				class="self-center text-2xl font-semibold whitespace-nowrap dark:text-fresh-eggplant-700"
				>Asterisc</span
			>
		</a>
		<div class="flex lg:order-2">
			<div class="px-2"><DarkMode /></div>

			<a href="/contactus">
				<button
					type="button"
					class="bg-fresh-eggplant-500 hover:bg-fresh-eggplant-700 text-white font-bold py-2 px-4 rounded focus:ring-4 focus:ring-fresh-eggplant-300 dark:focus:ring-fresh-eggplant-900"
					>Get started</button
				>
			</a>
			<button
				on:click={toggleNavbar}
				data-collapse-toggle="navbar-sticky"
				type="button"
				class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-sticky"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
		<div
			class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 text-center {showMenu
				? ''
				: 'hidden'} "
			id="navbar-sticky"
		>
			<ul
				class="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg backdrop-filter backdrop-blur-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 dark:border-gray-700"
			>
				<li>
					<a
						href="/"
						class="block py-2 pl-3 pr-4 {$page.url.pathname === '/'
							? 'bg-fresh-eggplant-800 lg:text-fresh-eggplant-800 text-white lg:dark:text-fresh-eggplant-800 border-b-2 border-fresh-eggplant-800 '
							: 'bg-transparent text-fresh-eggplant-400'} lg:bg-transparent lg:hover:text-fresh-eggplant-700 lg:p-0 lg:dark:hover:text-fresh-eggplant-500 dark:text-fresh-eggplant-400"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="/aboutus"
						class="block py-2 pl-3 pr-4 {$page.url.pathname === '/aboutus'
							? 'bg-fresh-eggplant-800 lg:text-fresh-eggplant-800 text-white lg:dark:text-fresh-eggplant-800 border-b-2 border-fresh-eggplant-800 '
							: 'bg-transparent text-fresh-eggplant-400'} lg:bg-transparent lg:hover:text-fresh-eggplant-700 lg:p-0 lg:dark:hover:text-fresh-eggplant-500 dark:text-fresh-eggplant-400"
						>About Us</a
					>
				</li>
				<li>
					<a
						href="/testimonials"
						class="block py-2 pl-3 pr-4 {$page.url.pathname === '/testimonials'
							? 'bg-fresh-eggplant-800 lg:text-fresh-eggplant-800 text-white lg:dark:text-fresh-eggplant-800 border-b-2 border-fresh-eggplant-800 '
							: 'bg-transparent text-fresh-eggplant-400'} lg:bg-transparent lg:hover:text-fresh-eggplant-700 lg:p-0 lg:dark:hover:text-fresh-eggplant-500 dark:text-fresh-eggplant-400"
						>Testimonials</a
					>
				</li>
				<li>
					<a
						href="/contactus"
						class="block py-2 pl-3 pr-4 {$page.url.pathname === '/contactus'
							? 'bg-fresh-eggplant-800 lg:text-fresh-eggplant-800 text-white lg:dark:text-fresh-eggplant-800 border-b-2 border-fresh-eggplant-800 '
							: 'bg-transparent text-fresh-eggplant-400'} lg:bg-transparent lg:hover:text-fresh-eggplant-700 lg:p-0 lg:dark:hover:text-fresh-eggplant-500 dark:text-fresh-eggplant-400"
						>Contact Us</a
					>
				</li>
				<li>
					<a
						href="/courses"
						class="block py-2 pl-3 pr-4 {$page.url.pathname === '/courses'
							? 'bg-fresh-eggplant-800 lg:text-fresh-eggplant-800 text-white lg:dark:text-fresh-eggplant-800 border-b-2 border-fresh-eggplant-800 '
							: 'bg-transparent text-fresh-eggplant-400'} lg:bg-transparent lg:hover:text-fresh-eggplant-700 lg:p-0 lg:dark:hover:text-fresh-eggplant-500 dark:text-fresh-eggplant-400"
						>Courses</a
					>
				</li>
				<li>
					<a
						href="/faqs"
						class="block py-2 pl-3 pr-4 {$page.url.pathname === '/faqs'
							? 'bg-fresh-eggplant-800 lg:text-fresh-eggplant-800 text-white lg:dark:text-fresh-eggplant-800 border-b-2 border-fresh-eggplant-800 '
							: 'bg-transparent text-fresh-eggplant-400'} lg:bg-transparent lg:hover:text-fresh-eggplant-700 lg:p-0 lg:dark:hover:text-fresh-eggplant-500 dark:text-fresh-eggplant-400"
						>FAQs</a
					>
				</li>
				<li>
					<a
						href="https://astr-one.vercel.app/"
						on:click={() => setActive(6)}
						class="block py-2 pl-3 pr-4 {active === 6
							? 'bg-fresh-eggplant-800 lg:text-fresh-eggplant-800 text-white lg:dark:text-fresh-eggplant-800 border-b-2 border-fresh-eggplant-800 '
							: 'bg-transparent text-fresh-eggplant-400'} lg:bg-transparent lg:hover:text-fresh-eggplant-700 lg:p-0 lg:dark:hover:text-fresh-eggplant-500 dark:text-fresh-eggplant-400"
						>Projects</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
