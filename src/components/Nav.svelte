<script>
	export let segment;
</script>

<style>
	nav {
		position: fixed;
		width: 100%;
		background: #ffffff;
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	nav div {
		max-width: 960px;
		padding: 0 10px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
	h4 {
		margin-top: 10px;
		font-size: 1rem;
		font-weight: 600;
		font-family: Rubik;
	}
	span {
		color: #3340FF;
	}
	ul {
		padding: 0;
   		margin: 0;
    		text-align: right;
	}
	li {
		margin-left: 1em;
		display: inline-block;
	}
	a.nav-link {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		transition: 300ms;
		font-family: Rubik;
	}
	a.current {
		/* border-bottom: 3px solid #3340FF; */
		font-weight: 500;
		color: #3340FF;
	}
	a.nav-link:hover {
		color: #3340FF55;
	}

	.btn {
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>

<nav>
	<div>
		<h4>Salomo<span>Hutapea</span></h4>
		<ul>
			<li><a class="nav-link" class:current={segment === undefined} href=".">Home</a></li>
			<li><a class="nav-link" class:current={segment === 'about'} href="about">About</a></li>
			<li><a class="nav-link" class:current={segment === 'works'} href="works">Works</a></li>
			<li><a href="contact" class="btn">Contact</a></li>
		</ul>
	</div>
</nav>
