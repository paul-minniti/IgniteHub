<!-- @format -->
<script lang="ts">
	import LandingSection from "$lib/components/home/LandingSection.svelte";
	import rocket from "$lib/assets/rocket.jpeg";

	const pageData = [
		{ name: "Benefits", image: rocket },
		{ name: "Projects", image: "" },
		{ name: "Deliverables", image: "" },
		{ name: "Pricing", image: "" },
		{ name: "FAQs", image: "" },
	];
</script>

<!-- 
{#each pageData as item (item.name)}
	<LandingSection props={{ name: item.name, image: item.image }} />
{/each} -->

<div class="content-center items-center">
	<div
		class="navbar flex justify-between bg-base-100 w-4/5 fixed top-5 mx-auto inset-x-0 drop-shadow-md rounded-md"
	>
		<div class="">
			<a href="#" class="btn btn-ghost normal-case text-xl contents"
				><i class="fa-solid fa-fire text-orange-400" />
				{" "}IgniteHub</a
			>
		</div>
		<div class="">
			<ul class="menu menu-horizontal px-1 d-c">
				{#each pageData as item (item.name)}
					<li><a href="#{item.name}">{item.name}</a></li>
				{/each}
			</ul>
		</div>
		<div class="navbar-end">
			<a href="#" class="btn btn-ghost">Login</a>

			<a href="#" class="btn btn-neutral ms-1">Sign Up</a>
		</div>
	</div>
</div>

<div
	id="Benefits"
	style="background-image: url('{rocket}')"
	class="hero min-h-screen bg-cover"
>
	<div class="hero-content text-center">
		<div class="max-w-md">
			<div class="prose">
				<h1 class="text-white">
					Ignite Your Buiness With Custom Software!
				</h1>
				<h4 class="text-white mb-3">
					Software subscriptions to scale your business.
				</h4>
				<a
					href="#Pricing"
					class="btn btn-neutral text-white drop-shadow-md"
					>See plans</a
				>
				<div class="text-center text-white">
					<ul class="list-none text-left inline-block">
						<li>Easy to Integrate</li>
						<li>Personalized Stratagy</li>
						<li>Data Security & Compliance</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div id="Projects" class="hero min-h-screen">Projects</div> -->
<!-- <div id="Deliverables" class="hero min-h-screen">Deliverables</div> -->
<!-- <div id="Pricing" class="hero min-h-screen">Pricing</div> -->
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

<!-- <div id="FAQs" class="hero min-h-screen">FAQs</div> -->

<style>
	.list-none li:before {
		content: "✓ ";
	}
</style>
