<script>
	import successkid from 'images/successkid.jpg';
</script>

<style>

	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 6rem;
		font-style: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color: #000;
	}

	a {
		margin-top: 40px;
	}

	div.content {
		margin-top: 60px;
		grid-template-columns: 1fr 1fr;
		display: grid;
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 4rem;
		}
	}
</style>

<svelte:head>
	<title>Salomo Hutapea</title>
</svelte:head>

<div class="content">
	<div>
		<h1>Software Engineer</h1>
		<p>My name is Salomo Hutapea</p>
		<a href="." class="btn">Hello</a>
	</div>
</div>


