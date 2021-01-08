<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		max-width: 960px;
		background: var(--bgColor);
		padding: 62px 10px 59px 10px;
		margin: 0 auto;
		height: 81.9vh;
	}
	@media (max-width: 958px) {
		main {
			margin-left: 10px;
			margin-right: 10px;
		}
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer/>