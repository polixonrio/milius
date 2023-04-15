<script>
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<section class="dark:bg-gray-800 dark:text-gray-100">
	<div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p class="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
			Frequently Asked Questions
		</h2>
		<div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<Accordion>
				<AccordionItem open >
					<svelte:fragment slot="lead">How many hours daily lectures will be ?</svelte:fragment>
					<svelte:fragment slot="summary">-></svelte:fragment>
					<svelte:fragment slot="content">1 hour teaching and 1 hour practical. Along with that you’ll also have daily homework discussion and doubt resolution sessions with your Mentors. You’ll also be given practice homework to master the topics.</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead">(icon)</svelte:fragment>
					<svelte:fragment slot="summary">(summary)</svelte:fragment>
					<svelte:fragment slot="content">(content)</svelte:fragment>
				</AccordionItem>
				<!-- ... -->
			</Accordion>
		</div>
	</div>
</section>
