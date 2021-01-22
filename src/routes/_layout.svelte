<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<Nav {segment} />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		background-color: white;
		padding: 59px 10px 59px 10px;
		margin: 0 auto;
		height: 82.3vh;
	}
	@media (max-width: 958px) {
		main {
			margin-left: 10px;
			margin-right: 10px;
		}
	}
</style>
