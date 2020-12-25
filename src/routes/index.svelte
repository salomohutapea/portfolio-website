<script>
	import successkid from 'images/successkid.jpg';
</script>

<style>

	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 3rem;
		font-style: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color: #000;
		margin-left: -4px;
	}

	a {
		margin-top: 40px;
	}

	/* 61.531px navbar */
	/* 59px footer */
	div.content {
		margin-top:81.531px;
		margin-bottom: 79px;
		display: inline-grid;
	}

	.div-img {
		max-width: 100%;
		display: flex;
  		justify-content: center;
  		align-items: center;
	}

	img {
		object-fit: cover;
		width: 70%;
		border-radius: 50%;
	}

	@media (max-width: 619px) {
  		div.content {
			grid-template-rows: 1fr;
		}
		.div-img {
			display: none;
		}
	}

	@media (min-width: 619px) {
  		div.content {
			grid-template-columns: 4fr 1fr;
		}
		h1 {
			font-size: 4rem;
		}
	}
	@media (min-width: 754px) {
		h1 {
			font-size: 5rem;
		}
	}
</style>

<svelte:head>
	<title>Salomo Hutapea</title>
</svelte:head>

<div class="content">
	<div>
		<h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="500">Hello, I'm Salomo Hutapea</h1>
		<p data-aos="fade-down" data-aos-delay="300" data-aos-duration="500">
			Front-end Developer, Android Developer
			<br>
			<br>
			Skills: <b>HTML CSS JS, Kotlin</b>
		</p>
		<a data-aos="fade-down" data-aos-delay="500" data-aos-duration="500" href="." class="btn" >Hello</a>
	</div>
	<div class="div-img">
		<!-- <img src="picc.png" alt="Salomo Hutapea"> -->
	</div>
</div>


