<script lang="ts">
	import { onMount } from 'svelte/types/runtime/internal/lifecycle';

	onMount(() => {
		const form = document.getElementById('sheetdb-form'));

		if (form !== undefined) {
			// continue - error suppressed when used in this way.

			form.addEventListener('submit', (e) => {
				e.preventDefault();
				fetch(form.action, {
					method: 'POST',
					body: new FormData(document.getElementById('sheetdb-form'))
				})
					.then((response) => response.json())
					.then((html) => {
						// you can put any JS code here
						alert('success');
					});
			});
		}
	});
</script>

<form
	method="POST"
	action="https://script.google.com/macros/s/AKfycby7oJo_s1gF8s7Y3SHWlxL5UodDj7CH6UiAy8vSOnPp85Gd8_MogoBXA63SeLqeAZfW/exec"
	class="space-y-8"
	id="sheetdb-form"
>
	<div>
		<label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>Your Name</label
		>
		<input
			type="text"
			id="Name"
			name="Name"
			class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
			placeholder="Jane Doe"
			required
		/>
	</div>
	<div>
		<label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>Your email</label
		>
		<input
			type="email"
			id="Email"
			name="Email"
			class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
			placeholder="name@asterisc.in"
			required
		/>
	</div>
	<div>
		<label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>Subject</label
		>
		<input
			type="text"
			id="subject"
			name="Subject"
			class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
			placeholder="Let us know how we can help you"
			required
		/>
	</div>
	<div class="sm:col-span-2">
		<label for="Mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
			>Your Phone</label
		>
		<input
			id="Mobile"
			name="Mobile"
			class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
			placeholder="Mobile Number"
		/>
	</div>
	<div class="sm:col-span-2">
		<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
			>Your message</label
		>
		<input
			id="message"
			name="Message"
			class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
			placeholder="Leave a comment..."
		/>
	</div>

	<button
		type="submit"
		class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
		>Send message</button
	>
</form>
