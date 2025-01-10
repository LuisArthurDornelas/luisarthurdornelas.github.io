<script>
	import Entries from '$lib/components/entries.svelte';
	import bgImg from '$lib/assets/bg.jpg';
	import profilePic from '$lib/assets/profile.jpg';
</script>

<header>
	<div>
		<h1>Luís Arthur Dornelas</h1>
		<p class="subtitle">JUNIOR DEVELOPER</p>
	</div>
	<img class="profile" src={profilePic} alt="Foto de Luís" style="width: 200px" />
</header>
<main>
	<div class="rcol">
		<section id="contact">
			<h2>Contato</h2>
			<p><b>Email:</b> ladccc@cesar.school</p>
		</section>
		<section id="about">
			<h2>Sobre mim</h2>
			<p>
				Desenvolvedor júnior com experiência em trabalhar com equipes multidisciplinares na ideação
				e realização de projetos.
			</p>
			<p>
				<i>
					Tenho interesse em atuar com programadores mais experientes com a finalidade de
					desenvolver projetos desafiadores utilizando novas tecnologias.
				</i>
			</p>
		</section>
		<section id="skills">
			<h2>Habilidades</h2>
			<ul>
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
	<div class="lcol">
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
<footer>
	<p class="small">Website desenhado e desenvolvido por Kalil Cabral com SvelteKit</p>
	<p class="small">Copyright ©2024-2025 Luís Arthur Dornelas | Todos os direitos reservados</p>
</footer>

<style>
	header {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('$lib/assets/bg.jpg'),
			#101010;
		padding: 20px;

		color: white;
		text-align: end;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap-reverse;
		align-items: center;
		justify-content: center;
	}
	header,
	main {
		max-width: 1000px;
		margin: auto;
	}
	main {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
	}
	main > * {
		padding: 20px;
	}
	.rcol {
		flex: 1;
		background: orange;
	}
	.lcol {
		flex: 2;
		background: #fff;
	}
	footer {
		color: #fff;
		text-align: center;
		line-height: 180%;
		padding: 10px 0;
	}
</style>
