<script>
	import AsideMenuProfile from '../AsideMenuProfile.svelte';
	import { links } from '../../utils/sideLinks';
</script>

<aside class="block h-screen bg-gray-100 py-10 px-5">
	<AsideMenuProfile />

	<!-- Dashboard Link -->
	<div class="my-5">
		<h3 class="uppercase font-light text-sm mb-2">Main Category</h3>
		<a href="/dashboard">Dashboard</a>
	</div>

	<!-- Apperance Link -->
	<div>
		<h3 class="uppercase font-light text-sm mb-3">Apperance</h3>

		{#each links as { category, subclasses }}
			<details open>
				<summary>{category}</summary>
				<div class="indent-8 grid gap-2 py-2">
					{#each subclasses as { href, text }}
						<a class="block" {href}>{text}</a>
					{/each}
				</div>
			</details>
		{/each}
		<!-- <a href="/dashboard">Change Admin Password</a> -->
	</div>
</aside>
