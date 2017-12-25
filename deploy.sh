# !/bin/bash
#
# Go to https://github.com/settings/tokens/new
# generate a new token with `public_repo` permission
# add it to TravisCI
#
#   travis encrypt GITHUB_TOKEN=... --add
#
# also add (not necessarily encrypted)
#
#   travis encrypt GITHUB_USER=... --add
#   travis encrypt GITHUB_EMAIL=... --add
#
# Change `build` and `MicheleBertoli/css-in-js.git` to what you need
#
# Do not forget to make `deploy.sh` executable via `chmod +x deploy.sh`
# Do not forget to configure `.travis.yml`
#

set -o errexit -o nounset

rev=$(git rev-parse --short HEAD)

cd build

git init
git config user.name $GITHUB_USER
git config user.email $GITHUB_EMAIL

git remote add upstream "https://$GITHUB_TOKEN@github.com/MicheleBertoli/css-in-js.git"
git fetch upstream
git reset upstream/gh-pages

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
