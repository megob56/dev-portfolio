import TestComponent from '../components/testComponent'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<TestComponent />
		</>
	)
}

export default MyApp
