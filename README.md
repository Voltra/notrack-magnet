# notrack-magnet

A browser extension to remove trackers from Magnet links. Nothing more, nothing less.

You can always browse through the source code (in `src`).

## Build for release
```bash
npm i # In case it's not done already
npm run build # Build the extension (in dist)
npm run webext:build # Package the WebExtension (using dist as the source directory, putting the zip archive into web-ext-artifacts)
```

After these commands, you will have the built (and minified) code inside the `dist` folder, as well as a zip of said code inside `web-ext-artifacts` (named `notrack-magnet-<manifest version>.zip`, e.g. `notrack-magnet-1.0.0.zip`).
