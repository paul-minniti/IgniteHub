<!-- @format -->
<script>
	import hero from "$lib/assets/hero.svg";
	import workingSVG from "$lib/assets/working.svg";
	import checkBoxesSVG from "$lib/assets/check_boxes.svg";
	import iterationSVG from "$lib/assets/iteration.svg";
	import blocksSVG from "$lib/assets/blocks.svg";
	import groupCallSVG from "$lib/assets/groupCall.svg";
	import piggyBankSVG from "$lib/assets/piggyBank.svg";
	import progressSVG from "$lib/assets/progress.svg";
	import coderSVG from "$lib/assets/coder.svg";
	import Navbar from "$lib/components/navbar/Navbar.svelte";
</script>

<div class="leading-normal tracking-normal text-white bg-primary">
	<Navbar props={null} />

	<!--Hero x -->
	<div class="pt-24">
		<div
			class="container px-3 pb-12 mx-auto flex flex-wrap flex-col md:flex-row items-center">
			<!--Left Col-->
			<div
				class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
				<h1 class="my-4 text-5xl font-bold leading-tight">
					Ignite your Businesses Potential on Fire!
				</h1>
				<p class="leading-normal text-2xl mb-8">
					Take your business to the next level with a top-quality
					software development agency.
				</p>
				<button
					class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
					Explore Our Plans
				</button>
			</div>
			<!--Right Col-->
			<div
				class="w-full flex flex-shrink flex-grow md:w-3/5 py-6 text-center">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/IVNK5gkVq2Q?si=JuJ_wUuQVM_DEj9s"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen />
			</div>
		</div>
	</div>

	<!-- svg -->
	<div class="relative -mt-12 lg:-mt-24">
		<svg
			viewBox="0 0 1428 174"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink">
			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
				<g
					transform="translate(-2.000000, 44.000000)"
					fill="#FFFFFF"
					fill-rule="nonzero">
					<path
						d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
						opacity="0.100000001" />
					<path
						d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
						opacity="0.100000001" />
					<path
						d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
						id="Path-4"
						opacity="0.200000003" />
				</g>
				<g
					transform="translate(-4.000000, 76.000000)"
					fill="#FFFFFF"
					fill-rule="nonzero">
					<path
						d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
				</g>
			</g>
		</svg>
	</div>

	<!-- Benefits  -->
	<section id="Benefits" class="bg-white py-8">
		<div class="container mx-auto flex flex-col pt-4 pb-4">
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-12 items-center">
				<h2
					class="w-full my-2 mt-10 text-5xl font-bold leading-tight text-center text-gray-800">
					Sit back, We've got it from here
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/5 leading-normal text-xl mb-8 text-center text-gray-800">
					We bridge the gap between your business needs and top-notch
					software development, making custom software accessible to
					businesses of all scales.
				</p>
			</div>

			<div class="flex flex-row flex-grow flex-shrink pt-4 pb-12">
				<div
					class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center">
					<div class="flex-1 bg-white overflow-hidden">
						<a
							href=""
							class="flex flex-wrap no-underline hover:no-underline">
							<p
								class="w-full text-gray-600 text-xs md:text-sm px-6">
								<img src={checkBoxesSVG} />
							</p>
							<p class="text-gray-800 text-xl px-6 mb-5 mt-12">
								Subscribe to plan that matches your needs.
								Cancel at any time, no questions asked.
							</p>
						</a>
					</div>
				</div>

				<div
					class="flex flex-col flex-grow border-r-4 border-orange-400 border-opacity-25" />

				<div
					class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center">
					<div class="flex-1 bg-white overflow-hidden">
						<a
							href=""
							class="flex flex-wrap no-underline hover:no-underline">
							<p
								class="w-full text-gray-600 text-xs md:text-sm px-6">
								<img src={workingSVG} class="w-fit" />
							</p>
							<p class="text-gray-800 text-xl px-6 mb-5 mt-12">
								Select a task from our task board, most requests
								can be completed by our engineers within three
								working days.
							</p>
						</a>
					</div>
				</div>
				<div
					class="flex flex-col flex-grow border-r-4 border-orange-400 border-opacity-25" />
				<div
					class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink text-center">
					<div class="flex-1 bg-white overflow-hidden">
						<a
							href=""
							class="flex flex-wrap no-underline hover:no-underline">
							<p
								class="w-full text-gray-600 text-xs md:text-sm px-6">
								<img src={iterationSVG} />
							</p>
							<p class="text-gray-800 text-xl px-6 mb-5 mt-12">
								We tirelessly refine our approach based on your
								feedback, striving for nothing short of your
								complete satisfaction.
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Benefits old
	<section id="Benefits" class="bg-white py-8">
		<div class="container max-w-5xl mx-auto m-8">
			<div class="flex flex-col my-2 mt-16 items-center">
				<h2
					class="w-full my-2 text-6xl font-bold leading-tight text-center text-gray-800">
					Here Is What To Expect
				</h2>
				<div
					class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				<p
					class="w-3/6 leading-normal text-2xl mb-8 text-center text-gray-800">
					IgniteHub replaces unreliable freelancers and expensive
					agencies for one flat monthly fee.
				</p>
				<div class="w-full mb-4" />
			</div>

			<div class="flex flex-wrap">
				<div class="w-5/6 sm:w-1/2 p-6">
					<h3
						class="text-4xl text-gray-800 font-bold leading-none mb-3">
						Customized Solutions
					</h3>
					<p class="text-gray-600 mb-8 mt-8 text-2xl">
						Your business is unique, and so should be your software.
						We craft solutions tailored to your specific needs,
						ensuring a perfect alignment with your goals.
					</p>
				</div>
				<div class="w-full sm:w-1/2 p-6">
					<img src={blocksSVG} />
				</div>
			</div>

			<div class="flex flex-wrap flex-col-reverse sm:flex-row">
				<div class="w-full sm:w-1/2 p-6">
					<img src={progressSVG} />
				</div>
				<div class="w-5/6 sm:w-1/2 p-6">
					<h3
						class="text-4xl text-gray-800 font-bold leading-none mb-3">
						Streamlined Processes
					</h3>
					<p class="text-gray-600 mb-8 mt-8 text-2xl">
						Our refined development processes ensure timely delivery
						without compromising on quality. Experience a
						hassle-free project journey from inception to
						deployment.
					</p>
				</div>
			</div>

			<div class="flex flex-wrap">
				<div class="w-5/6 sm:w-1/2 p-6">
					<h3
						class="text-4xl text-gray-800 font-bold leading-none mb-3">
						Cost-Effective
					</h3>
					<p class="text-gray-600 mb-8 mt-8 text-2xl">
						Get the best value for your investment with our
						competitive pricing models. Our packed subscriptions
						offer a blend of affordability and quality.
					</p>
				</div>
				<div class="w-full sm:w-1/2 p-6">
					<img src={piggyBankSVG} />
				</div>
			</div>

			<div class="flex flex-wrap flex-col-reverse sm:flex-row">
				<div class="w-full sm:w-1/2 p-6 mt-6">
					<img src={groupCallSVG} />
				</div>
				<div class="w-full sm:w-1/2 p-6 mt-6">
					<div class="align-middle">
						<h3
							class="text-4xl text-gray-800 font-bold leading-none mb-3">
							Continuous Support
						</h3>
						<p class="text-gray-600 mb-8 mt-8 text-2xl">
							Our relationship doesn’t end post-deployment. We
							provide continuous support to ensure your software
							remains updated and aligned with your evolving
							needs.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section> -->

	<div class="relative p-4 bg-white dark:bg-gray-800">
		<div
			class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
			<div class="lg:col-start-2 md:pl-20">
				<h2
					class="w-full my-2 text-5xl font-bold leading-tight text-gray-800">
					No Tricks, Just Code
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<ul class="mt-10">
					<li>
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
									<i class="fa-solid fa-fire" />
								</div>
							</div>
							<div class="ml-4">
								<h5
									class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
									Real Time Updates
								</h5>
								<p
									class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
									We make sure you are kept in the loop 100%
									of the time. You will see changes daily and
									blockers are communicated as soon they are
									identified
								</p>
							</div>
						</div>
					</li>
					<li class="mt-10">
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
									<i class="fa-solid fa-fire" />
								</div>
							</div>
							<div class="ml-4">
								<h5
									class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
									Unlimited Members
								</h5>
								<p
									class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
									Got a big team? No problem, invite as many
									users to your worksapce as needed. Zero
									hidden fees.
								</p>
							</div>
						</div>
					</li>
					<li class="mt-10">
						<div class="flex">
							<div class="flex-shrink-0">
								<div
									class="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
									<i class="fa-solid fa-fire" />
								</div>
							</div>
							<div class="ml-4">
								<h5
									class="text-lg font-bold leading-6 text-gray-900 dark:text-white">
									Manage With One Tool
								</h5>
								<p
									class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
									Use our software to submit and prioritize
									your requests, manage your different
									projects, communicate directly with your
									Ignite engineers.
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="relative mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1">
				<img
					src={coderSVG}
					alt="illustration"
					class="relative w-auto mx-auto" />
			</div>
		</div>
	</div>

	<!-- Processes -->
	<section id="Projects" class="bg-white border-b py-8">
		<div class="container mx-auto flex flex-wrap">
			<h2
				class="w-full my-2 mt-20 text-5xl font-bold leading-tight text-center text-gray-800">
				What We Do
			</h2>
			<div class="w-full mb-4">
				<div
					class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
			</div>
			<div
				class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div
					class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<div class="flex flex-wrap no-underline hover:no-underline">
						<div
							class="w-full py-4 font-bold text-xl text-gray-800 px-6 pt-6 flex flex-row self-">
							<div
								class="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
								<i class="fa-solid fa-fire" />
							</div>

							<h3 class="self-center ml-4">Software Design</h3>
						</div>
						<p class="text-gray-800 text-base px-6 mb-5">
							Our Software Architecture Design process is your
							gateway to a reliable, scalable, and efficient
							software ecosystem, uniquely crafted to meet your
							business demands.
						</p>
					</div>
				</div>
			</div>
			<div
				class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div
					class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<div class="flex flex-wrap no-underline hover:no-underline">
						<div
							class="w-full py-4 font-bold text-xl text-gray-800 px-6 pt-6 flex flex-row self-">
							<div
								class="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
								<i class="fa-solid fa-fire" />
							</div>

							<h3 class="self-center ml-4">UI/UX</h3>
						</div>
						<p class="text-gray-800 text-base px-6 mb-5">
							Elevate your digital presence with UI/UX design that
							meets your brand’s narrative. At IgniteHub, we craft
							user interfaces that are not only visually
							delightful but are engineered to convert. Our
							streamlined processes ensure a seamless journey from
							idea to execution.
						</p>
					</div>
				</div>
			</div>
			<div
				class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div
					class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<div class="flex flex-wrap no-underline hover:no-underline">
						<div
							class="w-full py-4 font-bold text-xl text-gray-800 px-6 pt-6 flex flex-row self-">
							<div
								class="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
								<i class="fa-solid fa-fire" />
							</div>

							<h3 class="self-center ml-4">API Development</h3>
						</div>
						<p class="text-gray-800 text-base px-6 mb-5">
							Step into a world of endless integration
							possibilities with IgniteHub's custom API
							development. Our tried-and-true processes ensure a
							reliable foundation for your digital ecosystem.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="container mx-auto flex flex-wrap spb-12">
			<div
				class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div
					class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<div class="flex flex-wrap no-underline hover:no-underline">
						<div
							class="w-full py-4 font-bold text-xl text-gray-800 px-6 pt-6 flex flex-row self-">
							<div
								class="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
								<i class="fa-solid fa-fire" />
							</div>

							<h3 class="self-center ml-4">CI/CD Automation</h3>
						</div>
						<p class="text-gray-800 text-base px-6 mb-5">
							Propel your software delivery pipelines to new
							speeds with our (CI/CD) process. Revel in a realm
							where code merges are sleek, and deployments are
							prompt, Keeping pace with your ever evolveing
							busines.
						</p>
					</div>
				</div>
			</div>
			<div
				class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div
					class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<div class="flex flex-wrap no-underline hover:no-underline">
						<div
							class="w-full py-4 font-bold text-xl text-gray-800 px-6 pt-6 flex flex-row self-">
							<div
								class="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
								<i class="fa-solid fa-fire" />
							</div>

							<h3 class="self-center ml-4">Database Managment</h3>
						</div>
						<p class="text-gray-800 text-base px-6 mb-5">
							We prioritize your data's safety. Achieve peace of
							mind with our database management and security
							processes, ensuring, organized, and instant access
							to your critical business data whenever required.
							Our seasoned security protocols are crafted to
							provide a fortification, ensuring your business's
							sensitive data remains untouched.
						</p>
					</div>
				</div>
			</div>
			<div
				class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
				<div
					class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
					<div class="flex flex-wrap">
						<div
							class="w-full py-4 font-bold text-xl text-gray-800 px-6 pt-6 flex flex-row self-">
							<div
								class="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
								<i class="fa-solid fa-fire" />
							</div>

							<h3 class="self-center ml-4">Audit Consulting</h3>
						</div>
						<p class="text-gray-800 text-base px-6 mb-5">
							Already have something built? Our software audit
							process is meticulously designed to ensure your
							software system’s efficiency, reliability, and
							security. Uncover hidden potentials while
							safeguarding your digital assets.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing -->
	<section id="Pricing" class="bg-white py-8">
		<div class="bg-white">
			<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
				<div
					class="flex flex-col flex-grow flex-shrink pt-4 pb-12 items-center">
					<h2
						class="w-full my-2 mt-8 text-5xl font-bold leading-tight text-center text-gray-800">
						Software Excellence, Transparent Pricing
					</h2>
					<div class="w-full mb-4">
						<div
							class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
					</div>
					<p
						class="w-3/6 leading-normal text-xl mb-8 text-center text-gray-800">
						Achieving your software goals shouldn't be a budgetary
						battle. Our clear pricing and bundled subscriptions are
						built to ensure you receive outstanding custom software
						without a financial strain.
					</p>
				</div>
				<div
					class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
					<div
						class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
						<h3 class="mb-4 text-2xl font-semibold">Entry Level</h3>
						<p class="font-light text-gray-500 sm:text-lg">
							Best option for small businesses looking for a
							online presence.
						</p>
						<div class="flex justify-center items-baseline my-8">
							<span class="mr-2 text-5xl font-extrabold"
								>$299</span>
							<span class="text-gray-500">/month</span>
						</div>
						<ul role="list" class="mb-8 space-y-4 text-left">
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>Static Frontend WebPages</span>
							</li>
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>SEO Optimzation for Organic Traffic</span>
							</li>
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>Maintenance and Support</span>
							</li>
						</ul>
						<div class="items-center">
							<a
								type="button"
								href="https://calendly.com/pminniti94/ignitehub"
								class="py-4 m-2 px-8 opacity-90 bg-secondary text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out disabled:">
								Book A Call
							</a>

							<button
								type="button"
								disabled={true}
								class="py-4 m-2 px-8 opacity-90 bg-orange-400 text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out opacity-70 cursor-not-allowed">
								Get Started!
							</button>
						</div>
					</div>
					<!-- Pricing Card -->
					<div
						class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
						<h3 class="mb-4 text-4xl font-semibold">
							Senior Architect
						</h3>
						<p class="font-light text-gray-500 sm:text-lg">
							Best for large scale uses and extended
							redistribution rights.
						</p>
						<div class="flex justify-center items-baseline my-8">
							<span class="mr-2 text-5xl font-extrabold"
								>$2499</span>
							<span class="text-gray-500">/month</span>
						</div>
						<!-- List -->
						<ul role="list" class="mb-8 space-y-4 text-left">
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>Full Stack Custom Development</span>
							</li>
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>Containerized Cloud Deployments</span>
							</li>
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>CI/CD Automated Pipelines</span>
							</li>
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>UI/UX Design</span>
							</li>
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>Business Integration Automation</span>
							</li>
						</ul>
						<div class="items-center">
							<a
								type="button"
								href="https://calendly.com/pminniti94/ignitehub"
								class="py-4 mr-2 px-8 opacity-90 bg-secondary text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out disabled:">
								Book A Call
							</a>
							<button
								type="button"
								disabled={true}
								class="py-4 m-2 px-8 opacity-90 bg-orange-400 text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out opacity-70 cursor-not-allowed">
								Get Started!
							</button>
						</div>
					</div>
					<!-- Pricing Card -->
					<div
						class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
						<h3 class="mb-4 text-2xl font-semibold">
							Mid-Level Dev
						</h3>
						<p class="font-light text-gray-500 sm:text-lg">
							Relevant for multiple users, extended & premium
							support.
						</p>
						<div class="flex justify-center items-baseline my-8">
							<span class="mr-2 text-5xl font-extrabold"
								>$999</span>

							<span class="text-gray-500">/month</span>
						</div>
						<!-- List -->
						<ul role="list" class="mb-8 space-y-4 text-left">
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>Dynamic Frontend Components</span>
							</li>
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>Database Management</span>
							</li>
							<li class="flex items-center space-x-3">
								<i class="fa-solid fa-check text-primary" />
								<span>Cloud Hosting</span>
							</li>
						</ul>
						<div class="items-center">
							<a
								type="button"
								href="https://calendly.com/pminniti94/ignitehub"
								class="py-4 m-2 px-8 opacity-90 bg-secondary text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out disabled:">
								Book A Call
							</a>
							<button
								type="button"
								disabled={true}
								class="py-4 m-2 px-8 opacity-90 bg-orange-400 text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out opacity-70 cursor-not-allowed">
								Get Started!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="FAQs" class="bg-white py-8">
		<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
			<h2
				class="w-full my-2 mt-12 text-6xl font-bold leading-tight text-center text-gray-800">
				FAQ
			</h2>
			<div class="w-full mb-4">
				<div
					class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					Why wouldn't I just hire a full-time engineer?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					Good question! For starters, the annual cost of a full-time
					senior-level engineer now exceeds $100,000, plus benefits
					(and good luck finding one available). Aside from that, you
					may not always have enough work to keep them busy at all
					times, so you're stuck paying for time you aren't able to
					utilize. With the monthly plan, you can pause and resume
					your subscription as often as you need to ensure you're only
					paying your engineer when you have work available for them.
				</p>
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					Is there a limit to how many requests I can have?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					Once subscribed, you're able to add as many requests to your
					queue as you'd like, and they will be delivered one by one.
				</p>
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					How fast will I receive my designs?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					On average, most requests are completed in just three days
					or less. However, more complex requests can take longer.
					Each request on out board is tagged with an expected
					compltion date.
				</p>
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					Who are the engineers?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					You might be surprised to hear this, but IgniteHub is
					actually an agency of one, you will work directly with me.
					However, we will work to integrate with other service
					providers as your business grows. You might also exprect to
					hear from an intern or two.
				</p>
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					What technologies do you use to develope your applications?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					This is a hard question to answer because not every problem
					has a once sized fits all solution. Adapting old
					technologies to newer onces is also a challenge we face in
					our industry. Here is a list of technologies we will work
					with: Git/Github, GitLab, Python, Typescript, Node,
					TailwindCss, Bootstrap, MaterialUI Svelte, React, Angular,
					Vue, Docker, AWS, GCP, Nginx, Kubernetes, MongDB,
					PostgreSQL, JWT Auth, Restful APIs, Redis, Testing... and so
					much more.
				</p>
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					How do I request work?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					IgniteHub offers a ton of flexibility in how you request
					designs using our custom built request boards. It has pre
					built requests with forms for information about your
					specific request. Upload any relevant inforamtion to the
					ticket and put into your queue. Basically, if it can be
					linked to or shared over the internet, it's fair game.
				</p>
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					What if I don't like the end result?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					No worries! We'll continue to revise until you're 100%
					satisfied.
				</p>
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					Is there any design work you don't cover?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					Absolutely. If there isnt already a ticket for it on our
					board, Create a custom ticket, we will review and see if its
					something we think we can do. If it is we will add it as a
					new request type!
				</p>
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					What if I only have a single request?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					That's fine. You can pause your subscription when finished
					and return when you have additional design needs. There's no
					need to let the remainder of your subscription go to waste.
				</p>
			</div>
			<div
				class="flex flex-col flex-grow flex-shrink pt-4 pb-4 items-center">
				<h2
					class="w-3/6 my-2 text-2xl font-bold leading-tight text-left text-gray-800">
					Are there any refunds if I don't like the service?
				</h2>
				<div class="w-full mb-4">
					<div
						class="h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
				<p
					class="w-3/6 leading-normal text-l mb-8 text-left text-gray-800">
					There are no refunds. We strive to make sure you feel your
					getting value out of your subscription. IF you dont feel
					like you are, cancel at any time, no questions asked.
				</p>
			</div>
		</div>
	</section>

	<!-- SVG -->
	<svg
		class="wave-top"
		viewBox="0 0 1439 147"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink">
		<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
				<g class="wave" fill="#FFF">
					<path
						d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
				</g>
				<g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
					<g
						transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
						<path
							d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
							opacity="0.100000001" />
						<path
							d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
							opacity="0.100000001" />
						<path
							d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
							opacity="0.200000003" />
					</g>
				</g>
			</g>
		</g>
	</svg>

	<!-- CTA -->
	<section class="container mx-auto text-center py-6 mb-4">
		<div
			class="flex flex-col flex-grow flex-shrink pt-4 pb-12 items-center">
			<h2
				class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
				See if IgniteHub is right for
			</h2>
			<div class="w-full mb-4">
				<div
					class="h-1 mx-auto bg-white w-64 opacity-25 my-0 py-0 rounded-t" />
			</div>
			<p class="w-3/6 leading-normal text-xl mb-8 text-center text-white">
				Get a guided tour through IgniteHub. Find out how we can
				Transform your business operations. Make the smart move with our
				tailored software solutions. Let's build something extraordinary
				together.
			</p>
			<a
				type="button"
				href="https://calendly.com/pminniti94/ignitehub"
				class="py-4 px-8 opacity-90 bg-secondary text-gray-800 transition ease-in duration-200 text-center text-base font-semibold shadow rounded-full transform transition hover:scale-105 duration-300 ease-in-out disabled:">
				Book A Call
			</a>
		</div>
	</section>

	<style>
		.bg-primary {
			background: #fb923c;
		}
	</style>
</div>
