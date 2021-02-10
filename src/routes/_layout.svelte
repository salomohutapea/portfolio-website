<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { stores } from '@sapper/app';
	import PageLoadingBar from 'sapper-page-loading-bar/PageLoadingBar.svelte';

	const { preloading } = stores();
	export let segment;
	let color1 = "#3340FF"
	let color2 = "#0070f3"
</script>

<div>
	<PageLoadingBar {preloading} {color1} {color2}/>
	<Nav {segment} />

	{#if !$preloading}
		<main transition:fade>
			<div class="content">
				<slot />
			</div>
		</main>
	{/if}
	<Footer />
</div>

<style>
	div {
		display: flex;
	}
	main {
		display: flex;
		height: 100vh;
		width: 100%;
		padding: 0 20px;
	}

	.content {
		margin-top: 61.531px;
		margin-bottom: 59px;
		width: 100%;
	}
	@media (min-width: 48em) {
		main {
			padding: 0 5vw;
		}
	}
</style>
