# Lit SSR bug

This repo reproduces a bug using refs while rendering the component on the server. Attributes gets messed up. Moving the ref below all properties seems to fix to issue. To run:

1. `npm install`
2. `npm run test`
