<script context="module">
	import fetch from "cross-fetch";

	export async function preload({ params }) {
		const res = await fetch(
			"https://salomohutapea-website.firebaseio.com/works.json"
		);
		const works = await res.json();
		return { works, params };
	}
</script>

<script>
	export let works;
	export let params;

	import { goto } from "@sapper/app";
	import { onMount } from "svelte";
	import * as animateScroll from "svelte-scrollto";

	onMount(async () => {
		animateScroll.scrollToTop();
	});

	for (var i = 0; i < works.length; i++) {
		if (works[i].slug === params.slug) {
			var work = works[i];
			break;
		}
	}

	function handleImgClick(src) {
		// document.getElementById("img01").src = src;
		// document.getElementById("modal01").style.display = "block";
	}
</script>

<svelte:head>
	<title>Work - {work.name}</title>
</svelte:head>

<div>
	<i class="fas fa-arrow-left" on:click={() => goto("/works")} />
	<h2>{work.name}</h2>
	<h4>{work.desc}</h4>
	<section>
		{#each work.images as image}
			<div>
				<img
					src={image}
					alt="Work"
					on:click={() => handleImgClick(image)}
				/>
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
		background: var(--blue);
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
		border-radius: 4px;
		box-shadow: var(--shadowCardHover);
	}
	div {
		width: 100%;
	}
	h2 {
		margin-top: 1em;
	}
	i {
		margin-top: 1em;
		display: inline-block;
		font-size: 1.5em;
		color: var(--primaryColor);
		transition: 300ms ease-in;
	}
	i:hover {
		color: var(--blue);
		cursor: pointer;
	}
</style>
