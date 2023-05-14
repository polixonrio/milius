<script lang="ts">
	import type { PageData } from './$types';
	let courses = [
		{
			title: 'Java In Depth: Become a Complete Java Engineer!',
			description:
				'Java is a high-level programming language. It was originally designed for developing programs for handheld devices and set-top boxes. Java is used as the server-side programming language for most back-end development projects. It is also used for desktop computing, other mobile computing, games, and numerical computing.',
			image: '/images/Java.webp'
		},
		{
			title: 'AWS Certified Developer Associate 2021',
			description:
				'Amazon web service is a platform that offers flexible, reliable, scalable, easy-to-use and cost-effective cloud computing solutions. AWS is a comprehensive, easy to use computing platform offered by Amazon.',
			image: '/images/aws.webp'
		},
		{
			title: 'Real-World Ethical Hacking: Hands-on Cybersecurity',
			description:
				"Ethical hacking involves an authorized attempt to gain unauthorized access to a computer system, application, or data. Carrying out an ethical hack involves duplicating strategies and actions of malicious attackers. Also known as 'white hats,' ethical hackers are security experts that perform these assessments.",
			image: '/images/eth.webp'
		},
		{
			title: 'Tally ERP9 With GST Step By Step Guide From Basic to Professional',
			description:
				'Tally. ERP 9 is a windows-based Enterprise Resource Planning software. The software handles Accounting, Inventory Management, Order Management, Tax Management, Payroll, Banking and many such requirements of the business. It supports all day-to-day processes from recording invoices to generating various MIS reports.',
			image: '/images/tally.webp'
		},
		{
			title: 'The Complete AutoCAD course from Zero to Advanced',
			description:
				'AutoCAD is a commercial computer-aided design (CAD) and drafting software application. AutoCAD is used in industry, by architects, project managers, engineers, graphic designers, city planners and other professionals.',
			image: '/images/auto.webp'
		},
		{
			title: 'Graphic Design Mastery: The Full Branding & Design Process',
			description:
				'Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.',
			image: '/images/graphicdesign.webp'
		},
		{
			title: 'Learn C++ for Game Development',
			description:
				'C++ is a powerful general-purpose programming language. It can be used to develop operating systems, games, browsers, and so on. C++ supports different ways of programming like object-oriented, functional, procedural, and so on.',
			image: '/images/cw.webp'
		}
	];
</script>

<div class="bg-white dark:bg-black py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<dl class="grid grid-cols-1 gap-x-8 gap-y-16 justify-items-center text-center md:grid-cols-3">
			<!-- <div
				class="max-w-sm bg-white mx-auto border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="/">
					<img class="rounded-t-lg" src="/images/Java.webp" alt="" />
				</a>
				<div class="p-5">
					<a href="/">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Java In Depth: Become a Complete Java Engineer!
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Java is a high-level programming language. It was originally designed for developing
						programs for handheld devices and set-top boxes. Java is used as the server-side
						programming language for most back-end development projects. It is also used for desktop
						computing, other mobile computing, games, and numerical computing.
					</p>
					<a
						href="/"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Start Now
						<svg
							aria-hidden="true"
							class="w-4 h-4 ml-2 -mr-1"
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
				</div>
			</div>

			<div
				class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="/">
					<img class="rounded-t-lg" src="/images/aws.webp" alt="" />
				</a>
				<div class="p-5">
					<a href="/">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							AWS Certified Developer Associate 2021
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Amazon web service is a platform that offers flexible, reliable, scalable, easy-to-use
						and cost-effective cloud computing solutions. AWS is a comprehensive, easy to use
						computing platform offered by Amazon.
					</p>
					<a
						href="/"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Start Now
						<svg
							aria-hidden="true"
							class="w-4 h-4 ml-2 -mr-1"
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
				</div>
			</div>

			<div
				class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="/">
					<img class="rounded-t-lg" src="/images/eth.webp" alt="" />
				</a>
				<div class="p-5">
					<a href="/">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Real-World Ethical Hacking: Hands-on Cybersecurity
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Ethical hacking involves an authorized attempt to gain unauthorized access to a computer
						system, application, or data. Carrying out an ethical hack involves duplicating
						strategies and actions of malicious attackers.Also known as “white hats,” ethical
						hackers are security experts that perform these assessments.
					</p>
					<a
						href="/"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Start Now
						<svg
							aria-hidden="true"
							class="w-4 h-4 ml-2 -mr-1"
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
				</div>
			</div>

			<div
				class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="/">
					<img class="rounded-t-lg" src="/images/tally.webp" alt="" />
				</a>
				<div class="p-5">
					<a href="/">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Tally ERP9 With GST Step By Step Guide From Basic to Professional
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Tally. ERP 9 is a windows-based Enterprise Resource Planning software. The software
						handles Accounting, Inventory Management, Order Management, Tax Management, Payroll,
						Banking and many such requirements of the business. It supports all day-to-day processes
						from recording invoices to generating various MIS reports.
					</p>
					<a
						href="/"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Start Now
						<svg
							aria-hidden="true"
							class="w-4 h-4 ml-2 -mr-1"
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
				</div>
			</div>

			<div
				class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="/">
					<img class="rounded-t-lg" src="/images/auto.webp" alt="" />
				</a>
				<div class="p-5">
					<a href="/">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							The Complete AutoCAD course from Zero to Advanced
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						AutoCAD is a commercial computer-aided design (CAD) and drafting software
						application.AutoCAD is used in industry, by architects, project managers, engineers,
						graphic designers, city planners and other professionals
					</p>
					<a
						href="/"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Start Now
						<svg
							aria-hidden="true"
							class="w-4 h-4 ml-2 -mr-1"
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
				</div>
			</div>

			<div
				class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="/">
					<img class="rounded-t-lg" src="/images/graphicdesign.webp" alt="" />
				</a>
				<div class="p-5">
					<a href="/">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Graphic Design Mastery: The Full Branding & Design Process
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Graphic design is a craft where professionals create visual content to communicate
						messages. By applying visual hierarchy and page layout techniques, designers use
						typography and pictures to meet users’ specific needs and focus on the logic of
						displaying elements in interactive designs, to optimize the user experience.
					</p>
					<a
						href="/"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Start Now
						<svg
							aria-hidden="true"
							class="w-4 h-4 ml-2 -mr-1"
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
				</div>
			</div>

			<div
				class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="/">
					<img class="rounded-t-lg" src="/images/cw.webp" alt="" />
				</a>
				<div class="p-5">
					<a href="/">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Learn C++ for Game Development
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						C++ is a powerful general-purpose programming language. It can be used to develop
						operating systems, games, browsers, and so on. C++ supports different ways of
						programming like object-oriented, functional, procedural, and so on. This makes C++
						powerful as well as flexible.
					</p>
					<a
						href="/"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Start Now
						<svg
							aria-hidden="true"
							class="w-4 h-4 ml-2 -mr-1"
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
				</div>
			</div>

			<div
				class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="/">
					<img class="rounded-t-lg" src="/images/mysql.webp" alt="" />
				</a>
				<div class="p-5">
					<a href="/">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Build a Social Network from Scratch : MongoDB ,PHP + MySQL
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						PHP is a recursive acronym for “PHP: Hypertext Preprocessor”. PHP is a server side
						scripting language that is embedded in HTML. It is used to manage dynamic content,
						databases, session tracking, even build entire e-commerce sites.
					</p>
					<a
						href="/"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Start Now
						<svg
							aria-hidden="true"
							class="w-4 h-4 ml-2 -mr-1"
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
				</div>
			</div>

			<div
				class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="/">
					<img class="rounded-t-lg" src="/images/python-image.webp" alt="" />
				</a>
				<div class="p-5">
					<a href="/">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							Python and Django Full stack Web Developer Bootcamp
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Python is a popular general-purpose programming language that can be used for a wide
						variety of applications. It includes high-level data structures, dynamic typing, dynamic
						binding, and many more features that make it as useful for complex application
						development as it is for scripting or “glue code” that connects components together.
					</p>
					<a
						href="/"
						class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Start Now
						<svg
							aria-hidden="true"
							class="w-4 h-4 ml-2 -mr-1"
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
				</div>
			</div> -->
			{#each courses as course}
				<div
					class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
				>
					<a href="/">
						<img class="rounded-t-lg" src={course.image} alt="" />
					</a>
					<div class="p-5">
						<a href="/">
							<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{course.title}
							</h5>
						</a>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.description}</p>
						<a
							href="/"
							class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Start Now
							<svg
								aria-hidden="true"
								class="w-4 h-4 ml-2 -mr-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
			{/each}
		</dl>
	</div>
</div>
