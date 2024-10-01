# JSON Content

A Kibana plugin to pretty print JSON strings in the Kibana Discover/Logs tab. This doesn't index the JSON content, it just pretty prints & highlights it in the console for easier reading.

Built for Kibana 8.15.0.

I built this plugin because neither did I want to index the JSON content nor did I want to copy the JSON content to a JSON linter to pretty print it. After hours of searching, I couldn't find any way to pretty print JSONs in the Discover/Logs that did this, so I built one myself.

## Installation & Usage

The plugin archive is pushed to the `build` folder & committed to the repository (Too lazy to set up a CI/CD pipeline for this).

1. Install in Kibana via:
   ```bash
   bin/kibana-plugin install TODO
   ```

## Development

1. Setup the Kibana development environment, read [here](https://github.com/elastic/kibana/blob/main/dev_docs/getting_started/setting_up_a_development_env.mdx). Use branch `8.15.0` or some `8.x.x` branch.
2. In the Kibana root directory, run `cd plugins`
3. Clone this repository there: `git clone https://github.com/adiwajshing/json-content.git`
4. Switch to this plugin's directory: `cd json-content`
5. Setup the plugin: `yarn bootstrap`
6. Start the dev build: `yarn dev --watch` (watch is optional)
7. To build for production, run: `yarn build`