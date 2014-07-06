/* global describe, it */

'use strict';

var assert = require('chai').assert,
	Rx = require('rx'),
	parseJSX = require('..'),
	compile = require('jsx-esprima').compile,
	generate = require('aster-generate');

it('test', function (done) {
	var input = [{path: 'file.jsx', contents: 'a = <A attr="value">text</A>;'}],
		expected = [{path: 'file.js', contents: 'a = A({ attr: \'value\' }, \'text\');'}];

	Rx.Observable.return(Rx.Observable.fromArray(input))
	.map(parseJSX({loc: false}))
	.map(generate())
	.concatAll()
	.zip(expected, assert.deepEqual)
	.subscribe(function () {}, done, done);
});
