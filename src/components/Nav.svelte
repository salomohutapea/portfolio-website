<script>
	export let segment, preloading;

	let show_menu = false;
	
	$: if(!$preloading) {show_menu = false};

</script>

<nav>
	<a href="."><h4>Salomo<span>Hutapea</span></h4></a>
	<input class="menu-btn" type="checkbox" id="menu-btn" bind:checked={show_menu}/>
	<label class="menu-icon" for="menu-btn"><span class="navicon" /></label>
	<ul class="menu">
		<li>
			<a class="nav-link" class:current={segment === undefined} href=".">Home</a>
		</li>
		<li>
			<a class="nav-link" class:current={segment === 'about'} href="about">About</a>
		</li>
		<li class="work-btn"><a href="works" class="btn">Works</a></li>
		<!-- <li>
				<div class="div-switch">
					<input type="checkbox" id="switch-theme" class="switch-theme" />
					<label for="switch-theme">
						<div class="toggle" />
					</label>
				</div>
			</li> -->
	</ul>
</nav>

<style>
	nav {
		display: grid;
		grid-template-columns: 0fr 1fr;
		position: fixed;
		width: 100%;
		box-shadow: var(--shadow);
		background: var(--bgColor);
		z-index: 3;
	}

	nav ul {
		grid-column-start: 1;
		grid-column-end: col2-start;
		margin: 0;
		padding: 0;
		list-style: none;
		overflow: hidden;
	}

	nav li a {
		display: block;
		padding: 10px 20px;
		margin-left: 20px;
		text-decoration: none;
		color: var(--primaryColor)
	}

	nav h4 {
		font-size: 1rem;
		font-weight: 600;
		font-family: Rubik;
		display: flex;
		align-items: center;
	}

	nav span {
		color: var(--blue);
	}

	nav .btn {
		text-decoration: none;
	}

	nav .btn {
		color: var(--bw);
	}

	nav .menu {
		clear: both;
		max-height: 0;
		transition: max-height 0.3s ease-out;
	}

	nav .menu-icon {
		cursor: pointer;
		display: inline-block;
		padding: 28px 20px;
		position: relative;
		user-select: none;
		justify-self: end;
	}

	nav .menu-icon .navicon {
		background: var(--primaryColor);
		display: block;
		height: 2px;
		position: relative;
		transition: 0.2s ease-out;
		width: 18px;
	}

	nav .menu-icon .navicon:before,
	nav .menu-icon .navicon:after {
		background: var(--primaryColor);
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		transition: all 0.2s ease-out;
		width: 100%;
	}

	nav .menu-icon .navicon:before {
		top: 5px;
	}

	nav .menu-icon .navicon:after {
		top: -5px;
	}

	nav .menu-btn {
		display: none;
	}

	nav .menu-btn:checked ~ .menu {
		max-height: 240px;
	}

	nav .menu-btn:checked ~ .menu-icon .navicon {
		background: transparent !important;
	}

	nav .menu-btn:checked ~ .menu-icon .navicon:before {
		transform: rotate(-45deg);
	}

	nav .menu-btn:checked ~ .menu-icon .navicon:after {
		transform: rotate(45deg);
	}

	nav .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
	nav .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
		top: 0;
	}

	ul, h4, .nav-link {
		background: var(--bgColor);
	}
	.navicon, .navicon:before, .navicon:after{
		background: var(--primaryColor);
	}

	@media (min-width: 48em) {
		nav {
			display: flex;
			justify-content: space-between;
		}
		nav li {
			float: left;
		}
		nav a.nav-link {
			text-decoration: none;
			padding: 1em 0.5em;
			display: block;
			transition: 300ms;
			font-family: Rubik;
		}
		nav > a {
			margin-left: 5vw;
		}
		nav a.current {
			border-bottom: 3px solid var(--blue);
			margin-top: 3px;
			color: var(--blue);
		}
		nav a.nav-link:hover {
			color: var(--blue);
		}
		nav .menu {
			max-height: none;
			margin-right: 5vw;
		}
		nav .menu-icon {
			display: none;
		}
		nav ul {
			display: flex;
			align-items: center;
			grid-row-start: 2;
			grid-column-start: 1;
		}
	}

	@media (max-width: 48em) {
		nav h4 {
			margin-left: 20px;
		}
		nav .btn {
			margin-bottom: 10px;
		}
		nav li a {
			margin-left: 0;
			text-align: center;
		}
		nav .nav-link {
			padding: 20px 0;
		}
		.work-btn {
			display: flex;

		}
		.work-btn a {
			margin: 10px 10px;
			width: 100%;
		}
	}

	/* -------- Switch Styles ------------*/
	/* #switch-theme {
        display: none;
    } */
    /* Toggle */
    /* .switch-theme:checked + .div-switch .toggle {
        transform: translateX(100%);
        background-color: #34323d;
	}
	.div-switch {
		display: grid;
	}
    .div-switch label,
    .toggle {
        height: 1em;
        border-radius: 10px;
    }
    .div-switch label {
        width: 2em;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        position: relative;
        cursor: pointer;
    }
    .div-switch .toggle {
        position: absolute;
        width: 50%;
        background-color: #fff;
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    } */

	@media (prefers-color-scheme: dark) {
		a.nav-link:hover {
			color: var(--blue);
		}
	}
</style>