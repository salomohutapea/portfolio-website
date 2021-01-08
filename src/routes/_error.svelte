<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === "development";
</script>

<style>
	h1 {
		font-size: 2.8em;
		font-weight: 700;
	}

	div {
		display: flex;
		height: 100%;
		text-align: center;
	}
	h1 {
		margin: auto;
	}
	span {
		font-size: 0.5em;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div>
	<h1>{status} <br /> <span>{error.message}</span></h1>
</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
