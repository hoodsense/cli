hoodsense-cli
=============

A CLI tool for importing and managing hoodsense data

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/hoodsense-cli.svg)](https://npmjs.org/package/hoodsense-cli)
[![Downloads/week](https://img.shields.io/npm/dw/hoodsense-cli.svg)](https://npmjs.org/package/hoodsense-cli)
[![License](https://img.shields.io/npm/l/hoodsense-cli.svg)](https://github.com/Rchristiani/hoodsense-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g hoodsense-cli
$ hoodsense-cli COMMAND
running command...
$ hoodsense-cli (-v|--version|version)
hoodsense-cli/1.0.0 darwin-x64 node-v12.0.0
$ hoodsense-cli --help [COMMAND]
USAGE
  $ hoodsense-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`hoodsense-cli hello [FILE]`](#hoodsense-cli-hello-file)
* [`hoodsense-cli help [COMMAND]`](#hoodsense-cli-help-command)

## `hoodsense-cli hello [FILE]`

describe the command here

```
USAGE
  $ hoodsense-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ hoodsense-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Rchristiani/hoodsense-cli/blob/v1.0.0/src/commands/hello.ts)_

## `hoodsense-cli help [COMMAND]`

display help for hoodsense-cli

```
USAGE
  $ hoodsense-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
