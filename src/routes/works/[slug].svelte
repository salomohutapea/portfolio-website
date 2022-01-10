<script context="module">
	import fetch from "cross-fetch";

	// Server side - Data only updated every npm run export
	export async function preload({ params }) {
		const res = await fetch(
			"https://salomohutapea-website.firebaseio.com/works.json"
		);
		const works = await res.json();
		return { works, params };
	}
</script>

<script>
	import { onMount } from "svelte";
	export let works;
	export let params;

	let work;

	function checkWork() {
		for (var i = 0; i < works.length; i++) {
			if (works[i].slug === params.slug) {
				work = works[i];
				break;
			}
		}
	}

	checkWork();

	// Client side - Data always updated when user open the web
	onMount(async () => {
		const res = await fetch(
			"https://salomohutapea-website.firebaseio.com/works.json"
		);
		works = await res.json();

		checkWork();
	});

	// TODO: ADD LOADING
</script>

<svelte:head>
	<title>Work - {work.name}</title>
</svelte:head>

<div>
	<h2>{work.name}</h2>
	<h4>{work.desc}</h4>
	<section>
		{#each work.images as image}
			<div>
				<img src={image} alt="Work" />
			</div>
		{/each}
	</section>
</div>

<style>
	h4 {
		font-weight: 300;
		margin-bottom: 2em;
	}
	h2::before {
		content: "";
		margin-top: 1.5em;
		position: absolute;
		width: 100px;
		height: 2px;
		background: #3340ff;
	}
	section {
		gap: 3em;
		grid-template-columns: repeat(auto-fit, minmax(16em, auto));
		justify-content: space-evenly;
		display: grid;
		padding-bottom: 107px;
	}
	section div {
		display: flex;
	}
	img {
		max-width: 100%;
		margin: 0 auto;
		object-fit: contain;
	}
	div {
		width: 100%;
	}
	h2 {
		margin-top: 2em;
	}
</style>
