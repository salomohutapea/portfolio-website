<svelte:head>
	<title>About | Salomo Hutapea</title>
</svelte:head>

<div class="wrapper">
	<img data-aos="fade-down" src="pic-portrait.jpg" alt="">
	<div>
		<h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="500">ABOUT ME</h1>
		<h4 data-aos="fade-down" data-aos-delay="200">SALOMO HUTAPEA - SOFTWARE ENGINEER</h4>
		<p data-aos="fade-down" data-aos-delay="300">
			I started to know programming since senior high school. I wanted to explore more about programming.
			So I took the Bachelor of Engineering program of Information Engineering at Universitas Gadjah Mada.
			I am still studying at the university now. I have used and applied some programming languages such as Java, Kotlin, JavaScript on some projects.
			Nowadays, I focus on front-end web development and android applications.
		</p>
		<div data-aos="fade-down" data-aos-delay="400" class="socials">
			<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/salomohutapea/"><i class="fab fa-linkedin"></i></a>
			<a target="_blank" rel="noreferrer" href="https://www.github.com/salomohutapea/"><i class="fab fa-github"></i></a>
			<a target="_blank" rel="noreferrer" href="https://www.facebook.com/qwertysalomo/"><i class="fab fa-facebook-square"></i></a>
			<a target="_blank" rel="noreferrer" href="https://www.twitter.com/salomohutapea/"><i class="fab fa-twitter"></i></a>
			<a target="_blank" rel="noreferrer" href="https://www.instagram.com/salomohutapea/"><i class="fab fa-instagram"></i></a>
		</div>
	</div>
</div>

<style>
	* {
		margin: 0;
	}
	.wrapper {
		display: inline-grid;
		grid-template-columns: 1fr 2.5fr 0.2fr;
		gap: 4vw;
		height: 100%;
		align-content: center;
	}
	.wrapper img {
		width: 100%;
	}
	.wrapper div {
		align-self: center;
	}
	.wrapper div h1 {
		font-size: 2.2em;
		margin-bottom: 20px;
	}
	.wrapper div h4 {
		color: #3340FF;
		margin-bottom: 20px;
	}
	.wrapper div p {
		margin-bottom: 20px;
	}
	.socials {
		display: flex;
	}
	.socials a {
		text-decoration: none;
		margin-right: 1em;
	}
	.socials a i {
		font-size: 1.5em;
		transition: 300ms;
		transition-timing-function: ease-out;
	}
	.socials a i:hover {
		color: #3340FF;
	}
	@media (max-width:880px) {
		.wrapper {
			grid-template-columns: 1fr 0.1fr
		}
		.wrapper img {
			display: none;
		}
	}
</style>