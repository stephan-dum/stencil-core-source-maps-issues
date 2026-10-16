# stencil-core-source-maps-issues

This repository demonstrates issues with source maps in Stencil Core.

## How to reproduce

Install all dependencies and execute stencil build

```bash
npm i
```

```bash
npm exec stencil build
```

### 1. source map references

Open any dist file for example: `dist/esm/test-component.entry.js`

The source map references will be doubled. In this minimal example the references are the same, but in bigger projects it can happen that they different when de bundler decides to combine multiple components.
1. `//# sourceMappingURL=button.error-hint.icon-alert-circle.icon-eye.icon-eye-off.input.spinner.entry.cjs.js.map` <-- non existent
2. `//# sourceMappingURL=button_7.entry.js.map` <-- correct one

### 2. source map sources

Open any dist map file for example: `dist/esm/test-component.entry.js.map`

The map.sources property will start with a relative path, for example: `src/components`, if resolved from the current map file the file will not be found. The correct path is `../../src/components`.