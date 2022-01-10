<script>
	export let work;
</script>

<a href="works/{work.slug}">
	<div class="work-card">
		<div class="work-image">
			<img src={work.images[0]} alt="works" />
		</div>
		<div class="work-detail">
			<!-- <p class="date">
				{new Date(work.date_posted).toUTCString().split(' ').slice(0, -2).join(' ')}
			</p> -->
			<h3>{work.name}</h3>
			<p class="description">{work.desc}</p>
		</div>
	</div>
</a>

<style>
	.work-card {
		display: grid;
		gap: 1em;
		align-content: flex-start;
		border-radius: 0.75em;
		background-color: var(--bw);
		width: 20em;
		cursor: pointer;
		box-shadow: var(--shadowCard);
		transition: all 300ms ease-out;
	}
	.work-card:hover {
		box-shadow: var(--shadowCardHover);
		transform: translateY(-0.5em);
	}
	.work-card:hover .work-detail h3 {
		color: var(--blue);
	}
	div > :global(.lmns-image) {
		border-radius: 0.25em;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		max-height: 12em;
		top: 0;
		left: 0;
		border-top-left-radius: 0.75em;
		border-top-right-radius: 0.75em;
		text-align: center;
	}
	.work-detail {
		display: grid;
		flex-direction: column;
		padding: 0.5em 1em;
		margin-bottom: 0.5em;
		gap: 0.625em;
	}
	/* p.date {
		font-size: 0.75rem;
		color: #b1b1b1;
	} */
	h3 {
		line-height: 1.5em;
		transition: 300ms;
		margin: 0;
	}
	p.description {
		color: #666666;
		font-size: 0.875rem;
	}

	@media only screen and (max-width: 375px) {
		.work-card {
			margin: 0 auto;
			width: 17.5em;
		}
	}

	@media only screen and (max-width: 320px) {
		.work-card {
			margin: 0 auto;
			width: 15em;
		}
	}
</style>
