<script>
	import BreadCrumbs from '../../../lib/components/shared/BreadCrumbs.svelte';
	import DashboardCard from './DashboardCard.svelte';
</script>

<BreadCrumbs />

<section class="mt-10 grid grid-cols-4 gap-5 px-5">
	<DashboardCard amount={1} text="Registered Students" />
	<DashboardCard amount={1} text="Subjects Listed" />
	<DashboardCard amount={1} text="Total Classes" />
	<DashboardCard amount={1} text="Results Declared" />
</section>
