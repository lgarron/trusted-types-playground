# Trusted Types Playground

```shell
git clone https://github.com/lgarron/trusted-types-playground && cd trusted-types-playground
npm install
npx parcel src/index.html
# Open http://localhost:1234
```

## Test with CSP

```shell
brew install caddy # depending on your OS
make csp
# Open http://localhost:8000
```

## Relevant links

- [DOM lib: Add support for Trusted Types API (TypeScript-DOM-lib-generator#1246)](https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1246) by `tosmolka`
- [[react] Allow `TrustedHTML` in `dangerouslySetInnerHTML` (DefinitelyTyped#60691)](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/60691) by `eps1lon`
  - [Revert "🤖 Merge PR #60691 [react] Allow TrustedHTML in `dangerouslySetInnerHTML` by @eps1lon" (DefinitelyTyped#60837)](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/60837) by `peterblazejewicz`
- [[trusted-types] Properly augment global to prevent conflicts with lib.dom.d.ts et al. (DefinitelyTyped#61160)](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/61160) by `eps1lon`
- [[react] Support anything with toString() (such as TrustedHTML) as input for dangerouslySetInnerHTML. (DefinitelyTyped#60417)](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/60417) by `lgarron`
  - Was originally: `[react] Support TrustedHTML as input for dangerouslySetInnerHTML.`
