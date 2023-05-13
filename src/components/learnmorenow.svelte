<script>
	import LearnMore from './LearnMore.svelte';
</script>

<p class="text-center mx-auto font-bold md:text-4xl text-2xl mb-10">
	LEARN <span class=" text-fresh-eggplant-600"> MORE </span>NOW
</p>
<div class="grid sm:grid-cols-3 mx-auto grid-cols-1 gap-4">
	<div class=" text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl">
		<div class="flex overflow-y-hidden overflow-x-hidden">
			<img
				sizes="(max-width: 512px) 100vw, 512px"
				srcset="
            images/webdev_domuyp_c_scale,w_190.webp 190w,
            images/webdev_domuyp_c_scale,w_512.webp 512w"
				src="images/webdev_domuyp_c_scale,w_512.webp"
				alt="movie"
				class="w-40 h-40 mx-auto object-contain"
			/>
		</div>
		<p class="text-center object-contain font-bold md:text-3xl text-xl mb-6">
			Web Developmment <br />
			<LearnMore />
		</p>
	</div>

	<div
		class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
	>
		<div class="flex overflow-y-hidden overflow-x-hidden">
			<img
				sizes="(max-width: 520px) 100vw, 520px"
				srcset="
            images/ml_dlkx6t_c_scale,w_190.webp 190w,
            images/ml_i7pndh_c_scale,w_520.webp 520w"
				src="images/ml_dlkx6t_c_scale,w_760.webp"
				alt="machine learning"
				class="w-40 h-40 mx-auto object-contain"
			/>
		</div>

		<p class="text-center font-bold object-contain md:text-3xl text-xl mb-6">
			Machine Learning <br />
			<LearnMore />
		</p>
	</div>

	<div
		class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
	>
		<div class="flex overflow-y-hidden overflow-x-hidden">
			<img
				sizes="(max-width: 760px) 100vw, 760px"
				srcset="
            images/mobdev_bhc6x7_c_scale,w_190.webp 190w,
            images/mobdev_bhc6x7_c_scale,w_512.webp 760w"
				src="images/ml_dlkx6t_c_scale,w_760.webp"
				alt="machine learning"
				class="w-40 h-40 mx-auto object-contain"
			/>
		</div>

		<p class="text-center font-bold object-contain md:text-3xl text-xl mb-6">
			Mobile Development <br />
			<LearnMore />
		</p>
	</div>

	<div
		class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
	>
		<div class="flex overflow-y-hidden overflow-x-hidden">
			<img
				sizes="(max-width: 512px) 100vw, 512px"
				srcset="
            images/testing_krievz_c_scale,w_190.webp 190w,
            images/testing_krievz_c_scale,w_512.webp 512w"
				src="images/testing_krievz_c_scale,w_512.webp"
				alt="testing"
				class="w-40 h-40 mx-auto object-contain"
			/>
		</div>

		<p class="text-center font-bold object-contain md:text-3xl text-xl mb-6">
			Software Testing <br />
			<LearnMore />
		</p>
	</div>

	<div
		class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
	>
		<div class="flex overflow-y-hidden overflow-x-hidden">
			<img
				class="w-40 h-40 mx-auto object-contain"
				sizes="(max-width: 512px) 100vw, 512px"
				srcset="images/coding_xz1jmp_c_scale,w_190.webp 190w,									
                images/coding_xz1jmp_c_scale,w_512.webp 512w"
				src="images/coding_xz1jmp_c_scale,w_512.webp"
				alt="coding"
			/>
		</div>

		<p class="text-center font-bold object-contain md:text-3xl text-xl mb-6">
			Programming Language <br />
			<LearnMore />
		</p>
	</div>

	<div
		class="order-first text-3xl font-semibold tracking-tight dark:text-white text-gray-900 sm:text-5xl"
	>
		<div class="flex overflow-y-hidden overflow-x-hidden">
			<img
				sizes="(max-width: 512px) 100vw, 512px"
				srcset="
            images/database_xkwfiv_c_scale,w_190.webp 190w,
            images/database_xkwfiv_c_scale,w_512.webp 512w"
				src="database_xkwfiv_c_scale,w_512.webp"
				alt="database design"
				class="w-40 h-40 mx-auto object-contain"
			/>
		</div>

		<p class="text-center mx-auto font-bold object-contain md:text-3xl text-xl mb-6">
			Database Design <br />
			<LearnMore />
		</p>
	</div>
</div>
<style>
	p {
		font-family: 'Quicksand', sans-serif;
	}


</style>
