#!/bin/sh
set -e

# This file will create a new build of the PWA,
# add/commit/push those build files to the zackmcginnis.github.io repo.
# We will be able to see our new PWA updates on zackmcginnis.github.io shortly after the script succeeds.

REPO_DIR=/home/zackmcginnis/Documents/github/zackmcginnis.github.io
REMOTE=https://github.com/zackmcginnis/zackmcginnis.github.io.git
SRC=/home/zackmcginnis/Documents/github/react-redux-pwa/client/build/.
DEST=/home/zackmcginnis/Documents/github/zackmcginnis.github.io
CLIENT_DIR=/home/zackmcginnis/Documents/github/react-redux-pwa/client

# make new build
cd ${CLIENT_DIR}
npm run build

# copy build dir into zackmcginnis.github.io repo
cp -r ${SRC} ${DEST}

# add, commit, push
GIT=`which git`
cd ${REPO_DIR}
${GIT} add --all .
${GIT} commit -m "New build of react-redux-pwa"
${GIT} push ${REMOTE} master