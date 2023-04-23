<script>
	import { Button } from 'flowbite-svelte';
	import { P, Hr, Card, Label, Input } from 'flowbite-svelte';
	import LearnMore from '../components/LearnMore.svelte';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	import emailjs from '@emailjs/browser';

	function sendEmail(e) {
		emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY').then(
			(result) => {
				console.log('SUCCESS!', result.text);
			},
			(error) => {
				console.log('FAILED...', error.text);
			}
		);
	}

	onMount(() => {
		AOS.init();
		AOS.refresh();
	});
</script>

<main class="dark:bg-gray-800 bg-gray-100  dark:text-gray-100  ">
	<section
		class="  pt-12 h-screen flex items-center justify-center bg-cover bg-center sm:bg-center bg-image-one dark:bg-image-two 
		bg-no-repeat	 dark:bg-gray-900"
	>
		<div
			class="w-full h-full flex  justify-center items-center 
             "
		>
			<div class="py-8 px-4  mx-auto max-w-screen-xl align-middle text-center lg:py-16 lg:px-12">
				<a
					href="/testimonials"
					class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
				>
					<span class="text-xs bg-purple-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
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
					class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
				>
					<p>Programming is <span class=" text-purple-600 "> MORE </span> difficult, Join Now</p>
				</h1>
				<p
					class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
				>
					Join Asterisc Today and Solidify your IT career.
				</p>
				<div
					class="flex flex-col mb-4 lg:mb-10 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
				>
					<a
						href="/aboutus"
						class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
						class="min-w-0 border-black flex-auto rounded-md bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
						placeholder="Search For Courses"
					/>
					<button
						type="submit"
						class="flex-none rounded-md bg-purple-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>Search</button
					>
				</div>
				<!-- <div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href="/courses"
					class="rounded-md bg-purple-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Get started</a
				>
				<a
					href="/contactus"
					class="rounded-md bg-purple-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Contact Us</a
				>
			</div> -->
				<!-- <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
				<span class="font-semibold text-gray-400 uppercase">FEATURED IN</span>
				<div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
					<a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
						<svg class="h-8" viewBox="0 0 132 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M39.4555 5.17846C38.9976 3.47767 37.6566 2.13667 35.9558 1.67876C32.8486 0.828369 20.4198 0.828369 20.4198 0.828369C20.4198 0.828369 7.99099 0.828369 4.88379 1.64606C3.21571 2.10396 1.842 3.47767 1.38409 5.17846C0.566406 8.28567 0.566406 14.729 0.566406 14.729C0.566406 14.729 0.566406 21.2051 1.38409 24.2796C1.842 25.9804 3.183 27.3214 4.88379 27.7793C8.0237 28.6297 20.4198 28.6297 20.4198 28.6297C20.4198 28.6297 32.8486 28.6297 35.9558 27.812C37.6566 27.3541 38.9976 26.0131 39.4555 24.3123C40.2732 21.2051 40.2732 14.7618 40.2732 14.7618C40.2732 14.7618 40.3059 8.28567 39.4555 5.17846Z" fill="currentColor"/>
							<path d="M16.4609 8.77612V20.6816L26.7966 14.7289L16.4609 8.77612Z" fill="white"/>
							<path d="M64.272 25.0647C63.487 24.5413 62.931 23.7237 62.6039 22.5789C62.2768 21.4669 62.1133 19.9623 62.1133 18.1307V15.6122C62.1133 13.7479 62.3095 12.2434 62.6693 11.0986C63.0618 9.95386 63.6505 9.13618 64.4355 8.61286C65.2532 8.08954 66.2998 7.82788 67.6081 7.82788C68.8837 7.82788 69.9304 8.08954 70.7153 8.61286C71.5003 9.13618 72.0564 9.98657 72.4161 11.0986C72.7759 12.2107 72.9722 13.7152 72.9722 15.6122V18.1307C72.9722 19.995 72.8086 21.4669 72.4488 22.6116C72.0891 23.7237 71.533 24.5741 70.7481 25.0974C69.9631 25.6207 68.8837 25.8824 67.5427 25.8824C66.169 25.8496 65.057 25.588 64.272 25.0647ZM68.6875 22.3172C68.9164 21.7612 69.0146 20.8127 69.0146 19.5371V14.1077C69.0146 12.8648 68.9164 11.949 68.6875 11.3603C68.4585 10.7715 68.0988 10.5099 67.5427 10.5099C67.0194 10.5099 66.6269 10.8043 66.4307 11.3603C66.2017 11.949 66.1036 12.8648 66.1036 14.1077V19.5371C66.1036 20.8127 66.2017 21.7612 66.4307 22.3172C66.6269 22.8733 67.0194 23.1676 67.5754 23.1676C68.0987 23.1676 68.4585 22.906 68.6875 22.3172Z" fill="currentColor"/>
							<path d="M124.649 18.1634V19.0465C124.649 20.1586 124.682 21.009 124.748 21.565C124.813 22.121 124.944 22.5462 125.173 22.7752C125.369 23.0368 125.696 23.1677 126.154 23.1677C126.743 23.1677 127.135 22.9387 127.364 22.4808C127.593 22.0229 127.691 21.2706 127.724 20.1913L131.093 20.3875C131.125 20.5511 131.125 20.7473 131.125 21.009C131.125 22.6117 130.7 23.8218 129.817 24.6068C128.934 25.3918 127.691 25.7843 126.089 25.7843C124.159 25.7843 122.818 25.1628 122.033 23.9527C121.248 22.7425 120.855 20.8782 120.855 18.327V15.2852C120.855 12.6686 121.248 10.7715 122.066 9.56136C122.883 8.35119 124.257 7.76245 126.187 7.76245C127.528 7.76245 128.574 8.02411 129.294 8.51472C130.013 9.00534 130.504 9.79032 130.798 10.8042C131.093 11.8509 131.223 13.29 131.223 15.1216V18.098H124.649V18.1634ZM125.14 10.837C124.944 11.0986 124.813 11.4911 124.748 12.0471C124.682 12.6032 124.649 13.4536 124.649 14.5983V15.8412H127.528V14.5983C127.528 13.4863 127.495 12.6359 127.43 12.0471C127.364 11.4584 127.201 11.0659 127.004 10.837C126.808 10.608 126.481 10.4772 126.089 10.4772C125.631 10.4445 125.336 10.5753 125.14 10.837Z" fill="currentColor"/>
							<path d="M54.7216 17.8362L50.2734 1.71143H54.1656L55.7356 9.0052C56.1281 10.8041 56.4224 12.3414 56.6187 13.617H56.7168C56.8476 12.7011 57.142 11.1966 57.5999 9.0379L59.2353 1.71143H63.1274L58.6138 17.8362V25.5552H54.7543V17.8362H54.7216Z" fill="currentColor"/>
							<path d="M85.6299 8.15479V25.5878H82.5554L82.2283 23.4619H82.1302C81.3125 25.0645 80.0369 25.8822 78.3688 25.8822C77.2241 25.8822 76.3737 25.4897 75.8177 24.7375C75.2617 23.9852 75 22.8077 75 21.1723V8.15479H78.9249V20.9434C78.9249 21.7284 79.023 22.2844 79.1865 22.6115C79.3501 22.9385 79.6444 23.1021 80.0369 23.1021C80.364 23.1021 80.6911 23.004 81.0181 22.775C81.3452 22.5788 81.5742 22.3171 81.705 21.99V8.15479H85.6299Z" fill="currentColor"/>
							<path d="M105.747 8.15479V25.5878H102.673L102.346 23.4619H102.247C101.43 25.0645 100.154 25.8822 98.4861 25.8822C97.3413 25.8822 96.4909 25.4897 95.9349 24.7375C95.3788 23.9852 95.1172 22.8077 95.1172 21.1723V8.15479H99.0421V20.9434C99.0421 21.7284 99.1402 22.2844 99.3038 22.6115C99.4673 22.9385 99.7617 23.1021 100.154 23.1021C100.481 23.1021 100.808 23.004 101.135 22.775C101.462 22.5788 101.691 22.3171 101.822 21.99V8.15479H105.747Z" fill="currentColor"/>
							<path d="M96.2907 4.88405H92.3986V25.5552H88.5718V4.88405H84.6797V1.71143H96.2907V4.88405Z" fill="currentColor"/>
							<path d="M118.731 10.935C118.502 9.82293 118.11 9.03795 117.587 8.54734C117.063 8.05672 116.311 7.79506 115.395 7.79506C114.676 7.79506 113.989 7.99131 113.367 8.41651C112.746 8.809 112.255 9.36502 111.928 10.0192H111.896V0.828369H108.102V25.5552H111.34L111.732 23.9199H111.83C112.125 24.5086 112.582 24.9665 113.204 25.3263C113.825 25.6533 114.479 25.8496 115.232 25.8496C116.573 25.8496 117.521 25.2281 118.143 24.018C118.764 22.8078 119.091 20.8781 119.091 18.2942V15.5467C119.059 13.5516 118.96 12.0143 118.731 10.935ZM115.134 18.0325C115.134 19.3081 115.068 20.2893 114.97 21.0089C114.872 21.7285 114.676 22.2518 114.447 22.5461C114.185 22.8405 113.858 23.004 113.466 23.004C113.138 23.004 112.844 22.9386 112.582 22.7751C112.321 22.6116 112.092 22.3826 111.928 22.0882V12.2106C112.059 11.7527 112.288 11.3602 112.615 11.0331C112.942 10.7387 113.302 10.5752 113.662 10.5752C114.054 10.5752 114.381 10.7387 114.578 11.0331C114.807 11.3602 114.937 11.8835 115.036 12.6031C115.134 13.3553 115.166 14.402 115.166 15.743V18.0325H115.134Z" fill="currentColor"/>
						</svg>                        
					</a>
					<a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
						<svg class="h-11" viewBox="0 0 208 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M42.7714 20.729C42.7714 31.9343 33.6867 41.019 22.4814 41.019C11.2747 41.019 2.19141 31.9343 2.19141 20.729C2.19141 9.52228 11.2754 0.438965 22.4814 0.438965C33.6867 0.438965 42.7714 9.52297 42.7714 20.729Z" fill="currentColor"/>
							<path d="M25.1775 21.3312H20.1389V15.9959H25.1775C25.5278 15.9959 25.8747 16.0649 26.1983 16.1989C26.522 16.333 26.8161 16.5295 27.0638 16.7772C27.3115 17.0249 27.508 17.319 27.6421 17.6427C27.7761 17.9663 27.8451 18.3132 27.8451 18.6635C27.8451 19.0139 27.7761 19.3608 27.6421 19.6844C27.508 20.0081 27.3115 20.3021 27.0638 20.5499C26.8161 20.7976 26.522 20.9941 26.1983 21.1281C25.8747 21.2622 25.5278 21.3312 25.1775 21.3312ZM25.1775 12.439H16.582V30.2234H20.1389V24.8881H25.1775C28.6151 24.8881 31.402 22.1012 31.402 18.6635C31.402 15.2258 28.6151 12.439 25.1775 12.439Z" fill="white"/>
							<path d="M74.9361 17.4611C74.9361 16.1521 73.9305 15.3588 72.6239 15.3588H69.1216V19.5389H72.6248C73.9313 19.5389 74.9369 18.7457 74.9369 17.4611H74.9361ZM65.8047 28.2977V12.439H73.0901C76.4778 12.439 78.3213 14.7283 78.3213 17.4611C78.3213 20.1702 76.4542 22.4588 73.0901 22.4588H69.1216V28.2977H65.8055H65.8047ZM80.3406 28.2977V16.7362H83.3044V18.2543C84.122 17.2731 85.501 16.4563 86.9027 16.4563V19.3518C86.6912 19.3054 86.4349 19.2826 86.0851 19.2826C85.1039 19.2826 83.7949 19.8424 83.3044 20.5681V28.2977H80.3397H80.3406ZM96.8802 22.3652C96.8802 20.6136 95.8503 19.0955 93.9823 19.0955C92.1364 19.0955 91.1105 20.6136 91.1105 22.366C91.1105 24.1404 92.1364 25.6585 93.9823 25.6585C95.8503 25.6585 96.8794 24.1404 96.8794 22.3652H96.8802ZM88.0263 22.3652C88.0263 19.1663 90.2684 16.4563 93.9823 16.4563C97.7198 16.4563 99.962 19.1655 99.962 22.3652C99.962 25.5649 97.7198 28.2977 93.9823 28.2977C90.2684 28.2977 88.0263 25.5649 88.0263 22.3652ZM109.943 24.3739V20.3801C109.452 19.6316 108.378 19.0955 107.396 19.0955C105.693 19.0955 104.524 20.4265 104.524 22.366C104.524 24.3267 105.693 25.6585 107.396 25.6585C108.378 25.6585 109.452 25.1215 109.943 24.3731V24.3739ZM109.943 28.2977V26.5697C109.054 27.6899 107.841 28.2977 106.462 28.2977C103.637 28.2977 101.465 26.1499 101.465 22.3652C101.465 18.6993 103.59 16.4563 106.462 16.4563C107.793 16.4563 109.054 17.0177 109.943 18.1843V12.439H112.932V28.2977H109.943ZM123.497 28.2977V26.5925C122.727 27.4337 121.372 28.2977 119.526 28.2977C117.052 28.2977 115.884 26.9431 115.884 24.7473V16.7362H118.849V23.5798C118.849 25.1451 119.666 25.6585 120.927 25.6585C122.071 25.6585 122.983 25.028 123.497 24.3731V16.7362H126.463V28.2977H123.497ZM128.69 22.3652C128.69 18.9092 131.212 16.4563 134.67 16.4563C136.982 16.4563 138.383 17.4611 139.131 18.4886L137.191 20.3093C136.655 19.5153 135.838 19.0955 134.81 19.0955C133.011 19.0955 131.751 20.4037 131.751 22.366C131.751 24.3267 133.011 25.6585 134.81 25.6585C135.838 25.6585 136.655 25.1915 137.191 24.4203L139.131 26.2426C138.383 27.2702 136.982 28.2977 134.67 28.2977C131.212 28.2977 128.69 25.8456 128.69 22.3652ZM141.681 25.1915V19.329H139.813V16.7362H141.681V13.6528H144.648V16.7362H146.935V19.329H144.648V24.3975C144.648 25.1215 145.02 25.6585 145.675 25.6585C146.118 25.6585 146.541 25.495 146.702 25.3087L147.334 27.5728C146.891 27.9714 146.096 28.2977 144.857 28.2977C142.779 28.2977 141.681 27.2238 141.681 25.1915ZM165.935 28.2977V21.454H158.577V28.2977H155.263V12.439H158.577V18.5577H165.935V12.4398H169.275V28.2977H165.935ZM179.889 28.2977V26.5925C179.119 27.4337 177.764 28.2977 175.919 28.2977C173.443 28.2977 172.276 26.9431 172.276 24.7473V16.7362H175.241V23.5798C175.241 25.1451 176.058 25.6585 177.32 25.6585C178.464 25.6585 179.376 25.028 179.889 24.3731V16.7362H182.856V28.2977H179.889ZM193.417 28.2977V21.1986C193.417 19.6333 192.602 19.0963 191.339 19.0963C190.172 19.0963 189.285 19.7504 188.77 20.4045V28.2985H185.806V16.7362H188.77V18.1843C189.495 17.3439 190.896 16.4563 192.718 16.4563C195.217 16.4563 196.408 17.8573 196.408 20.0523V28.2977H193.418H193.417ZM199.942 25.1915V19.329H198.076V16.7362H199.943V13.6528H202.91V16.7362H205.198V19.329H202.91V24.3975C202.91 25.1215 203.282 25.6585 203.936 25.6585C204.38 25.6585 204.802 25.495 204.965 25.3087L205.595 27.5728C205.152 27.9714 204.356 28.2977 203.119 28.2977C201.04 28.2977 199.943 27.2238 199.943 25.1915" fill="currentColor"/>
						</svg>                       
					</a>
					<a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
						<svg class="h-11" viewBox="0 0 120 41" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.058 40.5994C31.0322 40.5994 39.9286 31.7031 39.9286 20.7289C39.9286 9.75473 31.0322 0.858398 20.058 0.858398C9.08385 0.858398 0.1875 9.75473 0.1875 20.7289C0.1875 31.7031 9.08385 40.5994 20.058 40.5994Z" fill="currentColor"/>
							<path d="M33.3139 20.729C33.3139 19.1166 32.0101 17.8362 30.4211 17.8362C29.6388 17.8362 28.9272 18.1442 28.4056 18.6424C26.414 17.2196 23.687 16.2949 20.6518 16.1765L21.9796 9.96387L26.2951 10.8885C26.3429 11.9793 27.2437 12.8567 28.3584 12.8567C29.4965 12.8567 30.4211 11.9321 30.4211 10.7935C30.4211 9.65536 29.4965 8.73071 28.3584 8.73071C27.5522 8.73071 26.8406 9.20497 26.5086 9.89271L21.6954 8.87303C21.553 8.84917 21.4107 8.87303 21.3157 8.94419C21.1972 9.01535 21.1261 9.13381 21.1026 9.27613L19.6321 16.1999C16.5497 16.2949 13.7753 17.2196 11.7599 18.6662C11.2171 18.1478 10.495 17.8589 9.74439 17.86C8.13201 17.86 6.85156 19.1639 6.85156 20.7529C6.85156 21.9383 7.56272 22.9341 8.55897 23.3849C8.51123 23.6691 8.48781 23.9538 8.48781 24.2623C8.48781 28.7197 13.6807 32.348 20.083 32.348C26.4852 32.348 31.6781 28.7436 31.6781 24.2623C31.6781 23.9776 31.6543 23.6691 31.607 23.3849C32.6028 22.9341 33.3139 21.9144 33.3139 20.729ZM13.4434 22.7918C13.4434 21.6536 14.368 20.729 15.5066 20.729C16.6447 20.729 17.5694 21.6536 17.5694 22.7918C17.5694 23.9299 16.6447 24.855 15.5066 24.855C14.368 24.8784 13.4434 23.9299 13.4434 22.7918ZM24.9913 28.2694C23.5685 29.6921 20.8653 29.7872 20.083 29.7872C19.2768 29.7872 16.5736 29.6683 15.1742 28.2694C14.9612 28.0559 14.9612 27.7239 15.1742 27.5105C15.3877 27.2974 15.7196 27.2974 15.9331 27.5105C16.8343 28.4117 18.7314 28.7197 20.083 28.7197C21.4346 28.7197 23.355 28.4117 24.2324 27.5105C24.4459 27.2974 24.7778 27.2974 24.9913 27.5105C25.1809 27.7239 25.1809 28.0559 24.9913 28.2694ZM24.6116 24.8784C23.4735 24.8784 22.5488 23.9538 22.5488 22.8156C22.5488 21.6775 23.4735 20.7529 24.6116 20.7529C25.7502 20.7529 26.6748 21.6775 26.6748 22.8156C26.6748 23.9299 25.7502 24.8784 24.6116 24.8784Z" fill="white"/>
							<path d="M108.412 16.6268C109.8 16.6268 110.926 15.5014 110.926 14.1132C110.926 12.725 109.8 11.5996 108.412 11.5996C107.024 11.5996 105.898 12.725 105.898 14.1132C105.898 15.5014 107.024 16.6268 108.412 16.6268Z" fill="currentColor"/>
							<path d="M72.5114 24.8309C73.7446 24.8309 74.4557 23.9063 74.4084 23.0051C74.385 22.5308 74.3373 22.2223 74.29 21.9854C73.5311 18.7133 70.8756 16.2943 67.7216 16.2943C63.9753 16.2943 60.9401 19.6853 60.9401 23.8586C60.9401 28.0318 63.9753 31.4228 67.7216 31.4228C70.0694 31.4228 71.753 30.5693 72.9622 29.2177C73.5549 28.5538 73.4365 27.5341 72.7249 27.036C72.1322 26.6329 71.3972 26.7752 70.8517 27.2256C70.3302 27.6765 69.3344 28.5772 67.7216 28.5772C65.825 28.5772 64.2126 26.941 63.8568 24.7832H72.5114V24.8309ZM67.6981 19.1637C69.4051 19.1637 70.8756 20.4915 71.421 22.3173H63.9752C64.5207 20.468 65.9907 19.1637 67.6981 19.1637ZM61.0824 17.7883C61.0824 17.0771 60.5609 16.5078 59.897 16.3894C57.8338 16.0813 55.8895 16.8397 54.7752 18.2391V18.049C54.7752 17.1717 54.0636 16.6267 53.3525 16.6267C52.5697 16.6267 51.9297 17.2667 51.9297 18.049V29.6681C51.9297 30.427 52.4985 31.0908 53.2574 31.1381C54.0875 31.1854 54.7752 30.5454 54.7752 29.7154V23.7162C54.7752 21.0608 56.7668 18.8791 59.5173 19.1876H59.802C60.5131 19.1399 61.0824 18.5233 61.0824 17.7883ZM109.834 19.306C109.834 18.5233 109.194 17.8833 108.412 17.8833C107.629 17.8833 106.989 18.5233 106.989 19.306V29.7154C106.989 30.4981 107.629 31.1381 108.412 31.1381C109.194 31.1381 109.834 30.4981 109.834 29.7154V19.306ZM88.6829 11.4338C88.6829 10.651 88.0429 10.011 87.2602 10.011C86.4779 10.011 85.8379 10.651 85.8379 11.4338V17.7648C84.8655 16.7924 83.6562 16.3182 82.2096 16.3182C78.4632 16.3182 75.4281 19.7091 75.4281 23.8824C75.4281 28.0557 78.4632 31.4466 82.2096 31.4466C83.6562 31.4466 84.8893 30.9485 85.8613 29.9761C85.9797 30.6405 86.5729 31.1381 87.2602 31.1381C88.0429 31.1381 88.6829 30.4981 88.6829 29.7154V11.4338ZM82.2334 28.6245C80.0518 28.6245 78.2971 26.5145 78.2971 23.8824C78.2971 21.2742 80.0518 19.1399 82.2334 19.1399C84.4151 19.1399 86.1698 21.2504 86.1698 23.8824C86.1698 26.5145 84.3912 28.6245 82.2334 28.6245ZM103.527 11.4338C103.527 10.651 102.887 10.011 102.104 10.011C101.322 10.011 100.681 10.651 100.681 11.4338V17.7648C99.7093 16.7924 98.5 16.3182 97.0534 16.3182C93.307 16.3182 90.2719 19.7091 90.2719 23.8824C90.2719 28.0557 93.307 31.4466 97.0534 31.4466C98.5 31.4466 99.7327 30.9485 100.705 29.9761C100.824 30.6405 101.416 31.1381 102.104 31.1381C102.887 31.1381 103.527 30.4981 103.527 29.7154V11.4338ZM97.0534 28.6245C94.8717 28.6245 93.1174 26.5145 93.1174 23.8824C93.1174 21.2742 94.8717 19.1399 97.0534 19.1399C99.235 19.1399 100.99 21.2504 100.99 23.8824C100.99 26.5145 99.235 28.6245 97.0534 28.6245ZM117.042 29.7392V19.1637H118.299C118.963 19.1637 119.556 18.6656 119.603 17.9779C119.651 17.2428 119.058 16.6267 118.347 16.6267H117.042V14.6347C117.042 13.8758 116.474 13.2119 115.715 13.1646C114.885 13.1173 114.197 13.7573 114.197 14.5874V16.6501H113.011C112.348 16.6501 111.755 17.1483 111.708 17.836C111.66 18.571 112.253 19.1876 112.964 19.1876H114.173V29.7631C114.173 30.5454 114.814 31.1854 115.596 31.1854C116.426 31.1381 117.042 30.5216 117.042 29.7392Z" fill="currentColor"/>
						</svg>                                                   
					</a>         
				</div>
			</div>  -->
			</div>
		</div>
	</section>
	<!-- <div class="bg-gray flex  items-center justify-center pt-12 h-screen">
		<div class="relative  isolate px-6 md:py-16 mx-auto align-middle ">
			<div class="mx-auto  max-w-2xl align-middle">
				
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
					<p class="text-center font-bold md:text-left md:text-6xl text-4xl">
						Programming is <span class=" text-purple-600 "> MORE </span> difficult, Join Now
					</p>
					<p class="text-center mt-6 font-extrabold  leading-8 text-black dark:text-white">
						Join Asterisc Today and Solidify your IT career
					</p>
					<div class="mt-6 flex gap-x-4">
						<label for="search-courses" class="sr-only">Email address</label>
						<input
							id="search-courses"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="min-w-0 border-black flex-auto rounded-md bg-white/5 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
							placeholder="Search For Courses"
						/>
						<button
							type="submit"
							class="flex-none rounded-md bg-purple-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>Search</button
						>
					</div>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/courses"
							class="rounded-md bg-purple-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Get started</a
						>
						<a
							href="/contactus"
							class="rounded-md bg-purple-600 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>Contact Us</a
						>
					</div>
				</div>
			</div>
		</div>
	</div> -->

	<div class="bg-white  dark:bg-black py-16 sm:py-16 bg-cover bg-center sm:bg-center">
		<div class="  grid grid-cols-1 flex-wrap mx-auto max-w-7xl px-6 lg:px-8 ">
			<p class="text-center mx-auto font-bold  md:text-6xl text-2xl mb-10 ">
				LEARN <span class=" text-purple-600 "> MORE </span>NOW
			</p>
			<div class="grid sm:grid-cols-3 mx-auto grid-cols-1 gap-4  ">
				<div
					class=" text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl   "
				>
					<div class="flex overflow-y-hidden  overflow-x-hidden ">
						<img src="images/webdev.webp" alt="movie" class="w-40  h-40 mx-auto  object-contain " />
					</div>
					<p class="text-center object-contain font-bold  md:text-3xl text-xl mb-6">
						Web Developmment <br />
						<LearnMore />
					</p>
				</div>

				<div
					class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
				>
					<div class="flex overflow-y-hidden overflow-x-hidden ">
						<img src="images/ml.webp" alt="movie" class="w-40  h-40 mx-auto object-contain" />
					</div>

					<p class="text-center font-bold object-contain md:text-3xl text-xl mb-6">
						Machine Learning <br />
						<LearnMore />
					</p>
				</div>

				<div
					class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
				>
					<div class="flex overflow-y-hidden overflow-x-hidden ">
						<img src="images/mobdev.webp" alt="movie" class="w-40  h-40 mx-auto object-contain" />
					</div>

					<p class="text-center font-bold object-contain md:text-3xl text-xl mb-6">
						Mobile Development <br />
						<LearnMore />
					</p>
				</div>

				<div
					class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
				>
					<div class="flex overflow-y-hidden overflow-x-hidden ">
						<img src="images/testing.webp" alt="movie" class="w-40  h-40 mx-auto object-contain" />
					</div>

					<p class="text-center font-bold object-contain md:text-3xl text-xl mb-6">
						Software Testing <br />
						<LearnMore />
					</p>
				</div>

				<div
					class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
				>
					<div class="flex overflow-y-hidden overflow-x-hidden ">
						<img src="images/coding.webp" alt="movie" class="w-40  h-40 mx-auto object-contain" />
					</div>

					<p class="text-center font-bold object-contain md:text-3xl text-xl mb-6">
						Programming Language <br />
						<LearnMore />
					</p>
				</div>

				<div
					class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
				>
					<div class="flex overflow-y-hidden overflow-x-hidden ">
						<img src="images/database.webp" alt="movie" class="w-40  h-40 mx-auto object-contain" />
					</div>

					<p class="text-center mx-auto font-bold object-contain md:text-3xl text-xl mb-6">
						Database Design <br />
						<LearnMore />
					</p>
				</div>
			</div>
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

	<div id="wat" class="bg-white dark:bg-black py-16 sm:py-16 ">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<p class="text-center font-bold  md:text-6xl text-2xl mb-10">
				LEARN <span class=" text-purple-600 "> MORE </span>NOW
			</p>
			<div class="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-2">
				<div class="w-full h-96 ">
					<!-- <iframe
						class="aspect-video h-96 w-full"
						frameborder="0"
						allowfullscreen
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						title="College Students Develop mobile app in lockdown and start earning | NAGPUR"
						width="640"
						height="360"
						src="https://www.youtube.com/embed/T9ITgDZWDZg?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fasterisc.in&amp;widgetid=1"
						id="widget2"
					/> -->
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
					<p class="text-left font-bold  md:text-5xl text-xl mb-10">
						Students Success Journey Build App during lockdown and earn profit <br />
					</p>
					<p class="text-center font-sm   text-base mb-10">
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
						<a href="#">Chandrakant Sir</a>
					</h3>
					<p>Founder / CEO</p>
					<ul class="flex justify-center mt-4 space-x-4">
						<li>
							<a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
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
							<a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
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
						<a href="#">Haris Sir </a>
					</h3>
					<p>CTO/Co-founder</p>
					<ul class="flex justify-center mt-4 space-x-4">
						<li>
							<a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
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
							<a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									/></svg
								>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
							>
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</li>
						<li>
							<a href="#" class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
										clip-rule="evenodd"
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
						<a href="#">Pooja Mam</a>
					</h3>
					<p>SEO & Marketing</p>
					<ul class="flex justify-center mt-4 space-x-4">
						<li>
							<a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
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
							<a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									/></svg
								>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
							>
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</li>
						<li>
							<a href="#" class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
										clip-rule="evenodd"
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
						<a href="#">Shrikant Sir </a>
					</h3>
					<p>Sales</p>
					<ul class="flex justify-center mt-4 space-x-4">
						<li>
							<a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
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
							<a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
									/></svg
								>
							</a>
						</li>
						<li>
							<a
								href="#"
								class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300"
							>
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</li>
						<li>
							<a href="#" class="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
									><path
										fill-rule="evenodd"
										d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
										clip-rule="evenodd"
									/></svg
								>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- <div class="bg-white dark:bg-black py-24 sm:py-32">
		<div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
			<div class="max-w-2xl">
				<h2 class="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
					Meet our leadership
				</h2>
				<p class="mt-6 text-lg leading-8 dark:text-white text-gray-900">
					We have an excellent team of Instructors to guide you.
				</p>
			</div>
			<ul class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
				<li>
					<div class="flex items-center gap-x-6">
						<img class="h-22 w-22 rounded-full" src="/images/csir.webp" alt="" />
						<div class="">
							<h3
								class="text-xl  font-semibold  leading-7 tracking-tight dark:text-white text-gray-900"
							>
								Chandrakant Sir
							</h3>
							<p class="text-xl font-semibold leading-6 text-indigo-600">Founder / CEO</p>
						</div>
					</div>
				</li>

				<li>
					<div class="flex items-center gap-x-6">
						<img class="h-22 w-22 rounded-full" src="/images/hsir.webp" alt="" />
						<div>
							<h3
								class="text-xl font-semibold leading-7 tracking-tight dark:text-white text-gray-900"
							>
								Haris Sir
							</h3>
							<p class="text-xl font-semibold leading-6 text-indigo-600">Instructor</p>
						</div>
					</div>
				</li>

				<li>
					<div class="flex items-center gap-x-6">
						<img class="h-22 w-22 rounded-full" src="/images/pmaam.webp" alt="" />
						<div>
							<h3
								class="text-xl font-semibold leading-7 tracking-tight dark:text-white text-gray-900"
							>
								Pooja Maam
							</h3>
							<p class="text-xl font-semibold leading-6 text-indigo-600">Instructor</p>
						</div>
					</div>
				</li>

				<li>
					<div class="flex items-center gap-x-6">
						<div class="w-500 h-400 rounded-full">
							<img src="/images/ssir.webp" class="object-cover w-full h-full" />
						</div>
						<div>
							<h3
								class="text-xl font-semibold leading-7 tracking-tight dark:text-white text-gray-900"
							>
								Shrikant Sir
							</h3>
							<p class="text-xl font-semibold leading-6 text-indigo-600">Instructor</p>
						</div>
					</div>
				</li>

			</ul>
		</div>
	</div> -->

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
						<label for="email-address-subscribe" class="sr-only">Email address</label>
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
		<!-- <div
			class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
			aria-hidden="true"
		>
			<div
				class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div> -->
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
				<form action="#" class="space-y-8">
					<div>
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>Your email</label
						>
						<input
							type="email"
							id="email"
							class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="name@flowbite.com"
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
							class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="Let us know how we can help you"
							required
						/>
					</div>
					<div class="sm:col-span-2">
						<label
							for="message"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>Your message</label
						>
						<textarea
							id="message"
							rows="6"
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
			</div>
		</section>
	</div>
</main>

<style>
	p {
		font-family: 'Quicksand', sans-serif;
	}

	.bg-image-light {
		background-image: url('/images/ver.svg');
	}

	.bg-image-dark {
		background-image: url('/images/ty.webp');
	}
</style>
