<script>
	import BreadCrumbs from "../../../lib/components/shared/BreadCrumbs.svelte";
	import Button from "../../../lib/components/shared/Button.svelte";

	export let data;
	console.log(data.classes);
</script>

<BreadCrumbs>
	<span slot="title">Manage Classes</span>
</BreadCrumbs>

<section class="mt-5 p-4">
	<table class="border-collapse w-full table-auto">
		<thead>
			<tr class="border bg-gray-600 text-left text-white">
				<th class="p-2">ID</th>
				<th class="p-2">Class Name</th>
				<th class="p-2">Section</th>
				<th class="p-2">Date Added</th>
				<th>Actions</th>
			</tr>
		</thead>

		<tbody>
			{#each data.classes as class_, index (class_.id)}
				<tr>
					<td class="border p-2 text-gray-700">{index + 1}</td>
					<td class="border p-2 text-gray-700">{class_.name}</td>
					<td class="border p-2 text-gray-700">{class_.section}</td>
					<td class="border p-2 text-gray-700">{class_.dateCreated}</td>
					<td class="border p-2 text-gray-700 items-center">
						<span class="flex gap-4">
							<Button>Edit</Button>
							<Button>Delete</Button>
						</span>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
