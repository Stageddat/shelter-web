<div align="center">

# Shelter - Web
[**shelter.stageddat.dev**](https://shelter.stageddat.dev)<br/>
[Join our Discord server!](https://discord.gg/BntK5GbF2M)

</div>

<img src="./docs/images/hero-readme-editor.png" alt="Shelter — journal editor" width="100%"/>

Shelter is a secure, open-source web-based journal designed with privacy and end-to-end encryption. Your data stays yours, stored directly in your browser.

Built with [SvelteKit](https://svelte.dev/), [Web Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) & ❤️.

## Features

- **Local-First Architecture:** Fast, resilient, and works entirely offline using IndexedDB.
- **End-to-End Encryption (E2EE):** Client-side encryption via the Web Crypto API. Nobody can read your entries except you, not even us.
- **No account required:** No email, no server, no tracking. Just open the app and start writing.
- **Rich Text Editor:** Write with formatting using a clean, distraction-free editor powered by Tiptap.
- **Multilingual:** Available in English, Catalan and Danish, with more languages on the way.
- **Open Source:** Fully auditable code under the GNU AGPLv3 license.

## Getting Started

Follow these steps to set up the project locally for development.

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) (20.9 or higher) installed.
- [pnpm](https://pnpm.io/es/) (recommended) or [npm](https://www.npmjs.com/).

### Installation

1. **Fork and clone the repository:**

```bash
git clone https://github.com/stageddat/shelter-web.git
cd shelter-web
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Run the development server:**

```bash
pnpm run dev
```

Open `localhost:5173` in your browser to view the local development server.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

## License

This project is open-source and available under the [GNU AGPLv3](./LICENSE).
