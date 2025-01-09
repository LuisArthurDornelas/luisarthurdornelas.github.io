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
		<p><b>{e.org}, {e.date}</b></p>
		<p>{e.desc}</p>
		{#if e.uses}
			<p><i>{e.uses}</i></p>
		{/if}
	</article>
{/each}
