<script context="module">
	import fetch from 'cross-fetch';
    
    export async function preload() {
        const res = await fetch('https://salomohutapea-website.firebaseio.com/works.json');
        const works = await res.json();
		return { works };
	}
</script>

<script>
    export let works;
	import WorkCard from './_WorkCard.svelte';
	import { onMount } from "svelte";
	import * as animateScroll from "svelte-scrollto";

	onMount(async () => {
        animateScroll.scrollToTop();
    });
</script>

<svelte:head>
	<title>Work | Salomo Hutapea</title>
</svelte:head>

<div class="wrapper">
	<h1>My works</h1>
	<section class="work-card">
		{#each works as work}
			<WorkCard {work}/>
		{/each}
	</section>
</div>

<style>
	.wrapper {
		padding-top: 1em;
	}
    .wrapper h1 {
        margin-bottom: 30px;
    }
	.work-card {
		gap: 3em;
		grid-template-columns: repeat(auto-fit, minmax(18em, auto));
		display: grid;
		padding-bottom: 107px;
	}
	.work-card :global(.work-card) {
		width: unset;
		height: 100%;
	}
	@media only screen and (max-width: 768px) {
		.work-card {
			margin: 0 auto;
			gap: 1.5em;
			padding-bottom: 95px;
		}
	}
</style>
