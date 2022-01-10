<script>
	import { onMount } from "svelte";
	import * as animateScroll from "svelte-scrollto";

	onMount(async () => {
        animateScroll.scrollToTop();
    });
</script>

<svelte:head>
	<title>Salomo Hutapea</title>
</svelte:head>

<div class="content-landing">
	<div class="landing">
		<!-- data-aos="fade-down" data-aos-delay="100" data-aos-duration="500" -->
		<h1>Hello, I'm Salomo Hutapea</h1>
		<p>
			Front-end Developer, Android Developer
			<br />
			<br />
			Skills: <b>HTML CSS JS, Kotlin</b>
		</p>
		<a href="/works" class="btn">See my works<i class="fas fa-chevron-right" /></a>
	</div>
	<div class="div-img" />
</div>

<style>
	div.content-landing {
		display: grid;
	}

	.landing a {
		margin-top: 40px;
	}

	div .div-img {
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.landing .fa-chevron-right {
		margin-left: 10px;
	}

	@media (max-width: 619px) {
		div {
			grid-template-rows: 1fr;
		}
		div .div-img {
			display: none;
		}
	}

	.landing {
		align-self: center;
	}

	.landing h1 {
		margin: 0 auto;
	}

	.landing p {
		margin: 0 auto;
	}

	.landing h1 {
		font-size: 3rem;
		font-style: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		margin-left: -4px;
	}

	@media (min-width: 619px) {
		div {
			grid-template-columns: 4fr 1fr;
		}
		.landing h1 {
			font-size: 4rem;
		}
	}

	@media (min-width: 754px) {
		.landing h1 {
			font-size: 5rem;
		}
	}
</style>
