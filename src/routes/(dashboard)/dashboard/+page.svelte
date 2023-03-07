<script>
	import BreadCrumbs from "../../../lib/components/shared/BreadCrumbs.svelte";
	import DashboardCard from "./DashboardCard.svelte";

	export let data;
</script>

<BreadCrumbs />

<section class="mt-10 grid px-5 gap-5 grid-cols-4">
	<DashboardCard amount={1} text="Registered Students" />
	<DashboardCard amount={1} text="Subjects Listed" />
	<DashboardCard amount={data.totalClasses} text="Total Classes" />
	<DashboardCard amount={1} text="Results Declared" />
</section>
