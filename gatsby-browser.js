import wrapWithProvider from "./provider"
export const wrapRootElement = wrapWithProvider

export const onServiceWorkerUpdateReady = () => {
	const answer = window.confirm(
		`Bu uygulama güncellendi.` +
		`Güncellemeleri görüntülemek için sayfanız yeniden yüklensin mi?`
	)
	if (answer === true) {
		window.location.reload()
	}
}
