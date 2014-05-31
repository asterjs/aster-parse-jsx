# aster-parse-jsx
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

> React's JSX parser for aster.

## Usage

This is internal module and should be used as part of [aster-parse](https://npmjs.org/package/aster-parse) or [aster-src](https://npmjs.org/package/aster-src).

It uses [jsx-esprima](https://github.com/RReverser/jsx-esprima) transpiler to do it's job.

## API

### parseJSX(options)

#### options.loc
Type: `Boolean`
Default: `true`

Location tracking (required for source maps).

#### options.comments
Type: `Boolean`
Default: `true`

Include comments to AST (required for parsing custom `/** @jsx CustomDOM */` annotations).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/aster-parse-jsx
[npm-image]: https://badge.fury.io/js/aster-parse-jsx.png

[travis-url]: http://travis-ci.org/asterjs/aster-parse-jsx
[travis-image]: https://secure.travis-ci.org/asterjs/aster-parse-jsx.png?branch=master
