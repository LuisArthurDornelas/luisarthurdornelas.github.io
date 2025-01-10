<script>
	import Entries from '$lib/components/entries.svelte';
	import bgImg from '$lib/assets/bg.jpg';
	import profilePic from '$lib/assets/profile.jpg';
</script>

<header class="flex flex-center text-end text-color-light">
	<img
		class="profile circle border-white"
		src={profilePic}
		alt="Foto de Luís"
		style="width: 200px"
	/>
	<div>
		<h1>Luís Arthur Dornelas</h1>
		<p class="subtitle">JUNIOR DEVELOPER</p>
	</div>
</header>

<main class="flex">
	<div class="rcol bg-accent text-color-dark">
		<section id="contact">
			<h2>Contato</h2>
			<p><b>Email:</b> ladccc@cesar.school</p>
		</section>
		<section id="about">
			<h2>Sobre mim</h2>
			<p>
				Desenvolvedor júnior com experiência em equipes multidisciplinares na ideação e realização
				de projetos.
			</p>
			<p class="font-xsmall font-italic">
				"Tenho interesse em atuar com programadores mais experientes com a finalidade de desenvolver
				projetos desafiadores utilizando novas tecnologias."
			</p>
		</section>
		<section id="skills">
			<h2>Habilidades</h2>
			<ul class="font-xsmall">
				<li>Python</li>
				<li>C/C#</li>
				<li>JavaScript/TypeScript</li>
				<li>Ruby on Rails</li>
				<li>Docker</li>
				<li>HTML/CSS</li>
				<li>Angular</li>
				<li>Java</li>
				<li>.NET</li>
				<li>SQL</li>
				<li>AWS</li>
				<li>Linux</li>
				<li>Windows</li>
				<li>Metodologias Ágeis</li>
				<li>Pacote Office</li>
			</ul>
		</section>
	</div>
	<div class="lcol bg-main text-color-dark">
		<section id="experiences">
			<h2>Atuação e projetos</h2>
			<Entries type={['job', 'proj']} />
		</section>
		<section id="formations">
			<h2>Formação e certificações</h2>
			<Entries type={['edu', 'cert']} />
		</section>
	</div>
</main>

<footer class="bg-back text-center text-color-light">
	<p class="font-xsmall">Website desenhado e desenvolvido por Kalil Cabral com SvelteKit</p>
	<p class="font-xsmall">
		Copyright ©2024-2025 Luís Arthur Dornelas | Todos os direitos reservados
	</p>
</footer>

<style>
	header,
	main,
	footer {
		max-width: 1080px;
		margin: auto;
	}

	header {
		background: linear-gradient(rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53)),
			url('$lib/assets/bg.jpg'), #101010;
		padding: 20px;
		box-sizing: border-box;
	}
	.subtitle {
		letter-spacing: 0.2rem;
	}
	.profile {
		margin: 15px;
		object-fit: cover;
	}

	main,
	header {
		flex-direction: row-reverse;
		flex-wrap: wrap;
	}
	.rcol {
		flex: 2;
	}
	.lcol {
		flex: 3;
	}

	footer {
		padding: 10px 0;
	}

	h1,
	h2 {
		margin-top: 20px;
	}
	main > * {
		padding: 20px;
		margin-top: 10px;
	}
	p {
		margin: 5px 0;
	}
</style>
