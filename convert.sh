#!/bin/bash

for path in ./src/flags/*
do
  for file in $path/*.svg
  do
    echo "."
    echo "$(npx @svgr/cli --icon $file)" > ".$(echo $file | cut -d'.' -f2)".js
  done
done