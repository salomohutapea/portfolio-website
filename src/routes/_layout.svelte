<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		max-width: 960px;
		background-color: white;
		padding: 0 10px;
		margin: 0 auto;
	}
	@media (max-width: 958px) {
		main {
			margin-left: 10px;
		}
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer/>