import Head from 'next/head'

export default function Home() {
	return (
		<div>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<title>Create Next App</title>
				<link rel="icon" />
			</Head>

			<main>
				<h1>Hi! Welcome to my site!</h1>
				<h2>My name is Meaghan.</h2>
				<p>
					<strong>I am inquisitive and a fast-learner</strong>, I love learning
					new technologies and getting in to the nitty gritty.
				</p>
				<p>
					<strong>I am a full stack developer</strong> with 1.5 years of dev
					experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nam sollicitudin nisi quis est mattis eleifend. Phasellus sed
					fringilla risus. Phasellus mollis nibh nisi, ac viverra lacus sagittis
					at. Pellentesque aliquam mi sit amet ante tristique, sed dapibus augue
					suscipit. Sed condimentum, mi in lacinia blandit, arcu est rutrum
					libero, a mollis turpis ex quis justo. Nulla malesuada odio in
					fermentum faucibus. Sed ornare, libero sed porta aliquam, risus ex
					porta massa, non vehicula velit lorem ac ante. Ut sed pretium metus.
					Praesent iaculis magna vel laoreet suscipit.
				</p>
			</main>
		</div>
	)
}
