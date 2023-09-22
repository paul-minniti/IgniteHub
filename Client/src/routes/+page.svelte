<!-- @format -->
<script lang="ts">
	import rocket from "$lib/assets/rocket.jpeg";
	import Benefits from "$lib/components/home/Benefits.svelte";
	import Statement from "$lib/components/home/Statement.svelte";
	import Navbar from "$lib/components/navbar/Navbar.svelte";
</script>

<Navbar props={null} />

<Benefits />

<Statement />

<div id="Pricing" class="bg-white">
	<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
		<div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
			<h2
				class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
			>
				Designed for business teams like yours
			</h2>
			<p class="mb-5 font-light text-gray-500 sm:text-xl">
				Here at IgniteHub we focus on markets where technology,
				innovation, and capital can unlock long-term value and drive
				economic growth.
			</p>
		</div>
		<div
			class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"
		>
			<div
				class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8"
			>
				<h3 class="mb-4 text-2xl font-semibold">Entry Level</h3>
				<p class="font-light text-gray-500 sm:text-lg">
					Best option for small businesses looking for a online
					presence.
				</p>
				<div class="flex justify-center items-baseline my-8">
					<span class="mr-2 text-5xl font-extrabold">$149</span>
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
				<a
					href="https://buy.stripe.com/8wM6pYczN5uM17G3cc"
					class="btn btn-primary">Get started</a
				>
				<a
					href="https://calendly.com/pminniti94/ignitehub"
					class="btn btn-link">Book a Call</a
				>
			</div>
			<!-- Pricing Card -->
			<div
				class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8"
			>
				<h3 class="mb-4 text-2xl font-semibold">Senior Architect</h3>
				<p class="font-light text-gray-500 sm:text-lg">
					Best for large scale uses and extended redistribution
					rights.
				</p>
				<div class="flex justify-center items-baseline my-8">
					<span class="mr-2 text-5xl font-extrabold">$2499</span>
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
				<a
					href="https://buy.stripe.com/8wM6pYczN5uM17G3cc"
					class="btn btn-primary">Get started</a
				>
				<a
					href="https://calendly.com/pminniti94/ignitehub"
					class="btn btn-link">Book a Call</a
				>
			</div>
			<!-- Pricing Card -->
			<div
				class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8"
			>
				<h3 class="mb-4 text-2xl font-semibold">Mid-Level Dev</h3>
				<p class="font-light text-gray-500 sm:text-lg">
					Relevant for multiple users, extended & premium support.
				</p>
				<div class="flex justify-center items-baseline my-8">
					<span class="mr-2 text-5xl font-extrabold">$999</span>

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
				<a
					href="https://buy.stripe.com/8wM6pYczN5uM17G3cc"
					class="btn btn-primary">Get started</a
				>
				<a
					href="https://calendly.com/pminniti94/ignitehub"
					class="btn btn-link">Book a Call</a
				>
			</div>
		</div>
	</div>
</div>
