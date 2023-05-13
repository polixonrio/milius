<script lang="ts">
	import '../app.postcss';
	import { Footer, FooterBrand, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<!-- lma -->

<header class="sticky shadow-xl dark:shadow-white top-0 z-50">
	<Navbar />
</header>
<main>
	<slot />
</main>

<Footer customClass="bg-slate-100" footerType="socialmedia">
	<div class="mx-auto max-w-screen-xl text-center">
		<FooterBrand
			href="https://asterisc.in"
			height="20rem"
			width="30rem"
			src="images/logos.webp"
			class="mr-1"
			alt="Asterisc Logo"
			name="Asterisc.in"
			aClass="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
		/>

		<p class="my-6 text-gray-500 dark:text-gray-400">
			Asterisc Computer Institute is a premier IT education Institute . The institute provides a
			wide variety of professional career, short term and certification courses, designed by our
			experts.
		</p>
		<FooterLinkGroup
			ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
		>
			<FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">About Us</FooterLink>
			<FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">FAQs</FooterLink>
			<FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/">Testimonials</FooterLink
			>
			<FooterLink
				liClass=""
				aClass="mr-4 hover:underline md:mr-6"
				href="https://astr-one.vercel.app/">Projects</FooterLink
			>

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
