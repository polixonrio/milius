<script lang="ts">
	import '../app.postcss';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	
</script>




<header class="sticky shadow-xl dark:shadow-white top-0 z-50">
	
	<Navbar />
</header>
<main>
	<slot />

</main>

<Footer />
<!-- 
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
	<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
		<a href="/" class="flex items-center justify-center mb-4 sm:mb-0">
			<img
				src="images/logos.webp"
				height="20rem"
				width="30rem"
				class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
				alt="Asterisc Logo"
			/>
			<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
				>Asterisc</span
			>
		</a>
		<div class="sm:flex text-center mt-6 sm:items-center justify-center">
			
			
			<ul
				class="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
			>
				<li>
					<a href="/abouts" class="mr-4 hover:underline md:mr-6">About Us</a>
				</li>
				<li>
					<a href="/faqs" class="mr-4 hover:underline md:mr-6">FAQs</a>
				</li>
				<li>
					<a href="/testimonials" class="mr-4 hover:underline md:mr-6">Testimonials</a>
				</li>
				<li>
					<a href="/contactus" class="hover:underline">Contact Us</a>
				</li>
			</ul>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

		<p class="text-sm text-gray-500 text-center dark:text-gray-400">
			© 2021-2023 <a href="https://asterisc.in/" class="hover:underline">Asterisc.in™ </a>.
		</p>
		<p class="text-sm text-gray-500 text-center dark:text-gray-400">
			Developed by Asterisc Technocrat Pvt. Ltd. All Rights Reserved.
		</p>
	</div>
</footer> -->


<style>
	p {
		font-family: 'Quicksand', sans-serif;
	}
</style>
