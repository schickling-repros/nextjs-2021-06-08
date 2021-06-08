#! /bin/bash

mkdir -p node_modules/.genpkg

printf '%s\n' \
"export const a = 'a'"   \
"export const b = 'b'"   \
    > node_modules/.genpkg/index.js

printf '%s\n' \
"{" \
"   \"name\": \"genpkg\"," \
"   \"main\": \"./index.js\"" \
"}" \
> node_modules/.genpkg/package.json