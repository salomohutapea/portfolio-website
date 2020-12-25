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
		<h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="500">Software Engineer</h1>
		<p data-aos="fade-down" data-aos-delay="300" data-aos-duration="500">My name is Salomo Hutapea</p>
		<a data-aos="fade-down" data-aos-delay="500" data-aos-duration="500" href="." class="btn" >Hello</a>
	</div>
</div>


