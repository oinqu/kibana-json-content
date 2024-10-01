export async function plugin() {
	const { JsonContentPlugin } = await import('../common/plugin')
	return new JsonContentPlugin()
}
