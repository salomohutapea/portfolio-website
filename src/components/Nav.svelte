<script>
	export let segment;
</script>

<style>
	/* header */

	nav {
		display: flex;
		justify-content: center;
	}

	.header {
		display: grid;
		grid-template-columns: 3fr 1fr;
		background-color: #fff;
		position: fixed;
		width: 100%;
		z-index: 3;
	}

	.header ul {
		grid-column-start: 1;
		grid-column-end: col2-start;
		margin: 0;
		padding: 0;
		list-style: none;
		overflow: hidden;
		background-color: #fff;
	}

	.header li a {
		display: block;
		padding: 10px 20px;
		margin-left: 10px;
		text-decoration: none;
	}

	h4 {
		font-size: 1rem;
		font-weight: 600;
		font-family: Rubik;
		display: flex;
		align-items: center;
		margin-left: 20px;
	}

	span {
		color: #3340ff;
	}

	.btn {
		padding: 20px 10px;
		text-decoration: none;
	}

	/* menu */

	.header .menu {
		clear: both;
		max-height: 0;
		transition: max-height 0.2s ease-out;
	}

	/* menu icon */

	.header .menu-icon {
		cursor: pointer;
		display: inline-block;
		padding: 28px 20px;
		position: relative;
		user-select: none;
		justify-self: end;
	}

	.header .menu-icon .navicon {
		background: #333;
		display: block;
		height: 2px;
		position: relative;
		transition: background 0.2s ease-out;
		width: 18px;
	}

	.header .menu-icon .navicon:before,
	.header .menu-icon .navicon:after {
		background: #333;
		content: "";
		display: block;
		height: 100%;
		position: absolute;
		transition: all 0.2s ease-out;
		width: 100%;
	}

	.header .menu-icon .navicon:before {
		top: 5px;
	}

	.header .menu-icon .navicon:after {
		top: -5px;
	}

	/* menu btn */

	.header .menu-btn {
		display: none;
	}

	.header .menu-btn:checked ~ .menu {
		max-height: 240px;
	}

	.header .menu-btn:checked ~ .menu-icon .navicon {
		background: transparent;
	}

	.header .menu-btn:checked ~ .menu-icon .navicon:before {
		transform: rotate(-45deg);
	}

	.header .menu-btn:checked ~ .menu-icon .navicon:after {
		transform: rotate(45deg);
	}

	.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
	.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
		top: 0;
	}

	/* 48em = 768px */

	@media (min-width: 48em) {
		.header {
			max-width: 960px;
			display: flex;
			justify-content: space-between;
		}
		.header li {
			float: left;
		}
		a.nav-link {
			text-decoration: none;
			padding: 1em 0.5em;
			display: block;
			transition: 300ms;
			font-family: Rubik;
		}
		a.current {
			border-bottom: 3px solid #3340ff;
			color: #3340ff;
		}
		a.nav-link:hover {
			color: #3340ff55;
		}
		.header .menu {
			max-height: none;
		}
		.header .menu-icon {
			display: none;
		}
		ul {
			display: flex;
			align-items: center;
		}
	}

	@media only screen and (max-width: 958px) and (min-width: 48em) {
		h4 {
			margin-left: 20px;
		}
		a {
			margin-right: 20px;
		}
	}

	@media (min-width: 958px) {
		h4 {
			margin-left: 0px;
		}
		a {
			margin-right: 0px;
		}
	}

	@media (max-width: 48em) {
		h4 {
			margin-left: 20px;
		}
		.btn {
			margin-bottom: 10px;
		}
		a {
			margin-right: 10px;
		}
		.menu {
			padding-bottom: 20px;
		}
		.header {
			border-bottom: 1px solid #00000055;
		}
		.nav-link {
			padding: 20px 0;
		}
	}
</style>

<nav>
	<header class="header">
		<h4>Salomo<span>Hutapea</span></h4>
		<input class="menu-btn" type="checkbox" id="menu-btn" />
		<label class="menu-icon" for="menu-btn"><span class="navicon" /></label>
		<ul class="menu">
			<li>
				<a
					class="nav-link"
					class:current={segment === undefined}
					href=".">Home</a>
			</li>
			<li>
				<a
					class="nav-link"
					class:current={segment === 'about'}
					href="about">About</a>
			</li>
			<li><a href="works" class="btn">Works</a></li>
		</ul>
	</header>
</nav>
