<script>
	import allEntries from '$lib/assets/data.yml';
	const { type } = $props();
	const entries = allEntries.filter((e) => type.includes(e.type));
</script>

{#each entries as e}
	<article>
		{#if e.title}
			<h3>{e.title}</h3>
		{/if}
		<p class="org font-bold">{e.org}, {e.date}</p>
		<p class="font-xsmall">{e.desc}</p>
		{#if e.uses}
			<p class="font-italic font-xsmall">{e.uses}</p>
		{/if}
	</article>
{/each}

<style>
	p {
		margin: 5px;
	}
	article {
		margin-top: 20px;
	}
	.org {
		margin-top: 0;
	}
</style>
