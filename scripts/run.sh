#!/bin/bash

# welcome
echo "started website scaffolder"

# get input vars
echo "enter root directory name:"
read ROOT_NAME
echo "enter react app names ('app1, app2, app3...'):"
read REACT_APP_NAMES

# store root directory's path
ROOT="$PWD/$ROOT_NAME"

# create root directory
mkdir "$ROOT"

# create root files
echo "// init" > "$ROOT/___server.js"
# touch "__routes.js"
# touch "_app.js"
# touch ".babelrc"
# touch ".gitignore"
# touch "package.json"
# touch "README.md"

# create public directories
# mkdir "$ROOT/public/assets"
# mkdir "$ROOT/public/react"
# mkdir "$ROOT/public/views"

# create public/assets directories
# mkdir "$ROOT/public/assets/css"
# mkdir "$ROOT/public/assets/js"
# mkdir "$ROOT/public/assets/images"
# mkdir "$ROOT/public/assets/reactApps"
