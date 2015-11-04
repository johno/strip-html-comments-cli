#!/usr/bin/env node

'use strict'

const meow = require('meow')
const read = require('read-file-stdin')
const write = require('write-file-stdout')
const stripComments = require('strip-html-comments')

const cli = meow(`
  Usage
    $ strip-html-comments <input.html> <output.html>

  Example
    $ strip-html-comments --help
    $ strip-html-comments input.html output.html
    $ strip-html-comments input.html > output.html
    $ strip-html-comments < input.html > output.html
`)

const inputFile = cli.input[0]
const outputFile = cli.input[1]

read(inputFile, (err, buffer) => {
  if (err) {
    throw err
  }

  write(outputFile, stripComments(String(buffer)))
  process.exit(0)
})
