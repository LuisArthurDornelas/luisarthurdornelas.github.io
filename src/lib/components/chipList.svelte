<script>
	const { items } = $props();
</script>

<ul class="flex font-xsmall">
	{#each items as item}
		<li class="bg-main"><span>{item}</span></li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		flex-wrap: wrap;
		padding: 5px;
	}
	li {
		display: inline;
		padding: 2px 10px;
		margin: 3px;
		border-radius: 2rem;
	}
</style>
