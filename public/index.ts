import './index.scss'
import { JsonContentPlugin } from '../common/plugin'

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
	return new JsonContentPlugin()
}
