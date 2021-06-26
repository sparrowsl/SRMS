<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
  import Navigation from './Navigation.svelte';
  import Footer from './Footer.svelte';
</script>

<Navigation />
<main>
	<Router {routes} />
</main>
<Footer />

<style>
	main{
		width: 95%;
		margin: auto;
	}
	@media (min-width: 400px){
		main{ width: 90%; }
	}
	@media (min-width: 576px){
		main{ width: 85%; }
	}
	@media (min-width: 768px){
		main{ width: 80%; }
	}
</style>
